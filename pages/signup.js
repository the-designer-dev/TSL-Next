import { Box, Checkbox, Grid, Typography , TextField , Radio ,RadioGroup , FormControlLabel ,FormControl ,FormLabel   } from '@mui/material';
import { DatePicker } from '@mui/lab';
import Image from 'next/image';
import React, { useState } from 'react';
import StyledContainer from '../styledComponents/styledContainer';
import logo from '../assets/Main Logo.png'
import StyledTextField from '../styledComponents/styledTextField';
import StyledButton from '../styledComponents/styledButton';
import Link from 'next/link';
function signup(props) {
    const [username , setUsername] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')
    const [phoneNumber , setPhoneNumber] = useState(0)
    const [dob , setDob] = useState(null)
    const [gender , setGender] = useState(null)
    return (
        <StyledContainer square={true} sx={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
            <form>
            <Box sx={{backgroundColor:'background.main' , padding:'30px' , borderRadius:'10px' , maxWidth:'500px'}}>
                <Grid container justifyContent='center' spacing={2}>
                <Grid item xs={12}>
                    <Box className='logo-wrapper' sx={{display:'flex' , justifyContent:'center'}}>
                    <Image src={logo}/>
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{textAlign:'center'}}>
                    <Typography variant='h6'>Create An Account</Typography>
                </Grid>
               
                <Grid container item xs={12} alignItems='center' spacing={1}>
                    <Grid item xs={12}>
                        <Typography fontWeight={600} fontSize={18} variant='p'>Username:</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <StyledTextField required onChange={e => setUsername(e.target.value)} placeholder='Enter your username' fullWidth type='text'  />
                    </Grid>
                </Grid>
              
               
                <Grid container item xs={12} alignItems='center' spacing={1}>
                    <Grid item xs={12}>
                        <Typography fontWeight={600} fontSize={18} variant='p'>Email:</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <StyledTextField required onChange={e => setEmail(e.target.value)} placeholder='Enter your email' fullWidth type={'email'}  />
                    </Grid>
                </Grid>
              
               
                <Grid container item xs={12} alignItems='center' spacing={1}>
                    <Grid item xs={12}>
                        <Typography fontWeight={600} fontSize={18} variant='p'>Date of Birth:</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <DatePicker value={dob} onChange={(newValue) => { setDob(newValue)   }} renderInput={(params) => <TextField required sx={{'& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{color:'#000'},'& .MuiInputAdornment-root':{'& .MuiButtonBase-root':{'& .MuiSvgIcon-root':{color:'button.main'}}}} , backgroundColor:'#FFF', borderRadius:'5px' }} fullWidth variant="outlined" placeholder="MM/DD/YYYY" {...params} />}/>                  
                    </Grid>
                </Grid>
              
               
                <Grid container item xs={12} alignItems='center' spacing={1}>
                    <Grid item xs={12}>
                        <Typography fontWeight={600} fontSize={18} variant='p'>Phone Number:</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <StyledTextField required onChange={e => setPhoneNumber(e.target.value)} placeholder='Enter your phone number' fullWidth type={'number'}  />
                    </Grid>
                </Grid>
                <Grid container item xs={12} alignItems='center' spacing={1}>
                    <Grid item xs={12}>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            value={gender}
                            required
                            onChange={e => setGender(e.target.value)}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                        </FormControl>                    
                    </Grid>
                </Grid>
              
                <Grid container item xs={12} alignItems='center' spacing={1}>
                    <Grid item xs={12} >
                        <Typography fontWeight={600} fontSize={18} variant='p'>Password:</Typography>
                    </Grid>
                    <Grid item xs={12} >
                    <StyledTextField required onChange={e => setPassword(e.target.value)} placeholder='Enter your password' fullWidth type={'password'} />
                    </Grid>
                </Grid>
                <Grid container item xs={12} alignItems='center' spacing={1}>
                    <Grid item xs={12} >
                        <Typography fontWeight={600} fontSize={18} variant='p'>Confirm Password:</Typography>
                    </Grid>
                    <Grid item xs={12} >
                    <StyledTextField required onChange={e => setConfirmPassword(e.target.value)} placeholder='Enter your password' fullWidth type={'password'} />
                    </Grid>
                </Grid>

                <Grid container item xs={12} alignItems='center' spacing={1}>
                    <Grid item xs={12}>
                        <StyledButton fullWidth type='submit'>Sign up</StyledButton>
                    </Grid>
                    <Grid item xs={12} sx={{textAlign:'center'}}>
                            <Typography variant='p' color='secondary.main'>Already have an account? </Typography><Link href='./login'><Typography variant='p' color='button.main'>Log in</Typography></Link>
                        </Grid>
                </Grid>
                </Grid>
            </Box>
            </form>
        </StyledContainer>
    );
}

export default signup;