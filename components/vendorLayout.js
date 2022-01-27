import React from 'react';
import { Box } from '@mui/material';
import VendorSidebar from './vendorSidebar';
import VendorHeader from './vendorHeader';

function VendorLayout({children}) {
    return (
        <Box sx={{display:'flex'}}>
            <VendorSidebar />
            <Box sx={{width:'100%' , backgroundColor:'background.secondary'}}>
            <VendorHeader/>
            {children} 
            </Box>
        </Box>
    );
}

export default VendorLayout;