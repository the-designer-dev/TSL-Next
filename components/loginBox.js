import React, { useState } from 'react';
import { Box, Checkbox, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import logo from '../assets/Main Logo.png'
import StyledTextField from '../styledComponents/styledTextField';
import StyledButton from '../styledComponents/styledButton';
import { API_URL } from '../config';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setToken, setUser } from '../redux/userSlice';
import {useRouter} from 'next/router'
function LoginBox(props) {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const dispatch = useDispatch()
    const router =  useRouter()
    function submit(e){
        e.preventDefault()

        axios.post(`${API_URL}/auth/local`, {
            identifier: email,
            password: password
          })
          .then(function (response) {
            sessionStorage.setItem('token' , response.data.jwt)
            dispatch(setToken(response.data.jwt))
            dispatch(setUser(response.data.user))
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <form onSubmit={e => submit(e)}>
        <Box sx={{backgroundColor:'background.main' , padding:'30px' , borderRadius:'10px' , maxWidth:'500px'}}>
            <Grid container justifyContent='center' spacing={2}>
            <Grid item xs={12}>
                <Box className='logo-wrapper' sx={{display:'flex' , justifyContent:'center'}}>
                <Image src={logo}/>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{textAlign:'center'}}>
                <Typography sx={{color:'text.primary'}} variant='h6'>Log in to your account</Typography>
            </Grid>
            <Grid container item xs={12} alignItems='center' spacing={1}>
                <Grid item xs={12}>
                    <Typography  sx={{color:'text.primary'}}  fontWeight={600} fontSize={18} variant='p'>Email:</Typography>
                </Grid>
                <Grid item xs={12}>
                <StyledTextField onChange={(e) => setEmail(e.target.value)}  required placeholder='Enter your email' fullWidth type={'email'}  />
                </Grid>
            </Grid>
            <Grid container item xs={12} alignItems='center' spacing={1}>
                <Grid item xs={12} >
                    <Typography  sx={{color:'text.primary'}}  fontWeight={600} fontSize={18} variant='p'>Password:</Typography>
                </Grid>
                <Grid item xs={12} >
                <StyledTextField required onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' fullWidth type={'password'} />
                </Grid>
            </Grid>
            <Grid container item xs={12} alignItems='center' spacing={1}>
                <Grid container item xs={12}   alignItems='center' >
                    <Grid item xs={1} sm={1}>
                        <Checkbox/> 
                    </Grid>
                    <Grid item sx={{textAlign: 'left'}} xs={12} sm={5}>
                        <Typography  sx={{color:'text.primary' }}  variant='p'>Remember my credentials</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                        <Link href=''><Typography variant='p' color='secondary.main'>Forgot Password?</Typography></Link>
                    </Grid>
                <Grid item xs={12}>
                    <StyledButton type='submit' fullWidth>Login </StyledButton>
                </Grid>
                <Grid item xs={12} sx={{textAlign:'center'}}>
                        <Typography variant='p' color='secondary.main'>Don't have an account? </Typography><Link href='./signup'><Typography variant='p' color='button.main'>Sign up</Typography></Link>
                    </Grid>
            </Grid>
            </Grid>
        </Box>
        </form>
    );
}

export default LoginBox;