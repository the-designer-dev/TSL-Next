import { Box, Grid , Typography , InputAdornment} from '@mui/material';
import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch , useSelector} from 'react-redux';
import { setRefundablePolicy,setFreeCancellationDays,setAppliedForDays,setCancelledWithinDays,setNoShow } from '../redux/addRoom';
import StyledTextField from '../styledComponents/styledTextField'
function PaymentPolicies(props) {
    const dispatch =  useDispatch()
    const refundablePolicy =  useSelector(state =>  state.addRoom.refundablePolicy)
    const freeCancellationDays =  useSelector(state =>  state.addRoom.freeCancellationDays)

    const [freeCancellation, setFreeCancellation] = useState(true);
    const [cancellationFee, setCancellationFee] = useState(false);
    const [noShow, setNoShowState] = useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
    return (
        <Box>
            <Grid container spacing={1}>
            <Grid item xs={12} ><Typography variant='p'>What kind of cancellation policy do you have?</Typography></Grid>
            {/* <Grid item xs={6} >
            <FormControlLabel  control={
                <Checkbox
    checked={freeCancellation}
    onChange={(e) => {setFreeCancellation(e.target.checked) }}
    inputProps={{ 'aria-label': 'controlled' }}/>}
    label='Free Cancellation'/>
      </Grid> */}
            {/* <Grid item xs={6} >
            <FormControlLabel  control={
                <Checkbox
      checked={cancellationFee}
      onChange={(e) => {setCancellationFee(e.target.checked)}}
      inputProps={{ 'aria-label': 'controlled' }}/>}
      label='Cancellation Fee'/>
      </Grid> */}
      {freeCancellation?
      <Grid item xs={12}>
          <Typography variant='p'>Offer free cancellation before </Typography>
          <StyledTextField size='small' onChange={(e) => {dispatch(setFreeCancellationDays(e.target.value)) ; dispatch(setCancelledWithinDays(e.target.value))}} />
          <Typography variant='p'> days</Typography>
      </Grid> :''}

          <Grid item xs={12}>
          <Typography variant='p'>Cancellation fee is applied for </Typography>
          <StyledTextField type='number' sx={{'& .MuiOutlinedInput-root' :{maxWidth:'70px'}}} onChange={(e) => dispatch(setAppliedForDays(e.target.value))} size='small'/>
          <Typography variant='p'> days if cancelled within </Typography>
          {!freeCancellation? <StyledTextField type='number' sx={{'& .MuiOutlinedInput-root' :{maxWidth:'70px'}}} onChange={(e) => {dispatch(setCancelledWithinDays(e.target.value))}} size='small'/> : <Typography variant='p'>{freeCancellationDays}</Typography>}
          <Typography variant='p'> days</Typography>
      </Grid>

      <Grid item xs={12} ><Typography variant='p'>Do you have a No-Show policy?</Typography></Grid>
            <Grid item xs={6} >
            <FormControlLabel  control={
                <Checkbox
      checked={noShow === true}
      onChange={(e) => setNoShowState(true)}
      inputProps={{ 'aria-label': 'controlled' }}/>}
      label='Yes'
      />
      </Grid>
            <Grid item xs={6} >
            <FormControlLabel  control={
                <Checkbox
    checked={noShow ===  false}
    onChange={(e) => setNoShowState(false)}
      inputProps={{ 'aria-label': 'controlled' }}/>}
      label='No'
      />
      </Grid>
      {noShow &&
      <Grid item xs={12}>
          <Typography variant='p'>I will charge </Typography>
          <StyledTextField onChange={(e) =>  dispatch(setNoShow(e.target.value))} sx={{'& .MuiOutlinedInput-root' :{maxWidth:'100px'},'& .MuiInputBase-root':{padding:'0px' ,'& .MuiInputAdornment-positionStart':{backgroundColor:'button.main'  ,maxHeight:'none' , borderRadius:'4px 0px 0px 4px' , padding:'0px 10px' ,'& .MuiTypography-root':{color:"#FFF"}},'& .MuiInputAdornment-positionEnd':{backgroundColor:'button.main' , height:'40px' ,maxHeight:'none' , borderRadius:'0px 4px 4px 0px' , padding:'0px 10px' ,'& .MuiTypography-root':{color:"#FFF"}}}}} InputProps={{ endAdornment: <InputAdornment  position="end">%</InputAdornment> }} type='number' size='small'/>
          <Typography variant='p'> of the bill in case of no show</Typography>
      </Grid>}

      <Grid item xs={12} ><Typography variant='p'>Do you offer a Non-Refundable Price?</Typography></Grid>
            <Grid item xs={6} >
            <FormControlLabel  control={
                <Checkbox
      checked={refundablePolicy}
      onChange={(e) =>  dispatch(setRefundablePolicy(e.target.checked))}
      inputProps={{ 'aria-label': 'controlled' }}/>}
      label='Yes'
      />
      </Grid>
      </Grid>
        </Box>
    );
}

export default PaymentPolicies;