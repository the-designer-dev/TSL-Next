import React from 'react';
import { Box } from '@mui/material';
import CustomerSidebar from './customerSidebar';
import CustomerHeader from './customerHeader';

function CustomerLayout({children}) {
    return (
        <Box>
        <Box sx={{display:'flex'}}>
            <CustomerSidebar/>

            <Box sx={{width:'100%' , height:'100%' , backgroundColor:'background.secondary'}}>
            <CustomerHeader/>
            {children} 
            </Box>
        </Box>
        </Box>
    );
}

export default CustomerLayout;