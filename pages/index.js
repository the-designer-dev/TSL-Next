import { useState } from "react";
import { Box, Button, Grid, OutlinedInput, TextField, Typography } from "@mui/material";
import { useDispatch } from 'react-redux';
import { setDestination ,setCheckIn,setCheckOut,setAdult,setChild} from "../redux/hotelQuery";
import StyledTextField from '../styledComponents/styledTextField'
import StyledContainer from "../styledComponents/styledContainer";
import SearchIcon from '@mui/icons-material/Search';
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import CustomerLayout2 from "../components/customerLayout2";
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/router';
import DateRangePicker from '@mui/lab/DateRangePicker';
import { useTheme } from "@mui/material";
import { useRef } from "react";
import { useMediaQuery } from "@mui/material";
import MobileMenu from "../components/mobileMenu";
import { Autocomplete } from "@mui/material";
export default function Home() {
  const [checkIn , setCheckInState] = useState(null)
  const [checkOut , setCheckOutState] = useState(null)
  const [destination , setDestinationState] = useState(null)
  const [adult , setAdultState] = useState(0)
  const [child , setChildState] = useState(0)
  const [value, setValue] = useState([null, null]);
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [focused1, setFocused1] = useState(false)
  const [focused2, setFocused2] = useState(false)
  const [focused3, setFocused3] = useState(false)
  const [focused4, setFocused4] = useState(false)
  const text1Ref = useRef(null)
  const text2Ref = useRef(null)
  const text3Ref = useRef(null)
  const text4Ref = useRef(null)
  const buttonRef = useRef(null)
  const dispatch = useDispatch()
  const router = useRouter();
  const theme = useTheme()
  const mobile = useMediaQuery('(min-width:870px)')

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

  const handleClose = () => {
    setTimeout(() => {
      setFocused(5)
      buttonRef.current.focus()  }, 0);
  };



  const MenuProps = {
    PaperProps: {
      sx: {
        backgroundColor: `${theme.palette.background.main}`,
        width: 210,
        marginTop:'10px'
      },    
    },  
  };



  function setFocused(num){
    setFocused1(num === 1)
    setFocused2(num === 2)
    setFocused3(num === 3)
    setFocused4(num === 4)
  }
  return (
    <Box sx={{height:'calc( 100vh - 77px )' , overflow:'hidden'}}>
       <form style={{display:'inherit'}} onSubmit={(e) => handleSubmit(e)}>
    <StyledContainer sx={{ backgroundRepeat:'round' , backgroundImage:`url(/Banner-Home.jpg)` , display:'flex' , flexDirection:'column'  ,justifyContent:'space-around' , minHeight:'calc(100vh - 77px) !important' }} square={true}>
     <Grid container spacing={5}  columns={15}>
     {mobile?
     <>
      <Grid container item justifyContent="center" alignItems="center" direction='row' xs={15}> 
      <Typography sx={{padding:'0px 10px'}} fontWeight={600} color='#FEFEFE' variant="h1">Your</Typography><Typography sx={{padding:'0px 10px'}} fontWeight={600} color='#FEFEFE' variant="h1">Online</Typography>
     <Typography sx={{padding:'0px 10px'}} fontWeight={600} color='#FEFEFE' variant="h1" fontFamily='Breathing'>Travelling</Typography><Typography sx={{padding:'0px 10px'}} fontWeight={600} color='#FEFEFE' variant="h1">Partner</Typography></Grid>
 <Grid container item spacing={2} direction='column' alignItems="center" justifyContent='space-evenly' sx={{textAlign:'left'}} >
      <Box sx={{display:'flex', backgroundColor:'#FEFEFE' , borderRadius:'50px' , marginTop:'30px' , overflow:'hidden'}}>
      <Button disableRipple onClick={() => {setFocused(1) ; text1Ref.current.focus() ; setValue([null,null]) }}  sx={focused1?{backgroundColor:'#EBEBEB' , boxShadow: '0px 0px 56px 18px rgba(0,0,0,0.25)'}:''} className='textField1'><Typography color='#000' fontSize={12} fontWeight={500} variant='p'>Destination</Typography>  <StyledTextField   onKeyPress={(ev) => {if (ev.key === 'Enter') { ev.preventDefault();setFocused(2) ;text2Ref.current.focus()  ; setValue([null,null])}}} inputRef={text1Ref} sx={{'& .MuiOutlinedInput-input':{padding:'0px'},'&.MuiTextField-root':{backgroundColor:'inherit'} ,'& .MuiOutlinedInput-notchedOutline': {borderWidth:'0px'} ,'& .MuiOutlinedInput-root': {'&.Mui-focused':{'& .MuiOutlinedInput-notchedOutline':{border:'none'}}}}} required onChange={(e) => setDestinationState(e.target.value)}  size="small" id="outlined-basic" variant="outlined" placeholder="Where are you going?" /></Button>
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
            <Button disableRipple onClick={() => {setFocused(2) ;text2Ref.current.focus()}}  sx={focused2?{backgroundColor:'#EBEBEB' , boxShadow: '0px 0px 56px 18px rgba(0,0,0,0.25)'}:''} className='textField2'><Typography color='#000' fontSize={12} fontWeight={500} variant='p'>Check In</Typography>  <StyledTextField  inputRef={text2Ref} {...startProps} sx={{'& .MuiOutlinedInput-input':{padding:'0px'},'&.MuiTextField-root':{backgroundColor:'inherit'} ,'& .MuiOutlinedInput-notchedOutline': {borderWidth:'0px'} ,'& .MuiOutlinedInput-root': {'&.Mui-focused':{'& .MuiOutlinedInput-notchedOutline':{border:'none'}}}}} required value={checkIn}   size="small" id="outlined-basic" variant="outlined"  /></Button>
            <Button disableRipple onClick={() => {setFocused(2) ;text2Ref.current.focus()}} sx={focused3?{backgroundColor:'#EBEBEB' , boxShadow: '0px 0px 56px 18px rgba(0,0,0,0.25)'}:''} className='textField3'><Typography color='#000' fontSize={12} fontWeight={500} variant='p'>Check Out</Typography>  <StyledTextField  inputRef={text3Ref} {...endProps} sx={{'& .MuiOutlinedInput-input':{padding:'0px'},'&.MuiTextField-root':{backgroundColor:'inherit'} ,'& .MuiOutlinedInput-notchedOutline': {borderWidth:'0px'} ,'& .MuiOutlinedInput-root': {'&.Mui-focused':{'& .MuiOutlinedInput-notchedOutline':{border:'none'}}}}} required value={checkOut}  size="small" id="outlined-basic" variant="outlined"  /></Button>
          </>
        )}
      />
      <Button disableRipple onClick={() => {focused4?'' :setFocused(4)}}  sx={focused4?{backgroundColor:'#EBEBEB' , boxShadow: '0px 0px 56px 18px rgba(0,0,0,0.25)'}:''} className='textField4'><Typography color='#000' fontSize={12} fontWeight={500} variant='p'>Guests</Typography>  <FormControl fullWidth variant="standard">
       <Select
          multiple
          value={[adult , child]}
          MenuProps={MenuProps}
          open={focused4}
          onClose={handleClose}
          onOpen={() => setFocused4(true)}
          renderValue={() => `Adult : ${adult} , Child : ${child}`}
          input={ <OutlinedInput inputRef={text4Ref} sx={{'& .MuiOutlinedInput-notchedOutline':{border:'0px'},'&.MuiInputBase-root':{backgroundColor:'inherit' ,padding:'0px', color:'#b3b3b3' ,'& .MuiSelect-select':{padding:'0px' ,width:'167px' , textAlign:'left' }}}}/>}
        >
          <Grid container direction='column' spacing={2}  >
     <Grid container item xs={15} direction='column' ><Grid sx={{paddingBottom:'8px', paddingLeft:'8px'}}><Typography color='#FFF' variant='p'>Adult</Typography></Grid>  <Grid container item> <StyledTextField  onChange={(e) => e.target.value>0?setAdultState(e.target.value): setAdultState(0)} type='number'  value={adult}  size="small" id="outlined-basic" variant="outlined"  sx={{width:'200px' , margin:'auto'}} placeholder="# of Adult" /></Grid></Grid>
     <Grid container item xs={15} direction='column' ><Grid sx={{paddingBottom:'8px', paddingLeft:'8px'}}><Typography color='#FFF' variant='p'>Child</Typography></Grid>  <Grid container item> <StyledTextField  onChange={(e) => e.target.value>0?setChildState(e.target.value): setChildState(0)} type='number' value={child}  size="small" id="outlined-basic" variant="outlined"  sx={{width:'200px' , margin:'auto'}} placeholder="# of Child" /></Grid></Grid>
     </Grid>
        </Select>
        </FormControl></Button>
        <Grid sx={{display:'flex' , alignItems:'center' , justifyContent:'center' }} item><Button type='submit' ref={buttonRef} sx={{marginRight:'5px' ,height:'90%' , width:'90%',backgroundColor:'button.main',borderRadius:'50%','&:hover':{backgroundColor:'button.main',boxShadow: '0px 0px 56px 18px rgba(0,0,0,0.25)'}}} type='submit' ><SearchIcon style={{color:'#FFF', fontSize:'1.8rem'}}/></Button></Grid>

      </Box>
      <Box sx={{marginTop:'10px' ,padding:'20px' , backgroundColor:'background.main' , borderRadius:'10px' , minWidth:'890px' }}>
saddas
      </Box>
      </Grid>
      </>:<>
      <Grid container item justifyContent="center" alignItems="center" direction='row' xs={15}> 
      <Typography sx={{padding:'0px 10px'}} fontWeight={600} color='#FEFEFE' variant="h1">Your</Typography><Typography sx={{padding:'0px 10px'}} fontWeight={600} color='#FEFEFE' variant="h1">Online</Typography>
     <Typography sx={{padding:'0px 10px'}} fontWeight={600} color='#FEFEFE' variant="h1" fontFamily='Breathing'>Travelling</Typography><Typography sx={{padding:'0px 10px'}} fontWeight={600} color='#FEFEFE' variant="h1">Partner</Typography></Grid>
 <Grid container item spacing={2} direction='row' alignItems="flex-end" justifyContent='space-evenly' sx={{textAlign:'left' }} >
      <Box sx={{width:'100%' , marginTop:'30px' , marginLeft:'16px'}}>
        <Button onClick={() => setShowMobileMenu(true)}  sx={{width:'100%' ,backgroundColor:'button.main' , borderRadius:'50px' , padding:'5px 20px', '&.MuiButton-root':{'&:hover':{backgroundColor:'button.main'}}}}><SearchIcon/> Where are you going?</Button>
      </Box>
      <MobileMenu open={showMobileMenu} closeMenu={() => setShowMobileMenu(false)}/>
      </Grid>
      </>
      }
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
