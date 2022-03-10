import React from 'react';
import { Grid, Typography } from '@mui/material';
import SelectLanguage from './selectLanguage';

function TourLanguage(props) {
    return (
        <Grid container item justifyContent='center' spacing={2} xs={12}>
            <Grid item xs={12}>
                <Typography color={"primary.main"} variant='h6' fontWeight={500}> Language {props.id} </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography color={"primary.main"} variant='p' fontWeight={500}>
                    What's tour guide primary language?

                </Typography>
            </Grid>
            <Grid item xs={8} sm={4}>
                <SelectLanguage />
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography color={"primary.main"} variant='p' fontWeight={500}>
                    What other languages they speak fluently?
                </Typography>
            </Grid>
            <Grid item xs={8} sm={4}>
                <SelectLanguage />
            </Grid>
        </Grid>
    )
}

export default TourLanguage;