import * as React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import StyledContainer from '../../../styledComponents/styledContainer';
import TourOverviewForm from '../../../components/tourOverviewform';
function TourOverview() {
    return (
        <StyledContainer sx={{ height: '100%' }}>
            <Grid container item justifyContent='center'  >
                <Grid item xs={10}>
                    <TourOverviewForm />
                </Grid>
            </Grid>


        </StyledContainer>
    )
}


export default TourOverview;