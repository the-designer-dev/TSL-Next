import { Box, Typography , Button , useTheme} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import {ProSidebar,Menu,MenuItem,SidebarHeader,SubMenu,SidebarContent} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import largeIcon from '../assets/Main Logo.png';
import profilePicture from '../assets/Main Profile Picture.png';
import { useState } from 'react';
function Sidebar(props) {
    const theme = useTheme()
    const [open,setOpen] = useState(false)
    return (
        <Box sx={{margin:0 , padding: 0}}>
        <ProSidebar style={{height:'100vh',backgroundColor: theme.palette.background.main}} collapsed={open} breakPoint='sm'>
            <SidebarHeader style={{padding:'20px', display:'flex', justifyContent:'space-between'}}>
                <Image src={largeIcon}/>
                <Button sx={{color:'primary.main'}} onClick={() => setOpen(!open)} ><MenuIcon/></Button>
            </SidebarHeader>
            <SidebarContent >
                <div style={{display:'flex', justifyContent:'space-evenly',padding:'10px'}} >
                <Image src={profilePicture}  />
                </div>
            <Menu iconShape="square">
                <Typography sx={{paddingLeft:'20px' , fontSize:'12px'}} color='#999999' variant='p'>Main Menu</Typography>
                <MenuItem >Overview</MenuItem>
                <SubMenu title="Hotels" >
                <MenuItem>All Hotel</MenuItem>
                <MenuItem>All Rooms</MenuItem>
                <MenuItem>Add New Hotel</MenuItem>
                <MenuItem>Add New Room</MenuItem>
                <MenuItem>Booking Schedule</MenuItem>
            </SubMenu>
                <SubMenu title="Orders">
                <MenuItem>Overview</MenuItem>
                <MenuItem>Refunds</MenuItem>
            </SubMenu>
            <MenuItem>Request Withdrawal</MenuItem>

            </Menu>
            
            </SidebarContent> 
        </ProSidebar>
        </Box>
    );
}

export default Sidebar;