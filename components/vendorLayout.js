import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import VendorSidebar from './vendorSidebar';
import VendorHeader from './vendorHeader';
import { useDispatch } from 'react-redux';
import { API_URL } from '../config';
import {useRouter} from 'next/router'
import { setToken, setUser } from '../redux/userSlice';
import axios from 'axios';
import useMediaQuery from '@mui/material/useMediaQuery';
function VendorLayout({children}) {

    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(()=>{
        axios.get(`${API_URL}/users/me`,  {headers: {
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`}}).then(res =>
        {if(res.data.role.type === 'vendor')
        {
            console.log('not redirect')
            dispatch(setUser(res.data)) 
            dispatch(setToken(sessionStorage.getItem('token'))) 
        }
        else{
        console.log('redirect')
         router.push('/login')} } ).catch((err) => 
        router.push('/login') 
        )

    } , [])

    const device1360 = useMediaQuery('(max-width:1366px)');

    return (
        <div style={{display:'flex', flexDirection:"row", justifyContent:`center`, width:"100%"}}>
            <VendorSidebar />
            <Box sx={{width:'100%' , backgroundColor:'background.secondary'}}>
            <VendorHeader/>
            {children} 
            </Box>
        </div>
    );
}

export default VendorLayout;