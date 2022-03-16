import React from 'react'
import { Grid, Box, Typography } from '@mui/material';
import Image from 'next/image';
import tour1 from '../assets/tour1.png'
import tour2 from '../assets/tour2.png'
import tour3 from '../assets/tour3.png'
import tour4 from '../assets/tour4.png'

import StarIcon from '@mui/icons-material/Star';
export default function TourCard() {
    return (
        <Grid container item xs={12} spacing={1}>
            <Grid item xs={12}>
                <Image src={tour1} layout='responsive' />
            </Grid>
            <Grid container item xs={12} >
                <Grid item xs={8}>
                    <Typography color={"primary.main"} variant='p' fontSize={14} fontWeight={300} >
                        Hunza Valley
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography color={"primary.main"} variant='p' fontWeight={300} fontSize={14} >
                        <StarIcon sx={{ fontSize: '16px', color: '#2AB572' }} />
                        4.5 (16)
                    </Typography>
                </Grid>
            </Grid >

            <Grid item xs={10}>
                <Typography color={"primary.main"} variant='p' fontSize={16} fontWeight={400} >
                    Explore Hunza valley
                    mountains and village on a
                    bike
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography color={"primary.main"} variant='p' fontSize={14} fontWeight={300} >
                    3 Days
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography color={"primary.main"} variant='p' fontSize={14} fontWeight={500} >
                    From 4200 PKR <sub>/person</sub>
                </Typography>
            </Grid>
        </Grid >
    )
}