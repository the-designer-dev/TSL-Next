import { Grid ,  Box, Typography ,Button , Tab ,Tabs,Accordion ,AccordionDetails,AccordionSummary , MenuItem } from '@mui/material';
import { useDispatch , useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {setReduxPrice,setExtra_items , setCurrentHotel, setRoom_quantity, setCurrentRoom , setBookingType} from '../redux/bookingSlice'
import SmallCarouselWithThumbnail from './smallCarouselWithThumbnails';
import FormControl from '@mui/material/FormControl';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import StyledTextField from '../styledComponents/styledTextField';
import StyledButton from '../styledComponents/styledButton';
import CheckIcon from '@mui/icons-material/Check';
import React ,{ useState , useEffect}from 'react';
import LoginModal from './loginModal';
import GuestsModal from './guestsModal';
import moment from 'moment';
import useMediaQuery from '@mui/material/useMediaQuery';
import { setCheckIn, setCheckOut } from '../redux/hotelQuery';


function RoomInfo2(props) {
    const el = props.el
    const data = props.data
    const [bedsAvailable ,SetBedsAvailable] = useState([])
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [price, setPrice] = useState(0);
    const [roomPrice, setRoomPrice] = useState(0);
    const [rooms, setRooms] = useState(0);
    const [extraFields, setExtraFields] = useState({})
    const [currRoomPrice, setCurrRoomPrice] = useState(null)
    const [extraBed, setExtraBed] = useState({extra_bed_qty:0 , extra_bed_rates: el.extraBeds.length >0 ?el.extraBeds[0].extra_bed_rates : 0})
    const user = useSelector(state => state.user.user)
    const guestsSet = useSelector(state => state.booking.guestSet)
    const hotelQuery = useSelector(state => state.hotelquery)
    const router = useRouter();
    const [formats, setFormats] = React.useState(() => 'refundable');
    const matches = useMediaQuery("(min-width:370px)");
    const handleFormat = (event, newFormats) => {
        if(newFormats !== null){
            dispatch(setBookingType(newFormats))
      setFormats(newFormats)}
      setCurrRoomPrice(el.blackout_dates? newFormats === 'refundable'? el.blackout_dates.nonrefundable_rates : el.blackout_dates.refundable_rates : newFormats === 'refundable'?  el.roomrefundprice : el.roomnonrefundprice )
      
    }

    const dispatch = useDispatch()
    useEffect(()=>
    { 
        dispatch(setCheckIn(sessionStorage.getItem('checkIn')))
        dispatch(setCheckOut(sessionStorage.getItem('checkOut')))

        Object.values(data.hotel_extra_fields).forEach(val =>{
            setExtraFields(extraFields =>({
                ...extraFields,
                [val.extra_field_name] : 0
            }))
          })

          let arr2 = [];
            console.log(el)
          el.bedtypes.forEach((x)=>{
             if(arr2.some((val)=>{ return val['bedName'] == x['bedName'] })){
                   arr2.forEach((k)=>{
                 if(k['bedName'] === x['bedName']){ 
                   k["occurrence"]++
                 }
              })
                 
             }else{
               let a = {}
               a['bedName'] = x['bedName']
               a["occurrence"] = 1
               arr2.push(a);
             }
          })
            
          SetBedsAvailable(arr2)

    } , [])


    useEffect(()=>
    {
         calculatePrice()
    } , [extraFields , rooms , currRoomPrice , extraBed , formats])

    const calculatePrice = () =>{ 
        var days= moment(sessionStorage.getItem('checkOut')).diff(moment(sessionStorage.getItem('checkIn')), 'days')+1
        var temp_price =0;
        console.log('entered')
        console.log(days)
        console.log(currRoomPrice)
        // Object.values(data.hotel_extra_fields).forEach(key => {
        //     temp_price = temp_price + (key.extra_field_price * extraFields[key.extra_field_name])
        //   });
          temp_price = temp_price + (extraBed.extra_bed_qty * extraBed.extra_bed_rates *(days))
          temp_price = temp_price + (currRoomPrice * rooms *(days))
          setPrice(temp_price)
    }

    const calculatePrice2 = () =>{ 
        var temp_price =0;
   
          temp_price = temp_price + (currRoomPrice * rooms)
          setRoomPrice(temp_price)
    }

    
    useEffect(()=>
    { calculatePrice2()
    } , [rooms , currRoomPrice])

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
        var fields = extraFields
        fields.extraBeds = extraBed.extra_bed_qty 
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
        <Box sx={{backgroundColor:'background.main' , padding :'20px' , borderRadius:'10px'}}> 
                {open2?<GuestsModal adultMin={1} adultMax={el.adult} childMin={0} childMax={el.child} />:''}
                {open?<LoginModal/>:''}
                <Grid container columns={18} spacing={4}>
                    <Grid container item xs={18} sm={9} md={7}>
                        <Box sx={{width:'100%'}}>
                {el.images.length > 0 ? <SmallCarouselWithThumbnail images={el.images}/> :''}
                </Box>
                </Grid>
                <Grid container item xs={18} sm={9} md={8}>
                <Grid container item xs={18} spacing={1}>
                    <Grid item xs={18}>
                    <Typography variant='h6' fontWeight={600}>{el.roomname}</Typography>
                    </Grid>
                    <Grid container item xs={11} spacing={1}>
                        <Grid item xs={18}>
                            <Box><Typography fontWeight={600} fontSize={12}>{bedsAvailable.map(el => (`${el.occurrence} ${el.bedName} Sized Bed `))}</Typography></Box>
                        </Grid>
                        <Grid container item sx={{lineHeight:'14px'}}>
                        <Grid item xs={18}>
                            <Typography fontWeight={600} fontSize={12}>What's Included?</Typography>
                        </Grid>
                        {el.room_includes.map((ele) => (  
                <Grid container item xs={18} alignItems='center' spacing={1}>
                <Grid item ><CheckIcon  sx={{ fontSize:'16px' ,color:'button.main'}}/></Grid><Grid item ><Typography fontSize={12}  variant='p'>{ele.service_name}</Typography></Grid>
                </Grid>))}
                </Grid>
                <Grid container item xs={18} spacing={1}>
                    <Grid item xs={18}>
                <ToggleButtonGroup
      value={formats}
      exclusive
      sx={{'& .MuiButtonBase-root':{
        '&.MuiToggleButton-root':{
            padding:'6px 20px !important'
        }
      }}}
      onChange={handleFormat}
      orientation={`${matches ? `horizontal` : `vertical`}`}
      aria-label="text formatting"
    >
      <ToggleButton   sx={{'&.MuiToggleButton-root':{'&.Mui-selected':{backgroundColor:'button.main'}}}}  value="refundable" aria-label="bold">
        <Typography fontSize={10} fontWight={600} variant='p'>Refundable</Typography>
      </ToggleButton>
      <ToggleButton  sx={{'&.MuiToggleButton-root':{'&.Mui-selected':{backgroundColor:'button.main'}}}} value="nonrefundable" aria-label="italic">
      <Typography fontSize={10} fontWight={600} variant='p'>Non-Refundable</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
                </Grid>
                
                {console.log(formats)}
                {formats === 'refundable'?
                <Grid item xs={18} sx={{lineHeight:'14px'}}>
                    
                    {el.free_cancellation_days?<><Typography fontSize={12} variant='p'>- Free cancellation before {moment(hotelQuery.checkIn).subtract(el.free_cancellation_days, "days").format("DD-MM-YYYY")}</Typography><br/></>: ''}
                    {el.cancelled_within_days?<><Typography fontSize={12} variant='p'>- Penalty of PKR {currRoomPrice * el.applied_for_days} Within {moment(hotelQuery.checkIn).subtract(el.cancelled_within_days, "days").format("DD-MM-YYYY")} to {moment(hotelQuery.checkIn).format("DD-MM-YYYY")}</Typography><br/></>:''}
                    {el.no_show?<Typography fontSize={12} variant='p'>- No show cancellation fee of {el.no_show}% of your bill</Typography>:''}
                    
                </Grid>
                :
                <Grid item xs={18} sx={{lineHeight:'14px'}}>
                    <Typography fontSize={12} variant='p'>- This cost is non-refundable</Typography><br/>
                </Grid>
                }
                </Grid>

                    </Grid>
                <Grid container item xs={7} spacing={2}>
                <Grid container item xs={18} sx={{lineHeight:'14px'}}>
                        <Grid item xs={18}>
                            <Typography fontWeight={600} fontSize={12}>Features Included</Typography>
                        </Grid>
                        {el.facilities.map((ele) => (  
                <Grid container item xs={18} alignItems='center' spacing={1}>
                <Grid item ><CheckIcon  sx={{ fontSize:'16px' ,color:'button.main'}}/></Grid><Grid item ><Typography fontSize={12}  variant='p'>{ele.service_name}</Typography></Grid>
                </Grid>))}
                </Grid>
                <Grid container item sx={{lineHeight:'14px'}} xs={18} >
                <Typography fontWeight={600} fontSize={12}>No. of Rooms</Typography>
                    <form>
                    <FormControl>
                    <Grid xs={18} alignItems='center' spacing={2} direction='row' justifyContent='left' container item><Grid justifyContent='flex-start' alignContent='center' container item xs={4}> <Button onClick={e => {if(rooms-1 >= 0){setRooms(rooms -1 ); setCurrRoomPrice(el.blackout_dates? formats === 'refundable'? el.blackout_dates.nonrefundable_rates : el.blackout_dates.refundable_rates : formats === 'refundable'?  el.roomrefundprice : el.roomnonrefundprice )}}}  sx={{ padding:'0px',borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'26px !important'}}>-</Button></Grid> <Grid container item justifyContent={'flex-start'} sx={{textAlign:'center' , paddingLeft:'10px !important'}} xs={8}> <StyledTextField size={'small'} value={rooms} onChange={e => {if(parseInt(el.blackout_dates? el.blackout_dates.quantity : el.roomqty) >= e.target.value && e.target.value >= 0) {setRooms(e.target.value); setCurrRoomPrice(el.blackout_dates?el.blackout_dates.nonrefundable_rates : formats === 'refundable'? el.roomrefundprice : el.roomnonrefundprice)} }} defaultValue="0" value={rooms} id="outlined-name"  size='small' sx={{height:'28px' , boxSizing:'border-box !important' , '& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{flexFlow:'wrap' , height:'11px'}} }} fullWidth type='number' /></Grid> <Grid sx={{paddingLeft:'10px !important'}} justifyContent='flex-start' alignContent='center' container item xs={4}> <Button onClick={e => {if(rooms+1 <= parseInt(el.blackout_dates? el.blackout_dates.quantity : el.roomqty)){setRooms(rooms +1 ); setCurrRoomPrice(el.blackout_dates?el.blackout_dates.nonrefundable_rates : formats === 'refundable'? el.roomrefundprice : el.roomnonrefundprice)}}} sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , padding:'0px' ,minWidth:'26px !important'}}>+</Button></Grid></Grid>
                    </FormControl>
                    </form>
                </Grid>
                <Grid container item sx={{lineHeight:'14px'}} xs={18}>
                <Typography fontWeight={600} fontSize={12}>Extra Beds</Typography>
                <Typography fontWeight={100} sx={{paddingLeft:'5px'}} fontSize={12} color={'#a5a5a5'}>(PKR {el.extraBeds[0].extra_bed_rates} per bed)</Typography>
                    <form>
                    <FormControl>
                    {/* <Grid xs={18} alignItems='center' spacing={2} direction='row' justifyContent='left' container item><Grid justifyContent='flex-start' alignContent='center' container item xs={4}> <Button onClick={e => {if(rooms-1 >= 0){setRooms(rooms -1 ); setCurrRoomPrice(el.blackout_dates?el.blackout_dates.nonrefundable_rates : el.roomnonrefundprice)}}}  sx={{ padding:'0px',borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'26px !important'}}>-</Button></Grid> <Grid container item justifyContent={'flex-start'} sx={{textAlign:'center' , paddingLeft:'0px !important'}} xs={4}> <StyledTextField size={'small'} value={rooms} onChange={e => {if(parseInt(el.blackout_dates? el.blackout_dates.quantity : el.roomqty) >= e.target.value && e.target.value >= 0) {setRooms(e.target.value); setCurrRoomPrice(el.blackout_dates?el.blackout_dates.nonrefundable_rates : el.roomnonrefundprice)} }} defaultValue="0" value={rooms} id="outlined-name"  size='small' sx={{width:'100%', height:'28px' , boxSizing:'border-box !important'}} fullWidth type='number' /></Grid> <Grid sx={{paddingLeft:'10px !important'}} justifyContent='flex-start' alignContent='center' container item xs={4}> <Button onClick={e => {if(rooms+1 <= parseInt(el.blackout_dates? el.blackout_dates.quantity : el.roomqty)){setRooms(rooms +1 ); setCurrRoomPrice(el.blackout_dates?el.blackout_dates.nonrefundable_rates : el.roomnonrefundprice)}}} sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , padding:'0px' ,minWidth:'26px !important'}}>+</Button></Grid></Grid> */}
                    <Grid xs={18} alignItems='center' spacing={2} direction='row' justifyContent='left' container item><Grid justifyContent='flex-start' alignContent='center' container item xs={4}> <Button onClick={()=>setExtraBed({...extraBed , extra_bed_qty: extraBed.extra_bed_qty -1} )} sx={{ padding:'0px',borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'26px !important'}}>-</Button></Grid> <Grid container item justifyContent={'flex-start'} sx={{textAlign:'center' , paddingLeft:'10px !important'}}  xs={8}> <StyledTextField defaultValue="0" onChange={(e)=>setExtraBed({...extraBed , extra_bed_qty: e.target.value } )} id="outlined-name" value={extraBed.extra_bed_qty } sx={{width:'100%', height:'28px' , boxSizing:'border-box !important' , '& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{flexFlow:'wrap' , height:'11px'}} }} fullWidth size='small' type='number' /></Grid> <Grid justifyContent='flex-start' alignContent='center' sx={{paddingLeft:'10px !important'}} container item xs={4}> <Button onClick={()=>setExtraBed({...extraBed , extra_bed_qty: extraBed.extra_bed_qty +1} )} sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , padding:'0px' ,minWidth:'26px !important'}}>+</Button></Grid></Grid>
                    </FormControl>
                    </form>
                </Grid>
                </Grid>
                </Grid>
                </Grid>
                
                <Grid container item xs={18} sm={9} md={3} sx={{paddingLeft:'16px !important' , lineHeight:'1'}} spacing={3}>
                    <Grid container item xs={18}>
                <Grid item xs={18}>
                <Typography variant='h6'>Room price</Typography>
                </Grid>
                <Grid  item xs={18} ><Typography  fontWeight={600} fontSize={12} color='button.main' variant='p'>PKR </Typography><Typography fontWeight={600} fontSize={28} color='button.main' variant='p'>{el.blackout_dates?el.blackout_dates.nonrefundable_rates : formats === 'refundable'? el.roomrefundprice : el.roomnonrefundprice}</Typography></Grid>
                <Grid  item xs={18} ><Typography fontWeight={500} fontSize={12}>Per Night</Typography></Grid>
                <Grid  item xs={18} ><Typography fontWeight={100} fontSize={10} color={'#a5a5a5'}>(Inclusive of all taxes)</Typography></Grid>
                </Grid>
                    <Grid container item xs={18}>
                <Grid item xs={18}>
                <Typography variant='h6'>Total price</Typography>
                </Grid>
                <Grid  item xs={18} ><Typography  fontWeight={600} fontSize={14} color='button.main' variant='p'>PKR </Typography><Typography fontWeight={600} fontSize={36} color='button.main' variant='p'>{price}</Typography></Grid>
                <Grid  item xs={18} ><Typography fontWeight={500} fontSize={12}> {hotelQuery? `${moment(hotelQuery.checkIn).format('DD-MM-YYYY')} - ${moment(hotelQuery.checkOut).format('DD-MM-YYYY')}` :''}</Typography></Grid>
                <Grid  item xs={18} ><Typography fontWeight={100} fontSize={10} color={'#a5a5a5'}>(Inclusive of all taxes)</Typography></Grid>
                </Grid>
                <Grid item xs={18} ><StyledButton onClick={() =>submitData(data.id , el.id)} fullWidth >Book Now</StyledButton></Grid>

                </Grid>

                    {/* <Grid container item spacing={2}>
                    {data.hotel_extra_fields.map((ele) =>(
                        <Grid container item>
                            <Grid xs={6} sm={3} item><Typography fontSize={14} fontWeight={300} variant='p'>{ele.extra_field_name}</Typography></Grid>
                            <Grid xs={6} sm={3} item><Typography  fontSize={14} fontWeight={300} variant='p'>PKR {ele.extra_field_price}</Typography></Grid>
                            <Grid xs={12} sm={6} alignItems='center' spacing={2} direction='row' justifyContent='center' container item><Grid justifyContent='flex-end' alignContent='center' container item xs={4}> <Button onClick={()=>extraFieldChange(ele.extra_field_name , extraFields[ele.extra_field_name] -1 )} sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'40px !important'}}>-</Button></Grid> <Grid container item sx={{textAlign:'center'}} xs={4}> <StyledTextField defaultValue="0" onChange={(e) =>extraFieldChange(ele.extra_field_name , parseInt(e.target.value) )} id="outlined-name" name={ele.extra_field_name} value={extraFields[ele.extra_field_name] ? extraFields[ele.extra_field_name] : 0 } size='small' sx={{width:'100%'}} type='number' /></Grid> <Grid justifyContent='flex-start' alignContent='center' container item xs={4}> <Button onClick={()=>extraFieldChange(ele.extra_field_name , extraFields[ele.extra_field_name] +1 )} sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'40px !important'}}>+</Button></Grid></Grid>
                        </Grid>))}
                        {el.extraBeds.length >0 ? 
                        <Grid container item>
                            <Grid xs={6} sm={3} item><Typography fontSize={14} fontWeight={300} variant='p'>Extra Beds: </Typography></Grid>
                            <Grid xs={6} sm={3} item><Typography  fontSize={14} fontWeight={300} variant='p'>PKR {el.extraBeds[0].extra_bed_rates}</Typography></Grid>
                            <Grid xs={12} sm={6} alignItems='center' spacing={2} direction='row' justifyContent='center' container item><Grid justifyContent='flex-end' alignContent='center' container item xs={4}> <Button onClick={()=>setExtraBed({...extraBed , extra_bed_qty: extraBed.extra_bed_qty -1} )} sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'40px !important'}}>-</Button></Grid> <Grid container item sx={{textAlign:'center'}} xs={4}> <StyledTextField defaultValue="0" onChange={(e)=>setExtraBed({...extraBed , extra_bed_qty: e.target.value } )} id="outlined-name" value={extraBed.extra_bed_qty } size='small' sx={{width:'100%'}} type='number' /></Grid> <Grid justifyContent='flex-start' alignContent='center' container item xs={4}> <Button onClick={()=>setExtraBed({...extraBed , extra_bed_qty: extraBed.extra_bed_qty +1} )} sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'40px !important'}}>+</Button></Grid></Grid>
                        </Grid>: ''}
                    </Grid>
                  
                    <Grid  item xs={6} sm={5}><Typography  fontWeight={500} fontSize={28} color='button.main' variant='p'>PKR {price}</Typography></Grid> */}
                    </Grid>
               </Box> 
    );
}

export default RoomInfo2;