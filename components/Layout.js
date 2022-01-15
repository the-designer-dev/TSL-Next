import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';

function Layout({children}) {
    return (
        <Box sx={{display:'flex'}}>
            <Sidebar/>
            <Box sx={{width:'100%' , backgroundColor:'background.secondary'}}>
            <Header/>
            {children} 
            </Box>
        </Box>
    );
}

export default Layout;