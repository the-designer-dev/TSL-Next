import { Box, Grid } from '@mui/material';
import React , {useState} from 'react';
import AdminLayout from '../../../components/adminLayout';
import DetailsBox from '../../../components/detailsBox';
import { DataGrid } from '@mui/x-data-grid';
import StyledContainer from '../../../styledComponents/styledContainer';
import StyledButton from '../../../styledComponents/styledButton';
import axios from 'axios';
import { API_URL } from '../../../config';
import { useEffect } from 'react';
import {useRouter} from 'next/router'

function CustomerDetails(props) {
  const [currentCustomer , setCurrentCustomer] = useState(null)
  const [orders , setOrders] = useState(null)
  const router =  useRouter()
  const { customer  } = router.query

  useEffect(async() => {
      const customerVar = await axios({
          method:'GET',
          url:`${API_URL}/customer/find/${customer}`,
          headers:{Authorization : `Bearer ${sessionStorage.getItem('token')}`}
      }).then((res) => res.data).catch(err => console.log(err))
      setCurrentCustomer(customerVar?customerVar.customer[0]:{})
      setOrders(customerVar?customerVar.order:{})
      console.log(customerVar)
      } , [customer])

    const columns = [
        { field: 'orderid', headerName: 'Order ID' , flex:1 ,headerAlign: 'center'},
        { field: 'vendorname', headerName: 'Vendor Name',flex:1 ,headerAlign: 'center'},
        { field: 'roomname', headerName: 'Room Name',flex:1 ,headerAlign: 'center'},
        { field: 'orderdetail', headerName: 'Order Detail',flex:1 ,headerAlign: 'center'},
        { field: 'commission', headerName: 'Commission',flex:1 ,headerAlign: 'center'},
        { field: 'details', headerName: 'Details',flex:1 ,headerAlign: 'center',renderCell: (params) => (
            <StyledButton
              onClick={() => { 
                console.log(params.row)
              }}
            >
              View More
            </StyledButton>
          )}]          
    return (
      currentCustomer && orders?
        <StyledContainer>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <DetailsBox title={'Customer Details'} details ={[{question:'Full Name' , answer:`${currentCustomer.first_name} ${currentCustomer.last_name}`}, {question:'Date of Birth' , answer:currentCustomer.date_of_birth} , {question:'Age' , answer:currentCustomer.age} , {question:'Phone' , answer: currentCustomer.phone} , {question:'Gender' , answer: currentCustomer.gender}, {question:'CNIC/Passport' , answer: currentCustomer.cnic},{question:'Email' , answer:currentCustomer.email}]} />
                </Grid>
                <Grid item xs={12}>
                <DataGrid sx={{ '& .MuiDataGrid-columnSeparator':{display:'none'}, '& .MuiDataGrid-footerContainer':{backgroundColor:'table.tableRow2' , borderRadius:'0px  0px 8px 8px'}, '& .MuiDataGrid-columnHeaders':{backgroundColor:'table.tableRow1' , borderRadius:'8px 8px 0px 0px'} , border:'none' , "& .MuiDataGrid-virtualScroller": { "& .MuiDataGrid-row": {'& .MuiDataGrid-cell':{border:'none' , justifyContent:'center'},  "&:nth-child(2n)": {   backgroundColor: "table.tableRow1" } , "&:nth-child(2n-1)": {  backgroundColor: "table.tableRow2" }}}}} columns={columns} rows={orders.length>0? orders.map(el => {return {id: el.id , orderid: el.id ,vendorname: `${el.first_name} ${el.last_name}` ,roomname: el.roomname ,orderdetail: `PKR ${el.order_total}/-` ,commission:'' }}):[]} autoHeight/>
                </Grid>
            </Grid>
        </StyledContainer>
        :''
    );
}


CustomerDetails.getLayout = function getLayout(CustomerDetails) {
    return (
      <AdminLayout>
        {CustomerDetails}
      </AdminLayout>
    )
  }

export default CustomerDetails;