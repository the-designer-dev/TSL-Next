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
                       
                        <SliderGuests/>
           

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