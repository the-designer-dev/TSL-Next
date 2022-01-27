import {React , useEffect, useState} from 'react';
import StyledContainer from '../styledComponents/styledContainer';
import { Grid , Typography , TextField ,  Button, OutlinedInput  } from '@mui/material';
import CustomerLayout from '../components/customerLayout';
import SearchIcon from '@mui/icons-material/Search';
import { DatePicker } from "@mui/lab";
import HotelCard from '../components/hotelCard';
import { useDispatch,useSelector } from 'react-redux'
import { setDestination ,setCheckIn,setCheckOut,setAdult,setChild} from "../redux/hotelQuery";
import StyledTextField from '../styledComponents/styledTextField';
import axios from 'axios'
import useSWR from 'swr'
import { API_URL } from '../config';
import moment from 'moment';
import { useRouter } from 'next/router';
import cookieCutter from 'cookie-cutter';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from "@mui/material";


const fetch = (destination,checkin,checkout,adult,child) => axios({
    method: "post",
    url: API_URL+ '/filter-hotels',
    data:{city:destination,checkindate:checkin,checkoutdate:checkout,adult:parseInt(adult) ,child:parseInt(child)} } ).then(res => res.data)
    
export default function HotelListing(props) {
    const router = useRouter();
      
    const [DestinationState ,  setDestinationState] = useState(useSelector(state => state.hotelquery.destination) )
    const [CheckInState , setCheckInState] = useState(moment(useSelector(state => state.hotelquery.checkIn) , 'YYYY-MM-DD')  )
    const [CheckOutState , setCheckOutState] = useState(moment(useSelector(state => state.hotelquery.checkOut) , 'YYYY-MM-DD') )
    const [AdultState , setAdultState] = useState(useSelector(state => state.hotelquery.adult) )
    const [ChildState , setChildState] = useState(useSelector(state => state.hotelquery.child) )
    const checkoutCheck = useSelector(state => state.hotelquery.checkOut)
    var reqData = [useSelector(state => state.hotelquery.destination),useSelector(state => state.hotelquery.checkIn),useSelector(state => state.hotelquery.checkOut),useSelector(state => state.hotelquery.guests), '0']
    const dispatch = useDispatch()
    const { data, error } = useSWR(reqData, fetch )

    useEffect(()=>{
        if(checkoutCheck === undefined || checkoutCheck === null ){
            if(sessionStorage.getItem('destination') !== undefined && sessionStorage.getItem('destination') !== null ){
               
        dispatch(setDestination(sessionStorage.getItem('destination')))
        dispatch(setCheckIn(moment(sessionStorage.getItem('checkIn') , 'YYYY-MM-DD' )))
        dispatch(setCheckOut(moment(sessionStorage.getItem('checkOut') , 'YYYY-MM-DD' )))
        dispatch(setAdult(sessionStorage.getItem('adult')))
        dispatch(setChild(sessionStorage.getItem('child')))
        setDestinationState(sessionStorage.getItem('destination'))
        setCheckInState(moment(sessionStorage.getItem('checkIn') , 'YYYY-MM-DD' ))
        setCheckOutState(moment(sessionStorage.getItem('checkOut') , 'YYYY-MM-DD' ))
        setAdultState(sessionStorage.getItem('adult'))
        setChildState(sessionStorage.getItem('child'))
    }
        else{
             router.push({pathname:'/'})
        }
    }

    },[])
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch(setDestination(DestinationState))
        dispatch(setCheckIn(CheckInState.format('YYYY-MM-DD')))
        dispatch(setCheckOut(CheckOutState.format('YYYY-MM-DD')))
        dispatch(setAdult(AdultState))
        dispatch(setChild(ChildState))
        sessionStorage.setItem("destination", DestinationState);
        sessionStorage.setItem("checkIn", CheckInState.format('YYYY-MM-DD'));
        sessionStorage.setItem("checkOut", CheckOutState.format('YYYY-MM-DD'));
        sessionStorage.setItem("adult", AdultState);
        sessionStorage.setItem("child", ChildState);
        cookieCutter.set('destination', DestinationState)
        cookieCutter.set('checkIn', CheckInState.format('YYYY-MM-DD'))
        cookieCutter.set('checkOut', CheckOutState.format('YYYY-MM-DD'))
        cookieCutter.set('adult', AdultState)
        cookieCutter.set('child', ChildState)
    }
    
    const theme = useTheme()
    const MenuProps = {
       PaperProps: {
         style: {
           backgroundColor: `${theme.palette.background.main}`,
           width: 210
         },    
       },  
     };
    return (
        
        <StyledContainer square={true}>
            
          <form style={{display:'inherit'}} onSubmit={(e) => handleSubmit(e)}>
          <Grid container spacing={3}>

          <Grid container item spacing={2} direction='row' alignItems="flex-end" justifyContent='space-evenly' columns={15} sx={{textAlign:'left'}} >
     <Grid alignContent='space-around' container item xs={7} sm={3}  lg={2} direction='column' ><Grid sx={{paddingBottom:'8px'}}><Typography fontSize='14px' color='#FFF' variant='p'>Destination</Typography></Grid>  <Grid> <StyledTextField value={DestinationState} onChange={(e) => setDestinationState(e.target.value)} size="small" id="outlined-basic" variant="outlined" placeholder="Where are you going?" /></Grid></Grid>
     <Grid alignContent='space-around' container item xs={7} sm={3}  lg={2} direction='column' ><Grid sx={{paddingBottom:'8px'}}><Typography fontSize='14px' color='#FFF' variant='p'>Check In</Typography></Grid>  <Grid> <DatePicker value={CheckInState} onChange={(newValue) => {setCheckInState(newValue)}} renderInput={(params) => <TextField sx={{'& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{color:'#000'},'& .MuiInputAdornment-root':{'& .MuiButtonBase-root':{'& .MuiSvgIcon-root':{color:'button.main'}}}} , backgroundColor:'#FFF' , borderRadius:'5px' }} size="small" variant="outlined" placeholder="MM/DD/YYYY" {...params} />}/></Grid></Grid>
     <Grid alignContent='space-around' container item xs={7} sm={3}  lg={2} direction='column' ><Grid sx={{paddingBottom:'8px'}}><Typography fontSize='14px' color='#FFF' variant='p'>Check Out</Typography></Grid>  <Grid> <DatePicker value={CheckOutState} onChange={(newValue) => {setCheckOutState(newValue)}} renderInput={(params) => <TextField sx={{'& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{color:'#000'},'& .MuiInputAdornment-root':{'& .MuiButtonBase-root':{'& .MuiSvgIcon-root':{color:'button.main'}}}} , backgroundColor:'#FFF' , borderRadius:'5px' }} size="small" variant="outlined" placeholder="MM/DD/YYYY" {...params} />}/></Grid></Grid>
     <Grid alignContent='space-around' container item xs={7} sm={3}  lg={2} direction='column' ><Grid sx={{paddingBottom:'8px'}}><Typography fontSize='14px' color='#FFF' variant='p'>Guests</Typography></Grid>  <Grid> <FormControl fullWidth variant="standard">
       <Select
          multiple
          value={[AdultState , ChildState]}
          MenuProps={MenuProps}
          renderValue={() => `Adult : ${AdultState} , Child : ${ChildState}`}
          input={ <OutlinedInput sx={{'&.MuiInputBase-root':{backgroundColor:'#FFF !important' , color:'#808080' ,'& .MuiSelect-select':{padding:'8.5px 32px 8.5px 14px' ,width:'166px'}}}}/>}
        >
          <Grid container direction='column' spacing={2}  >
     <Grid container item xs={15} direction='column' ><Grid sx={{paddingBottom:'8px' ,  paddingLeft:'8px'}}><Typography color='#FFF' variant='p'>Adult</Typography></Grid>  <Grid> <StyledTextField  onChange={(e) => e.target.value>0?setAdultState(e.target.value):setAdultState(0) } type='number' sx={{width:'200px' , margin:'auto'}} value={AdultState}   size="small" id="outlined-basic" variant="outlined" placeholder="# of Adult" /></Grid></Grid>
     <Grid container item xs={15} direction='column' ><Grid sx={{paddingBottom:'8px' ,  paddingLeft:'8px'}}><Typography color='#FFF' variant='p'>Child</Typography></Grid>  <Grid> <StyledTextField  onChange={(e) => e.target.value>0?setChildState(e.target.value):setChildState(0) } type='number' sx={{width:'200px' , margin:'auto'}} value={ChildState}   size="small" id="outlined-basic" variant="outlined" placeholder="# of Child" /></Grid></Grid>
     </Grid>
        </Select>
        </FormControl></Grid></Grid>
     <Grid alignContent='space-around' container item xs={15} sm={2} lg={2} direction='column'><Grid sx={{paddingBottom:'8px'}}><Typography fontSize='14px' color='#FFF' variant='p'>Search</Typography></Grid><Grid><Button  sx={{ backgroundColor:'button.main'}} type='submit'><SearchIcon style={{color:'#FFF', fontSize:'1.8rem'}}/></Button></Grid></Grid>
      </Grid>      
      {data === null || data === undefined ? '':data.map(element => {return  <Grid  item xs={12} sm={6} md={4} lg={3} sx={{textAlign:'center'}}> <HotelCard name={element.hotelname} startingPrice={element.starting_price} images={element.images} clickFunction={() => router.push({pathname:`/hotel/${element.id}`})} /> </Grid>}  )}

        </Grid>  
        </form>
        </StyledContainer>
    );
}

HotelListing.getLayout = function getLayout(HotelListing) {
    return (
      <CustomerLayout>
        {HotelListing}
      </CustomerLayout>
    )
  }
  