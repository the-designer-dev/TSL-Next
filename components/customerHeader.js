import { Box , Typography , Button ,Menu , MenuItem } from '@mui/material';
import React, { useEffect } from 'react';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import LocalHotelOutlinedIcon from '@mui/icons-material/LocalHotelOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { useSelector , useDispatch } from 'react-redux';
import {useRouter} from 'next/router'
import { API_URL } from '../config';
import axios from 'axios';
import { setToken, setUser } from '../redux/userSlice';
function CustomerHeader(props) {
    const dispatch = useDispatch()
    const router = useRouter()
    const token= useSelector(state => state.user.token)
    const user= useSelector(state => state.user.user)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    useEffect(()=> {
        axios.get(`${API_URL}/users/me`,  {headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`}}).then(res =>
                dispatch(setUser(res.data)) ).catch((err) => {})
    } ,[])
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
            {Object.keys(user).length === 0?
            <Box  sx={{borderLeft : `1px solid` ,borderLeftColor:'primary.main',display:'flex' , flexDirection:'row' , paddingLeft:'5px' }}>
                <Button onClick={() => router.push('/login')}>Login</Button>
                <Button onClick={() => router.push('/signup')} sx={{backgroundColor:'button.main'}} >SignUp</Button>
                </Box>
            : <>
            <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
 <Box sx={{display:'flex' , flexDirection:'column' , paddingLeft:'5px'}}>
            <Typography sx={{fontSize:'12px',color:'text.primary' ,fontWeight:'600'}} variant='p'>{user.first_name} {user.last_name}</Typography>
            <Typography sx={{fontSize:'12px',color:'text.secondary' ,fontWeight:'300'}} variant='p'>Customer</Typography>
            </Box>      
            </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={()=>{handleClose ; sessionStorage.removeItem('token') ; dispatch(setToken('')) ;dispatch(setUser({})) ; router.push('/') }}>Logout</MenuItem>
      </Menu>
      </>
            }

        </Box>
    );
}

export default CustomerHeader;