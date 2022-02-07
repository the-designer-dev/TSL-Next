import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import AdminLayout from '../../components/adminLayout';
import DetailsBox from '../../components/detailsBox';
import StyledDatagrid from '../../components/styledDatagrid';
import StyledButton from '../../styledComponents/styledButton';
import StyledContainer from '../../styledComponents/styledContainer';

function Index(props) {


    const rows =[
        {id:1 ,customerName:'asdasd', totalSales : 3, totalCommision : 3, customerServed : 3, ordersCancelled : 3, refundEntertained : 'asdxcasd'},
        {id:2 ,customerName:'asdasd', totalSales : 3, totalCommision : 3, customerServed : 3, ordersCancelled : 3, refundEntertained : 'asdxcasd'},
        {id:3 ,customerName:'asdasd', totalSales : 3, totalCommision : 3, customerServed : 3, ordersCancelled : 3, refundEntertained : 'asdxcasd'},
        {id:4 ,customerName:'asdasd', totalSales : 3, totalCommision : 3, customerServed : 3, ordersCancelled : 3, refundEntertained : 'asdxcasd'},
    ]

    const columns = [
        { field: 'customerName', headerName: 'Customer Name' , flex:1 ,headerAlign: 'center',},
        { field: 'totalSales', headerName: 'Total Sales',flex:1 ,headerAlign: 'center',},
        { field: 'totalCommision', headerName: 'Total Commision',flex:1 ,headerAlign: 'center',},
        { field: 'customerServed', headerName: 'Customer Served',flex:1 ,headerAlign: 'center',},
        { field: 'ordersCancelled', headerName: 'Orders Cancelled',flex:1 ,headerAlign: 'center',},
        { field: 'refundEntertained', headerName: 'Refund Entertained',flex:1 ,headerAlign: 'center',},
      ]    

    return (
        <StyledContainer>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <DetailsBox title='Vendor Information' subtitle='' details={[{question:'Phone 1' , answer:'0331-5644543'},{question:'Phone 1' , answer:'0331-5644543'},{question:'Phone 1' , answer:'0331-5644543'},{question:'Phone 1' , answer:'0331-5644543'},{question:'Phone 1' , answer:'0331-5644543'}]}/>
                </Grid>
                <Grid container item spacing={2} alignItems='stretch'>
                <Grid item xs={12} sm={6}>
                    <DetailsBox title='Irfan Khan' subtitle='Primary Contact' details={[{question:'Phone 1' , answer:'0331-5644543'},{question:'Phone 2' , answer:'0331-5644543'},{question:'Designation' , answer:'ABC Clarify'},{question:'Phone 1' , answer:'0331-5644543'},{question:'Phone 1' , answer:'0331-5644543'}]}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DetailsBox title='Obaiz Khan' subtitle='Secondary Contact' details={[{question:'Phone 1' , answer:'0331-5644543'},{question:'Phone 1' , answer:'0331-5644543'},{question:'Phone 1' , answer:'0331-5644543'},{question:'Phone 1' , answer:'0331-5644543'},{question:'Phone 1' , answer:'0331-5644543'}]}/>
                </Grid>
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
                                <Grid item >
                                    <StyledButton>Add New Hotel</StyledButton>
                                </Grid>
                            </Grid>

                        </Grid>
                        </Box>
                        <StyledDatagrid columns={columns} rows={rows}/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{backgroundColor:'background.main' , borderRadius:'8px'}}>
                        <Box >
                        <Grid container sx={{ padding:'20px'}}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant='p'>
                                    Order Listing Table
                                </Typography>
                            </Grid>

                        </Grid>
                        </Box>
                        <StyledDatagrid columns={columns} rows={rows}/>
                    </Box>
                </Grid>
            </Grid>
        </StyledContainer>
    );
}


Index.getLayout = function getLayout(Index) {
    return (
      <AdminLayout>
        {Index}
      </AdminLayout>
    )
  }

export default Index;