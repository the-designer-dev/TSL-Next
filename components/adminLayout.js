import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import AdminHeader from './adminHeader';
import AdminSidebar from './adminSidebar';
import { useDispatch } from 'react-redux';
import { API_URL } from '../config';
import {useRouter} from 'next/router'
import { setUser } from '../redux/userSlice';
import axios from 'axios';
function AdminLayout({children}) {

    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(()=>{
        axios.get(`${API_URL}/users/me`,  {headers: {
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`}}).then(res =>
        {if(res.data.role.type === 'admin')
        {
            dispatch(setUser(res.data)) 
        }
        else{
        console.log('redirect')
         router.push('/login')} } ).catch((err) => 
        router.push('/login') 
        )

    } , [])

    return (
        <Box sx={{display:'flex'}}>
            <AdminSidebar/>
            <Box sx={{width:'100%' , backgroundColor:'background.secondary'}}>
            <AdminHeader/>
            {children} 
            </Box>
        </Box>
    );
}

export default AdminLayout;