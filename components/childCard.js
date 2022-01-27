import React from 'react';
import {Box, Grid, TextField, Typography} from '@mui/material'
import StyledTextField from '../styledComponents/styledTextField';
import Checkbox from '@mui/material/Checkbox';
import StyledButton from '../styledComponents/styledButton';
import { DatePicker } from '@mui/lab';


function ChildCard(props) {
    const [checked, setChecked] = React.useState(true);
    const [dob, setDOB] = React.useState(null);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

    return (
        <Box sx={{backgroundColor:'background.main' , width:'100%' , height:'100%' , borderRadius:'5px'}}>
            <Box sx={{textAlign:'center' , padding:'15px'}}><Typography  variant='p'>Child {props.num}</Typography></Box>
            <Grid sx={{padding:'15px'}} container spacing={1}>
                <Grid container item>
                        <Grid item xs={12}>
                            <Typography fontWeight={400} variant='p'>Name</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <StyledTextField fullWidth size='small'/>
                        </Grid>
                </Grid>
                <Grid container item>
                    <Grid item xs={12}>
                        <Typography fontWeight={400} variant='p'>Date of Birth</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <DatePicker value={dob} onChange={(newValue) => { setDOB(newValue)   }} renderInput={(params) => <TextField required sx={{'& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{color:'#000'},'& .MuiInputAdornment-root':{'& .MuiButtonBase-root':{'& .MuiSvgIcon-root':{color:'button.main'}}}} , backgroundColor:'#FFF', borderRadius:'5px' }} size="small" variant="outlined" placeholder="MM/DD/YYYY" {...params} />}/>       
                    </Grid>
                    </Grid>
                
                <Grid container item  sx={{textAlign:'center'}}>
                    <Grid item xs={12}>
                        <Box sx={{height:'100%'}}>
                        <StyledButton>Save</StyledButton>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ChildCard;