import { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import FormWrapper from '../styledComponents/formWrapper';
import React from 'react';
import StyledTextField from '../styledComponents/styledTextField';
import LocationPicker from './locationPicker';
import dynamic from 'next/dynamic';
const MUIRichTextEditor = dynamic(() => import('mui-rte'), {ssr: false });

function AddHotelForm(props) {
    useEffect(()=>{
        
    })
    return (
        <FormWrapper>
            <form>
                <Grid container spacing={3}>
                    <Grid container item  spacing={1}>
                    <Grid item xs={12}><Typography variant='h6'>Tell us more about your hotel</Typography></Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                    <Grid item xs={12} sm={6}><Typography variant='p'>Name of your hotel</Typography></Grid>
                    <Grid item xs={12} sm={6}><StyledTextField fullWidth placeholder='Enter Name' /></Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                    <Grid item xs={12} sm={6}><Typography variant='p'>Which city is your hotel located in?</Typography></Grid>
                    <Grid item xs={12} sm={6}><StyledTextField fullWidth placeholder='Enter City' /></Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                    <Grid item xs={12} sm={6}><Typography variant='p'>Address</Typography></Grid>
                    <Grid item xs={12} sm={6}><StyledTextField fullWidth placeholder='Enter Address' /></Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                    <Grid item xs={12} ><Typography fontWeight={600} variant='p'>Place a pin to locate your hotel</Typography></Grid>
                    <Grid item xs={12} ><LocationPicker/></Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                    <Grid item xs={12} ><Typography fontWeight={600} variant='p'>Hotel Description:</Typography></Grid>
                    <Grid item xs={12} ><MUIRichTextEditor label="Start typing..." /></Grid>
                    </Grid>
                </Grid>
            </form>
        </FormWrapper>
    );
}

export default AddHotelForm;