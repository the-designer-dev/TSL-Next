import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import StyledTextField from '../styledComponents/styledTextField';
import { InputAdornment } from '@mui/material';
import { setChildCapacity , setAdultCapacity , setBedCapacity, setBedType } from '../redux/addRoom';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch  , useSelector} from 'react-redux'
function Capacity(props) {
    const room = useSelector(state => state.addRoom)
    const [bedTypes , setBedTypes] = useState([])
    const dispatch = useDispatch()
    
    useEffect(() => { 
        var arr =[];
        for (let index = 0; index < room.bedCapacity; index++) {
         arr.push({bednName:'',bedValue:''})   
        }
        dispatch(setBedType(arr))
    } , [room.bedCapacity])


    function changeBedType(value , index){
        var varTypes = room.bedType.map(el => (el))
        varTypes[index] = value
        dispatch(setBedType(varTypes))
    }

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid container item xs={12} sm={6} spacing={1} >
                    <Grid item xs={12} xs={4}>
                        <Typography fontWeight={400} variant='p'>Child Capacity:</Typography>
                    </Grid>
                    <Grid item xs={12} xs={8}>
                    <StyledTextField fullWidth value={room.childCapacity} sx={{'& .MuiInputBase-root':{padding:'0px' ,'& .MuiInputAdornment-positionStart':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'4px 0px 0px 4px'  ,'& .MuiTypography-root':{color:"#FFF"}},'& .MuiInputAdornment-positionEnd':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'0px 4px 4px 0px' ,'& .MuiTypography-root':{color:"#FFF"}}}}}  InputProps={{startAdornment: <InputAdornment position="start"><Button onClick={()=> {room.childCapacity>0? dispatch(setChildCapacity(room.childCapacity - 1)) : ''}}>-</Button></InputAdornment> , endAdornment: <InputAdornment  position="end"><Button onClick={()=> {dispatch(setChildCapacity(room.childCapacity +1))   }}>+</Button></InputAdornment> }} /></Grid>
                </Grid>
                <Grid container item xs={12} sm={6} spacing={1} >
                    <Grid item xs={12} xs={4}>
                        <Typography fontWeight={400} variant='p'>Adult Capacity:</Typography>
                    </Grid>
                    <Grid item xs={12} xs={8}>
                    <StyledTextField fullWidth value={room.adultCapacity} sx={{'& .MuiInputBase-root':{padding:'0px' ,'& .MuiInputAdornment-positionStart':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'4px 0px 0px 4px'  ,'& .MuiTypography-root':{color:"#FFF"}},'& .MuiInputAdornment-positionEnd':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'0px 4px 4px 0px' ,'& .MuiTypography-root':{color:"#FFF"}}}}}  InputProps={{startAdornment: <InputAdornment position="start"><Button onClick={()=> {room.adultCapacity>0? dispatch(setAdultCapacity(room.adultCapacity - 1)) : ''}}>-</Button></InputAdornment> , endAdornment: <InputAdornment  position="end"><Button onClick={()=> {dispatch(setAdultCapacity(room.adultCapacity +1)) }}>+</Button></InputAdornment> }} /></Grid>
                </Grid>
                <Grid container item xs={12} sm={6} spacing={1} >
                    <Grid item xs={12} xs={4}>
                        <Typography fontWeight={400} variant='p'>Bed Capacity:</Typography>
                    </Grid>
                    <Grid item xs={12} xs={8}>
                    <StyledTextField fullWidth value={room.bedCapacity} sx={{'& .MuiInputBase-root':{padding:'0px' ,'& .MuiInputAdornment-positionStart':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'4px 0px 0px 4px'  ,'& .MuiTypography-root':{color:"#FFF"}},'& .MuiInputAdornment-positionEnd':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'0px 4px 4px 0px' ,'& .MuiTypography-root':{color:"#FFF"}}}}}  InputProps={{startAdornment: <InputAdornment position="start"><Button onClick={()=> {room.bedCapacity>0? dispatch(setBedCapacity(room.bedCapacity - 1)) : ''}}>-</Button></InputAdornment> , endAdornment: <InputAdornment  position="end"><Button onClick={()=> {dispatch(setBedCapacity(room.bedCapacity +1)) }}>+</Button></InputAdornment> }} /></Grid>
                </Grid>
                {room.bedType.map((el ,index) =>{console.log(el); return(
                
                <Grid container item xs={12} sm={6} spacing={1} >
                    <Grid item xs={12} sm={4}>
                        <Typography fontWeight={400} variant='p'>Bed Type:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                    <FormControl fullWidth>
                        <Select
                        sx={{'&.MuiOutlinedInput-root':{backgroundColor:'#FFF' , color:'secondary.main'}}}
                            value={el}
                            onChange={(e) => changeBedType(e.target.value , index)}
                        >
                            <MenuItem value={JSON.stringify({bedname:'King',bedvalue: 2})}>King</MenuItem>
                            <MenuItem value={JSON.stringify({bedname:'Queen',bedvalue: 2})}>Queen</MenuItem>
                            <MenuItem value={JSON.stringify({bedname:'Twin',bedvalue: 2})}>Twin</MenuItem>
                            <MenuItem value={JSON.stringify({bedname:'Single',bedvalue: 1})}>Single</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                </Grid>
                )})}
            </Grid>
        </Box>
    );
}
export default Capacity;