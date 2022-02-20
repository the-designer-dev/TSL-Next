import { Box, Grid, Typography } from '@mui/material';
import FormWrapper from '../styledComponents/formWrapper';
import React from 'react';
import StyledTextField from '../styledComponents/styledTextField';
import dynamic from 'next/dynamic';
import Dropfile from './dropzone';
import { nextStep, nextStep2, prevStep } from '../redux/formSlice';
import {InputAdornment} from '@mui/material'
import {  setRoomName, setRoomDescription, setRoomQuantity } from '../redux/addRoom';
const MUIRichTextEditor = dynamic(() => import('mui-rte'), {ssr: false });
import StyledButton from '../styledComponents/styledButton';
import {useDispatch , useSelector} from 'react-redux';
import Capacity from './capacity';
import {setRefundableRates , setNonRefundableRates} from '../redux/addRoom'
import DateRange from './dateRange';
import RoomType from './roomType';
import RoomFeatures from './roomFeatures';
function AddRoomForm(props) {
    const dispatch = useDispatch();
   const room = useSelector(state => state.addRoom) 
   async function submit(e){
    e.preventDefault()
    const mod = await import('./dropzone')
    if(mod.roomImgs.length > 0){
        props.hotel?
        dispatch(nextStep2())
        :
    dispatch(nextStep())
    }
 else{alert('fill all required fields')}
}

    return (
        <FormWrapper>
            <form onSubmit={submit}>
                <Grid container spacing={3}>
                    <Grid container item  spacing={1}>
                    <Grid item xs={12}><Typography variant='h6'>Add your hotel's rooms</Typography></Grid>
                    </Grid>
                    <Grid container item  spacing={1}>
                    <Grid item xs={12}><Typography fontSize={18} variant='p'>Room Details</Typography></Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                    <Grid item xs={12} sm={4}><Typography variant='p'>Room name</Typography></Grid>
                    <Grid item xs={12} sm={8}><StyledTextField required value={room.roomName} fullWidth onChange={(e) => dispatch(setRoomName(e.target.value))} placeholder='Enter Name' /></Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                    <Grid item xs={12} ><Typography  variant='p'>Room Description:</Typography></Grid>
                    <Grid item xs={12} ><MUIRichTextEditor required  onChange={(e) => dispatch(setRoomDescription(e.getCurrentContent().getPlainText()))} label="Start typing..." /></Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                    <Grid item xs={12} ><Typography fontSize={18} fontWeight={600} variant='p'>Room Images:</Typography></Grid>
                    <Grid item xs={12} ><Dropfile hotel={false}/></Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                    <Grid item xs={12} ><Typography fontWeight={600} fontSize={18} variant='p'>Capacity</Typography></Grid>
                    <Grid item xs={12} ><Capacity/></Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                    <Grid item xs={12} ><Typography fontWeight={600} fontSize={18} variant='p'>Rates For Room</Typography></Grid>
                    <Grid item xs={12} sm={6}><Typography variant='p'>Refundable Rates</Typography></Grid>
                    <Grid item xs={12} sm={6} ><StyledTextField required value={room.refundableRates} onChange={(e) => dispatch(setRefundableRates(e.target.value))} sx={{'& .MuiInputBase-root':{padding:'0px' ,'& .MuiInputAdornment-positionStart':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'4px 0px 0px 4px' , padding:'0px 10px' ,'& .MuiTypography-root':{color:"#FFF"}},'& .MuiInputAdornment-positionEnd':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'0px 4px 4px 0px' , padding:'0px 10px' ,'& .MuiTypography-root':{color:"#FFF"}}}}}  InputProps={{startAdornment: <InputAdornment position="start">PKR</InputAdornment> , endAdornment: <InputAdornment  position="end">Per Person</InputAdornment> }} fullWidth/></Grid>
                    <Grid item xs={12} sm={6}><Typography variant='p'>Non-Refundable Rates</Typography></Grid>
                    <Grid item xs={12} sm={6} ><StyledTextField required value={room.nonRefundableRates} onChange={(e) => dispatch(setNonRefundableRates(e.target.value))} sx={{'& .MuiInputBase-root':{padding:'0px' ,'& .MuiInputAdornment-positionStart':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'4px 0px 0px 4px' , padding:'0px 10px' ,'& .MuiTypography-root':{color:"#FFF"}},'& .MuiInputAdornment-positionEnd':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'0px 4px 4px 0px' , padding:'0px 10px' ,'& .MuiTypography-root':{color:"#FFF"}}}}}  InputProps={{startAdornment: <InputAdornment position="start">PKR</InputAdornment> , endAdornment: <InputAdornment  position="end">Per Person</InputAdornment> }} fullWidth/></Grid>
                    </Grid>
                    <Grid container item>
                        <Grid item>
                        <Grid item xs={12} ><Typography fontSize={18} fontWeight={600} variant='p'>Set Pricing For Specific Dates:</Typography></Grid>
                        </Grid>
                        <Grid item>
                        <DateRange/>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                        <Grid item xs={12} ><Typography fontSize={18} fontWeight={600} variant='p'>Select Room Type:</Typography></Grid>
                        <Grid item xs={12}>
                            <RoomType/>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                    <Grid item xs={12} sm={4}><Typography variant='p'>Room Quantity</Typography></Grid>
                    <Grid item xs={12} sm={8}><StyledTextField required fullWidth value={room.roomQuantity} onChange={(e) => dispatch(setRoomQuantity(e.target.value))} type='number' placeholder='Enter Quantity' /></Grid>
                    </Grid>
                    
                    <Grid container item spacing={1}>
                    <Grid item xs={12} ><Typography fontSize={18} fontWeight={600} variant='p'>Tell us more about the features of your room:</Typography></Grid>
                    <Grid item xs={12}>
                        <RoomFeatures/>
                    </Grid>
                    </Grid>

                    <Grid container item xs={12} spacing={2} justifyContent='flex-end'>
                        {props.hotel?'':<Grid item><StyledButton type='button' onClick={() => dispatch(prevStep())}>Previous</StyledButton></Grid>}
                        <Grid item><StyledButton type='submit'>Next</StyledButton></Grid>
                    </Grid>

                </Grid>
            </form>
        </FormWrapper>
    );
}
export default AddRoomForm;