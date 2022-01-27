import { Grid ,  Box, Typography ,Button , Tab ,Tabs,Accordion ,AccordionDetails,AccordionSummary } from '@mui/material';
import React, { useState , useEffect} from 'react';
import StyledContainer from '../../../styledComponents/styledContainer';
import CustomerLayout from '../../../components/customerLayout';
import CarouselWithThumbnail from '../../../components/carouselWithThumbnail';
import axios from 'axios';
import Cookies from 'cookies'
import { API_URL } from '../../../config';
import { SWRConfig } from 'swr';
import {setReduxPrice,setExtra_items , setCurrentHotel, setRoom_quantity, setCurrentRoom} from '../../../redux/bookingSlice'
import { useDispatch , useSelector } from 'react-redux';
import { mapboxApiKey } from '../../../components/mapComponent';
import useSWR from 'swr';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { Wifi ,FreeBreakfastOutlined, PoolOutlined, LocalParkingOutlined, FitnessCenterOutlined, BathtubOutlined, ContentPasteOffSharp } from '@mui/icons-material';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import SmallCarouselWithThumbnail from '../../../components/smallCarouselWithThumbnails';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dynamic from 'next/dynamic';
import StyledTextField from '../../../styledComponents/styledTextField';
import StyledButton from '../../../styledComponents/styledButton';
import { useRouter } from 'next/router';
import CheckIcon from '@mui/icons-material/Check';
const Map = dynamic(() => import("../../../components/mapComponent"), {
    loading: () => "Loading...",
    ssr: false
  });
  
  const fetch = (id,destination,checkin,checkout,adult,child) => axios({
    method: "post",
    url: `${API_URL}/filter-hotels/${id}`,
    data:{city:destination,checkindate:checkin,checkoutdate:checkout,adult:parseInt(adult) ,child:parseInt(child)} } ).then(res => res.data)

 
function options(arg){
    var arr =[];
    for (let index = 0; index < arg; index++) {
        arr.push(<MenuItem value={index+1}>{index+1} room</MenuItem>)
    }
    return arr
}

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }


export default function Hotel({resData , reqData,id}) {
    const { data, revalidate } = useSWR([id , reqData.city,reqData.checkindate,reqData.checkoutdate,reqData.adult,reqData.child], fetch, { fallbackData: resData })
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    const [locations, setLocations] = useState([]);
    const [restaurant, setRestaurant] = useState([]);
    const [attractions, setAttractions] = useState([]);
    const [hospitals, setHospitals] = useState([]);
    const [airports, setAirports] = useState([]);
    const [price, setPrice] = useState(0);
    const [rooms, setRooms] = useState(1);
    const [extraFields, setExtraFields] = useState({})
    const dispatch = useDispatch()
    const router = useRouter();


    useEffect(()=>
    {
        calculatePrice()
    } , [extraFields])

    const calculatePrice = () =>{ 
        var temp_price =0;
        Object.values(data.hotel_extra_fields).forEach(key => {
            temp_price = temp_price + (key.extra_field_price * extraFields[key.extra_field_name])
          });
          setPrice(temp_price)
    }


    const submitData = (id , room) => {
        const price2 = price.toString()
        const fields = extraFields
        dispatch(setReduxPrice(price2))
        dispatch(setExtra_items(fields))
        dispatch(setCurrentHotel(id))
        dispatch(setCurrentRoom(room))
        dispatch(setRoom_quantity(rooms))

        router.push({pathname:`/hotel/${id}/${room}`})

    }

    const extraFieldChange = async (name , val) =>{
        var value;
        if(!val && val !== 0){
        value = 1
        }
        else{
            value = val
        }
        
        if(val <0){
            value = 0
        }
        setExtraFields(extraFields =>({
            ...extraFields,
            [name] : value
        }))
    }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleChange2 = (event, newValue) => {
      setValue2(newValue);
    };
    
    useEffect(async() => {
        var location;
        const fetchLocations = async () => {
          await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${data.hoteladdress}.json?access_token=${mapboxApiKey}&limit=1`).then((res) => {console.log(res.data.features);location=res.data.features ;setLocations(res.data.features)}).catch((err) => console.log({ err }));};
        await fetchLocations();
        console.log(location)
        const fetchRestaurants = async () => {
          await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/restaurant.json?type=poi&proximity=${location[0].center[0]},${location[0].center[1]}&access_token=${mapboxApiKey}&limit=5`).then((res) => {console.log(res.data.features); setRestaurant(res.data.features)}).catch((err) => console.log({ err }));};
          fetchRestaurants();
        const fetchAttractions = async () => {
          await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/outdoors.json?type=poi&proximity=${location[0].center[0]},${location[0].center[1]}&access_token=${mapboxApiKey}&limit=5`).then((res) => {console.log(res.data.features); setAttractions(res.data.features)}).catch((err) => console.log({ err }));};
          fetchAttractions();
        const fetchHospitals = async () => {
          await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/hospital.json?type=poi&proximity=${location[0].center[0]},${location[0].center[1]}&access_token=${mapboxApiKey}&limit=5`).then((res) => {console.log(res.data.features); setHospitals(res.data.features)}).catch((err) => console.log({ err }));};
          fetchHospitals();
        const fetchAirports = async () => {
          await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/airport.json?type=poi&proximity=${location[0].center[0]},${location[0].center[1]}&access_token=${mapboxApiKey}&limit=5`).then((res) => {console.log(res.data.features); setAirports(res.data.features)}).catch((err) => console.log({ err }));};
          fetchAirports();
          Object.values(data.hotel_extra_fields).forEach(val =>{
            setExtraFields(extraFields =>({
                ...extraFields,
                [val.extra_field_name] : 0
            }))
          })
      }, []);
  
    return (
        <StyledContainer sx={{height:'100%'}}>
            <Grid container spacing={5} >
            <Grid container item spacing={2} justifyContent='center' alignItems="stretch" >
            <Grid item xs={12}  md={7}>
                <Box sx={{marginBottom:{xs:'20px' ,sm:'20px' , md:'0px'}}}>
            <CarouselWithThumbnail images={data.images}/>
            </Box>
            </Grid>

            <Grid  item xs={12}  md={4}>
                <Box sx={{backgroundColor:'background.main' , height:'100%' , padding:'20px 20px 0px 20px'}}>
                <Grid container spacing={4}>
                <Grid container item spacing={2}>
                <Grid item xs={12}>
                <Typography fontWeight={500} variant='h5'>{data.hotelname}</Typography>
                </Grid>
                <Grid container item alignItems='center' xs={12}><LocationOnOutlinedIcon/><Typography fontSize={14} variant='p'>{data.hoteladdress}</Typography></Grid>
                </Grid>
                <Grid item xs={12}><Typography fontSize={14} variant='p'>{data.hoteldescription}</Typography></Grid>
                <Grid container item spacing={2}>
                <Grid item xs={12}><Typography fontWeight={500} variant='p'>About Hotel</Typography></Grid>
                <Grid alignItems='center' container item xs={12}><AccessTimeOutlinedIcon sx={{color:'button.main'}}/><Typography sx={{paddingLeft:'10px'}} variant='p'>Check-In: {data.checkintime}</Typography></Grid>
                <Grid alignItems='center' container item xs={12}><AccessTimeOutlinedIcon sx={{color:'button.main'}}/><Typography sx={{paddingLeft:'10px'}} variant='p'>Check-In: {data.checkouttime}</Typography></Grid>
                </Grid>
                <Grid container item justifyContent='space-evenly' spacing={2}>
                <Grid container item xs={12} ><Typography fontWeight={500} variant='p'>Amenities</Typography></Grid>
                <Grid container item alignItems='center' xs={6} sm={3} md={6}><Box sx={{display:'inline-flex'}}><Wifi/> <Typography sx={{paddingLeft:'10px'}}variant='p'>Free Wifi</Typography></Box></Grid>
                <Grid container item alignItems='center' xs={6} sm={3} md={6}><Box sx={{display:'inline-flex'}}><FreeBreakfastOutlined/> <Typography sx={{paddingLeft:'10px'}}variant='p'>Free Breakfast</Typography></Box></Grid>
                <Grid container item alignItems='center' xs={6} sm={3} md={6}><Box sx={{display:'inline-flex'}}><PoolOutlined/> <Typography sx={{paddingLeft:'10px'}}variant='p'>Swimming Pool</Typography></Box></Grid>
                <Grid container item alignItems='center' xs={6} sm={3} md={6}><Box sx={{display:'inline-flex'}}><LocalParkingOutlined/> <Typography sx={{paddingLeft:'10px'}}variant='p'>Free Parking</Typography></Box></Grid>
                <Grid container item alignItems='center' xs={6} sm={3} md={6}><Box sx={{display:'inline-flex'}}><FitnessCenterOutlined/> <Typography sx={{paddingLeft:'10px'}}variant='p'>Gym Available</Typography></Box></Grid>
                <Grid container item alignItems='center' xs={6} sm={3} md={6}><Box sx={{display:'inline-flex'}}><BathtubOutlined/> <Typography sx={{paddingLeft:'10px'}}variant='p'>Bathtub Included</Typography></Box></Grid>
                </Grid>
                <Grid container justifyContent='space-evenly' item xs={12}><Button sx={{backgroundColor:'button.main'}}>Show all amenities</Button></Grid>
                </Grid>
                </Box>
            </Grid>
            </Grid>
            <Grid item xs={12}>
            <Box sx={{marginTop:{xs:'0px' , md:'30px'} , width: '100%' ,bgcolor:'background.main'}}>
            <Tabs   allowScrollButtonsMobile centered scrollButtons sx={{'& .MuiTabs-indicator':{height:'5px',backgroundColor:'button.main'} , '& .MuiTabs-flexContainer':{justifyContent:'space-between'}}}  value={value} onChange={handleChange} >
                <Tab sx={{'&.Mui-selected' :{color:'button.main'}, color:'button.main'}} label="Rooms" />
                <Tab sx={{'&.Mui-selected' :{color:'button.main'}, color:'button.main'}} label="Location" />
                <Tab sx={{'&.Mui-selected' :{color:'button.main'}, color:'button.main'}} label="Ratings" />
                <Tab sx={{'&.Mui-selected' :{color:'button.main'}, color:'button.main'}} label="Policies" />
                <Tab sx={{'&.Mui-selected' :{color:'button.main'}, color:'button.main'}} label="FAQs" />
            </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
           

                    {data.rooms.map((el) => 
                     <Grid container item justifyContent='space-evenly' direction='row' alignItems='stretch' spacing={2} xs={12}>
                     <Grid item xs={12} sm={8} md={4} >
                    <Box sx={{backgroundColor:'background.main' , padding:'20px 25px' }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                    <Typography fontWeight={500} variant='p'>{el.roomname}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{marginBottom:'20px'}}>
                    {el.images.length > 0 ? <SmallCarouselWithThumbnail images={el.images}/> :''}
                    </Box>
                    </Grid>
                    </Grid>
                    </Box>
                    </Grid>
                <Grid item xs={12} sm={4} md={2} >
                <Box sx={{ backgroundColor:'background.main' , height:'calc(100% - 40px)' , padding:'20px 25px' }}>
                        <Grid  container spacing={2}>
                            <Grid item xs={12}>
                    <Typography fontWeight={300} variant='p'>Capacity</Typography>
                    </Grid>
                    <Grid container item xs={12}>
                    <Grid item xs={12}>
                    <Typography fontWeight={400} variant='p'>{el.adult} Adults</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography fontWeight={400} variant='p'>{el.child} Kids</Typography>
                    </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={2} >
                        <Grid item xs={12}><Typography fontWeight={300} variant='p'>Benefits</Typography></Grid>
                        <Grid container item xs={12}>
                            <Grid item><Typography fontSize={12} fontWeight={500} variant='p'>This option includes:</Typography></Grid>
                            {el.room_includes.map((ele) => (  
                <Grid container item xs={12} alignItems='center' spacing={1}>
                <Grid item xs={2}><CheckIcon sx={{color:'button.main'}}/></Grid><Grid item xs={10}><Typography  variant='p'>{ele.service_name}</Typography></Grid>
                </Grid>))}
                        </Grid>
                    </Grid>
                        <Grid container item xs={12} spacing={1}>
                        {el.amenities.map((el , index) => (  
                 index <5?   
                <Grid container item xs={12} alignItems='center' spacing={1}>
                <Grid item xs={2}>{el.service_icon}</Grid><Grid item xs={10}><Typography  variant='p'>{el.service_name}</Typography></Grid>
                </Grid>:<></>))}
                        </Grid>
                    </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Box  sx={{backgroundColor:'background.main', height:'calc(100% - 40px)'  , padding:'20px 25px' }} >
                    <Grid container spacing={2} item direction='row' justifyContent='space-between'>
                        <Grid xs={12} sm={3} container item direction='column' spacing={1}>
                            <Grid item>
                    <Typography fontWeight={300} variant='p'>Price</Typography>
                    </Grid>
                    <Grid item>
                    <Typography fontWeight={500} fontSize={25} color='button.main' variant='p'>PKR {price}</Typography>
                    </Grid>

                    </Grid>
                    <Grid xs={3} item>
                    </Grid>
                    <Grid xs={3} item>
                    </Grid>
                    <Grid xs={12} sm={3} container item direction='column' spacing={1}>
                            <Grid item sx={{textAlign:'center'}}>
                    <Typography  fontWeight={300} variant='p'>Book</Typography>
                    </Grid>
                    <Grid item>
                    <FormControl fullWidth>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        size='small'
                        sx={{':hover':{'& .MuiOutlinedInput-notchedOutline':{borderColor:'button.main' }} ,'&.Mui-focused':{ '& .MuiOutlinedInput-notchedOutline':{borderColor:'button.main' }}, '& .MuiOutlinedInput-notchedOutline':{borderColor:'button.main' }}}
                        value={rooms}
                        onChange={e => setRooms(e.target.value)}
                        >
                        {options(el.roomqty).map((element) => (element)) }
                        </Select>
                    </FormControl>
                    </Grid>

                    </Grid>

                    <Grid xs={12} item>
                    <Typography fontWeight={400} variant='p'>Current Package:</Typography>
                    </Grid>

                    <Grid container item spacing={2}>
                    {data.hotel_extra_fields.map((ele) =>(
                        <Grid container item>
                            <Grid xs={6} sm={4} item><Typography fontSize={14} fontWeight={300} variant='p'>{ele.extra_field_name}</Typography></Grid>
                            <Grid xs={6} sm={4} item><Typography  fontSize={14} fontWeight={300} variant='p'>PKR {ele.extra_field_price}</Typography></Grid>
                            <Grid xs={12} sm={4} alignItems='center' spacing={2} direction='row' justifyContent='center' container item><Grid justifyContent='flex-end' alignContent='center' container item xs={4}> <Button onClick={()=>extraFieldChange(ele.extra_field_name , extraFields[ele.extra_field_name] -1 )} sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'40px !important'}}>-</Button></Grid> <Grid container item sx={{textAlign:'center'}} xs={4}> <StyledTextField defaultValue="0" onChange={(e) =>extraFieldChange(ele.extra_field_name , parseInt(e.target.value) )} id="outlined-name" name={ele.extra_field_name} value={extraFields[ele.extra_field_name] ? extraFields[ele.extra_field_name] : 0 } size='small' sx={{width:'100%'}} type='number' /></Grid> <Grid justifyContent='flex-start' alignContent='center' container item xs={4}> <Button onClick={()=>extraFieldChange(ele.extra_field_name , extraFields[ele.extra_field_name] +1 )} sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'40px !important'}}>+</Button></Grid></Grid>
                        </Grid>))
}
                    </Grid>
                    <Grid container item alignItems='baseline' spacing={2}>
                    <Grid item xs={6} sm={3}><Typography fontWeight={600} variant='p'>Total</Typography></Grid>
                    <Grid  item xs={6} sm={5}><Typography  fontWeight={500} fontSize={28} color='button.main' variant='p'>PKR {price}</Typography></Grid>
                    <Grid item xs={12} sm={4}><StyledButton onClick={ () =>submitData(id , el.id)} fullWidth >Book Now</StyledButton></Grid>
                    </Grid>
                    </Grid>
                    </Box>
                </Grid>
            </Grid>
                    )}

               
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Box sx={{backgroundColor:'background.main' , padding:'20px 25px' }}>
            <Grid container spacing={2}>
            <Grid container direction='column' item xs={12} sm={4}>                
            <Box sx={{display:'flex'}}><Typography fontWeight={500} variant='p'>Location</Typography></Box>
            <Box sx={{display:'flex'}}><Typography fontWeight={300} variant='p'>{data.hotelname}</Typography></Box>
            <Box sx={{display:'flex'}}><LocationOnOutlinedIcon sx={{fontSize:'18px'}}/><Typography fontSize={12} fontWeight={300} variant='p'>{data.hoteladdress}</Typography></Box>
            <Tabs   allowScrollButtonsMobile  scrollButtons sx={{'& .MuiTabs-indicator':{height:'5px',backgroundColor:'button.main'}}}  value={value2} onChange={handleChange2} centered>
                <Tab sx={{'&.Mui-selected' :{color:'button.main'}, color:'button.main'}} label="Point of interests" />
                <Tab sx={{'&.Mui-selected' :{color:'button.main'}, color:'button.main'}} label="Nearby hotels" />
            </Tabs>
            <TabPanel value={value2} index={0}>
            <Accordion sx={{'&.MuiAccordion-root':{backgroundColor:'transparent' , boxShadow:'none',backgroundImage:'none'}}}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlinedIcon/>}
          sx={{display:'flex' , alignItems:'center' }}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RestaurantOutlinedIcon/><Typography fontWeight={600} variant='p'>Restaurant</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={2}>
            {restaurant.map(el=>
           ( <>
           <Grid container item>
            <Grid item xs={12}>
          <Typography fontWeight={500} variant='p'>
            {el.text}
          </Typography>  
          </Grid>
          <Grid item xs={12}>
          <Typography fontWeight={300} variant='p'>
            {el.place_name}
          </Typography>
          <Grid justifyContent='left' direction='row' alignItems='center' container spacing={2} >
          
            {el.properties.category.split(',').map((el,index) =>
            (
           index <4?     
          <Grid item spacing xs={3}>
            <Box sx={{backgroundColor:'button.main' , justifyContent:'center' , padding:'5px' , borderRadius:'20px' , display:'flex' , textAlign:'center'  }}>
          <Typography fontSize='12px' fontWeight={400} variant='p'>
            {el}
          </Typography>
          </Box>
          </Grid>:''))}
          </Grid>
          </Grid>
          </Grid>
          </>)
         )}
         </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{'&.MuiAccordion-root':{backgroundColor:'transparent' , boxShadow:'none',backgroundImage:'none'}}}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlinedIcon />}
          sx={{display:'flex' , alignItems:'center' }}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <AccountBalanceOutlinedIcon/><Typography fontWeight={600} variant='p'>Attractions</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={2}>
            {attractions.map(el=>
           ( <>
           <Grid container item>
            <Grid item xs={12}>
          <Typography fontWeight={500} variant='p'>
            {el.text}
          </Typography>  
          </Grid>
          <Grid item xs={12}>
          <Typography fontWeight={300} variant='p'>
            {el.place_name}
          </Typography>
          <Grid justifyContent='left' direction='row' alignItems='center' container spacing={2} >
          
            {el.properties.category.split(',').map((el,index) =>
            (
           index <4?     
          <Grid item spacing xs={3}>
            <Box sx={{backgroundColor:'button.main' , justifyContent:'center' , padding:'5px' , borderRadius:'20px' , display:'flex' , textAlign:'center'  }}>
          <Typography fontSize='12px' fontWeight={400} variant='p'>
            {el}
          </Typography>
          </Box>
          </Grid>:''))}
          </Grid>
          </Grid>
          </Grid>
          </>)
         )}
         </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{'&.MuiAccordion-root':{backgroundColor:'transparent' , boxShadow:'none',backgroundImage:'none'}}}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlinedIcon/>}
          sx={{display:'flex' , alignItems:'center' }}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <LocalHospitalIcon/><Typography fontWeight={600} variant='p'>Hospitals</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={2}>
            {hospitals.map(el=>
           ( <>
           <Grid container item>
            <Grid item xs={12}>
          <Typography fontWeight={500} variant='p'>
            {el.text}
          </Typography>  
          </Grid>
          <Grid item xs={12}>
          <Typography fontWeight={300} variant='p'>
            {el.place_name}
          </Typography>
          <Grid justifyContent='left' direction='row' alignItems='center' container spacing={2} >
          
            {el.properties.category.split(',').map((el,index) =>
            (
           index <4?     
          <Grid item spacing xs={3}>
            <Box sx={{backgroundColor:'button.main' , justifyContent:'center' , padding:'5px' , borderRadius:'20px' , display:'flex' , textAlign:'center'  }}>
          <Typography fontSize='12px' fontWeight={400} variant='p'>
            {el}
          </Typography>
          </Box>
          </Grid>:''))}
          </Grid>
          </Grid>
          </Grid>
          </>)
         )}
         </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{'&.MuiAccordion-root':{backgroundColor:'transparent' , boxShadow:'none',backgroundImage:'none'}}}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlinedIcon/>}
          sx={{display:'flex' , alignItems:'center' }}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <LocalAirportIcon/><Typography fontWeight={600} variant='p'>Airports</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={2}>
            {airports.map(el=>
           ( <>
           <Grid container item>
            <Grid item xs={12}>
          <Typography fontWeight={500} variant='p'>
            {el.text}
          </Typography>  
          </Grid>
          <Grid item xs={12}>
          <Typography fontWeight={300} variant='p'>
            {el.place_name}
          </Typography>
          <Grid justifyContent='left' direction='row' alignItems='center' container spacing={2} >
          
            {el.properties.category.split(',').map((el,index) =>
            (
           index <4?     
          <Grid item spacing xs={3}>
            <Box sx={{backgroundColor:'button.main' , justifyContent:'center' , padding:'5px' , borderRadius:'20px' , display:'flex' , textAlign:'center'}}>
          <Typography fontSize='12px' fontWeight={400} variant='p'>
            {el}
          </Typography>
          </Box>
          </Grid>:''))}
          </Grid>
          </Grid>
          </Grid>
          </>)
         )}
         </Grid>
        </AccordionDetails>
      </Accordion>
      </TabPanel>
            </Grid>
            <Grid item xs={12} sm={8}>
            <Map locations={locations} restaurants={restaurant} airports={airports} hospitals={hospitals} attractions={attractions} />
            </Grid>
            </Grid>
            </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
            Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
            Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
            Item Five
            </TabPanel>
            </Grid>
            </Grid>
        </StyledContainer>
    );
}



Hotel.getLayout = function getLayout(Hotel) {
    return (
      <CustomerLayout>
        {Hotel}
      </CustomerLayout>
    )
  }
  
  export async function getServerSideProps(context) {
    const {params ,req,res} = context
    const cookies = new Cookies(req, res)
    const id= params.id;
    const destination = cookies.get('destination')
    const checkin = cookies.get('checkIn')
    const checkout = cookies.get('checkOut')
    const adult = cookies.get('adult')
    const child = cookies.get('child')
    const reqData={city:destination,checkindate:checkin,checkoutdate:checkout,adult:parseInt(adult) ,child:parseInt(child)} 
    const resData = await axios({
        method: "post",
        url: `${API_URL}/filter-hotels/${id}`,
        data:reqData} ).then(res => res.data)

        return { props: { resData , reqData ,id} }
  }