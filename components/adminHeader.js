import { Box , Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import smallProfilePicture from '../assets/Left Top Profile Picture.png';
import {useSelector} from 'react-redux'
function AdminHeader(props) {
    const user = useSelector(state => state.user.user);
    return (
        <Box sx={{display:'flex', position:'sticky' , top:'0' , zIndex:'5'  , justifyContent:'flex-end' , alignItems:'center' , height:'77px' , backgroundColor:'background.main' , padding:'0px 20px'}}>
            
            <Box sx={{borderLeft : `1px solid` , borderLeftColor:'primary.main' ,padding:'0px 0px 0px 10px'}}>
            <Image height='40px' width='40px' src={smallProfilePicture}/>
            </Box>
            <Box sx={{display:'flex' , flexDirection:'column' , paddingLeft:'5px'}}>
            <Typography sx={{fontSize:'12px',color:'text.primary' ,fontWeight:'600'}} variant='p'>{user.first_name} {user.last_name}</Typography>
            <Typography sx={{fontSize:'12px',color:'text.secondary' ,fontWeight:'300'}} variant='p'>{user.role?user.role.type:''}</Typography>
            </Box>
        </Box>
    );
}
export default AdminHeader;