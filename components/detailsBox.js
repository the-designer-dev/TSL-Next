import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

function DetailsBox(props) {
    return (
        <Box sx={{width:'100%' , height:'100%' , backgroundColor:'table.tableRow2' , borderRadius:'8px'  }}>
            <Grid container direction={'row'}>
                <Grid item xs={12}>
                    <Box sx={{  backgroundColor:'table.tableRow1' , padding:'20px' , borderRadius:'8px 8px 0px 0px'}}>
                        <Grid container item>
                            <Grid container item xs={12} sm={6}>
                                <Box>
                                    <img style={{borderRadius:'50%'}} src={props.img}/>
                                </Box>
                                <Typography variant='p'>{props.title}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{textAlign:'right'}}>
                                <Typography variant='p'>{props.subtitle}</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                       {props.details.map((el) => (
                           
                           <Grid container item xs={12} sm={12} md={6} sx={{padding:'10px 20px'}} spacing={1}>
                            <Grid item xs={6} sm={6}>
                                <Typography fontSize={14} variant='p'>{el.question} :</Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} >
                                <Typography fontSize={14} variant='p'>{el.answer}</Typography>
                            </Grid>
                        </Grid>
                        ))}
            </Grid>
        </Box>
    );
}

export default DetailsBox;