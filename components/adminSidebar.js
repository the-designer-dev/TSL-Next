import { Box, Typography , Button , useTheme} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import {ProSidebar,Menu,MenuItem,SubMenu,SidebarContent} from "react-pro-sidebar";
import largeIcon from '../assets/logoBig.png';
import smallIcon from '../assets/logoSmall.png';
import profilePicture from '../assets/Main Profile Picture.png';
import { useState } from 'react';
function AdminSidebar(props) {
    const theme = useTheme()
    const [open,setOpen] = useState(false)
    const [mobileOpen,setMobileOpen] = useState(false)
    return (
        <Box sx={{margin:0 , padding: 0,zIndex:'7'}}>
  
        <Box sx={{margin:0 , padding: 0,position:'sticky',top:0 , left:0 , height:'100vh'}}>
        <Box sx={{display:'flex' , flexDirection:'row' ,alignItems:'center' ,justifyContent:'space-between' ,position:'absolute' , top: '43px'  , zIndex:'1010' }}>
            <Box sx={{left:'10px'}} className='desktopMenu'><Image   layout='fixed' src={largeIcon}/></Box>
            <Box sx={{left:'10px'}} className='mobileMenu'><Image  layout='fixed' src={smallIcon}/></Box>
                <Button disableRipple  sx={{color:'primary.main' , left:'110px', ':hover':{background:'none'}, transform: open? '':'translate(110px , 0px)'  , transition:'transform 0.5s'}} className='desktopMenu' onClick={() => setOpen(!open)} ><MenuIcon/></Button>
                <Button disableRipple  sx={{color:'primary.main'  , left:'30px', ':hover':{background:'none'}, transform: mobileOpen? 'translate(180px , 0px)':'' , transition:'transform 0.5s' }} className='mobileMenu' onClick={() => setMobileOpen(!mobileOpen)} ><MenuIcon/></Button>
                </Box>
        <ProSidebar style={{minHeight:'100%',backgroundColor: theme.palette.background.main  , paddingTop:'77px' }} toggled={mobileOpen} collapsed={open} breakPoint='sm'>
            
            <SidebarContent >
                <div style={{display:'flex', justifyContent:'space-evenly',padding:'10px'}} >
                <Image src={profilePicture}  />
                </div>
            <Menu iconShape="square">
                <Typography sx={{paddingLeft:'20px' , fontSize:'12px'}} color='#999999' variant='p'>Main Menu</Typography>
                <MenuItem >Overview</MenuItem>
                <MenuItem>Vendors</MenuItem>
                <MenuItem>Customers</MenuItem>
                <MenuItem>Add New Hotel</MenuItem>
                <MenuItem>Rooms</MenuItem>
                <MenuItem>Withdrawal Requests</MenuItem>

            </Menu>
            
            </SidebarContent> 

        </ProSidebar>
        </Box>
        </Box>
    );
}

export default AdminSidebar;