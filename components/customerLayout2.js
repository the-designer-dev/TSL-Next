import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import CustomerSidebar from './customerSidebar';
import CustomerHeader from './customerHeader';
import StyledBox from '../styledComponents/styledInnerBox';
import axios from 'axios';
import { API_URL } from '../config';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setUser, setToken } from '../redux/userSlice';

function CustomerLayout2({ children }) {
    const dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => {
        axios.get(`${API_URL}/users/me`, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        }).then(res => {
            dispatch(setToken(sessionStorage.getItem('token')))
            dispatch(setUser(res.data))
        }).catch((err) => { router.push('/'); console.log('caught') }
        )

    }, [])
    return (
        <Box sx={{ backgroundColor: 'background.secondary', width: "100%" }}>
            {/* <Box sx={{backgroundColor:'background.main' , height:'77px' , position:'fixed' , top:'0' , width:'100%'}}></Box> */}
            <Box sx={{ display: 'flex' }}>
                <CustomerSidebar />
                <Box sx={{ width: '100%', height: '100%', backgroundColor: 'background.secondary' }}>
                    <CustomerHeader />
                    {children}
                </Box>
            </Box>
        </Box>
    );
}

export default CustomerLayout2;