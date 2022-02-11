import { useState } from "react";
import { Box, Button, Grid, OutlinedInput, TextField, Typography } from "@mui/material";
import { useDispatch } from 'react-redux';
import { setDestination ,setCheckIn,setCheckOut,setAdult,setChild} from "../redux/hotelQuery";
import StyledTextField from '../styledComponents/styledTextField'
import StyledContainer from "../styledComponents/styledContainer";
import SearchIcon from '@mui/icons-material/Search';
import { DatePicker } from "@mui/lab";
import CustomerLayout2 from "../components/customerLayout2";
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/router';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from "@mui/material";



export default function Home() {
  const [checkIn , setCheckInState] = useState(null)
  const [checkOut , setCheckOutState] = useState(null)
  const [destination , setDestinationState] = useState(null)
  const [adult , setAdultState] = useState(0)
  const [child , setChildState] = useState(0)
  const dispatch = useDispatch()
  const router = useRouter();
  const theme = useTheme()
  function handleSubmit(e){
    e.preventDefault()
    dispatch(setDestination(destination))
    dispatch(setCheckIn(checkIn.format('YYYY-MM-DD')))
    dispatch(setCheckOut(checkOut.format('YYYY-MM-DD')))
    dispatch(setAdult(adult))
    dispatch(setChild(child))
    sessionStorage.setItem("destination", destination);
    sessionStorage.setItem("checkIn", checkIn.format('YYYY-MM-DD'));
    sessionStorage.setItem("checkOut", checkOut.format('YYYY-MM-DD'));
    sessionStorage.setItem("adult", adult);
    sessionStorage.setItem("child", child);
    cookieCutter.set('destination', destination)
    cookieCutter.set('checkIn', checkIn.format('YYYY-MM-DD'))
    cookieCutter.set('checkOut', checkOut.format('YYYY-MM-DD'))
    cookieCutter.set('adult', adult)
    cookieCutter.set('child', child)
    router.push({pathname:'/hotellisting'})
  }

  const MenuProps = {
    PaperProps: {
      style: {
        backgroundColor: `${theme.palette.background.main}`,
        width: 210
      },    
    },  
  };

  return (
    <Box sx={{height:'calc( 100vh - 77px )'}}>
       <form style={{display:'inherit'}} onSubmit={(e) => handleSubmit(e)}>
    <StyledContainer sx={{ backgroundImage:`url(/Banner-Home.jpg)` , display:'flex' , flexDirection:'column'  ,justifyContent:'space-around' , minHeight:'calc(100vh - 77px) !important' }} square={true}>
     <Grid container spacing={5}  columns={15}>
      <Grid container item justifyContent="center" alignItems="center" direction='row' xs={15}> 
      <Typography sx={{padding:'0px 10px'}} fontWeight={600} color='#FEFEFE' variant="h1">Your</Typography><Typography sx={{padding:'0px 10px'}} fontWeight={600} color='#FEFEFE' variant="h1">Online</Typography>
     <Typography sx={{padding:'0px 10px'}} fontWeight={600} color='#FEFEFE' variant="h1" fontFamily='Breathing'>Travelling</Typography><Typography sx={{padding:'0px 10px'}} fontWeight={600} color='#FEFEFE' variant="h1">Partner</Typography></Grid>
     <Grid container item spacing={2} direction='row' alignItems="flex-end" justifyContent='space-evenly' sx={{textAlign:'left'}} >
     <Grid alignContent='space-around' container item xs={15} md={5} lg={3} direction='column' ><Grid sx={{paddingBottom:'8px'}}><Typography color='#FFF' variant='p'>Destination</Typography></Grid>  <Grid> <StyledTextField required onChange={(e) => setDestinationState(e.target.value)}  size="small" id="outlined-basic" variant="outlined" placeholder="Where are you going?" /></Grid></Grid>
     <Grid alignContent='space-around' container item xs={15} md={5} lg={3} direction='column' ><Grid sx={{paddingBottom:'8px'}}><Typography color='#FFF' variant='p'>Check In</Typography></Grid>  <Grid> <DatePicker PaperProps={{style:{backgroundColor:theme.palette.background.main , backgroundImage:'none'}}} value={checkIn} onChange={(newValue) => { setCheckInState(newValue)   }} renderInput={(params) => <TextField required sx={{'& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{color:'#000'},'& .MuiInputAdornment-root':{'& .MuiButtonBase-root':{'& .MuiSvgIcon-root':{color:'button.main'}}}} , backgroundColor:'#FFF', borderRadius:'5px' }} size="small" variant="outlined" placeholder="MM/DD/YYYY" {...params} />}/></Grid></Grid>
     <Grid alignContent='space-around' container item xs={15} md={5} lg={3} direction='column' ><Grid sx={{paddingBottom:'8px'}}><Typography color='#FFF' variant='p'>Check Out</Typography></Grid>  <Grid> <DatePicker PaperProps={{style:{backgroundColor:theme.palette.background.main , backgroundImage:'none'}}} value={checkOut} onChange={(newValue) => { setCheckOutState(newValue)   }} renderInput={(params) => <TextField required sx={{'& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{color:'#000'},'& .MuiInputAdornment-root':{'& .MuiButtonBase-root':{'& .MuiSvgIcon-root':{color:'button.main'}}}} , backgroundColor:'#FFF', borderRadius:'5px' }} size="small" variant="outlined" placeholder="MM/DD/YYYY" {...params} />}/></Grid></Grid>
     <Grid alignContent='space-around' container item xs={15} md={5} lg={3} direction='column' ><Grid sx={{paddingBottom:'8px'}}><Typography color='#FFF' variant='p'>Guests</Typography></Grid>  <Grid> 
     <FormControl fullWidth variant="standard">
       <Select
          multiple
          value={[adult , child]}
          MenuProps={MenuProps}
          renderValue={() => `adult : ${adult} , child : ${child}`}
          input={ <OutlinedInput sx={{'&.MuiInputBase-root':{backgroundColor:'#FFF !important' , color:'#808080' ,'& .MuiSelect-select':{padding:'8.5px 32px 8.5px 14px' ,width:'167px'}}}}/>}
        >
          <Grid container direction='column' spacing={2}  >
     <Grid container item xs={15} direction='column' ><Grid sx={{paddingBottom:'8px', paddingLeft:'8px'}}><Typography color='#FFF' variant='p'>Adult</Typography></Grid>  <Grid container item> <StyledTextField  onChange={(e) => e.target.value>0?setAdultState(e.target.value): setAdultState(0)} type='number'  value={adult}  size="small" id="outlined-basic" variant="outlined"  sx={{width:'200px' , margin:'auto'}} placeholder="# of Adult" /></Grid></Grid>
     <Grid container item xs={15} direction='column' ><Grid sx={{paddingBottom:'8px', paddingLeft:'8px'}}><Typography color='#FFF' variant='p'>Child</Typography></Grid>  <Grid container item> <StyledTextField  onChange={(e) => e.target.value>0?setChildState(e.target.value): setChildState(0)} type='number' value={child}  size="small" id="outlined-basic" variant="outlined"  sx={{width:'200px' , margin:'auto'}} placeholder="# of Child" /></Grid></Grid>
     </Grid>
        </Select>
        </FormControl>
        </Grid></Grid>
     <Grid alignContent='space-around' container item xs={15} md={5} lg={2} direction='column'><Grid sx={{paddingBottom:'8px'}}><Typography color='#FFF' variant='p'>Search</Typography></Grid><Grid><Button sx={{backgroundColor:'button.main'}} type='submit' ><SearchIcon style={{color:'#FFF', fontSize:'1.8rem'}}/></Button></Grid></Grid>
      </Grid>
     </Grid>
    </StyledContainer>
      </form>
    </Box>
  )
}

Home.getLayout = function getLayout(Home) {
  return (
    <CustomerLayout2>
      {Home}
    </CustomerLayout2>
  )
}
