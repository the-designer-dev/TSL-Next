import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import StyledTextField from '../styledComponents/styledTextField';
import { InputAdornment } from '@mui/material';
function Capacity(props) {
    const [childCapacity , setChildCapacity ] = useState(0)
    const [adultCapacity , setAdultCapacity ] = useState(0)
    const [bedCapacity , setBedCapacity ] = useState(0)

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid container item xs={12} sm={6} spacing={1} >
                    <Grid item xs={12} xs={4}>
                        <Typography fontWeight={400} variant='p'>Child Capacity:</Typography>
                    </Grid>
                    <Grid item xs={12} xs={8}>
                    <StyledTextField value={childCapacity} sx={{'& .MuiInputBase-root':{padding:'0px' ,'& .MuiInputAdornment-positionStart':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'4px 0px 0px 4px'  ,'& .MuiTypography-root':{color:"#FFF"}},'& .MuiInputAdornment-positionEnd':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'0px 4px 4px 0px' ,'& .MuiTypography-root':{color:"#FFF"}}}}}  InputProps={{startAdornment: <InputAdornment position="start"><Button onClick={()=> {childCapacity>0? setChildCapacity(childCapacity - 1) : ''}}>-</Button></InputAdornment> , endAdornment: <InputAdornment  position="end"><Button onClick={()=> {setChildCapacity(childCapacity +1)  }}>+</Button></InputAdornment> }} /></Grid>
                </Grid>
                <Grid container item xs={12} sm={6} spacing={1} >
                    <Grid item xs={12} xs={4}>
                        <Typography fontWeight={400} variant='p'>Adult Capacity:</Typography>
                    </Grid>
                    <Grid item xs={12} xs={8}>
                    <StyledTextField value={adultCapacity} sx={{'& .MuiInputBase-root':{padding:'0px' ,'& .MuiInputAdornment-positionStart':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'4px 0px 0px 4px'  ,'& .MuiTypography-root':{color:"#FFF"}},'& .MuiInputAdornment-positionEnd':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'0px 4px 4px 0px' ,'& .MuiTypography-root':{color:"#FFF"}}}}}  InputProps={{startAdornment: <InputAdornment position="start"><Button onClick={()=> {adultCapacity>0? setAdultCapacity(adultCapacity - 1) : ''}}>-</Button></InputAdornment> , endAdornment: <InputAdornment  position="end"><Button onClick={()=> {setAdultCapacity(adultCapacity +1) }}>+</Button></InputAdornment> }} /></Grid>
                </Grid>
                <Grid container item xs={12} sm={6} spacing={1} >
                    <Grid item xs={12} xs={4}>
                        <Typography fontWeight={400} variant='p'>Bed Capacity:</Typography>
                    </Grid>
                    <Grid item xs={12} xs={8}>
                    <StyledTextField value={bedCapacity} sx={{'& .MuiInputBase-root':{padding:'0px' ,'& .MuiInputAdornment-positionStart':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'4px 0px 0px 4px'  ,'& .MuiTypography-root':{color:"#FFF"}},'& .MuiInputAdornment-positionEnd':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'0px 4px 4px 0px' ,'& .MuiTypography-root':{color:"#FFF"}}}}}  InputProps={{startAdornment: <InputAdornment position="start"><Button onClick={()=> {bedCapacity>0? setBedCapacity(bedCapacity - 1) : ''}}>-</Button></InputAdornment> , endAdornment: <InputAdornment  position="end"><Button onClick={()=> {setBedCapacity(bedCapacity +1) }}>+</Button></InputAdornment> }} /></Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Capacity;