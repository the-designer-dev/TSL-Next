import { Box , Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import smallProfilePicture from '../assets/Left Top Profile Picture.png';
function Header(props) {
    return (
        <Box sx={{display:'flex' , justifyContent:'flex-end' , alignItems:'center' , height:'77px' , backgroundColor:'background.main' , padding:'0px 20px'}}>
            
            <Box sx={{borderLeft : `1px solid` , borderLeftColor:'primary.main' ,padding:'0px 0px 0px 10px'}}>
            <Image height='40px' width='40px' src={smallProfilePicture}/>
            </Box>
            <Box sx={{display:'flex' , flexDirection:'column'}}>
            <Typography sx={{fontSize:'12px',color:'text.primary' ,fontWeight:'600'}} variant='p'>Johndoe</Typography>
            <Typography sx={{fontSize:'12px',color:'text.secondary' ,fontWeight:'300'}} variant='p'>Super Admin</Typography>
            </Box>
        </Box>
    );
}

export default Header;