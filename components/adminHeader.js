import { Box , Typography , Button , Menu , MenuItem } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import smallProfilePicture from '../assets/Left Top Profile Picture.png';
import {setToken , setUser} from '../redux/userSlice'
import {useSelector , useDispatch} from 'react-redux'
import {useRouter} from 'next/router';
function AdminHeader(props) {
    const user = useSelector(state => state.user.user);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch()
    const router = useRouter()
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <Box sx={{display:'flex', position:'sticky' , top:'0' , zIndex:'5'  , justifyContent:'flex-end' , alignItems:'center' , height:'77px' , backgroundColor:'background.main' , padding:'0px 20px'}}>
            <>
            <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
           <Box sx={{borderLeft : `1px solid` , borderLeftColor:'primary.main' ,padding:'0px 0px 0px 10px'}}>
            <Image height='40px' width='40px' src={smallProfilePicture}/>
            </Box>
   <Box sx={{display:'flex' , flexDirection:'column' , paddingLeft:'5px'}}>
            <Typography sx={{fontSize:'12px',color:'text.primary' ,fontWeight:'600'}} variant='p'>{user.first_name} {user.last_name}</Typography>
            <Typography sx={{fontSize:'12px',color:'text.secondary' ,fontWeight:'300'}} variant='p'>{user.role?user.role.type:''}</Typography>
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
        </Box>
    );
}
export default AdminHeader;