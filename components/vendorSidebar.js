import { Box, Typography , Button , useTheme} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import {ProSidebar,Menu,MenuItem,SubMenu,SidebarContent} from "react-pro-sidebar";
import largeIcon from '../assets/logoBig.png';
import smallIcon from '../assets/logoSmall.png';
import profilePicture from '../assets/Main Profile Picture.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import Link from 'next/link';
function VendorSidebar(props) {
    const matches = useMediaQuery('(max-width:577px)');
    const theme = useTheme()
    const [open,setOpen] = useState(false)
    const [mobileOpen,setMobileOpen] = useState(false)
    return (
        <Box sx={{margin:0 , padding: 0,zIndex:'7'}}>
  
        <Box sx={{margin:0 , padding: 0,position:'sticky',top:0 , left:0 , height:'100vh'}}>
        <Box sx={{display:'flex' , flexDirection:'row' ,alignItems:'center' ,justifyContent:'space-between' ,position:'absolute' , top: matches?'20px' :'27px'  , zIndex:'1010' }}>
            <Box sx={{left:'10px'}} className='desktopMenu'><Image   layout='fixed' src={largeIcon}/></Box>
            <Box sx={{left:'10px'}} className='mobileMenu'><Image  layout='fixed' src={smallIcon}/></Box>
                <Button disableRipple  sx={{display:matches?'none':'black',color:'primary.main' , left:'110px', ':hover':{background:'none'}, transform: open? '':'translate(110px , 0px)'  , transition:'transform 0.5s'}}  onClick={() => setOpen(!open)} ><MenuIcon/></Button>
                <Button disableRipple  sx={{display:matches?'block':'none', color:'primary.main'  , left:'30px', ':hover':{background:'none'}, transform: mobileOpen? 'translate(180px , 0px)':'' , transition:'transform 0.5s' }}  onClick={() => setMobileOpen(!mobileOpen)} ><MenuIcon/></Button>
                </Box>
        <ProSidebar style={{height:'100% ',backgroundColor: theme.palette.background.main  , paddingTop:'77px' }} toggled={mobileOpen} collapsed={open} breakPoint='sm'>
            
            <SidebarContent >
                <div style={{display:'flex', justifyContent:'space-evenly',padding:'10px'}} >
                <Image src={profilePicture}  />
                </div>
            <Menu iconShape="square">
                <Typography sx={{paddingLeft:'20px' , fontSize:'12px'}} color='#999999' variant='p'>Main Menu</Typography>
                <MenuItem >Overview</MenuItem>
                <Typography sx={{paddingLeft:'20px' , fontSize:'12px'}} color='#999999' variant='p'>Hotels</Typography>

                <Link href={'/vendor/allhotels'}><MenuItem>All Hotel</MenuItem></Link>
                <Link href={'/vendor/allrooms'}><MenuItem>All Rooms</MenuItem></Link>
                <Link href={'/vendor/addhotel'}><MenuItem>Add New Hotel</MenuItem></Link>
                <Link href={'/vendor/addroom'}><MenuItem>Add New Room</MenuItem></Link>
                <MenuItem>Booking Schedule</MenuItem>
                <Link href={'/vendor/blackoutdates/hotels'}><MenuItem>Blackout Dates</MenuItem></Link>
                <Typography sx={{paddingLeft:'20px' , fontSize:'12px'}} color='#999999' variant='p'>Orders</Typography>
                <Link href={'/vendor/orderlisting'}><MenuItem>Overview</MenuItem></Link>
                <MenuItem>Refunds</MenuItem>
                <Typography sx={{paddingLeft:'20px' , fontSize:'12px'}} color='#999999' variant='p'>Withdrawals</Typography>

            <MenuItem>Request Withdrawal</MenuItem>

            </Menu>
            
            </SidebarContent> 

        </ProSidebar>
        </Box>
        </Box>
    );
}

export default VendorSidebar;