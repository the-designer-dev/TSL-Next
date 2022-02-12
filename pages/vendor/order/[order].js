import { Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import TotalTable from '../../../components/totalTable';
import StyledContainer from '../../../styledComponents/styledContainer';
import { useRouter } from 'next/router';
function OrderDetails(props) {
    const router = useRouter()
    const { order } = router.query
    // useEffect(() => {
        
    // } ,[order])
    return (
        <StyledContainer>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='h6'>Order Details</Typography>
                    <Typography fontSize={12} variant='p'>Lorem ipsum dolor sit amet, consectuer</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TotalTable/>
                </Grid>
            </Grid>
        </StyledContainer>
    );
}

export default OrderDetails;