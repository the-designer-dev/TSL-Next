import React from 'react';
import AdminLayout from '../../components/adminLayout';
import SmallDetailsCard from '../../components/smallDetailsCard';
import StyledContainer from '../../styledComponents/styledContainer';
import { Grid ,  Typography , TextField , InputAdornment, Box } from '@mui/material';
import StyledDatagrid from '../../components/styledDatagrid';
import SearchIcon from '@mui/icons-material/Search';
import cardImage from '../../assets/Vendor-Overview-Total-Icon-8.png'
import cardImage2 from '../../assets/Vendor-Overview-in_active-Icon-8.png'
import { GridColDef } from '@mui/x-data-grid';
import cardImage3 from '../../assets/Vendor-Overview-Active-Icon-8.png'
import StyledButton from '../../styledComponents/styledButton';


function Vendoroverview(props) {
    const rows =[
        {id:1 ,name : 3, age : 3, gender : 3, cnic : 3, phone : 'asdxcasd'},
        {id:2 ,name : 3, age : 3, gender : 3, cnic : 3, phone : 'asdxcasd'},
        {id:3 ,name : 3, age : 3, gender : 3, cnic : 3, phone : 'asdxcasd'},
        {id:4 ,name : 3, age : 3, gender : 3, cnic : 3, phone : 'asdxcasd'},
    ]

    const columns = [
        { field: 'name', headerName: 'Name' , flex:1 ,headerAlign: 'center'},
        { field: 'age', headerName: 'Age',flex:1 ,headerAlign: 'center'},
        { field: 'gender', headerName: 'Gender',flex:1 ,headerAlign: 'center'},
        { field: 'cnic', headerName: 'CNIC/Passport',flex:1 ,headerAlign: 'center'},
        { field: 'phone', headerName: 'Phone',flex:1 ,headerAlign: 'center'},
        { field: 'details', headerName: 'Details',flex:1 ,headerAlign: 'center',
        renderCell: (params) => (
            <StyledButton
              onClick={() => { }}
            >
              View More
            </StyledButton>
          )},
      ]   
    return (
        <StyledContainer>
            <Grid container spacing={1} >
                <Grid container item spacing={3}>
                <Grid item xs={12} sm={4}>
            <SmallDetailsCard img={cardImage} heading='Total Vendors' number='559'/>
            </Grid>
                <Grid item xs={12} sm={4}>
            <SmallDetailsCard img={cardImage2} heading='Active Vendors' number='559'/>
            </Grid>
                <Grid item xs={12} sm={4}>
            <SmallDetailsCard img={cardImage3} heading='In-Active Vendors' number='559'/>
            </Grid>
                <Grid item xs={12}>
                <TextField sx={{'& .MuiOutlinedInput-notchedOutline':{borderColor:'primary.main'} ,'& .MuiSvgIcon-root':{color:'#FFF'} ,'& .MuiOutlinedInput-root' :{paddingRight:'0px'} , '& .MuiInputAdornment-outlined' :{padding:'27px 10px' , borderRadius:'4px' ,backgroundColor:'button.main'} , '& .MuiInputAdornment-root':{backgroundColor:''} }} placeholder="Search by Room Name" fullWidth variant='outlined' InputProps={{endAdornment: <InputAdornment><SearchIcon style={{fontSize:'2.5rem'}}/></InputAdornment>}}/>
            </Grid>
            <Grid item xs={12}>
                    <Box sx={{backgroundColor:'background.main' , borderRadius:'8px'}}>
                        <Box >
                        <Grid container sx={{ padding:'20px'}}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant='p'>
                                    Room Listing
                                </Typography>
                            </Grid>
                            <Grid container item xs={12} sm={6} spacing={2} justifyContent='flex-end'>
                                <Grid item >
                                    <StyledButton>Add New Room</StyledButton>
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
Vendoroverview.getLayout = function getLayout(Vendoroverview) {
    return (
      <AdminLayout>
        {Vendoroverview}
      </AdminLayout>
    )
  }
export default Vendoroverview;