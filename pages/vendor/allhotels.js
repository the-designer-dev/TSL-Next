import React from "react";
import {  Grid , Typography , TextField , InputAdornment } from "@mui/material";
import HotelCard from "../../components/hotelCard";
import SearchIcon from '@mui/icons-material/Search';
import StyledContainer from "../../styledComponents/styledContainer";
import VendorLayout from "../../components/vendorLayout";
import { useEffect } from "react";
function Allhotels(props) {

    useEffect(()=>{} ,[])

    return (
        <StyledContainer square >
            <Grid container spacing={3}>
            <Grid  item xs={12}  sx={{textAlign:'left'}}>
                <Typography variant='h5' fontWeight={500} color='primary.main'>All Hotels</Typography>
                </Grid>
            <Grid  item xs={12}  sx={{textAlign:'left'}}>
                <TextField sx={{'& .MuiOutlinedInput-notchedOutline':{borderColor:'primary.main'} ,'& .MuiSvgIcon-root':{color:'#FFF'} ,'& .MuiOutlinedInput-root' :{paddingRight:'0px'} , '& .MuiInputAdornment-outlined' :{padding:'27px 10px' , borderRadius:'4px' ,backgroundColor:'button.main'} , '& .MuiInputAdornment-root':{backgroundColor:''} }} placeholder="Search by Room Name" fullWidth variant='outlined' InputProps={{endAdornment: <InputAdornment><SearchIcon style={{fontSize:'2.5rem'}}/></InputAdornment>}}/>
                </Grid>
                <Grid  item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
                    {/* <HotelCard/> */}
                </Grid>
                <Grid  item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
                    {/* <HotelCard/> */}
                </Grid>
                <Grid  item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
                    {/* <HotelCard/> */}
                </Grid>
                <Grid  item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
                    {/* <HotelCard/> */}
                </Grid>
                <Grid  item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
                    {/* <HotelCard/> */}
                </Grid>
                <Grid  item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
                    {/* <HotelCard/> */}
                </Grid>
                <Grid  item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
                    {/* <HotelCard/> */}
                </Grid>
                <Grid  item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
                    {/* <HotelCard/> */}
                </Grid>
                <Grid  item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
                    {/* <HotelCard/> */}
                </Grid>
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