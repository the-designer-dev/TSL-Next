import { Button, TextField, Typography } from '@mui/material';
import { Box, typography } from '@mui/system';
import React , {useState} from 'react';
import { ChevronLeftOutlined } from '@mui/icons-material';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
// import DatePicker from 'react-date-picker';
import FullCalendar from '@fullcalendar/react' 
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import momentPlugin from '@fullcalendar/moment'
import dayGridPlugin from '@fullcalendar/daygrid' 
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction"
import StyledTextField from '../styledComponents/styledTextField'

import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { useEffect } from 'react';
function MobileMenu(props) {
  var citiesArr = ["Abbottabad","Adezai","Ali Bandar","Amir Chah","Attock","Ayubia","Bahawalpur","Baden","Bagh","Bahawalnagar","Burewala","Banda Daud Shah","Bannu district|Bannu","Batagram","Bazdar","Bela","Bellpat","Bhag","Bhakkar","Bhalwal","Bhimber","Birote","Buner","Burj","Chiniot","Chachro","Chagai","Chah Sandan","Chailianwala","Chakdara","Chakku","Chakwal","Chaman","Charsadda","Chhatr","Chichawatni","Chitral","Dadu","Dera Ghazi Khan","Dera Ismail Khan", "Dalbandin","Dargai","Darya Khan","Daska","Dera Bugti","Dhana Sar","Digri","Dina City|Dina","Dinga",", Pakistan|Diplo","Diwana","Dokri","Drosh","Duki","Dushi","Duzab","Faisalabad","Fateh Jang","Ghotki","Gwadar","Gujranwala","Gujrat","Gadra","Gajar","Gandava","Garhi Khairo","Garruck","Ghakhar Mandi","Ghanian","Ghauspur","Ghazluna","Girdan","Gulistan","Gwash","Hyderabad","Hala","Haripur","Hab Chauki","Hafizabad","Hameedabad","Hangu","Harnai","Hasilpur","Haveli Lakha","Hinglaj","Hoshab","Islamabad","Islamkot","Ispikan","Jacobabad","Jamshoro","Jhang","Jhelum","Jamesabad","Jampur","Janghar","Jati(Mughalbhin)","Jauharabad","Jhal","Jhal Jhao","Jhatpat","Jhudo","Jiwani","Jungshahi","Karachi","Kotri","Kalam","Kalandi","Kalat","Kamalia","Kamararod","Kamber","Kamokey","Kanak","Kandi","Kandiaro","Kanpur","Kapip","Kappar","Karak City","Karodi","Kashmor","Kasur","Katuri","Keti Bandar","Khairpur","Khanaspur","Khanewal","Kharan","kharian","Khokhropur","Khora","Khushab","Khuzdar","Kikki","Klupro","Kohan","Kohat","Kohistan","Kohlu","Korak","Korangi","Kot Sarae","Kotli","Lahore","Larkana","Lahri","Lakki Marwat","Lasbela","Latamber","Layyah","Leiah","Liari","Lodhran","Loralai","Lower Dir","Shadan Lund","Multan","Mandi Bahauddin","Mansehra","Mian Chanu","Mirpur",", Pakistan|Moro","Mardan","Mach","Madyan","Malakand","Mand","Manguchar","Mashki Chah","Maslti","Mastuj","Mastung","Mathi","Matiari","Mehar","Mekhtar","Merui","Mianwali","Mianez","Mirpur Batoro","Mirpur Khas","Mirpur Sakro","Mithi","Mongora","Murgha Kibzai","Muridke","Musa Khel Bazar","Muzaffar Garh","Muzaffarabad","Nawabshah","Nazimabad","Nowshera","Nagar Parkar","Nagha Kalat","Nal","Naokot","Nasirabad","Nauroz Kalat","Naushara","Nur Gamma","Nushki","Nuttal","Okara","Ormara","Peshawar","Panjgur","Pasni City","Paharpur","Palantuk","Pendoo","Piharak","Pirmahal","Pishin","Plandri","Pokran","Pounch","Quetta","Qambar","Qamruddin Karez","Qazi Ahmad","Qila Abdullah","Qila Ladgasht","Qila Safed","Qila Saifullah","Rawalpindi","Rabwah","Rahim Yar Khan","Rajan Pur","Rakhni","Ranipur","Ratodero","Rawalakot","Renala Khurd","Robat Thana","Rodkhan","Rohri","Sialkot","Sadiqabad","Safdar Abad- (Dhaban Singh)","Sahiwal","Saidu Sharif","Saindak","Sakrand","Sanjawi","Sargodha","Saruna","Shabaz Kalat","Shadadkhot","Shahbandar","Shahpur","Shahpur Chakar","Shakargarh","Shangla","Sharam Jogizai","Sheikhupura","Shikarpur","Shingar","Shorap","Sibi","Sohawa","Sonmiani","Sooianwala","Spezand","Spintangi","Sui","Sujawal","Sukkur","Suntsar","Surab","Swabi","Swat","Tando Adam","Tando Bago","Tangi","Tank City","Tar Ahamd Rind","Thalo","Thatta","Toba Tek Singh","Tordher","Tujal","Tump","Turbat","Umarao","Umarkot","Upper Dir","Uthal","Vehari","Veirwaro","Vitakri","Wadh","Wah Cantt","Warah","Washap","Wasjuk","Wazirabad","Yakmach","Zhob","Other"]
  const [value, setValue] = useState([null, null]);
  const [destinationState,setDestinationState] = useState('')
  const[activeStep , setActiveStep] = useState(0)

  const [options , setOptions] = useState([])
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [focus, setFocus] = useState(START_DATE)
  const handleFocusChange = newFocus => {
    setFocus(newFocus || START_DATE)
  }
  useEffect(() => {
    setOptions(citiesArr.filter(el => el.toLowerCase().includes(destinationState.toLowerCase())))
  } , [destinationState])
    return (
        <Box className='mobileSearch' sx={{backgroundColor:'background.main' , height:'100vh' , position:'absolute' , top:props.open?'-8vh':'100vh' , transition:'0.5s' , width:'calc(100% + 16px)' }}>
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
        <Button onClick={() => props.closeMenu()} sx={{height:'40px' ,position:'absolute', top:'80px' , left:'30px' , width:'41px',backgroundColor:'button.main' , borderRadius:'50px' , minWidth:'0px' ,padding:'5px', '&.MuiButton-root':{'& .MuiSvgIcon-root':{padding:'0px'},  '&:hover':{backgroundColor:'button.main'}} }}><ChevronLeftOutlined/></Button>   
        <div style={{position:"absolute",top: "95px",

    left:'calc(50vw - 80px) ',
    width:'calc(100% - 86px)'
}}>
          <Typography variant='h6' fontWeight={400} >When will you be there?</Typography>
          </div>
          <div style={{position:"absolute",top: "125px",
    display: "flex",
    flexDirection: "row",
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
        </>}
        {activeStep ===2 &&
        <>
        <Button onClick={() => props.closeMenu()} sx={{height:'40px' ,position:'absolute', top:'80px' , left:'30px' , width:'41px',backgroundColor:'button.main' , borderRadius:'50px' , minWidth:'0px' ,padding:'5px', '&.MuiButton-root':{'& .MuiSvgIcon-root':{padding:'0px'},  '&:hover':{backgroundColor:'button.main'}} }}><ChevronLeftOutlined/></Button>   
        <StyledTextField sx={{position:'absolute', top:'80px' , left:'94px' , width:'calc(100vw - 86px)' }} required onChange={(e) => setDestinationState(e.target.value)}  size="small" id="outlined-basic" variant="outlined" placeholder="Where are you going?" />
        </>}
        </Box>
    );
}

export default MobileMenu;
