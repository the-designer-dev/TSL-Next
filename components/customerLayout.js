import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import CustomerSidebar from './customerSidebar';
import CustomerHeader from './customerHeader';
import StyledBox from '../styledComponents/styledInnerBox';

function CustomerLayout({children}) {

    return (
        <Box sx={{backgroundColor:'background.secondary'}}>
            <Box sx={{backgroundColor:'background.main' , height:'77px' , position:'fixed' , top:'0' , width:'100%'}}></Box>
        <StyledBox>
        <Box sx={{display:'flex'}}>
            <CustomerSidebar/>

            <Box sx={{width:'100%' , height:'100%' , backgroundColor:'background.secondary'}}>
            <CustomerHeader/>
            {children} 
            </Box>
        </Box>
            </StyledBox>
        </Box>
    );
}

export default CustomerLayout;