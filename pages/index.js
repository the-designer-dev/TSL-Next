import { useState , useEffect } from "react";
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

export default function Home() {
  const [checkIn , setCheckInState] = useState(null)
  const [checkOut , setCheckOutState] = useState(null)
  const [destination , setDestinationState] = useState('')
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
  const container = useRef(null)
  const dispatch = useDispatch()
  const router = useRouter();
  const theme = useTheme()
  const mobile = useMediaQuery('(min-width:870px)')
  const [options , setOptions] = useState([])

  var citiesArr = ["Abbottabad","Adezai","Ali Bandar","Amir Chah","Attock","Ayubia","Bahawalpur","Baden","Bagh","Bahawalnagar","Burewala","Banda Daud Shah","Bannu district|Bannu","Batagram","Bazdar","Bela","Bellpat","Bhag","Bhakkar","Bhalwal","Bhimber","Birote","Buner","Burj","Chiniot","Chachro","Chagai","Chah Sandan","Chailianwala","Chakdara","Chakku","Chakwal","Chaman","Charsadda","Chhatr","Chichawatni","Chitral","Dadu","Dera Ghazi Khan","Dera Ismail Khan", "Dalbandin","Dargai","Darya Khan","Daska","Dera Bugti","Dhana Sar","Digri","Dina City|Dina","Dinga",", Pakistan|Diplo","Diwana","Dokri","Drosh","Duki","Dushi","Duzab","Faisalabad","Fateh Jang","Ghotki","Gwadar","Gujranwala","Gujrat","Gadra","Gajar","Gandava","Garhi Khairo","Garruck","Ghakhar Mandi","Ghanian","Ghauspur","Ghazluna","Girdan","Gulistan","Gwash","Hyderabad","Hala","Haripur","Hab Chauki","Hafizabad","Hameedabad","Hangu","Harnai","Hasilpur","Haveli Lakha","Hinglaj","Hoshab","Islamabad","Islamkot","Ispikan","Jacobabad","Jamshoro","Jhang","Jhelum","Jamesabad","Jampur","Janghar","Jati(Mughalbhin)","Jauharabad","Jhal","Jhal Jhao","Jhatpat","Jhudo","Jiwani","Jungshahi","Karachi","Kotri","Kalam","Kalandi","Kalat","Kamalia","Kamararod","Kamber","Kamokey","Kanak","Kandi","Kandiaro","Kanpur","Kapip","Kappar","Karak City","Karodi","Kashmor","Kasur","Katuri","Keti Bandar","Khairpur","Khanaspur","Khanewal","Kharan","kharian","Khokhropur","Khora","Khushab","Khuzdar","Kikki","Klupro","Kohan","Kohat","Kohistan","Kohlu","Korak","Korangi","Kot Sarae","Kotli","Lahore","Larkana","Lahri","Lakki Marwat","Lasbela","Latamber","Layyah","Leiah","Liari","Lodhran","Loralai","Lower Dir","Shadan Lund","Multan","Mandi Bahauddin","Mansehra","Mian Chanu","Mirpur",", Pakistan|Moro","Mardan","Mach","Madyan","Malakand","Mand","Manguchar","Mashki Chah","Maslti","Mastuj","Mastung","Mathi","Matiari","Mehar","Mekhtar","Merui","Mianwali","Mianez","Mirpur Batoro","Mirpur Khas","Mirpur Sakro","Mithi","Mongora","Murgha Kibzai","Muridke","Musa Khel Bazar","Muzaffar Garh","Muzaffarabad","Nawabshah","Nazimabad","Nowshera","Nagar Parkar","Nagha Kalat","Nal","Naokot","Nasirabad","Nauroz Kalat","Naushara","Nur Gamma","Nushki","Nuttal","Okara","Ormara","Peshawar","Panjgur","Pasni City","Paharpur","Palantuk","Pendoo","Piharak","Pirmahal","Pishin","Plandri","Pokran","Pounch","Quetta","Qambar","Qamruddin Karez","Qazi Ahmad","Qila Abdullah","Qila Ladgasht","Qila Safed","Qila Saifullah","Rawalpindi","Rabwah","Rahim Yar Khan","Rajan Pur","Rakhni","Ranipur","Ratodero","Rawalakot","Renala Khurd","Robat Thana","Rodkhan","Rohri","Sialkot","Sadiqabad","Safdar Abad- (Dhaban Singh)","Sahiwal","Saidu Sharif","Saindak","Sakrand","Sanjawi","Sargodha","Saruna","Shabaz Kalat","Shadadkhot","Shahbandar","Shahpur","Shahpur Chakar","Shakargarh","Shangla","Sharam Jogizai","Sheikhupura","Shikarpur","Shingar","Shorap","Sibi","Sohawa","Sonmiani","Sooianwala","Spezand","Spintangi","Sui","Sujawal","Sukkur","Suntsar","Surab","Swabi","Swat","Tando Adam","Tando Bago","Tangi","Tank City","Tar Ahamd Rind","Thalo","Thatta","Toba Tek Singh","Tordher","Tujal","Tump","Turbat","Umarao","Umarkot","Upper Dir","Uthal","Vehari","Veirwaro","Vitakri","Wadh","Wah Cantt","Warah","Washap","Wasjuk","Wazirabad","Yakmach","Zhob","Other"]

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

  useEffect(() => {
    function handleClickOutside(event) {
      if (container.current && !container.current.contains(event.target)) {
          setFocused(5)
      }
  }

  // Bind the event listener
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
  };
  })

  const MenuProps = {
    PaperProps: {
      sx: {
        backgroundColor: `${theme.palette.background.main}`,
        width: 210,
        marginTop:'10px'
      },    
    },  
  };


  useEffect(() => {
    setOptions(citiesArr.filter(el => el.toLowerCase().includes(destination.toLowerCase())))
  } , [destination])

  function setFocused(num){
    setFocused1(num === 1)
    setFocused2(num === 2)
    setFocused3(num === 3)
    setFocused4(num === 4)}
  return (
    <Box sx={{height:'calc( 100vh - 77px )' , overflow:'hidden' , position:'relative'}}>
       <form autocomplete="off" style={{display:'inherit'}} onSubmit={(e) => handleSubmit(e)}>
    <StyledContainer  sx={{ backgroundRepeat:'round' , backgroundImage:`url(/Banner-Home.jpg)` , display:'flex' , flexDirection:'column'  ,justifyContent:'space-around' , minHeight:'calc(100vh - 77px) !important' }} square={true}>
     <Grid container spacing={5}  columns={15}>
     {mobile?
     <>
      <Grid container item justifyContent="center" alignItems="center" direction='row' xs={15}> 
      <Typography sx={{padding:'0px 10px'}} fontWeight={600} color='#FEFEFE' variant="h1">Your</Typography><Typography sx={{padding:'0px 10px'}} fontWeight={600} color='#FEFEFE' variant="h1">Online</Typography>
     <Typography sx={{padding:'0px 10px'}} fontWeight={600} color='#FEFEFE' variant="h1" fontFamily='Breathing'>Travelling</Typography><Typography sx={{padding:'0px 10px'}} fontWeight={600} color='#FEFEFE' variant="h1">Partner</Typography></Grid>
 <Grid ref={container} container item spacing={2} direction='column' alignItems="center" justifyContent='space-evenly' sx={{textAlign:'left'}} >
      <Box   sx={{display:'flex', backgroundColor:'#FEFEFE' , borderRadius:'50px' , marginTop:'30px' , overflow:'hidden'}}>
      <Button disableRipple onClick={() => {setFocused(1) ; text1Ref.current.focus() ; setValue([null,null]) }}  sx={focused1?{backgroundColor:'#EBEBEB' , boxShadow: '0px 0px 56px 18px rgba(0,0,0,0.25)'}:''} className='textField1'><Typography color='#000' fontSize={12} fontWeight={500} variant='p'>Destination</Typography>  <StyledTextField   onKeyPress={(ev) => {if (ev.key === 'Enter') { ev.preventDefault();setFocused(2) ;text2Ref.current.focus()  ; setValue([null,null])}}} value={destination} inputRef={text1Ref} sx={{'& .MuiOutlinedInput-input':{padding:'0px'},'&.MuiTextField-root':{backgroundColor:'inherit'} ,'& .MuiOutlinedInput-notchedOutline': {borderWidth:'0px'} ,'& .MuiOutlinedInput-root': {'&.Mui-focused':{'& .MuiOutlinedInput-notchedOutline':{border:'none'}}}}} required onChange={(e) => setDestinationState(e.target.value)}  size="small" id="outlined-basic" variant="outlined" placeholder="Where are you going?" /></Button>
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
      {focused1 &&<Box className='cities' sx={{marginTop:'10px' ,padding:'20px' , backgroundColor:'background.main' , borderRadius:'10px' , width:'890px' , maxHeight:'25vh' , overflow:'scroll' , overflowX:'hidden' }}>
      {options.map(el => (
            <Button fullWidth onClick={() => {setDestinationState(el); setFocused(2);text2Ref.current.focus()  ; setValue([null,null])}} sx={{justifyContent:'left' , borderBottom:'1px solid #2e3f5b' , borderRadius:'0px' }} >{el}</Button>
          ))}
      </Box>}
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