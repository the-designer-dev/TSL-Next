import { Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import StyledContainer from '../../../styledComponents/styledContainer';
import { useRouter } from 'next/router';

import TotalTable from '../../../components/totalTable';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SliderGuests from '../../../components/sliderGuests';
import VendorLayout from '../../../components/vendorLayout';
import RoomDetailCard from '../../../components/roomDetailCard';
import HotelDetailCard from '../../../components/hotelDetailCard'
import BookingSummaryCard from '../../../components/bookingSummaryCard';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import GuestCard from '../../../components/guestCard';
import CustomerLayout2 from "../../../components/customerLayout2";
import useMediaQuery from '@mui/material/useMediaQuery';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import { API_URL } from '../../../config';

function OrderDetails(props) {
  const router = useRouter()
  const { order } = router.query
  const [tableData, setTableData] = useState([])
  const [rows, setRows] = useState([])
  const [orderDetails, setOrderDetails] = useState(null)
  const columns = [
    { field: 'extra_field_name', headerName: 'Particular', flex: 1, headerAlign: 'center' },
    { field: 'extra_field_qty', headerName: 'Quantity', flex: 1, headerAlign: 'center' },
    { field: 'extra_field_price', headerName: 'Unit Price', flex: 1, headerAlign: 'center' },
    { field: 'total_price', headerName: 'Total Price', flex: 1, headerAlign: 'center' },
  ]

  
  useEffect(async () => {

    
    const config = {
      headers:{
      Accept: 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    }}

    console.log(order)

    if(order){
      const vendorVar = await axios({
        method:'GET',
        url:`${API_URL}/orders/${order}`,
        headers:{Authorization : `Bearer ${sessionStorage.getItem('token')}`}
    }).then((res) => {
      setOrderDetails(res.data)
      const extras = res.data.booking.extras.map((ex) => {
        return {
          extra_field_name: ex.extra_field_name,
          extra_field_price: ex.extra_field_price,
          extra_field_qty: ex.extra_field_qty,
          total_price: ex.extra_field_qty * ex.extra_field_price,
          id: ex.id,
        }
      })
      setRows(extras)
    }).catch(err => console.log(err))
      
      
      
    } 


  }, [order])

  console.log(orderDetails)

  var childBooking = orderDetails && orderDetails.child_booking.map((child) => {
    return {
      dob: child.dob,
      name: child.name,
      cat: "child",
      isLeadGuest: null,
      cnic: "",
      phonenumber: ""
    }
  })
  var adultBooking = orderDetails && orderDetails.adult_booking.map((adult) => {
    return {
      dob: "",
      name: adult.name,
      cat: "adult",
      isLeadGuest: adult.isLeadGuest,
      cnic: adult.cnic,
      phonenumber: adult.phonenumber
    }
  })

  const mergePerson = orderDetails ? [...childBooking, ...adultBooking] : []
  console.log(mergePerson)

  const matches3 = useMediaQuery('(max-width:1200px)');
  const matches1 = useMediaQuery('(max-width:900px)');
  const matches2 = useMediaQuery('(max-width:630px)');

  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
 

  return (
    <StyledContainer>

      <Grid container item spacing={2} alignItems='stretch' justifyContent='center'>
        <Grid item xs={12} md={6} lg={4}>
          {orderDetails && 
          <RoomDetailCard room_name={orderDetails.booking.room.roomname} room_desc={orderDetails.booking.room.roomdescription === null ? '' : orderDetails.booking.room.roomdescription}
           people_capacity={orderDetails.booking.room.adult + orderDetails.booking.room.child} bed_capacity={orderDetails.booking.room.bedcapacity}
           bed_types={orderDetails.booking.room.bed_type}
           />
          
          }
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          {orderDetails && 
            <HotelDetailCard 
            hotel_name={orderDetails.booking.room.hotel.hotelname}
            hotel_desc={orderDetails.booking.room.hotel.hoteldescription === null ? '' : orderDetails.booking.room.hotel.hoteldescription}
            checkInTime={orderDetails.booking.room.hotel.checkintime === null ? '' : orderDetails.booking.room.hotel.checkintime}
            checkOutTime={orderDetails.booking.room.hotel.checkouttime === null ? '' : orderDetails.booking.room.hotel.checkouttime}
            />
          }
          
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        {orderDetails && 
          <BookingSummaryCard 
          order_id = {orderDetails.id}
          booking_start_date = {new Date(orderDetails.published_at).toDateString()}
          booking_end_date = {new Date(orderDetails.booking.booking_end_date).toDateString()}
          adult = {orderDetails.adult_booking.length}
          child = {orderDetails.child_booking.length}
          contact_person = {orderDetails.adult_booking.find((rl) => rl.isLeadGuest === true).name}
          contact_number = {orderDetails.adult_booking.find((rl) => rl.isLeadGuest === true).phonenumber}
          order_status={orderDetails.order_status}
          />
        }
        </Grid>

      </Grid>
      
     
     <Grid container>
     <Grid item xs={12} >
            <Box sx={{ backgroundColor: 'background.main', padding: '30px 10px', borderRadius: '20px', margin: '10px 0px', position:"relative" }}>
                
                    <Typography fontWeight={600} variant='h6' style={{position:"absolute",top:"10px",paddingLeft:"10px"}}>Guest List</Typography>
                
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={ matches2 ? 1 : matches1 ? 2 : matches3 ? 3 : 3}
                    // matches2 ? 1 : matches1 ? 2 : matches3 ? 3 : 4
                    pagination={{ clickable: true }}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    style={{paddingTop:"50px"}}
                    
                >
                    {/* <SwiperSlide><GuestCard /></SwiperSlide>
                    <SwiperSlide><GuestCard /></SwiperSlide>
                    <SwiperSlide><GuestCard /></SwiperSlide>
                    <SwiperSlide><GuestCard /></SwiperSlide>
                    <SwiperSlide><GuestCard /></SwiperSlide>
                    <SwiperSlide><GuestCard /></SwiperSlide>
                    <SwiperSlide><GuestCard /></SwiperSlide>
                    <SwiperSlide><GuestCard /></SwiperSlide> */}
                      
                    {orderDetails && mergePerson.map((per, ind) => {
                      return (
                        <SwiperSlide key={ind}><GuestCard Person_count={`Person ${ind+1}`} child_dob={per.dob} lead_guest={per.isLeadGuest} 
                        lead_guest_cnic={per.cnic} lead_guest_phone={per.phonenumber} name={per.name}
                        /></SwiperSlide>
                      )
                    })}
                    

                </Swiper>

            </Box>
        </Grid>
     </Grid>
      

     
      <Grid container item>
        {orderDetails &&  <Grid item xs={12} ><TotalTable columns={columns} rows={rows} total={orderDetails.order_total}/></Grid>}
       

      </Grid>

    </StyledContainer>
  );
}
OrderDetails.getLayout = function getLayout(OrderDetails) {
  return (
    <CustomerLayout2>
      {OrderDetails}
    </CustomerLayout2>
  )
}
export default OrderDetails;