import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material'
import PropTypes from 'prop-types';

function BookingSummaryCard({order_id, booking_start_date, booking_end_date, adult, child, contact_person, contact_number, order_status}) {

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
                        <Typography fontWeight={600} variant='p' sx={{ width: '100%', }}>{order_id}</Typography>
                    </Grid>
                </Grid>
                <Grid container item alignItems='center'>

                    <Grid item xs={6}>
                        <Typography fontWeight={500} variant='h6'>Booking Date:</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ backgroundColor: 'table.tableRow1', padding: '5px 20px' }}>
                        <Typography fontWeight={600} variant='p' sx={{ width: '100%', }}>{booking_start_date}</Typography>
                    </Grid>
                </Grid>
                <Grid container item alignItems='center'>

                    <Grid item xs={6}>
                        <Typography fontWeight={500} variant='h6'>Check in Date:</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ backgroundColor: 'table.tableRow1', padding: '5px 20px' }}>
                        <Typography fontWeight={600} variant='p' sx={{ width: '100%', }}>{booking_end_date}</Typography>
                    </Grid>
                </Grid>
                <Grid container item alignItems='center'>

                    <Grid item xs={6}>
                        <Typography fontWeight={500} variant='h6'>Number of Guest:</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ backgroundColor: 'table.tableRow1', padding: '5px 20px' }}>
                        <Typography fontWeight={600} variant='p' sx={{ width: '100%', }}>{adult} Adult {child} Child</Typography>
                    </Grid>
                </Grid>

                <Grid container item alignItems='center'>

                    <Grid item xs={6}>
                        <Typography fontWeight={500} variant='h6'>Contact Person:</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ backgroundColor: 'table.tableRow1', padding: '5px 20px' }}>
                        <Typography fontWeight={600} variant='p' sx={{ width: '100%', }}>{contact_person}</Typography>
                    </Grid>
                </Grid>


                <Grid container item alignItems='center'>

                    <Grid item xs={6}>
                        <Typography fontWeight={500} variant='h6'>Contact Number:</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ backgroundColor: 'table.tableRow1', padding: '5px 20px' }}>
                        <Typography fontWeight={600} variant='p' sx={{ width: '100%', }}>{contact_number}</Typography>
                    </Grid>
                </Grid>

                {order_status === "cancelled" ? <Grid container item>
                    <Button sx={{ backgroundColor: 'button.danger' }}>

                        Cancel Order
                    </Button>
                </Grid> : ''}

              

            </Grid>





        </Box >
    );
}

export default BookingSummaryCard;

BookingSummaryCard.propTypes = {
    order_id: PropTypes.number.isRequired,
    booking_start_date: PropTypes.string.isRequired,
    booking_end_date: PropTypes.string.isRequired,
    adult: PropTypes.number.isRequired,
    child: PropTypes.number.isRequired,
    contact_person: PropTypes.string.isRequired,
    contact_number: PropTypes.string.isRequired,
    order_status: PropTypes.string
}