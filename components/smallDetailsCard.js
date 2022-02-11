import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

function SmallDetailsCard(props) {
    return (
        <Box sx={{paddingTop:'30px' , height:'calc( 100% - 60px )'   }}>
            <Box sx={{backgroundColor:'background.main' , borderRadius:'8px' , paddingTop:'30px', position:'relative' , paddingBottom:'10px',height:'100%'}}>
                <Grid container>
                    <Grid item xs={12}>
                        <img src={props.img.src} style={{ backgroundColor:'#2AB572', borderRadius:'50%', position: 'absolute' ,top: '-25px',width: '50px',left: 'calc( 50% - 25px)'}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography textAlign={'center'} variant='h6'>{props.heading}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography textAlign={'center'} variant='h5'>{props.number}</Typography>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default SmallDetailsCard;