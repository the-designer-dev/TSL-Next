import { Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import useMediaQuery from '@mui/material/useMediaQuery';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

import GuestCard from './guestCard';

function SliderGuests() {
    const matches3 = useMediaQuery('(max-width:1200px)');
    const matches1 = useMediaQuery('(max-width:900px)');
    const matches2 = useMediaQuery('(max-width:630px)');


    return (

        <Grid item xs={12} >
            <Box sx={{ backgroundColor: 'background.main', padding: '30px 10px', borderRadius: '20px', margin: '10px 0px' }}>
                <Grid sx={{ padding: '0px 0px 30px 0px' }}>
                    <Typography fontWeight={600} variant='h6'>Guest List</Typography>
                </Grid>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={matches2 ? 1 : matches1 ? 2 : matches3 ? 3 : 4}

                    pagination={{ clickable: true }}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><GuestCard /></SwiperSlide>
                    <SwiperSlide><GuestCard /></SwiperSlide>
                    <SwiperSlide><GuestCard /></SwiperSlide>
                    <SwiperSlide><GuestCard /></SwiperSlide>
                    <SwiperSlide><GuestCard /></SwiperSlide>
                    <SwiperSlide><GuestCard /></SwiperSlide>
                    <SwiperSlide><GuestCard /></SwiperSlide>
                    <SwiperSlide><GuestCard /></SwiperSlide>

                </Swiper>

            </Box>
        </Grid>

    );
}
export default SliderGuests;