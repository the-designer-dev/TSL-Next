import React from 'react';
import { Box, Grid, Typography, Checkbox } from '@mui/material'


function GuestCard() {

    return (
        <Box sx={{ backgroundColor: 'table.tableRow1', width: '100%', height: '100%', borderRadius: '10px', padding: '10px 30px', margin: '0px 0px 30px 0px' }}>
            <Grid>
                <Grid>
                    <Typography fontWeight={600} variant='h6'>Adult 1</Typography>
                </Grid>

                <Grid container item alignItems='center' sx={{ margin: '10px 0px' }}>

                    <Grid item xs={4}>
                        <Typography fontWeight={400} variant='p'>Name:</Typography>
                    </Grid>
                    <Grid item xs={8} sx={{ backgroundColor: 'background.main', padding: '5px 10px' }}>
                        <Typography fontWeight={600} variant='p' sx={{ width: '100%', }}>Yousuf Abdullah</Typography>
                    </Grid>
                </Grid>

                <Grid container item alignItems='center' sx={{ margin: '10px 0px' }}>

                    <Grid item xs={4}>
                        <Typography fontWeight={400} variant='p'>CNIC:</Typography>
                    </Grid>
                    <Grid item xs={8} sx={{ backgroundColor: 'background.main', padding: '5px 10px' }}>
                        <Typography fontWeight={600} variant='p' sx={{ width: '100%', }}>42201-1123344-1</Typography>
                    </Grid>
                </Grid>

                <Grid container item alignItems='center' sx={{ margin: '10px 0px' }}>

                    <Grid item xs={4}>
                        <Typography fontWeight={400} variant='p'>DOB:</Typography>
                    </Grid>
                    <Grid item xs={8} sx={{ backgroundColor: 'background.main', padding: '5px 10px' }}>
                        <Typography fontWeight={600} variant='p' sx={{ width: '100%', }}>11/12/1999</Typography>
                    </Grid>
                </Grid>

                <Grid container item alignItems='center' sx={{ margin: '10px 0px' }}>

                    <Grid item xs={4}>
                        <Typography fontWeight={400} variant='p'>Lead Guests:</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ padding: '5px 0px' }}>
                        <Checkbox disabled checked />
                    </Grid>
                </Grid>

                <Grid container item alignItems='center' sx={{ margin: '10px 0px' }}>

                    <Grid item xs={4}>
                        <Typography fontWeight={400} variant='p'>Contact:</Typography>
                    </Grid>
                    <Grid item xs={8} sx={{ backgroundColor: 'background.main', padding: '5px 10px' }}>
                        <Typography fontWeight={600} variant='p' sx={{ width: '100%', }}>+92 23139441</Typography>
                    </Grid>
                </Grid>
            </Grid>


        </Box >
    );
}

export default GuestCard;