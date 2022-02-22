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
function OrderDetails(props) {
    const router = useRouter()
    const { order } = router.query
    const [tableData, setTableData] = useState([])
    const columns = [
        { field: 'particular', headerName: 'Particular', flex: 1, headerAlign: 'center' },
        { field: 'quantity', headerName: 'Quantity', flex: 1, headerAlign: 'center' },
        { field: 'unitprice', headerName: 'Unit Price', flex: 1, headerAlign: 'center' },
        { field: 'totalprice', headerName: 'Total Price', flex: 1, headerAlign: 'center' },
    ]

   
    useEffect(() => {
    } ,[order])
    return (
        <StyledContainer>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='space-between' alignItems="stretch" sx={{ padding: '20px 0px' }}>
                <Grid item xs={11}>
                    <Typography fontWeight={500} variant='h5'>Order Details</Typography>
                </Grid>
                <Grid container justifyContent='space-between' item xs={12}>
                    <Typography fontWeight={600} variant='p'>Order ID: 23244</Typography>
                    <Typography fontWeight={600} variant='p'>Booking Date: 02/02/2022</Typography>

                </Grid>

                <Grid item xs={12} md={6}>
                    <Box sx={{ backgroundColor: 'background.main', height: '103%', padding: '10px 20px', borderRadius: '20px' }}>
                        <Grid xs={10} md={8}>
                            <Grid container item>
                                <Grid>
                                    <Typography fontWeight={500} variant='h5' sx={{ paddingBottom: '10px' }}>Hotel Details</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography fontWeight={500} variant='p'>Luxury Hotel</Typography>
                                </Grid>
                                <Grid container item alignItems='center' xs={12}><Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical', paddingBottom: '20px' }} fontSize={14} variant='p'><LocationOnOutlinedIcon />Club Rd, Civil Lines, Karachi, Karachi city</Typography>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} ><Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', paddingBottom: '20px' }} fontSize={14} variant='p'>Holidays deal, Faimly pakeges, Buines bundle
                                and more avilable at movenpik. Convenient
                                location. Weding menu. faimly friendly ...</Typography>
                            </Grid>
                            <Grid container item spacing={2}>
                                <Grid item xs={12}><Typography fontWeight={500} variant='p' >About Hotel</Typography></Grid>
                                <Grid alignItems='center' container item xs={12}><AccessTimeOutlinedIcon sx={{ color: 'button.main' }} /><Typography sx={{ paddingLeft: '10px' }} variant='p'>Check-In: After 2 pm</Typography></Grid>
                                <Grid alignItems='center' container item xs={12}><AccessTimeOutlinedIcon sx={{ color: 'button.main' }} /><Typography sx={{ paddingLeft: '10px' }} variant='p'>Check-Out: After 6 pm</Typography></Grid>
                            </Grid>


                        </Grid>
                    </Box>




                </Grid>

                <Grid item xs={12} md={6}>
                    <Box sx={{ backgroundColor: 'background.main', height: '103%', padding: '10px 20px', borderRadius: '20px' }}>
                        <Grid xs={10} md={8}>
                            <Grid container item>
                                <Grid>
                                    <Typography fontWeight={500} variant='h5' sx={{ paddingBottom: '10px' }}>Room Details</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography fontWeight={500} variant='p'>Suite 101</Typography>
                                </Grid>
                                <Grid container item alignItems='center' xs={12}><Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical', paddingBottom: '20px' }} fontSize={14} variant='p'><LocationOnOutlinedIcon />Club Rd, Civil Lines, Karachi, Karachi city</Typography>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} ><Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', paddingBottom: '20px' }} fontSize={14} variant='p'>Holidays deal, Faimly pakeges, Buines bundle
                                and more avilable at movenpik. Convenient
                                location. Weding menu. faimly friendly ...</Typography>
                            </Grid>
                            <Grid container item spacing={2}>

                                <Grid alignItems='center' container item xs={12}> <Typography sx={{ paddingLeft: '10px' }} variant='p'>Total Capacity: 6 people</Typography></Grid>
                                <Grid alignItems='center' container item xs={12}> <Typography sx={{ paddingLeft: '10px' }} variant='p'>Number of Beds: 2</Typography></Grid>
                                <Grid alignItems='center' container item xs={12}> <Typography sx={{ paddingLeft: '10px' }} variant='p'>Types of Beds: 1 King, 1 Queen</Typography></Grid>

                            </Grid>


                        </Grid>
                    </Box>

                </Grid>
            </Grid>
            <Grid item xs={12} >
                <Box sx={{ backgroundColor: 'background.main', padding: '10px', borderRadius: '20px', margin: '10px 0px' }}>
                    <Grid container item justifyContent='space-around' alignItems="stretch">
                       
                        <SliderGuests/>
                    </Grid>
                </Box>
            </Grid>
            <Grid container justifyContent='space-around' alignItems="stretch" sx={{ padding: '20px 0px' }} >

                <Grid item xs={12} sx={{ backgroundColor: 'background.main', padding: '10px', borderRadius: '20px' }}>
                    {/* <TotalTable columns={columns} rows={tableData} /> */}
                </Grid>
            </Grid>

{/* 

            <Grid item xs={12}>

                <Slider className='hero_slider order-detail-guest-slider' style={{ backgroundColor: 'transparent' }} {...settings}>

                    <Grid xs={10}> <AdultCard /></Grid>


                    <Grid xs={10}> <AdultCard /></Grid>


                    <Grid xs={10}> <AdultCard /></Grid>

                    <Grid xs={10}> <AdultCard /></Grid>
                    <Grid xs={10}> <AdultCard /></Grid>
                    <Grid xs={10}> <AdultCard /></Grid>

                </Slider>

            </Grid> */}
           
        </StyledContainer>
    );
}
OrderDetails.getLayout = function getLayout(OrderDetails) {
    return (
      <VendorLayout>
        {OrderDetails}
      </VendorLayout>
    )
  }
export default OrderDetails;