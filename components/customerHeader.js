import { Box , Typography , Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import largeIcon from '../assets/logoBig.png';
import smallIcon from '../assets/logoSmall.png';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import LocalHotelOutlinedIcon from '@mui/icons-material/LocalHotelOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
function CustomerHeader(props) {
    return (
        <Box sx={{display:'flex', position:'sticky' , top:'0' , zIndex:'5'   , alignItems:'center' , height:'77px' , backgroundColor:'background.main' , padding:'0px 20px' , justifyContent:'right'}}>
                        {/* <Box sx={{left:'10px'}} className='desktopMenu'><Image   layout='fixed' src={largeIcon}/></Box>
            <Box sx={{left:'10px'}} className='mobileMenu'><Image  layout='fixed' src={smallIcon}/></Box> */}
            <Box className='customerMenu' sx={{color:'primary.main',display:'flex' , flex:'auto' ,paddingLeft:'120px' , justifyContent:'space-evenly' }}>
                <Box sx={{display:'flex' , alignItems: 'flex-end'}} ><FlightTakeoffOutlinedIcon/><Typography  sx={{paddingLeft:'5px'}} variant='p'>Flights</Typography></Box>
                <Box sx={{display:'flex' , alignItems: 'flex-end'}} ><LocalHotelOutlinedIcon/><Typography  sx={{paddingLeft:'5px'}} variant='p'>Hotels</Typography></Box>
                <Box sx={{display:'flex' , alignItems: 'flex-end'}} ><DirectionsCarFilledOutlinedIcon/><Typography  sx={{paddingLeft:'5px'}} variant='p'>Car</Typography></Box>
                <Box sx={{display:'flex' , alignItems: 'flex-end'}} ><MapOutlinedIcon/><Typography  sx={{paddingLeft:'5px'}} variant='p'>Tour</Typography></Box>
            </Box>
            <Box sx={{ borderLeftColor:'primary.main' ,padding:'0px 0px 0px 10px'}}>
            {/* <Image height='40px' width='40px' src={smallProfilePicture}/> */}
            </Box>
            <Box  sx={{borderLeft : `1px solid` ,borderLeftColor:'primary.main',display:'flex' , flexDirection:'row' , paddingLeft:'5px' }}>
                <Button>Login</Button>
                <Button sx={{backgroundColor:'button.main'}} >SignUp</Button>
            </Box>
        </Box>
    );
}

export default CustomerHeader;