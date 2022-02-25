import React from 'react';
import { Box, Grid, Typography, Checkbox } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

function RoomDetailCard() {

    return (
        <Box sx={{ backgroundColor: 'background.main', width: '100%', height: '100%', borderRadius: '10px', padding: '40px 30px', margin: '0px 0px 30px 0px' }}>
            <Grid container item spacing={2}>
                <Grid item xs={12}>
                    <Typography fontWeight={600} variant='h6'>Room Details</Typography>
                </Grid>

                <Grid container item alignItems='center'>
                    <Grid item xs={4}>
                        <Typography fontWeight={600} variant='h6'>Room Name :</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography fontWeight={400} variant='p'>Suite 101</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontWeight={400} variant='p'><LocationOnOutlinedIcon />Holidays deal, Faimly pakeges, Buines bundle
                        and more avilable at movenpik. Convenient
                        location. Weding menu. family friendly...</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontWeight={400} variant='p'>Total Capacity: 16 people</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontWeight={400} variant='p'>Number of Beds : 2</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography fontWeight={400} variant='p'>Type of Beds : 1 King 1 Queen</Typography>
                </Grid>


            </Grid>


        </Box >
    );
}

export default RoomDetailCard;