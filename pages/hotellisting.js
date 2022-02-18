import {React , useEffect, useState} from 'react';
import StyledContainer from '../styledComponents/styledContainer';
import { Grid , Typography , TextField ,  Button, OutlinedInput , Box  } from '@mui/material';
import CustomerLayout from '../components/customerLayout';
import SearchIcon from '@mui/icons-material/Search';
import { DatePicker , DateRangePicker } from "@mui/lab";
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
import { useRef } from 'react';

const fetch = (destination,checkin,checkout,adult,child) => axios({
    method: "post",
    url: API_URL+ '/filter-hotels',
    data:{city:destination,checkindate:checkin,checkoutdate:checkout,adult:parseInt(adult) ,child:parseInt(child)} } ).then(res => res.data)
    
export default function HotelListing(props) {
    const router = useRouter();
    const [value , setValue] = useState([moment(useSelector(state => state.hotelquery.checkIn) , 'YYYY-MM-DD'),moment(useSelector(state => state.hotelquery.checkOut) , 'YYYY-MM-DD')])  
    const [DestinationState ,  setDestinationState] = useState(useSelector(state => state.hotelquery.destination) )
    const [CheckInState , setCheckInState] = useState(moment(useSelector(state => state.hotelquery.checkIn) , 'YYYY-MM-DD')  )
    const [CheckOutState , setCheckOutState] = useState(moment(useSelector(state => state.hotelquery.checkOut) , 'YYYY-MM-DD') )
    const [AdultState , setAdultState] = useState(useSelector(state => state.hotelquery.adult) )
    const [ChildState , setChildState] = useState(useSelector(state => state.hotelquery.child) )
    const checkoutCheck = useSelector(state => state.hotelquery.checkOut)
    var reqData = [useSelector(state => state.hotelquery.destination),useSelector(state => state.hotelquery.checkIn),useSelector(state => state.hotelquery.checkOut),useSelector(state => state.hotelquery.adult), useSelector(state => state.hotelquery.child)]
    const dispatch = useDispatch()
    const { data, error } = useSWR(reqData, fetch )
    const [focused1, setFocused1] = useState(false)
    const [focused2, setFocused2] = useState(false)
    const [focused3, setFocused3] = useState(false)
    const [focused4, setFocused4] = useState(false)
    const text1Ref = useRef(null)
    const text2Ref = useRef(null)
    const text3Ref = useRef(null)
    const text4Ref = useRef(null)
    const buttonRef = useRef(null)

  const handleClose = () => {
    setTimeout(() => {
      setFocused(5)
      buttonRef.current.focus()  }, 0);
  };




  function setFocused(num){
    setFocused1(num === 1)
    setFocused2(num === 2)
    setFocused3(num === 3)
    setFocused4(num === 4)
  }
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
        console.log(sessionStorage)
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
           width: 200
         },    
       },  
     };
    return (
        
        <StyledContainer square={true}>
            
          <form style={{display:'inherit'}} onSubmit={(e) => handleSubmit(e)}>
          <Grid container spacing={3}>
          <Grid container item spacing={2} direction='row' alignItems="flex-end" justifyContent='space-evenly' sx={{textAlign:'left'}} >
      <Box sx={{display:'flex', backgroundColor:'#FEFEFE' , borderRadius:'50px' , marginTop:'30px' , overflow:'hidden'}}>
      <Button disableRipple onClick={() => {setFocused(1) ; text1Ref.current.focus() ; setValue([null,null]) }}  sx={focused1?{backgroundColor:'#EBEBEB' , boxShadow: '0px 0px 56px 18px rgba(0,0,0,0.25)'}:''} className='textField1'><Typography color='#000' fontSize={12} fontWeight={500} variant='p'>Destination</Typography>  <StyledTextField  value={DestinationState} onKeyPress={(ev) => {if (ev.key === 'Enter') { ev.preventDefault();setFocused(2) ;text2Ref.current.focus()  ; setValue([null,null])}}} inputRef={text1Ref} sx={{'& .MuiOutlinedInput-input':{padding:'0px'},'&.MuiTextField-root':{backgroundColor:'inherit'} ,'& .MuiOutlinedInput-notchedOutline': {borderWidth:'0px'} ,'& .MuiOutlinedInput-root': {'&.Mui-focused':{'& .MuiOutlinedInput-notchedOutline':{border:'none'}}}}} required onChange={(e) => setDestinationState(e.target.value)}  size="small" id="outlined-basic" variant="outlined" placeholder="Where are you going?" /></Button>
      <DateRangePicker
        value={value}
        startText=""
        className='dateRange'
        endText=""

        onChange={(newValue) => {
          setFocused(3) 
          text3Ref.current.focus()
          setValue(newValue)
          setCheckInState(newValue[0])
          setCheckOutState(newValue[1])
        }}
        onAccept={() => {setFocused(4) ; text3Ref.current.blur()}}
        renderInput={(startProps, endProps) => (
          <>
            <Button disableRipple onClick={() => {setFocused(2) ;text2Ref.current.focus()}}  sx={focused2?{backgroundColor:'#EBEBEB' , boxShadow: '0px 0px 56px 18px rgba(0,0,0,0.25)'}:''} className='textField2'><Typography color='#000' fontSize={12} fontWeight={500} variant='p'>Check In</Typography>  <StyledTextField  inputRef={text2Ref} {...startProps} sx={{'& .MuiOutlinedInput-input':{padding:'0px'},'&.MuiTextField-root':{backgroundColor:'inherit'} ,'& .MuiOutlinedInput-notchedOutline': {borderWidth:'0px'} ,'& .MuiOutlinedInput-root': {'&.Mui-focused':{'& .MuiOutlinedInput-notchedOutline':{border:'none'}}}}} required value={CheckInState}   size="small" id="outlined-basic" variant="outlined"  /></Button>
            <Button disableRipple onClick={() => {setFocused(2) ;text2Ref.current.focus()}} sx={focused3?{backgroundColor:'#EBEBEB' , boxShadow: '0px 0px 56px 18px rgba(0,0,0,0.25)'}:''} className='textField3'><Typography color='#000' fontSize={12} fontWeight={500} variant='p'>Check Out</Typography>  <StyledTextField  inputRef={text3Ref} {...endProps} sx={{'& .MuiOutlinedInput-input':{padding:'0px'},'&.MuiTextField-root':{backgroundColor:'inherit'} ,'& .MuiOutlinedInput-notchedOutline': {borderWidth:'0px'} ,'& .MuiOutlinedInput-root': {'&.Mui-focused':{'& .MuiOutlinedInput-notchedOutline':{border:'none'}}}}} required value={CheckOutState}  size="small" id="outlined-basic" variant="outlined"  /></Button>
          </>
        )}
      />
      <Button disableRipple onClick={() => {focused4?'' :setFocused(4)}}  sx={focused4?{backgroundColor:'#EBEBEB' , boxShadow: '0px 0px 56px 18px rgba(0,0,0,0.25)'}:''} className='textField4'><Typography color='#000' fontSize={12} fontWeight={500} variant='p'>Guests</Typography>  <FormControl fullWidth variant="standard">
       <Select
          multiple
          value={[AdultState , ChildState]}
          MenuProps={MenuProps}
          open={focused4}
          onClose={handleClose}
          onOpen={() => setFocused4(true)}
          renderValue={() => `Adult : ${AdultState} , Child : ${ChildState}`}
          input={ <OutlinedInput inputRef={text4Ref} sx={{'& .MuiOutlinedInput-notchedOutline':{border:'0px'},'&.MuiInputBase-root':{backgroundColor:'inherit' ,padding:'0px', color:'#b3b3b3' ,'& .MuiSelect-select':{padding:'0px' ,width:'167px' , textAlign:'left' }}}}/>}
        >
          <Grid container direction='column' spacing={2}  >
     <Grid container item xs={15} direction='column' ><Grid sx={{paddingBottom:'8px', paddingLeft:'8px'}}><Typography color='#FFF' variant='p'>Adult</Typography></Grid>  <Grid container item> <StyledTextField  onChange={(e) => e.target.value>0?setAdultState(e.target.value): setAdultState(0)} type='number'  value={AdultState}  size="small" id="outlined-basic" variant="outlined"  sx={{width:'200px' , margin:'auto'}} placeholder="# of Adult" /></Grid></Grid>
     <Grid container item xs={15} direction='column' ><Grid sx={{paddingBottom:'8px', paddingLeft:'8px'}}><Typography color='#FFF' variant='p'>Child</Typography></Grid>  <Grid container item> <StyledTextField  onChange={(e) => e.target.value>0?setChildState(e.target.value): setChildState(0)} type='number' value={ChildState}  size="small" id="outlined-basic" variant="outlined"  sx={{width:'200px' , margin:'auto'}} placeholder="# of Child" /></Grid></Grid>
     </Grid>
        </Select>
        </FormControl></Button>
        <Grid sx={{display:'flex' , alignItems:'center' , justifyContent:'center' }} item><Button ref={buttonRef} sx={{marginRight:'5px' ,height:'90%' , width:'90%',backgroundColor:'button.main',borderRadius:'50%','&:hover':{backgroundColor:'button.main',boxShadow: '0px 0px 56px 18px rgba(0,0,0,0.75)'}}} type='submit' ><SearchIcon style={{color:'#FFF', fontSize:'1.8rem'}}/></Button></Grid>

      </Box>
      </Grid>
          {/* <Grid container item spacing={2} direction='row' alignItems="flex-end" justifyContent='space-evenly' columns={15} sx={{textAlign:'left'}} >
     <Grid alignContent='space-around' container item xs={12} sm={4}  lg={2} direction='column' ><Grid sx={{paddingBottom:'8px'}}><Typography fontSize='14px' color='#FFF' variant='p'>Destination</Typography></Grid>  <Grid> <StyledTextField value={DestinationState} onChange={(e) => setDestinationState(e.target.value)} size="small" id="outlined-basic" variant="outlined" placeholder="Where are you going?" /></Grid></Grid>
     <Grid alignContent='space-around' container item xs={12} sm={4}  lg={2} direction='column' ><Grid sx={{paddingBottom:'8px'}}><Typography fontSize='14px' color='#FFF' variant='p'>Check In</Typography></Grid>  <Grid> <DatePicker value={CheckInState} onChange={(newValue) => {setCheckInState(newValue)}} renderInput={(params) => <TextField sx={{'& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{color:'#000'},'& .MuiInputAdornment-root':{'& .MuiButtonBase-root':{'& .MuiSvgIcon-root':{color:'button.main'}}}} , backgroundColor:'#FFF' , borderRadius:'5px' }} size="small" variant="outlined" placeholder="MM/DD/YYYY" {...params} />}/></Grid></Grid>
     <Grid alignContent='space-around' container item xs={12} sm={4}  lg={2} direction='column' ><Grid sx={{paddingBottom:'8px'}}><Typography fontSize='14px' color='#FFF' variant='p'>Check Out</Typography></Grid>  <Grid> <DatePicker value={CheckOutState} onChange={(newValue) => {setCheckOutState(newValue)}} renderInput={(params) => <TextField sx={{'& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{color:'#000'},'& .MuiInputAdornment-root':{'& .MuiButtonBase-root':{'& .MuiSvgIcon-root':{color:'button.main'}}}} , backgroundColor:'#FFF' , borderRadius:'5px' }} size="small" variant="outlined" placeholder="MM/DD/YYYY" {...params} />}/></Grid></Grid>
     <Grid alignContent='space-around' container item xs={12} sm={4}  lg={2} direction='column' ><Grid sx={{paddingBottom:'8px'}}><Typography fontSize='14px' color='#FFF' variant='p'>Guests</Typography></Grid>  <Grid> <FormControl fullWidth variant="standard">
       <Select
          multiple
          required
          value={[AdultState , ChildState]}
          MenuProps={MenuProps}
          renderValue={() => `Adult : ${AdultState} , Child : ${ChildState}`}
          input={ <OutlinedInput sx={{'&.MuiInputBase-root':{backgroundColor:'#FFF !important' , color:'#808080' ,'& .MuiSelect-select':{padding:'8.5px 32px 8.5px 14px' ,width:'166px'}}}}/>}
        >
          <Grid container direction='column' spacing={2} justifyContent={'center'} alignItems='center' >
     <Grid container item xs={15}  direction='column' ><Grid sx={{paddingBottom:'8px' ,  paddingLeft:'8px' }}><Typography color='#FFF' variant='p'>Adult</Typography></Grid>  <Grid item sx={{display:'flex'}}> <StyledTextField  onChange={(e) => e.target.value>0?setAdultState(e.target.value):setAdultState(0) } type='number' sx={{width:'200px' }} value={AdultState}   size="small" id="outlined-basic" variant="outlined" placeholder="# of Adult" /></Grid></Grid>
     <Grid container item xs={15}  direction='column' ><Grid sx={{paddingBottom:'8px' ,  paddingLeft:'8px' }}><Typography color='#FFF' variant='p'>Child</Typography></Grid>  <Grid item sx={{display:'flex'}}> <StyledTextField  onChange={(e) => e.target.value>0?setChildState(e.target.value):setChildState(0) } type='number' sx={{width:'200px' }} value={ChildState}   size="small" id="outlined-basic" variant="outlined" placeholder="# of Child" /></Grid></Grid>
     </Grid>
        </Select>
        </FormControl></Grid></Grid>
     <Grid alignContent='space-around' container item xs={15} sm={2} lg={2} direction='column'><Grid sx={{paddingBottom:'8px'}}><Typography fontSize='14px' color='#FFF' variant='p'>Search</Typography></Grid><Grid><Button  sx={{ backgroundColor:'button.main'}} type='submit'><SearchIcon style={{color:'#FFF', fontSize:'1.8rem'}}/></Button></Grid></Grid>
      </Grid>       */}
      {data === null || data === undefined ? '':data.map(element => {return  <Grid  item xs={12} sm={6} md={4} lg={3} sx={{textAlign:'center'}}> <HotelCard name={element.hotelname} buttonText={'View Details'} icons={[...element.facilities,...element.amenities]} startingPrice={element.starting_price} images={element.images} clickFunction={() => router.push({pathname:`/hotel/${element.id}`})} /> </Grid>}  )}

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
  