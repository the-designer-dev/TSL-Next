import React from 'react';
import { Grid, Typography } from '@mui/material';
import StyledTextField from '../styledComponents/styledTextField';
import CustomizeTextArea from '../styledComponents/styledTextarea';

function TourTicket(props) {
    return (
        <Grid container item justifyContent='center' spacing={2} xs={12}>
            <Grid item xs={10}>
                <Typography color={"primary.main"} variant='h6' fontWeight={500}> Ticket {props.id} </Typography>
            </Grid>
            <Grid container item xs={10}>
                <Grid item xs={12} sm={4}>
                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                        Ticket Name:

                    </Typography>
                </Grid>
                <Grid item xs={8} sm={8}>
                    <StyledTextField required fullWidth placeholder='Enter Ticket Name' />
                </Grid>
            </Grid>
            <Grid container item xs={10}>
                <Grid item xs={12} sm={4}>
                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                        Ticket Description:

                    </Typography>
                </Grid>
                <Grid item xs={8} sm={8}>
                    <CustomizeTextArea minRows={3} required fullWidth placeholder='Enter the things like what pass include, location of use. ' />

                </Grid>
            </Grid>
        </Grid>

    )
}

export default TourTicket;