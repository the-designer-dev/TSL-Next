import { Box, Grid, Typography } from '@mui/material';
import FormWrapper from '../styledComponents/formWrapper';
import React , {useEffect} from 'react';
import StyledTextField from '../styledComponents/styledTextField';
import LocationPicker from './locationPicker';
import dynamic from 'next/dynamic';
import Dropfile from './dropzone';
import Features from './features';
import { nextStep, prevStep } from '../redux/formSlice';
import { convertToRaw , convertFromHTML, ContentState } from 'draft-js';
import { convertToHTML } from 'draft-convert';import {setName ,setCity,setAddress,setDescription} from '../redux/addHotel'
import StyledButton from '../styledComponents/styledButton';
const MUIRichTextEditor = dynamic(() => import('mui-rte'), {ssr: false });
import {useDispatch,useSelector} from 'react-redux';

function AddHotelForm(props) {
   const coordinates = useSelector(state => state.addHotel.coordinates)
   const addHotel = useSelector(state => state.addHotel)
   const dispatch = useDispatch();
    async function submit(e){
       e.preventDefault()
       const mod = await import('./dropzone')
       if(mod.hotelImgs.length > 0 && Object.keys(coordinates[0]).length >0 ){
    dispatch(nextStep())
}
    else{alert('fill all required fields')}
   }

   
const SSR = typeof window === 'undefined'
var contentHTML;
var state;
var content;
useEffect(() => {
    !SSR?contentHTML = convertFromHTML(addHotel.description):''    
    !SSR?state = ContentState.createFromBlockArray(contentHTML.contentBlocks, contentHTML.entityMap):''
    !SSR?content = JSON.stringify(convertToRaw(state)):''
} , [])
const onEditorChange = event => {
    const plainText = convertToHTML(event.getCurrentContent()) 
    dispatch(setDescription(plainText))
}
    return (
        <FormWrapper>
            <form onSubmit={submit}>
                <Grid container spacing={3}>
                    <Grid container item  spacing={1}>
                    <Grid item xs={12}><Typography variant='h6'>Tell us more about your hotel</Typography></Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                    <Grid item xs={12} sm={4}><Typography variant='p'>Name of your hotel</Typography></Grid>
                    <Grid item xs={12} sm={8}><StyledTextField required value={addHotel.name} fullWidth onChange={(e) => dispatch(setName(e.currentTarget.value))} placeholder='Enter Name' /></Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                    <Grid item xs={12} sm={4}><Typography variant='p'>Which city is your hotel located in?</Typography></Grid>
                    <Grid item xs={12} sm={8}><StyledTextField required value={addHotel.city} fullWidth onChange={(e) => dispatch(setCity(e.currentTarget.value))} placeholder='Enter City' /></Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                    <Grid item xs={12} sm={4}><Typography variant='p'>Address</Typography></Grid>
                    <Grid item xs={12} sm={8}><StyledTextField required value={addHotel.address} fullWidth onChange={(e) => dispatch(setAddress(e.currentTarget.value))} placeholder='Enter Address' /></Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                    <Grid item xs={12} ><Typography fontSize={18} fontWeight={600} variant='p'>Place a pin to locate your hotel</Typography></Grid>
                    <Grid item xs={12} ><LocationPicker/></Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                    <Grid item xs={12} ><Typography fontSize={18} fontWeight={600} variant='p'>Hotel Description:</Typography></Grid>
                    <Grid item xs={12} ><MUIRichTextEditor required  defaultValue={content} onChange={onEditorChange} label="Start typing..." /></Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                    <Grid item xs={12} ><Typography fontSize={18} fontWeight={600} variant='p'>Hotel Images:</Typography></Grid>
                    <Grid item xs={12} ><Dropfile hotel={true}/></Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                    <Grid item xs={12} ><Typography fontSize={18} fontWeight={600} variant='p'>Tell us more about the features of your hotel:</Typography></Grid>
                    <Grid item xs={12} ><Features/></Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={2} justifyContent='flex-end'>
                        <Grid item><StyledButton type='button' onClick={() => dispatch(prevStep())}>Previous</StyledButton></Grid>
                        <Grid item><StyledButton type='submit' >Next</StyledButton></Grid>
                    </Grid>
                </Grid>
            </form>
        </FormWrapper>
    );
}
export default AddHotelForm;