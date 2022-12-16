import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../components/adminLayout';
import SmallDetailsCard from '../../../components/smallDetailsCard';
import StyledContainer from '../../../styledComponents/styledContainer';
import { Grid, Typography, TextField, InputAdornment, Box } from '@mui/material';
import StyledDatagrid from '../../../components/styledDatagrid';
import SearchIcon from '@mui/icons-material/Search';
import cardImage from '../../../assets/Vendor-Overview-Total-Icon-8.png'
import cardImage2 from '../../../assets/Vendor-Overview-in_active-Icon-8.png'
import cardImage3 from '../../../assets/Vendor-Overview-Active-Icon-8.png'
import StyledButton from '../../../styledComponents/styledButton';
import axios from 'axios';
import { API_URL } from '../../../config';
import { useRouter } from 'next/router'


function Vendoroverview(props) {
    const [rows, setRows] = useState([])
    const [totalVendors, setTotalVendors] = useState(0)
    const [activeVendors, setActiveVendors] = useState(0)
    const [inactiveVendors, setInactiveVendors] = useState(0)
    const router = useRouter()

    const columns = [
        { field: 'name', headerName: 'Name', flex: 1, headerAlign: 'center' },
        { field: 'age', headerName: 'Age', flex: 1, headerAlign: 'center' },
        { field: 'gender', headerName: 'Gender', flex: 1, headerAlign: 'center' },
        { field: 'cnic', headerName: 'CNIC/Passport', flex: 1, headerAlign: 'center' },
        { field: 'phone', headerName: 'Phone', flex: 1, headerAlign: 'center' },
        {
            field: 'details', headerName: 'Details', flex: 1, headerAlign: 'center',
            renderCell: (params) => (
                <StyledButton
                    onClick={() => { router.push(`/admin/vendor/${params.id}`) }}
                >
                    View More
                </StyledButton>
            )
        },
    ]

    useEffect(async () => {
        const allVendors = await axios({
            method: 'GET',
            url: `${API_URL}/allvendors`,
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        }).then(res => res.data)

        const vendorCount = await axios({
            method: 'GET',
            url: `${API_URL}/vendor/count`,
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        }).then(res => res.data)

        const inactiveCount = await axios({
            method: 'GET',
            url: `${API_URL}/vendor/inactivevendors`,
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        }).then(res => res.data)

        const activeCount = await axios({
            method: 'GET',
            url: `${API_URL}/vendor/activevendors`,
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        }).then(res => res.data)

        setTotalVendors(vendorCount)
        setActiveVendors(activeCount[0].count)
        setInactiveVendors(inactiveCount)
        setRows(allVendors.map((el) => { return { id: el.id, name: `${el.first_name} ${el.last_name}`, age: el.age, gender: el.gender, cnic: el.cnic, phone: el.phone } }))

    }, [])
    return (
        <StyledContainer>
            <Grid container spacing={1} >
                <Grid container item spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <SmallDetailsCard img={cardImage} heading='Total Vendors' number={totalVendors} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <SmallDetailsCard img={cardImage2} heading='Active Vendors' number={activeVendors} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <SmallDetailsCard img={cardImage3} heading='In-Active Vendors' number={inactiveVendors} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required InputLabelProps={{ shrink: false }}
                            label="" sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' }, '& .MuiSvgIcon-root': { color: '#FFF' }, '& .MuiOutlinedInput-root': { paddingRight: '0px' }, '& .MuiInputAdornment-outlined': { padding: '27px 10px', borderRadius: '4px', backgroundColor: 'button.main' }, '& .MuiInputAdornment-root': { backgroundColor: '' } }} placeholder="Search by Room Name" fullWidth variant='outlined' InputProps={{ endAdornment: <InputAdornment><SearchIcon style={{ fontSize: '2.5rem' }} /></InputAdornment> }} />
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ backgroundColor: 'background.main', borderRadius: '8px' }}>
                            <Box >
                                <Grid container sx={{ padding: '20px' }}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant='p'>
                                            Vendor Listing
                                        </Typography>
                                    </Grid>
                                    <Grid container item xs={12} sm={6} spacing={2} justifyContent='flex-end'>
                                        <Grid item >
                                            <StyledButton>Add New Room</StyledButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                            <StyledDatagrid columns={columns} rows={rows} />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </StyledContainer>
    );
}
Vendoroverview.getLayout = function getLayout(Vendoroverview) {
    return (
        <AdminLayout>
            {Vendoroverview}
        </AdminLayout>
    )
}
export default Vendoroverview;