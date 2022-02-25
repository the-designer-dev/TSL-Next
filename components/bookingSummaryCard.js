import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material'


function BookingSummaryCard() {

    return (
        <Box sx={{ backgroundColor: 'background.main', width: '100%', height: '100%', borderRadius: '10px', padding: '40px 30px', margin: '0px 0px 30px 0px' }}>


            <Grid container item spacing={2}>
                <Grid item xs={12}>
                    <Typography fontWeight={600} variant='h6'>Booking Summary</Typography>
                </Grid>
                <Grid container item alignItems='center'>

                    <Grid item xs={6}>
                        <Typography fontWeight={500} variant='h6'>Order ID:</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ backgroundColor: 'table.tableRow1', padding: '5px 20px' }}>
                        <Typography fontWeight={600} variant='p' sx={{ width: '100%', }}>Yousuf Abdullah</Typography>
                    </Grid>
                </Grid>
                <Grid container item alignItems='center'>

                    <Grid item xs={6}>
                        <Typography fontWeight={500} variant='h6'>Booking Date:</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ backgroundColor: 'table.tableRow1', padding: '5px 20px' }}>
                        <Typography fontWeight={600} variant='p' sx={{ width: '100%', }}>25/05/2021</Typography>
                    </Grid>
                </Grid>
                <Grid container item alignItems='center'>

                    <Grid item xs={6}>
                        <Typography fontWeight={500} variant='h6'>Check in Date:</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ backgroundColor: 'table.tableRow1', padding: '5px 20px' }}>
                        <Typography fontWeight={600} variant='p' sx={{ width: '100%', }}>29/11/2021</Typography>
                    </Grid>
                </Grid>
                <Grid container item alignItems='center'>

                    <Grid item xs={6}>
                        <Typography fontWeight={500} variant='h6'>Number of Guest:</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ backgroundColor: 'table.tableRow1', padding: '5px 20px' }}>
                        <Typography fontWeight={600} variant='p' sx={{ width: '100%', }}>2 Adult 1 Child</Typography>
                    </Grid>
                </Grid>

                <Grid container item alignItems='center'>

                    <Grid item xs={6}>
                        <Typography fontWeight={500} variant='h6'>Contact Person:</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ backgroundColor: 'table.tableRow1', padding: '5px 20px' }}>
                        <Typography fontWeight={600} variant='p' sx={{ width: '100%', }}>Yousuf Abdullah</Typography>
                    </Grid>
                </Grid>


                <Grid container item alignItems='center'>

                    <Grid item xs={6}>
                        <Typography fontWeight={500} variant='h6'>Contact Number:</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ backgroundColor: 'table.tableRow1', padding: '5px 20px' }}>
                        <Typography fontWeight={600} variant='p' sx={{ width: '100%', }}>+9232334033</Typography>
                    </Grid>
                </Grid>
                <Grid container item>
                    <Button sx={{ backgroundColor: 'button.danger' }}>

                        Cancel Order
                    </Button>
                </Grid>

            </Grid>





        </Box >
    );
}

export default BookingSummaryCard;