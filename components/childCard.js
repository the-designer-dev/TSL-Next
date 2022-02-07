import React from 'react';
import {Box, Grid, TextField, Typography} from '@mui/material'
import StyledTextField from '../styledComponents/styledTextField';
import StyledButton from '../styledComponents/styledButton';
import { DatePicker } from '@mui/lab';
import { useSelector , useDispatch } from 'react-redux';
import { setChildInfo } from '../redux/bookingSlice';


function ChildCard(props) {
    const [checked, setChecked] = React.useState(true);
    const dispatch = useDispatch()
    const [dob, setDOB] = React.useState(null);
    const [name , setName] = React.useState('')
    const [saved , setSaved] = React.useState(false)
    const child = useSelector(state => state.booking.childInfo)
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  function submitForm(e){
    e.preventDefault()
    var copyChildinfo = child.map((el) => el)
    copyChildinfo[props.num] = {name: name, dob : dob}
    dispatch(setChildInfo(copyChildinfo))
    setSaved(true)
  }

  React.useEffect(()=> {

    setSaved(false)

  } ,[dob,name])

    return (
        <Box sx={{backgroundColor:'background.main' , width:'100%' , height:'100%' , borderRadius:'5px'}}>
            <form onSubmit={(e) => submitForm(e)}>
            <Box sx={{textAlign:'center' , padding:'15px 15px 0px 15px'}}><Typography  variant='p'>Child {props.num +1}</Typography></Box>
            <Box sx={{textAlign:'center' }}>{saved?<Typography fontSize={12} sx={{color:'button.main'}} variant='p'>Saved</Typography>:<Typography fontSize={12} sx={{color:'#FF002C'}} variant='p'>Unsaved Changes</Typography>}</Box>
            <Grid sx={{padding:'15px'}} container spacing={1}>
                <Grid container item>
                        <Grid item xs={12}>
                            <Typography fontWeight={400} variant='p'>Name</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <StyledTextField required onChange={e => setName(e.target.value)} placeholder='Enter Name' fullWidth size='small'/>
                        </Grid>
                </Grid>
                <Grid container item>
                    <Grid item xs={12}>
                        <Typography fontWeight={400} variant='p'>Date of Birth</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <DatePicker value={dob} required onChange={(newValue) => { setDOB(newValue)   }} renderInput={(params) => <TextField required sx={{'& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{color:'#000'},'& .MuiInputAdornment-root':{'& .MuiButtonBase-root':{'& .MuiSvgIcon-root':{color:'button.main'}}}} , backgroundColor:'#FFF', borderRadius:'5px' }} size="small" variant="outlined" placeholder="MM/DD/YYYY" {...params} />}/>       
                    </Grid>
                    </Grid>
                
                <Grid container item  sx={{textAlign:'center'}}>
                    <Grid item xs={12}>
                        <Box sx={{height:'100%'}}>
                        <StyledButton type='submit'>Save</StyledButton>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            </form>
        </Box>
    );
}

export default ChildCard;