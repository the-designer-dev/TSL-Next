import * as React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import StyledContainer from '../../../styledComponents/styledContainer';
import TourImageCollage from '../../../components/tourImageCollage';
function TourDetails() {
    return (
        <StyledContainer sx={{ height: '100%' }}>
            <Grid container item justifyContent='center'  >
                <Grid item xs={10}>
                    <TourImageCollage />
                </Grid>
            </Grid>


        </StyledContainer>
    )
}


export default TourDetails;