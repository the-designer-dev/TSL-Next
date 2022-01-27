import React from 'react';
import {Box, Grid, TextField, Typography} from '@mui/material'
import StyledTextField from '../styledComponents/styledTextField';
import Checkbox from '@mui/material/Checkbox';
import StyledButton from '../styledComponents/styledButton';
import { DatePicker } from '@mui/lab';

function AdultCard(props) {
    const [checked, setChecked] = React.useState(true);
    const [dob, setDOB] = React.useState(null);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

    return (
        <Box sx={{backgroundColor:'background.main' , width:'100%' , borderRadius:'5px'}}>
            <Box sx={{textAlign:'center' , padding:'15px'}}><Typography  variant='p'>Adult {props.num}</Typography></Box>
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
                            <Typography fontWeight={400} variant='p'>CNIC/Passport</Typography>
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
                    <DatePicker value={dob} onChange={(newValue) => { setDOB(newValue)   }} renderInput={(params) => <TextField required sx={{'& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{color:'#000'},'& .MuiInputAdornment-root':{'& .MuiButtonBase-root':{'& .MuiSvgIcon-root':{color:'button.main'}}}} , backgroundColor:'#FFF', borderRadius:'5px' }} size="small" variant="outlined" placeholder="MM/DD/YYYY" {...params} />}/>                    </Grid>
                </Grid>
                <Grid container item>
                    <Grid item xs={12}>
                        <Typography fontWeight={400} variant='p'>Is this a lead guest?</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </Grid>
                </Grid>
                <Grid container item>
                    <Grid item xs={12}>
                        <Typography fontWeight={400} variant='p'>Phone</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <StyledTextField fullWidth size='small'/>
                    </Grid>
                </Grid>
                <Grid container item sx={{textAlign:'center'}}>
                    <Grid item xs={12}>
                        <StyledButton>Save</StyledButton>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AdultCard;