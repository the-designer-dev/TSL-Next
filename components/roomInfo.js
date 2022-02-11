import { Grid ,  Box, Typography ,Button , Tab ,Tabs,Accordion ,AccordionDetails,AccordionSummary , MenuItem } from '@mui/material';
import { useDispatch , useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {setReduxPrice,setExtra_items , setCurrentHotel, setRoom_quantity, setCurrentRoom} from '../redux/bookingSlice'
import SmallCarouselWithThumbnail from './smallCarouselWithThumbnails';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import StyledTextField from '../styledComponents/styledTextField';
import StyledButton from '../styledComponents/styledButton';
import CheckIcon from '@mui/icons-material/Check';
import React ,{ useState , useEffect}from 'react';
import LoginModal from './loginModal';
import GuestsModal from './guestsModal';

function RoomInfo(props) {
    const el = props.el
    const data = props.data
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [price, setPrice] = useState(0);
    const [rooms, setRooms] = useState(0);
    const [extraFields, setExtraFields] = useState({})
    const [currRoomPrice, setCurrRoomPrice] = useState(null)
    const user = useSelector(state => state.user.user)
    const guestsSet = useSelector(state => state.booking.guestSet)
    const router = useRouter();
    const dispatch = useDispatch()
    useEffect(()=>
    { 
        Object.values(data.hotel_extra_fields).forEach(val =>{
            setExtraFields(extraFields =>({
                ...extraFields,
                [val.extra_field_name] : 0
            }))
          })
    } , [])


    useEffect(()=>
    { calculatePrice()
    } , [extraFields , rooms , currRoomPrice])

    const calculatePrice = () =>{ 
        var temp_price =0;
        Object.values(data.hotel_extra_fields).forEach(key => {
            temp_price = temp_price + (key.extra_field_price * extraFields[key.extra_field_name])
          });
          temp_price = temp_price + (currRoomPrice * rooms)
          setPrice(temp_price)
    }

    useEffect(()=>{
        setOpen(false)
    } , [user])
    useEffect(()=>{
        setOpen2(false)
    } , [guestsSet])

    const submitData = (id , room) => {
        if(Object.keys(user).length !== 0){
        if(guestsSet === true){
        const price2 = price.toString()
        const fields = extraFields
        dispatch(setReduxPrice(price2))
        dispatch(setExtra_items(fields))
        dispatch(setCurrentHotel(id))
        dispatch(setCurrentRoom(room))
        dispatch(setRoom_quantity(rooms))
        sessionStorage.setItem('ReduxPrice' , price2)
        sessionStorage.setItem('Extra_items' , JSON.stringify(fields))
        sessionStorage.setItem('CurrentHotel' , id)
        sessionStorage.setItem('CurrentRoom' , room)
        sessionStorage.setItem('Room_quantity' , rooms)
        router.push({pathname:`/hotel/${id}/${room}`})}
        else{
        setOpen2(true)}
    }
    else{
        setOpen(true)
    }
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

    function options(arg){
        var arr =[];
        for (let index = 0; index < arg; index++) {
            arr.push(<MenuItem value={index+1}>{index+1} room</MenuItem>)
        }
        return arr
    }

    return (
        <Box>
                {open2?<GuestsModal adultMin={1} adultMax={el.adult} childMin={0} childMax={el.child} />:''}
                {open?<LoginModal/>:''}
                <Grid container item justifyContent='space-evenly' direction='row' alignItems='stretch' spacing={2} xs={12}>
                     <Grid item xs={12} sm={8} md={4} >
                    <Box sx={{backgroundColor:'background.main' , padding:'20px 25px'  , height:'100%' , borderRadius:'8px'}}>
                        <Grid container sx={{height:'100%'}} spacing={1}>
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
                <Box sx={{ backgroundColor:'background.main' , height:'100%' , padding:'20px 25px' , borderRadius:'8px'}}>
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
                <Grid item xs={2}><CheckIcon  sx={{ fontSize:'16px' ,color:'button.main'}}/></Grid><Grid item xs={10}><Typography fontSize={12}  variant='p'>{ele.service_name}</Typography></Grid>
                </Grid>))}
                        </Grid>
                    </Grid>
                        <Grid container item xs={12} spacing={1}>
                        {el.amenities.map((el , index) => (  
                 index <5?   
                <Grid container item xs={12} alignItems='center' spacing={1}>
                <Grid item xs={2}><img style={{ width:'16px'}}src={el.service_icon}/></Grid><Grid item xs={10}><Typography fontSize={12} variant='p'>{el.service_name}</Typography></Grid>
                </Grid>:<></>))}
                        </Grid>
                    </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Box  sx={{backgroundColor:'background.main', height:'100%'  , padding:'20px 25px', borderRadius:'8px' }} >
                    <Grid container spacing={2} item direction='row' justifyContent='space-between'>
                        <Grid xs={12} sm={3} container item direction='column' spacing={1}>
                            <Grid item>
                    <Typography fontWeight={300} variant='p'>Price</Typography>
                    </Grid>
                    <Grid item>
                    <Typography fontWeight={500} fontSize={25} color='button.main' variant='p'>PKR {price}</Typography>
                    </Grid>

                    </Grid>
               
                    <Grid xs={12} sm={6} container item direction='column' spacing={1}>
                            <Grid item sx={{textAlign:'center'}}>
                    <Typography  fontWeight={300} variant='p'>No. of Rooms</Typography>
                    </Grid>
                    <Grid item>
                    <form>
                    <FormControl>
                    <Grid xs={12} alignItems='center' spacing={2} direction='row' justifyContent='center' container item><Grid justifyContent='flex-end' alignContent='center' container item xs={4}> <Button onClick={e => {if(rooms-1 >= 0){setRooms(rooms -1 ); setCurrRoomPrice(el.roomnonrefundprice)}}}  sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'40px !important'}}>-</Button></Grid> <Grid container item sx={{textAlign:'center'}} xs={4}> <StyledTextField value={rooms} onChange={e => {if(parseInt(el.roomqty) >= e.target.value && e.target.value >= 0) {setRooms(e.target.value); setCurrRoomPrice(el.roomnonrefundprice)} }} defaultValue="0" value={rooms} id="outlined-name"  size='small' sx={{width:'100%'}} type='number' /></Grid> <Grid justifyContent='flex-start' alignContent='center' container item xs={4}> <Button onClick={e => {if(rooms+1 <= el.roomqty){setRooms(rooms +1 ); setCurrRoomPrice(el.roomnonrefundprice)}}} sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'40px !important'}}>+</Button></Grid></Grid>
                    </FormControl>
                    </form>
                    </Grid>

                    </Grid>

                    <Grid xs={12} item>
                    <Typography fontWeight={400} variant='p'>Current Package:</Typography>
                    </Grid>

                    <Grid container item spacing={2}>
                    {data.hotel_extra_fields.map((ele) =>(
                        <Grid container item>
                            <Grid xs={6} sm={3} item><Typography fontSize={14} fontWeight={300} variant='p'>{ele.extra_field_name}</Typography></Grid>
                            <Grid xs={6} sm={3} item><Typography  fontSize={14} fontWeight={300} variant='p'>PKR {ele.extra_field_price}</Typography></Grid>
                            <Grid xs={12} sm={6} alignItems='center' spacing={2} direction='row' justifyContent='center' container item><Grid justifyContent='flex-end' alignContent='center' container item xs={4}> <Button onClick={()=>extraFieldChange(ele.extra_field_name , extraFields[ele.extra_field_name] -1 )} sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'40px !important'}}>-</Button></Grid> <Grid container item sx={{textAlign:'center'}} xs={4}> <StyledTextField defaultValue="0" onChange={(e) =>extraFieldChange(ele.extra_field_name , parseInt(e.target.value) )} id="outlined-name" name={ele.extra_field_name} value={extraFields[ele.extra_field_name] ? extraFields[ele.extra_field_name] : 0 } size='small' sx={{width:'100%'}} type='number' /></Grid> <Grid justifyContent='flex-start' alignContent='center' container item xs={4}> <Button onClick={()=>extraFieldChange(ele.extra_field_name , extraFields[ele.extra_field_name] +1 )} sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'40px !important'}}>+</Button></Grid></Grid>
                        </Grid>))}
                    </Grid>
                    <Grid container item alignItems='baseline' spacing={2}>
                    <Grid item xs={6} sm={3}><Typography fontWeight={600} variant='p'>Total</Typography></Grid>
                    <Grid  item xs={6} sm={5}><Typography  fontWeight={500} fontSize={28} color='button.main' variant='p'>PKR {price}</Typography></Grid>
                    <Grid item xs={12} sm={4}><StyledButton onClick={() =>submitData(data.id , el.id)} fullWidth >Book Now</StyledButton></Grid>
                    </Grid>
                    </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default RoomInfo;