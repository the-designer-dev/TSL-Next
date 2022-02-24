import { Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";


import AdultCard from './adultCard';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function SliderGuests() {


    const settings = {
        dots: true,
        infinite: true,
        dotsClass: 'guests_dots',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        nextArrow: (
            <div className="guests_right_arr"> <ChevronRightIcon sx={{ fontSize: '40px', color: '#FFF', borderRadius: '50px' }} /> </div>

        ),
        prevArrow: (

            <div className="guests_left_arr"> <ChevronLeftIcon sx={{ fontSize: '40px', color: '#FFF', borderRadius: '50px' }} /> </div>

        )
    };
    // useEffect(() => {
    // } ,[order])
    return (

        <Grid item xs={12} >
            <Box sx={{ backgroundColor: 'background.main', padding: '10px', borderRadius: '20px', margin: '10px 0px' }}>
            <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          
        </Slider>
            </Box>
        </Grid>

    );
}
export default SliderGuests;