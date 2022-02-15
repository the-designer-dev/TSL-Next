import React , {useEffect, useState} from 'react';
import AdminLayout from '../../../components/adminLayout';
import SmallDetailsCard from '../../../components/smallDetailsCard';
import StyledContainer from '../../../styledComponents/styledContainer';
import { Grid ,  Typography , TextField , InputAdornment, Box } from '@mui/material';
import StyledDatagrid from '../../../components/styledDatagrid';
import SearchIcon from '@mui/icons-material/Search';
import cardImage from '../../../assets/Active Customers.png'
// import cardImage2 from '../../../assets/Customer-Overview-in_active-Icon-8.png'
// import cardImage3 from '../../../assets/Customer-Overview-Active-Icon-8.png'
import StyledButton from '../../../styledComponents/styledButton';
import axios from 'axios';
import { API_URL } from '../../../config';
import {useRouter} from 'next/router'


function Customeroverview(props) {
    const [rows , setRows] = useState([])
    const [totalCustomers , setTotalCustomers] = useState(0)
    const [activeCustomers , setActiveCustomers] = useState(0)
    const [inactiveCustomers , setInactiveCustomers] = useState(0)
    const router =  useRouter()

    const columns = [
        { field: 'name', headerName: 'Name' , flex:1 ,headerAlign: 'center'},
        { field: 'age', headerName: 'Age',flex:1 ,headerAlign: 'center'},
        { field: 'gender', headerName: 'Gender',flex:1 ,headerAlign: 'center'},
        { field: 'cnic', headerName: 'CNIC/Passport',flex:1 ,headerAlign: 'center'},
        { field: 'phone', headerName: 'Phone',flex:1 ,headerAlign: 'center'},
        { field: 'details', headerName: 'Details',flex:1 ,headerAlign: 'center',
        renderCell: (params) => (
            <StyledButton
              onClick={() => {router.push(`/admin/customer/${params.id}`)}}
            >
              View More
            </StyledButton>
          )},
      ]
      
    useEffect(async() => {
        const allCustomers = await axios({
            method:'GET',
            url:`${API_URL}/allcustomers`,
            headers:{Authorization:`Bearer ${sessionStorage.getItem('token')}`}
        }).then(res => res.data)
       
        const customerCount = await axios({
            method:'GET',
            url:`${API_URL}/customer/count`,
            headers:{Authorization:`Bearer ${sessionStorage.getItem('token')}`}
        }).then(res => res.data)
       
        const activeCount = await axios({
            method:'GET',
            url:`${API_URL}/customer/activecustomers`,
            headers:{Authorization:`Bearer ${sessionStorage.getItem('token')}`}
        }).then(res => res.data)
       
        const inactiveCount = await axios({
            method:'GET',
            url:`${API_URL}/customer/inactiveCustomers`,
            headers:{Authorization:`Bearer ${sessionStorage.getItem('token')}`}
        }).then(res => res.data)

       setTotalCustomers(customerCount[0].count)
       setActiveCustomers(activeCount[0].count)
       setInactiveCustomers(inactiveCount)
        setRows(allCustomers.map((el) => {return {id:el.id ,name : `${el.first_name} ${el.last_name}`, age : el.age, gender : el.gender , cnic : el.cnic, phone : el.phone}} ))

    } , [])
    return (
        <StyledContainer>
            <Grid container spacing={1} >
                <Grid container item spacing={3}>
                <Grid item xs={12} sm={4}>
            <SmallDetailsCard img={cardImage} heading='Total Customers' number={totalCustomers}/>
            </Grid>
                <Grid item xs={12} sm={4}>
            <SmallDetailsCard img={cardImage} heading='Active Customers' number={activeCustomers}/>
            </Grid>
                <Grid item xs={12} sm={4}>
            <SmallDetailsCard img={cardImage} heading='In-Active Customers' number={inactiveCustomers}/>
            </Grid>
                <Grid item xs={12}>
                <TextField required label='' sx={{'& .MuiOutlinedInput-notchedOutline':{borderColor:'primary.main'} ,'& .MuiSvgIcon-root':{color:'#FFF'} ,'& .MuiOutlinedInput-root' :{paddingRight:'0px'} , '& .MuiInputAdornment-outlined' :{padding:'27px 10px' , borderRadius:'4px' ,backgroundColor:'button.main'} , '& .MuiInputAdornment-root':{backgroundColor:''} }} placeholder="Search by Room Name" fullWidth variant='outlined' InputProps={{endAdornment: <InputAdornment><SearchIcon style={{fontSize:'2.5rem'}}/></InputAdornment>}}/>
            </Grid>
            <Grid item xs={12}>
                    <Box sx={{backgroundColor:'background.main' , borderRadius:'8px'}}>
                        <Box >
                        <Grid container sx={{ padding:'20px'}}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant='p'>
                                    Customer Listing
                                </Typography>
                            </Grid>
                            <Grid container item xs={12} sm={6} spacing={2} justifyContent='flex-end'>
                                <Grid item >
                                    {/* <StyledButton>Add New Room</StyledButton> */}
                                </Grid>
                            </Grid>
                        </Grid>
                        </Box>
                        <StyledDatagrid columns={columns} rows={rows}/>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
        </StyledContainer>
    );
}
Customeroverview.getLayout = function getLayout(Customeroverview) {
    return (
      <AdminLayout>
        {Customeroverview}
      </AdminLayout>
    )
  }
export default Customeroverview;