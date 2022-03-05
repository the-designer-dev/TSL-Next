import React from 'react';
import { Box, Grid, Typography, Checkbox } from '@mui/material'
import PropTypes from 'prop-types';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

function HotelDetailCard({checkInTime, checkOutTime, hotel_desc, hotel_name}) {

    return (
        <Box sx={{ backgroundColor: 'background.main', width: '100%', height: '100%', borderRadius: '10px', padding: '40px 30px', margin: '0px 0px 30px 0px' }}>
            <Grid container item spacing={2}>
                <Grid item xs={12}>
                    <Typography fontWeight={600} variant='h6'>Hotel Details</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography fontWeight={600} variant='h6'>{hotel_name}</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography fontWeight={400} variant='p'><LocationOnOutlinedIcon />{hotel_desc}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontWeight={600} variant='h6'>About Hotel</Typography>
                </Grid>

                <Grid container item spacing={1}>
                    <Grid item xs={12}>
                        <Typography fontWeight={400} variant='p'><AccessTimeOutlinedIcon sx={{ marginRight: '10px', color: 'button.main' }} /> Checkin Time : {checkInTime} </Typography>

                    </Grid>

                    <Grid item xs={12}>
                        <Typography fontWeight={400} variant='p'><AccessTimeOutlinedIcon sx={{ marginRight: '10px', color: 'button.main' }} /> Checkin Time : {checkOutTime} </Typography>

                    </Grid>
                </Grid>
            </Grid>


        </Box >
    );
}

export default HotelDetailCard;

HotelDetailCard.propTypes = {
    checkInTime: PropTypes.string.isRequired,
    checkOutTime: PropTypes.string.isRequired,
    hotel_desc: PropTypes.string.isRequired,
    hotel_name: PropTypes.string.isRequired
}