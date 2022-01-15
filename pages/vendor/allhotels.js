import React from "react";
import {  Grid } from "@mui/material";
import HotelCard from "../../components/hotelCard";
import StyledContainer from "../../styledComponents/styledContainer";

function Allhotels(props) {
    return (
        <StyledContainer square >
            <Grid container spacing={3}>
                <Grid  item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
                    <HotelCard/>
                </Grid>
                <Grid  item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
                    <HotelCard/>
                </Grid>
                <Grid  item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
                    <HotelCard/>
                </Grid>
                <Grid  item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
                    <HotelCard/>
                </Grid>
                <Grid  item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
                    <HotelCard/>
                </Grid>
                <Grid  item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
                    <HotelCard/>
                </Grid>
                <Grid  item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
                    <HotelCard/>
                </Grid>
                <Grid  item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
                    <HotelCard/>
                </Grid>
                <Grid  item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
                    <HotelCard/>
                </Grid>
                </Grid>
        </StyledContainer>
    );
}

export default Allhotels