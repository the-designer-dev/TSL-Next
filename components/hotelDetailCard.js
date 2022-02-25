import React from 'react';
import { Box, Grid, Typography, Checkbox } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

function HotelDetailCard() {

    return (
        <Box sx={{ backgroundColor: 'background.main', width: '100%', height: '100%', borderRadius: '10px', padding: '40px 30px', margin: '0px 0px 30px 0px' }}>
            <Grid container item spacing={2}>
                <Grid item xs={12}>
                    <Typography fontWeight={600} variant='h6'>Hotel Details</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography fontWeight={600} variant='h6'>Luxury Villas</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography fontWeight={400} variant='p'><LocationOnOutlinedIcon />Club Rd, Civil Lines, Karachi, Karachi city
                        Holidays deal, Faimly pakeges, Buines bundle
                        and more avilable at movenpik. Convenient
                        location. Weding menu. faimly friendly ...</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontWeight={600} variant='h6'>About Hotel</Typography>
                </Grid>

                <Grid container item spacing={1}>
                    <Grid item xs={12}>
                        <Typography fontWeight={400} variant='p'><AccessTimeOutlinedIcon sx={{ marginRight: '10px', color: 'button.main' }} /> Checkin Time : 2 pm </Typography>

                    </Grid>

                    <Grid item xs={12}>
                        <Typography fontWeight={400} variant='p'><AccessTimeOutlinedIcon sx={{ marginRight: '10px', color: 'button.main' }} /> Checkin Time : 2 pm </Typography>

                    </Grid>
                </Grid>
            </Grid>


        </Box >
    );
}

export default HotelDetailCard;