import React from 'react';
import { Box, Grid, Typography, Checkbox } from '@mui/material'
import PropTypes from 'prop-types';

function GuestCard({Person_count, name, lead_guest_cnic, child_dob, lead_guest, lead_guest_phone}) {

    

    return (
        <Box sx={{ backgroundColor: 'table.tableRow1', width: '100%', height: '100%', borderRadius: '10px', padding: '10px 30px', margin: '0px 0px 30px 0px', minHeight:"300px"}}>
            <Grid>
                <Grid>
                    <Typography fontWeight={600} variant='h6'>{Person_count}</Typography>
                </Grid>

                <Grid container item alignItems='center' sx={{ margin: '10px 0px' }}>

                    <Grid item xs={4}>
                        <Typography fontWeight={400} variant='p'>Name:</Typography>
                    </Grid>
                    <Grid item xs={8} sx={{ backgroundColor: 'background.main', padding: '5px 10px' }}>
                        <Typography fontWeight={600} variant='p' sx={{ width: '100%', }}>{name}</Typography>
                    </Grid>
                </Grid>
                {lead_guest_cnic ? <Grid container item alignItems='center' sx={{ margin: '10px 0px' }}>

<Grid item xs={4}>
    <Typography fontWeight={400} variant='p'>CNIC:</Typography>
</Grid>
<Grid item xs={8} sx={{ backgroundColor: 'background.main', padding: '5px 10px' }}>
    <Typography fontWeight={600} variant='p' sx={{ width: '100%', maxWidth:"100px"}}>{lead_guest_cnic}</Typography>
</Grid>
</Grid> : ''}
                
                {child_dob ?  <Grid container item alignItems='center' sx={{ margin: '10px 0px' }}>

<Grid item xs={4}>
    <Typography fontWeight={400} variant='p'>DOB:</Typography>
</Grid>
<Grid item xs={8} sx={{ backgroundColor: 'background.main', padding: '5px 10px' }}>
    <Typography fontWeight={600} variant='p' sx={{ width: '100%', }}>{child_dob}</Typography>
</Grid>
</Grid> : ''}
               

                {!lead_guest ? '' : 
                <Grid container item alignItems='center' sx={{ margin: '10px 0px' }}>

                <Grid item xs={4}>
                    <Typography fontWeight={400} variant='p'>Lead Guest:</Typography>
                </Grid>
                <Grid item xs={6} sx={{ padding: '5px 0px' }}>
                    <Checkbox disabled checked={lead_guest} />
                </Grid>
                </Grid>
                }
               

                {lead_guest_phone ? <Grid container item alignItems='center' sx={{ margin: '10px 0px' }}>

<Grid item xs={4}>
    <Typography fontWeight={400} variant='p'>Contact:</Typography>
</Grid>
<Grid item xs={8} sx={{ backgroundColor: 'background.main', padding: '5px 10px' }}>
    <Typography fontWeight={600} variant='p' sx={{ width: '100%', }}>{lead_guest_phone}</Typography>
</Grid>
</Grid> : ""}
                
            </Grid>


        </Box >
    );
}

export default GuestCard;

GuestCard.propTypes = {
    Person_count: PropTypes.string,
    name: PropTypes.string,
    lead_guest_cnic: PropTypes.string,
    child_dob: PropTypes.string,
    lead_guest: PropTypes.bool,
    lead_guest_phone: PropTypes.string,
}