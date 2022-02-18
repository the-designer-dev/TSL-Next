import React from "react";
import {  Grid , Typography , TextField , InputAdornment } from "@mui/material";
import HotelCard from "../../components/hotelCard";
import SearchIcon from '@mui/icons-material/Search';
import StyledContainer from "../../styledComponents/styledContainer";
import VendorLayout from "../../components/vendorLayout";
import axios from "axios";
import { useSelector } from "react-redux";
import { API_URL } from "../../config";
import useSWR from 'swr'


const fetch2 = (user,token) =>  axios({
            method: 'GET',
            url: `${API_URL}/hotels?users_permissions_user.id=${user.id}`,
            headers:{
              Accept: 'application/json',
              'Authorization': `Bearer ${token}`
            }
          }).then(res => res.data)

function Allhotels(props) {
    const token = useSelector(state => state.user.token)
    const user = useSelector(state => state.user.user)
    const { data, error } = useSWR([user , token] ,fetch2)
    return (
        <StyledContainer square >
            <Grid container spacing={2}>
            <Grid  item xs={12}  sx={{textAlign:'left'}}>
                <Typography variant='h6'  color='primary.main'>All Hotels</Typography>
                </Grid>
            <Grid  item xs={12}  sx={{textAlign:'left'}}>
                <TextField  InputLabelProps={{shrink: false}} label='' sx={{'& .MuiOutlinedInput-notchedOutline':{borderColor:'primary.main'} ,'& .MuiSvgIcon-root':{color:'#FFF'} ,'& .MuiOutlinedInput-root' :{paddingRight:'0px'} , '& .MuiInputAdornment-outlined' :{padding:'27px 10px' , borderRadius:'4px' ,backgroundColor:'button.main'} , '& .MuiInputAdornment-root':{backgroundColor:''} }} placeholder="Search by Hotel Name" fullWidth variant='outlined' InputProps={{endAdornment: <InputAdornment><SearchIcon style={{fontSize:'2.5rem'}}/></InputAdornment>}}/>
                </Grid>
                {data && data[0].hotelname? data.map((element)=>
                (<Grid item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
                <HotelCard buttonText={'View Details'} name={element.hotelname} icons={[...element.amenities , ...element.facilities]} startingPrice={element.starting_price} images={element.images} clickFunction={() => router.push({pathname:`/hotel/${element.id}`})} /> </Grid>)):''}
                </Grid>
        </StyledContainer>
    );
}

Allhotels.getLayout = function getLayout(Allhotels) {
    return (
      <VendorLayout>
        {Allhotels}
      </VendorLayout>
    )
  }


export default Allhotels