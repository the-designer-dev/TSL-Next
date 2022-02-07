import { useEffect , useState ,React} from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, TextField, Typography , Tabs , Tab } from '@mui/material';
import { useDispatch , useSelector } from 'react-redux';
import StyledButton from '../styledComponents/styledButton'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import useMediaQuery from '@mui/material/useMediaQuery';
import FormWrapper from '../styledComponents/formWrapper';
import {nextStep , prevStep} from '../redux/formSlice'
import ShowMap from '../components/showMap'
import { API_URL } from '../config';
import axios from 'axios';
  
function Overview(props) {
    const dispatch = useDispatch()
    const [value, setValue] = useState(0);
    const matches = useMediaQuery("(min-width:370px)");
    const [formats, setFormats] = useState(() => ['Hotel']);
    const hotel = useSelector(state => state.addHotel)
    const room = useSelector(state => state.addRoom)
    const user = useSelector(state => state.user.user)
    const token = useSelector(state => state.user.token)
    const handleFormat = (event, newFormats) => {
        if(newFormats !== null){
      setFormats(newFormats)
        console.log(formats)}
    };
    
    const submit = async () => {
        const mod = await import('./dropzone')
        const formData = new FormData()
        console.log('entered')
        const headers = {
            Authorization:`Bearer ${token}`
          }

        const data = {
            hotelname : hotel.name,
            hoteldescription : hotel.description,
            hoteladdress : hotel.address,
            hotelcity : hotel.city,
            users_permissions_user : user.id,
            daystorefund : hotel.daysToRefund,
            checkintime : hotel.checkIn,
            checkouttime : hotel.checkOut,
            latitude : hotel.coordinates[0].longitude,
            longitude : hotel.coordinates[0].latitude,
            faqs : hotel.faqs,
            amenities : hotel.amenities,
            facilities : hotel.facilities,
            Rules : hotel.rules,
            hotel_extra_fields : hotel.services,
            roomname : room.roomName,
            roomdescrition : room.roomDescription,
            adult : room.adultCapacity,
            child : room.childCapacity,
            bedcapacity : room.bedCapacity,
            roomcategories : room.roomType,
            roomslug : room.roomName ,
            roomqty : room.roomQuantity ,
            roomrefundprice : room.refundableRates ,
            roomnonrefundprice : room.nonRefundableRates ,
            extra_bed : room.bedType,
            room_amenities : room.roomAmenities,
            room_facilities : room.roomFacilities,
            room_rules : room.roomRules,
            room_included : room.roomIncludes,
        }  
        formData.append('data' , JSON.stringify(data))
        mod.hotelImgs.forEach(element => {
            formData.append('files.hotelimages' , element , element.name)
        });
        mod.roomImgs.forEach(element => {
            formData.append('files.roomimages' , element , element.name)
        });
        console.log(formData)
        axios.post(`${API_URL}/hotel-rooms`, formData , {headers : headers})
            .then((res) => {
            console.log(res);
            }).catch((err) => console.log(err))
    }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <FormWrapper>
            {formats == 'Hotel'?
                <Grid container spacing={3}>
                    <Grid container item spacing={1}>
                    <Box sx={{ width: '100%' }}>
                        <ToggleButtonGroup
                            fullWidth
                            exclusive
                        value={formats}
                        onChange={handleFormat}
                        orientation={`${matches ? `horizontal` : `vertical`}`}
                        aria-label="text formatting"
                        >
                        <ToggleButton   sx={{'&.MuiToggleButton-root':{'&.Mui-selected':{backgroundColor:'button.main'}}}}  value="Hotel" aria-label="bold">
                            <Typography variant='p'>Hotel Details</Typography>
                        </ToggleButton>
                        <ToggleButton  sx={{'&.MuiToggleButton-root':{'&.Mui-selected':{backgroundColor:'button.main'}}}} value="Room" aria-label="italic">
                        <Typography variant='p'>Room Details</Typography>
                        </ToggleButton>
                    
                        </ToggleButtonGroup>
                    </Box>
                    </Grid>
                <Grid container item justifyContent='flex-start' >
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography fontWeight={300} variant='h6'>Name:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography fontWeight={400} variant='h6'>{hotel.name}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography fontWeight={300} variant='h6'>City:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography fontWeight={400} variant='h6'>{hotel.city}</Typography>
                    </Grid>
                </Grid>
                <Grid container item justifyContent='flex-start' spacing={1} >
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography fontWeight={300} variant='h6'>Address:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography fontWeight={400} variant='h6'>{hotel.address}</Typography>
                    </Grid>
                    <Grid item xs={0} sm={0} md={3}>
                    </Grid>
                    <Grid item xs={0} sm={0} md={3}>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Typography fontWeight={300} variant='h6'>Description:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9} >
                        <Typography fontWeight={400} variant='h6'>{hotel.description}</Typography>
                    </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography fontWeight={300} variant='h6'>As shown on map:</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ShowMap/>
                    </Grid>
                    <Grid container item spacing={2}>
                    <Grid item xs={12} >
                        <Typography fontWeight={300} variant='h6'>Amenities:</Typography>
                    </Grid>

                    {hotel.amenities.map((el) => (
                        <Grid container item xs={12} md={6} spacing={1}>
                        <Grid item xs={12} sm={6} md={1}>
                        <Typography fontWeight={400} variant='h6'><img style={{height:'30px'}} src={el.service_icon}/></Typography>
                    </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                        <Typography fontWeight={400} variant='h6'>{el.service_name}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={7}>
                        <Typography fontWeight={400} variant='h6'>{el.service_description}</Typography>
                    </Grid>
                    </Grid>))}
                    </Grid>
              
                    <Grid container item spacing={2}>
                    <Grid item xs={12} >
                        <Typography fontWeight={300} variant='h6'>Facilities:</Typography>
                    </Grid>

                    {hotel.facilities.map((el) => (
                        <Grid container item xs={12} md={6} spacing={1}>
                        <Grid item xs={12} sm={6} md={1}>
                        <Typography fontWeight={400} variant='h6'><img style={{height:'30px'}} src={el.service_icon}/></Typography>
                    </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                        <Typography fontWeight={300} variant='h6'>{el.service_name}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={7}>
                        <Typography fontWeight={400} variant='h6'>{el.service_description}</Typography>
                    </Grid>
                    </Grid>))}
                    </Grid>
              
                    <Grid container item spacing={2}>
                    <Grid item xs={12} >
                        <Typography fontWeight={300} variant='h6'>Rules:</Typography>
                    </Grid>

                    {hotel.rules.map((el) => (
                        <Grid container item xs={12} md={6} spacing={1}>
                        <Grid item xs={12} sm={6} md={4}>
                        <Typography fontWeight={300} variant='h6'>{el.service_name}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8}>
                        <Typography fontWeight={400} variant='h6'>{el.service_description}</Typography>
                    </Grid>
                    </Grid>))}
                    </Grid>
                
                    <Grid container item spacing={2}>
                    <Grid item xs={12} >
                        <Typography fontWeight={300} variant='h6'>Timings:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Typography fontWeight={300} variant='h6'>Check in:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography fontWeight={400} variant='h6'>{hotel.checkIn}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Typography fontWeight={300} variant='h6'>Check out:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography fontWeight={400} variant='h6'>{hotel.checkOut}</Typography>
                    </Grid>
                    
                    </Grid>
                    <Grid container item spacing={2}>
                    <Grid item xs={12} >
                        <Typography fontWeight={300} variant='h6'>Services:</Typography>
                    </Grid>

                    {hotel.services.map((el) => (
                        <Grid container item xs={12} md={6} spacing={1}>
                        <Grid item xs={12} sm={6} md={4}>
                        <Typography fontWeight={300} variant='h6'>{el.extra_field_name}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8}>
                        <Typography fontWeight={400} variant='h6'>PKR {el.extra_field_price}/-</Typography>
                    </Grid>
                    </Grid>))}
                    </Grid>
                    <Grid item xs={6} sm={3} >
                    <Typography fontWeight={300} variant='h6'>Days to refund:</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Typography fontWeight={300} variant='h6'>{hotel.daysToRefund}</Typography>
                    </Grid>

                    <Grid container item spacing={2}>
                    <Grid item xs={12} >
                        <Typography fontWeight={300} variant='h6'>Frequently Asked Questions:</Typography>
                    </Grid>

                    {hotel.faqs.map((el) => (
                        <Grid container item xs={12} md={6} spacing={1}>
                        <Grid item xs={12} sm={6} >
                        <Typography fontWeight={300} variant='h6'>Q) {el.faq_question}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Typography fontWeight={400} variant='h6'>Ans) {el.faq_answer}</Typography>
                    </Grid>
                    </Grid>))}
                    </Grid>
                    <Grid container item spacing={1} justifyContent='flex-end'>
                    <Grid item><StyledButton onClick={() => dispatch(prevStep())}>Previous</StyledButton></Grid>
                    <Grid item><StyledButton onClick={() => submit()}  >Submit</StyledButton></Grid>                    </Grid>
                </Grid>:
                

                <Grid container spacing={3}>
                <Grid container item spacing={1}>
                <Box sx={{ width: '100%' }}>
                    <ToggleButtonGroup
                        fullWidth
                        exclusive
                    value={formats}
                    onChange={handleFormat}
                    orientation={`${matches ? `horizontal` : `vertical`}`}
                    aria-label="text formatting"
                    >
                    <ToggleButton   sx={{'&.MuiToggleButton-root':{'&.Mui-selected':{backgroundColor:'button.main'}}}}  value="Hotel" aria-label="bold">
                        <Typography variant='p'>Hotel Details</Typography>
                    </ToggleButton>
                    <ToggleButton  sx={{'&.MuiToggleButton-root':{'&.Mui-selected':{backgroundColor:'button.main'}}}} value="Room" aria-label="italic">
                    <Typography variant='p'>Room Details</Typography>
                    </ToggleButton>
                
                    </ToggleButtonGroup>
                </Box>
                </Grid>
            <Grid container item justifyContent='flex-start' spacing={1} >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography fontWeight={300} variant='h6'>Name:</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography fontWeight={400} variant='h6'>{room.roomName}</Typography>
                </Grid>
                <Grid item xs={0} sm={0} md={3}>
                </Grid>
                <Grid item xs={0} sm={0} md={3}>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography fontWeight={300} variant='h6'>Description:</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={9}>
                    <Typography fontWeight={400} variant='h6'>{room.roomDescription}</Typography>
                </Grid>
            </Grid>
            <Grid container item justifyContent='flex-start' >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography fontWeight={300} variant='h6'>Adult Capacity:</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography fontWeight={400} variant='h6'>{room.adultCapacity}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography fontWeight={300} variant='h6'>Child Capacity:</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography fontWeight={400} variant='h6'>{room.bedCapacity}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography fontWeight={300} variant='h6'>Bed Capacity:</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography fontWeight={400} variant='h6'>{room.bedCapacity}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography fontWeight={300} variant='h6'>Room Type:</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography fontWeight={400} variant='h6'>{room.roomType}</Typography>
                </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography fontWeight={300} variant='h6'>Refundable Rates:</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography fontWeight={400} variant='h6'>PKR {room.refundableRates}/-</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography fontWeight={300} variant='h6'>Non-Refundable Rates:</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography fontWeight={400} variant='h6'>PKR {room.nonRefundableRates}/-</Typography>
                </Grid>
                <Grid container item spacing={2}>
                    <Grid item xs={12}>
                    <Typography fontWeight={300} variant='h6'>Prices accoring to specific date Ranges:</Typography>
                    </Grid>
                {room.dateRange.map((el) => (
                        <Grid container item xs={12} md={6} spacing={1}>
                        <Grid item xs={12} >
                        <Typography fontWeight={300} variant='h6'>{el.start_date.format('MM/DD')} ---- {el.end_date.format('MM/DD')}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Typography fontWeight={400} variant='h6'>Refundable Price : PKR {el.refundable_price}/- </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Typography fontWeight={400} variant='h6'>Non-Refundable Price : PKR {el.nonrefundable_price}/- </Typography>
                    </Grid>
                    </Grid>))}
                    </Grid>
                    <Grid container item spacing={2}>
                    <Grid item xs={12} >
                        <Typography fontWeight={300} variant='h6'>Amenities:</Typography>
                    </Grid>
                    {room.roomAmenities.map((el) => (
                        <Grid container item xs={12} md={6} spacing={1}>
                        <Grid item xs={12} sm={6} md={1}>
                        <Typography fontWeight={400} variant='h6'><img style={{height:'30px'}} src={el.service_icon}/></Typography>
                    </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                        <Typography fontWeight={400} variant='h6'>{el.service_name}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={7}>
                        <Typography fontWeight={400} variant='h6'>{el.service_description}</Typography>
                    </Grid>
                    </Grid>))}
                    </Grid>
              
                    <Grid container item spacing={2}>
                    <Grid item xs={12} >
                        <Typography fontWeight={300} variant='h6'>Facilities:</Typography>
                    </Grid>

                    {room.roomFacilities.map((el) => (
                        <Grid container item xs={12} md={6} spacing={1}>
                        <Grid item xs={12} sm={6} md={1}>
                        <Typography fontWeight={400} variant='h6'><img style={{height:'30px'}} src={el.service_icon}/></Typography>
                    </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                        <Typography fontWeight={300} variant='h6'>{el.service_name}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={7}>
                        <Typography fontWeight={400} variant='h6'>{el.service_description}</Typography>
                    </Grid>
                    </Grid>))}
                    </Grid>
              
                    <Grid container item spacing={2}>
                    <Grid item xs={12} >
                        <Typography fontWeight={300} variant='h6'>Included:</Typography>
                    </Grid>

                    {room.roomIncludes.map((el) => (
                        <Grid container item xs={12} md={6} spacing={1}>
                        <Grid item xs={12} sm={6} md={1}>
                        <Typography fontWeight={400} variant='h6'><img style={{height:'30px'}} src={el.service_icon}/></Typography>
                    </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                        <Typography fontWeight={300} variant='h6'>{el.service_name}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={7}>
                        <Typography fontWeight={400} variant='h6'>{el.service_description}</Typography>
                    </Grid>
                    </Grid>))}
                    </Grid>
              
                    <Grid container item spacing={2}>
                    <Grid item xs={12} >
                        <Typography fontWeight={300} variant='h6'>Rules:</Typography>
                    </Grid>

                    {room.roomIncludes.map((el) => (
                        <Grid container item xs={12} md={6} spacing={1}>
                        <Grid item xs={12} sm={6} md={1}>
                        <Typography fontWeight={400} variant='h6'><img style={{height:'30px'}} src={el.service_icon}/></Typography>
                    </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                        <Typography fontWeight={300} variant='h6'>{el.service_name}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={7}>
                        <Typography fontWeight={400} variant='h6'>{el.service_description}</Typography>
                    </Grid>
                    </Grid>))}
                    </Grid>


                
                <Grid container item spacing={1} justifyContent='flex-end'>
                <Grid item><StyledButton onClick={() => dispatch(prevStep())}>Previous</StyledButton></Grid>
                <Grid item><StyledButton onClick={() => submit()} >Submit</StyledButton></Grid>       
                </Grid>
            </Grid>
                }
        </FormWrapper>
    );
}
export default Overview;