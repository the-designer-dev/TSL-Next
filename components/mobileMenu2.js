import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box, typography } from '@mui/system';
import { setDestination,setCheckIn , setCheckOut,setAdult , setChild } from '../redux/hotelQuery';
import React , {useState} from 'react';
import { ChevronLeftOutlined } from '@mui/icons-material';
import moment from 'moment';
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/router';
import StyledTextField from '../styledComponents/styledTextField'
import StyledButton from '../styledComponents/styledButton'
import {useDispatch} from 'react-redux'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { useEffect } from 'react';
function MobileMenu2(props) {
  var citiesArr = ["Abbottabad","Adezai","Ali Bandar","Amir Chah","Attock","Ayubia","Bahawalpur","Baden","Bagh","Bahawalnagar","Burewala","Banda Daud Shah","Bannu district|Bannu","Batagram","Bazdar","Bela","Bellpat","Bhag","Bhakkar","Bhalwal","Bhimber","Birote","Buner","Burj","Chiniot","Chachro","Chagai","Chah Sandan","Chailianwala","Chakdara","Chakku","Chakwal","Chaman","Charsadda","Chhatr","Chichawatni","Chitral","Dadu","Dera Ghazi Khan","Dera Ismail Khan", "Dalbandin","Dargai","Darya Khan","Daska","Dera Bugti","Dhana Sar","Digri","Dina City|Dina","Dinga",", Pakistan|Diplo","Diwana","Dokri","Drosh","Duki","Dushi","Duzab","Faisalabad","Fateh Jang","Ghotki","Gwadar","Gujranwala","Gujrat","Gadra","Gajar","Gandava","Garhi Khairo","Garruck","Ghakhar Mandi","Ghanian","Ghauspur","Ghazluna","Girdan","Gulistan","Gwash","Hyderabad","Hala","Haripur","Hab Chauki","Hafizabad","Hameedabad","Hangu","Harnai","Hasilpur","Haveli Lakha","Hinglaj","Hoshab","Islamabad","Islamkot","Ispikan","Jacobabad","Jamshoro","Jhang","Jhelum","Jamesabad","Jampur","Janghar","Jati(Mughalbhin)","Jauharabad","Jhal","Jhal Jhao","Jhatpat","Jhudo","Jiwani","Jungshahi","Karachi","Kotri","Kalam","Kalandi","Kalat","Kamalia","Kamararod","Kamber","Kamokey","Kanak","Kandi","Kandiaro","Kanpur","Kapip","Kappar","Karak City","Karodi","Kashmor","Kasur","Katuri","Keti Bandar","Khairpur","Khanaspur","Khanewal","Kharan","kharian","Khokhropur","Khora","Khushab","Khuzdar","Kikki","Klupro","Kohan","Kohat","Kohistan","Kohlu","Korak","Korangi","Kot Sarae","Kotli","Lahore","Larkana","Lahri","Lakki Marwat","Lasbela","Latamber","Layyah","Leiah","Liari","Lodhran","Loralai","Lower Dir","Shadan Lund","Multan","Mandi Bahauddin","Mansehra","Mian Chanu","Mirpur",", Pakistan|Moro","Mardan","Mach","Madyan","Malakand","Mand","Manguchar","Mashki Chah","Maslti","Mastuj","Mastung","Mathi","Matiari","Mehar","Mekhtar","Merui","Mianwali","Mianez","Mirpur Batoro","Mirpur Khas","Mirpur Sakro","Mithi","Mongora","Murgha Kibzai","Muridke","Musa Khel Bazar","Muzaffar Garh","Muzaffarabad","Nawabshah","Nazimabad","Nowshera","Nagar Parkar","Nagha Kalat","Nal","Naokot","Nasirabad","Nauroz Kalat","Naushara","Nur Gamma","Nushki","Nuttal","Okara","Ormara","Peshawar","Panjgur","Pasni City","Paharpur","Palantuk","Pendoo","Piharak","Pirmahal","Pishin","Plandri","Pokran","Pounch","Quetta","Qambar","Qamruddin Karez","Qazi Ahmad","Qila Abdullah","Qila Ladgasht","Qila Safed","Qila Saifullah","Rawalpindi","Rabwah","Rahim Yar Khan","Rajan Pur","Rakhni","Ranipur","Ratodero","Rawalakot","Renala Khurd","Robat Thana","Rodkhan","Rohri","Sialkot","Sadiqabad","Safdar Abad- (Dhaban Singh)","Sahiwal","Saidu Sharif","Saindak","Sakrand","Sanjawi","Sargodha","Saruna","Shabaz Kalat","Shadadkhot","Shahbandar","Shahpur","Shahpur Chakar","Shakargarh","Shangla","Sharam Jogizai","Sheikhupura","Shikarpur","Shingar","Shorap","Sibi","Sohawa","Sonmiani","Sooianwala","Spezand","Spintangi","Sui","Sujawal","Sukkur","Suntsar","Surab","Swabi","Swat","Tando Adam","Tando Bago","Tangi","Tank City","Tar Ahamd Rind","Thalo","Thatta","Toba Tek Singh","Tordher","Tujal","Tump","Turbat","Umarao","Umarkot","Upper Dir","Uthal","Vehari","Veirwaro","Vitakri","Wadh","Wah Cantt","Warah","Washap","Wasjuk","Wazirabad","Yakmach","Zhob","Other"]
  const [value, setValue] = useState([null, null]);
  const [destinationState,setDestinationState] = useState('')
  const[activeStep , setActiveStep] = useState(0)
  const dispatch = useDispatch();
  const [options , setOptions] = useState([])
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [adult , setAdultState] = useState(0)
  const [child , setChildState] = useState(0)
  const [focus, setFocus] = useState(START_DATE)
  const router = useRouter()
  const handleFocusChange = newFocus => {
    setFocus(newFocus || START_DATE)
  }
  useEffect(() => {
    setOptions(citiesArr.filter(el => el.toLowerCase().includes(destinationState.toLowerCase())))
  } , [destinationState])


  function handleSubmit(){
    dispatch(setDestination(destinationState))
    dispatch(setCheckIn(moment(startDate).format('YYYY-MM-DD')))
    dispatch(setCheckOut(moment(endDate).format('YYYY-MM-DD')))
    dispatch(setAdult(adult))
    dispatch(setChild(child))
    sessionStorage.setItem("destination", destinationState);
    sessionStorage.setItem("checkIn", moment(startDate).format('YYYY-MM-DD'));
    sessionStorage.setItem("checkOut", moment(endDate).format('YYYY-MM-DD'));
    sessionStorage.setItem("adult", adult);
    sessionStorage.setItem("child", child);
    cookieCutter.set('destination', destinationState)
    cookieCutter.set('checkIn', moment(startDate).format('YYYY-MM-DD'))
    cookieCutter.set('checkOut', moment(endDate).format('YYYY-MM-DD'))
    cookieCutter.set('adult', adult)
    cookieCutter.set('child', child)
    router.push({pathname:'/hotellisting'})
  }

    return (
        <Box className='mobileSearch' sx={{zIndex:'4', backgroundColor:'background.main' , display:props.open?'block':'none' , height:'100vh' , left:'-16px' , position:'absolute' , top:props.open?'0':'100%'   , transition:'top 0.5s' , width:'calc(100% + 16px)' }}>
        {activeStep ===0 &&
        <>
        <Button onClick={() => props.closeMenu()} sx={{height:'40px' ,position:'absolute', top:'80px' , left:'30px' , width:'41px',backgroundColor:'button.main' , borderRadius:'50px' , minWidth:'0px' ,padding:'5px', '&.MuiButton-root':{'& .MuiSvgIcon-root':{padding:'0px'},  '&:hover':{backgroundColor:'button.main'}} }}><ChevronLeftOutlined/></Button>   
        <StyledTextField sx={{position:'absolute', top:'80px' , left:'82px' , width:'calc(100vw - 86px)' }} required value={destinationState} onChange={(e) => setDestinationState(e.target.value)}  size="small" id="outlined-basic" variant="outlined" placeholder="Where are you going?" />
        <Box sx={{left:'77px' ,display:'flex' , flexDirection:'column',  overflow:'hidden',  top: '133px' ,position: 'absolute' , maxHeight:'80vh' , width:'calc(100% - 101px)'}}>
          {options.map(el => (
            <Button fullWidth onClick={() => {setDestinationState(el); setActiveStep(1)}} sx={{justifyContent:'left' , borderBottom:'1px solid #2e3f5b' , borderRadius:'0px' }} >{el}</Button>
          ))}
        </Box>
        </>
        }
        {activeStep ===1 &&
        <>
        <Button onClick={() => {setActiveStep(0)}} sx={{height:'40px' ,position:'absolute', top:'80px' , left:'30px' , width:'41px',backgroundColor:'button.main' , borderRadius:'50px' , minWidth:'0px' ,padding:'5px', '&.MuiButton-root':{'& .MuiSvgIcon-root':{padding:'0px'},  '&:hover':{backgroundColor:'button.main'}} }}><ChevronLeftOutlined/></Button>   
        <div style={{position:"absolute",top: "95px",

    left:'calc(50vw - 80px)',
    width:'calc(100% - 86px)'
}}>
          <Typography variant='h6' fontWeight={400} >When will you be there?</Typography>
          </div>
          <div style={{position:"absolute",top: "125px",
    display: "flex",
    flexDirection: "row",
    left: '16px',
    justifyContent: "center",
    width: "100%"
}}>
          <Typography variant='p' fontWeight={400} >{startDate ? format(startDate, 'dd MMM yyyy', { locale: enGB }) : ''} </Typography>
          <span style={{marginLeft:"5px", marginRight:"5px"}}>-</span>
          <Typography variant='p' fontWeight={400} > {endDate ? format(endDate, 'dd MMM yyyy', { locale: enGB }) : ' '}</Typography>
          </div>
          
          {/* <StaticDateRangePicker
    className="mobileCalendar"
displayStaticWrapperAs="desktop"
    value={value}
    calendars={1}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(startProps, endProps) => (
      <React.Fragment>
        <TextField {...startProps} />
        <Box sx={{ mx: 20 }}> to </Box>
        <TextField {...endProps} />
      </React.Fragment>
    )}
  /> */}
<Box className='mobileCalender'>
 <DateRangePickerCalendar
          month={new Date()}
          touchDragEnabled = {true}
          minimumDate={new Date()}
          startDate={startDate}
          endDate={endDate}
          focus={focus}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          onFocusChange={handleFocusChange}
          locale={enGB}
          
        />
</Box>
<StyledButton sx={{position: 'absolute' ,bottom: '35px' ,right: '10px'}} onClick={() => {setActiveStep(2)} }>Next</StyledButton>
        </>}
        {activeStep ===2 &&
        <>
        <Button onClick={() => setActiveStep(1)} sx={{height:'40px' ,position:'absolute', top:'80px' , left:'30px' , width:'41px',backgroundColor:'button.main' , borderRadius:'50px' , minWidth:'0px' ,padding:'5px', '&.MuiButton-root':{'& .MuiSvgIcon-root':{padding:'0px'},  '&:hover':{backgroundColor:'button.main'}} }}><ChevronLeftOutlined/></Button>   
        <div style={{position:"absolute",top: "87px",
left:'calc(50vw - 80px)',
width:'calc(100% - 86px)'
}}>
      <Typography variant='h6' fontWeight={400} >Enter the number of guests</Typography>
      </div>
      <Box sx={{
    left: '46px',
    right:'16px',
    position: 'absolute',
    top: '38%' }} >
      <Grid container columns={18} spacing={1}>
      <Grid xs={18} item>
        <Typography variant='p'>
          Adults
        </Typography>
      </Grid>
      <Grid xs={18} alignItems='center' spacing={2} direction='row' justifyContent='left' container item><Grid justifyContent='flex-end' alignContent='center' container item xs={2}> <Button onClick={()=>{(adult -1) >= 0? setAdultState(adult -1) : setAdultState(0)}} sx={{ padding:'0px',borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'26px !important'}}>-</Button></Grid> <Grid container item justifyContent={'flex-start'} sx={{textAlign:'center' , paddingLeft:'10px !important'}}  xs={14}> <StyledTextField defaultValue="0" value={adult} onChange={(e)=>{e.target.value > 0? setAdultState(e.target.value) : setAdultState(0)}} value={adult} id="outlined-name"  sx={{width:'100%' , boxSizing:'border-box !important' , '& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{flexFlow:'wrap' , height:'11px'}} }} fullWidth  type='number' /></Grid> <Grid justifyContent='flex-start' alignContent='center' sx={{paddingLeft:'10px !important'}} container item xs={2}> <Button onClick={()=> {  setAdultState(adult +1) }} sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , padding:'0px' ,minWidth:'26px !important'}}>+</Button></Grid></Grid>
      <Grid xs={18} item>
        <Typography variant='p'>
          Child
        </Typography>
      </Grid>
      <Grid xs={18} alignItems='center' spacing={2} direction='row' justifyContent='left' container item><Grid justifyContent='flex-end' alignContent='center' container item xs={2}> <Button onClick={()=>{(child -1) >= 0? setChildState(child -1) : setChildState(0)}} sx={{ padding:'0px',borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'26px !important'}}>-</Button></Grid> <Grid container item justifyContent={'flex-start'} sx={{textAlign:'center' , paddingLeft:'10px !important'}}  xs={14}> <StyledTextField defaultValue="0" value={child} onChange={(e)=>{e.target.value > 0? setChildState(e.target.value) : setChildState(0)}} value={child} id="outlined-name"  sx={{width:'100%' , boxSizing:'border-box !important' , '& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{flexFlow:'wrap' , height:'11px'}} }} fullWidth  type='number' /></Grid> <Grid justifyContent='flex-start' alignContent='center' sx={{paddingLeft:'10px !important'}} container item xs={2}> <Button onClick={()=> {  setChildState(child +1) }} sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , padding:'0px' ,minWidth:'26px !important'}}>+</Button></Grid></Grid>
      </Grid>
      </Box>
      <StyledButton sx={{position: 'absolute' ,bottom: '35px' ,right: '10px'}} onClick={() => {handleSubmit()} }>Search</StyledButton>

        </>}
        </Box>
        
    );
}

export default MobileMenu2;
