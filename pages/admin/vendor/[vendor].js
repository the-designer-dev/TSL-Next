import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import AdminLayout from '../../../components/adminLayout';
import DetailsBox from '../../../components/detailsBox';
import StyledDatagrid from '../../../components/styledDatagrid';
import { API_URL } from '../../../config';
import StyledButton from '../../../styledComponents/styledButton';
import StyledContainer from '../../../styledComponents/styledContainer';
import {useRouter} from 'next/router'
function VendorDetails(props) {
    const [currentVendor , setCurrentVendor] = useState(null)
    const [roomsByVendor , setRoomsByVendor] = useState([])
    const [ordersByVendor , setOrdersByVendor] = useState([])
    const router =  useRouter()
    const { vendor  } = router.query

    useEffect(async() => {
        const vendorVar = await axios({
            method:'GET',
            url:`${API_URL}/vendor/find/${vendor}`,
            headers:{Authorization : `Bearer ${sessionStorage.getItem('token')}`}
        }).then((res) => res.data).catch(err => console.log(err))

        const roomsByVendor = await axios({
            method:'GET',
            url:`${API_URL}/vendor/roomsbyvendor/${vendor}`,
            headers:{Authorization : `Bearer ${sessionStorage.getItem('token')}`}
        }).then((res) => res.data).catch(err => console.log(err))
       
        const ordersByVendor = await axios({
            method:'GET',
            url:`${API_URL}/vendor/ordersbyvendor/${vendor}`,
            headers:{Authorization : `Bearer ${sessionStorage.getItem('token')}`}
        }).then((res) => res.data).catch(err => console.log(err))


        setCurrentVendor(vendorVar.user?vendorVar.user[0]:{})
        setRoomsByVendor(roomsByVendor)
        setOrdersByVendor(ordersByVendor)
        } , [vendor])

    const rows = roomsByVendor? roomsByVendor.map((el) => {return {id:el.id ,roomname: el.roomname , hotelname: el.hotelname , category: el.roomcategories , refundableprice: el.roomrefundprice , nonrefundableprice: el.roomnonrefundprice }}) :[]
    const columns = [
        { field: 'roomname', headerName: 'Room name' , flex:1 ,headerAlign: 'center'},
        { field: 'hotelname', headerName: 'Hotel Name',flex:1 ,headerAlign: 'center'},
        { field: 'category', headerName: 'Category',flex:1 ,headerAlign: 'center'},
        { field: 'refundableprice', headerName: 'Price (Refundable)',flex:1 ,headerAlign: 'center'},
        { field: 'nonrefundableprice', headerName: 'Price (Non-Refundable)',flex:1 ,headerAlign: 'center'},
        { field: 'details', headerName: 'Details',flex:1 ,headerAlign: 'center',renderCell: (params) => (
            <StyledButton
              onClick={() => { 
                console.log(params.row)
              }}
            >
              View More
            </StyledButton>
          )}]       
    const columns2 = [
        { field: 'roomname', headerName: 'Room name' , flex:1 ,headerAlign: 'center'},
        { field: 'hotelname', headerName: 'Hotel Name',flex:1 ,headerAlign: 'center'},
        { field: 'ordertotal', headerName: 'Order Total',flex:1 ,headerAlign: 'center'},
        { field: 'roomqty', headerName: 'Room Quantity',flex:1 ,headerAlign: 'center'},
        { field: 'totaldays', headerName: 'Total Days',flex:1 ,headerAlign: 'center'},
        { field: 'details', headerName: 'Details',flex:1 ,headerAlign: 'center',renderCell: (params) => (
            <StyledButton
              onClick={() => { 
                console.log(params.row)
              }}
            >
              View More
            </StyledButton>
          )}]       
        const rows2 = ordersByVendor?ordersByVendor.map(el => {return {id: el.id,roomname: el.roomname ,hotelname: el.hotelname ,ordertotal: el.order_total ,roomqty: el.room_qty ,totaldays: el.total_days}}):[]

    return (
        currentVendor?
        <StyledContainer>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <DetailsBox title='Vendor Information' subtitle='' details={[{question:'Company Name' , answer:currentVendor.company_name},{question:'Registration Number' , answer:currentVendor.registration_number},{question:'Email' , answer: currentVendor.email},{question:'Address' , answer: currentVendor.address}]}/>
                </Grid>
                <Grid container item spacing={2} alignItems='stretch'>
                <Grid item xs={12} sm={6}>
                    <DetailsBox title={`${currentVendor.primary_contact_name}`} subtitle='Primary Contact' details={[{question:'Phone 1' , answer:currentVendor.primary_contact1},{question:'Phone 2' , answer:currentVendor.primary_contact2},{question:'Email' , answer:currentVendor.primary_contact_email},{question:'Designation' , answer: currentVendor.primary_contact_designation},{question:'CNIC' , answer:currentVendor.primary_contact_cnic},{question:'Reffered By' , answer:'TBA'}]}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DetailsBox title={`${currentVendor.secondary_contact1}`} subtitle='Secondary Contact' details={[{question:'Phone 1' , answer:currentVendor.secondary_contact1},{question:'Phone 2' , answer:currentVendor.secondary_contact2},{question:'Email' , answer:currentVendor.secondary_contact_email},{question:'Designation' , answer: currentVendor.secondary_contact_designation},{question:'CNIC' , answer:currentVendor.secondary_contact_cnic},{question:'Reffered By' , answer:'TBA'}]}/>
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
                        <StyledDatagrid columns={columns2} rows={rows2}/>
                    </Box>
                </Grid>
            </Grid>
        </StyledContainer>:''
    );
}


VendorDetails.getLayout = function getLayout(VendorDetails) {
    return (
      <AdminLayout>
        {VendorDetails}
      </AdminLayout>
    )
  }

export default VendorDetails;

