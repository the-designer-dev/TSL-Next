import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SmallDetailsCard from '../../components/smallDetailsCard';
import StyledContainer from '../../styledComponents/styledContainer';
import AllOrders from '../../assets/All Orders.png';
import RefundedOrders from '../../assets/Refunded Orders.png';
import CancelledOrders from '../../assets/Cancelled Orders.png';
import CompletedOrders from '../../assets/Completed Orders.png';
import { DataGrid } from '@mui/x-data-grid';
import { API_URL } from '../../config';
import StyledButton from '../../styledComponents/styledButton';
import VendorLayout from '../../components/vendorLayout';
import axios from 'axios';
import { useSelector } from 'react-redux';
function OrderListing(props) {
    const [tableData ,setTableData] = useState([])
    const columns = [
        { field: 'orderid', headerName: 'Order ID' , flex:1 ,headerAlign: 'center'},
        { field: 'customername', headerName: 'Customer Name',flex:1 ,headerAlign: 'center'},
        { field: 'roomname', headerName: 'Room Name',flex:1 ,headerAlign: 'center'},
        { field: 'totalprice', headerName: 'Total Price',flex:1 ,headerAlign: 'center'},
        { field: 'paymentstatus', headerName: 'Payment Status',flex:1 ,headerAlign: 'center',renderCell: (params) => (
            params.row.paymentstatus === 'cancelled'?<Typography fontSize={14} fontWeight={400} sx={{color:'#FA2220'}}>Cancelled</Typography>:params.row.paymentstatus === 'waiting'?<Typography fontSize={14} fontWeight={400} sx={{color:'#F18F05'}}>Waiting</Typography>:<Typography fontSize={14} fontWeight={400} sx={{color:'#2AB571'}}>Approved</Typography>
          )},
        { field: 'details', headerName: 'Details',flex:1 ,headerAlign: 'center',renderCell: (params) => (
            <StyledButton
              onClick={() => { 
                console.log(params.row)
              }}>
              View More
            </StyledButton>
          )}]          
    useEffect(async ()=>{
        const orders = await axios({
            method: 'GET',
            url: `${API_URL}/orders`,
            headers:{
              Accept: 'application/json',
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
          }).then(res => res.data)
        setTableData(orders.map((el , index) => {return {id: index+1 ,orderid: el.id,customername:`${el.first_name} ${el.last_name}` ,roomname: el.roomname ,totalprice:el.order_total ,paymentstatus: el.order_status }}))
    } , [])

    return (
        <StyledContainer>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant='h6'>Order Listing</Typography>
                    <Typography fontSize={12} variant='p'>Lorem ipsum dolor sit amet, consectuer</Typography>
                </Grid>
                <Grid container item spacing={2}   alignItems="stretch">
                <Grid item xs={3}>
                    <SmallDetailsCard heading='All Orders' number={tableData.length} img={AllOrders}/>
                </Grid>
                <Grid item xs={3}>
                    <SmallDetailsCard heading='Refunded Orders' number={tableData.filter(el => el.paymentstatus === 'refunded').length} img={RefundedOrders}/>
                </Grid>
                <Grid item xs={3}>
                    <SmallDetailsCard heading='Cancelled Orders' number={tableData.filter(el => el.paymentstatus === 'cancelled').length} img={CancelledOrders}/>
                </Grid>
                <Grid item xs={3}>
                    <SmallDetailsCard heading='Completed Orders' number={tableData.filter(el => el.paymentstatus === 'completed').length} img={CompletedOrders}/>
                </Grid>
                </Grid>
                <Grid item xs={12}>
                <DataGrid sx={{ '& .MuiDataGrid-columnSeparator':{display:'none'}, '& .MuiDataGrid-footerContainer':{backgroundColor:'table.tableRow2' , borderRadius:'0px  0px 8px 8px'}, '& .MuiDataGrid-columnHeaders':{backgroundColor:'table.tableRow1' , borderRadius:'8px 8px 0px 0px'} , border:'none' , "& .MuiDataGrid-virtualScroller": { backgroundColor:'background.main', "& .MuiDataGrid-row": {'& .MuiDataGrid-cell':{border:'none' , justifyContent:'center'},  "&:nth-child(2n)": {   backgroundColor: "table.tableRow1" } , "&:nth-child(2n-1)": {  backgroundColor: "table.tableRow2" }}}}} columns={columns} rows={tableData} autoHeight/>
                </Grid>
            </Grid>
        </StyledContainer>
    );
}


OrderListing.getLayout = function getLayout(OrderListing) {
    return (
      <VendorLayout>
        {OrderListing}
      </VendorLayout>
    )
  }

export default OrderListing;