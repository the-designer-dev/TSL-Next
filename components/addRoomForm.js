import { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import FormWrapper from '../styledComponents/formWrapper';
import React from 'react';
import StyledTextField from '../styledComponents/styledTextField';
import LocationPicker from './locationPicker';
import dynamic from 'next/dynamic';
import Dropfile from './dropzone';
import Features from './features';
import {setName ,setCity,setAddress,setDescription,setImages,setCheckIn,setCheckOut,setDaysToRefund,setFaqs} from '../redux/addHotel'
const MUIRichTextEditor = dynamic(() => import('mui-rte'), {ssr: false });
import {useDispatch} from 'react-redux';
import Capacity from './capacity';
function AddRoomForm(props) {
   const dispatch = useDispatch();
    return (
        <FormWrapper>
            <form>
                <Grid container spacing={3}>
                    <Grid container item  spacing={1}>
                    <Grid item xs={12}><Typography variant='h6'>Add you hotel's rooms</Typography></Grid>
                    </Grid>
                    <Grid container item  spacing={1}>
                    <Grid item xs={12}><Typography fontSize={18} variant='p'>Room Details</Typography></Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                    <Grid item xs={12} sm={4}><Typography variant='p'>Room name</Typography></Grid>
                    <Grid item xs={12} sm={8}><StyledTextField fullWidth onChange={(e) => dispatch(setName(e.currentTarget.value))} placeholder='Enter Name' /></Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                    <Grid item xs={12} ><Typography  variant='p'>Room Description:</Typography></Grid>
                    <Grid item xs={12} ><MUIRichTextEditor onChange={(e) => dispatch(setDescription(e.getCurrentContent().getPlainText()))} label="Start typing..." /></Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                    <Grid item xs={12} ><Typography fontSize={18} fontWeight={600} variant='p'>Room Images:</Typography></Grid>
                    <Grid item xs={12} ><Dropfile/></Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                    <Grid item xs={12} ><Typography fontWeight={600} fontSize={18} variant='p'>Capacity</Typography></Grid>
                    <Grid item xs={12} ><Capacity/></Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                    <Grid item xs={12} sm={4}><Typography variant='p'>Address</Typography></Grid>
                    <Grid item xs={12} sm={8}><StyledTextField fullWidth onChange={(e) => dispatch(setAddress(e.currentTarget.value))} placeholder='Enter Address' /></Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                    <Grid item xs={12} ><Typography fontSize={18} fontWeight={600} variant='p'>Place a pin to locate your hotel</Typography></Grid>
                    <Grid item xs={12} ><LocationPicker/></Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                    <Grid item xs={12} ><Typography fontSize={18} fontWeight={600} variant='p'>Tell us more about the features of your hotel:</Typography></Grid>
                    <Grid item xs={12} ><Features/></Grid>
                    </Grid>
                </Grid>
            </form>
        </FormWrapper>
    );
}

export default AddRoomForm;