import { Box, Grid, InputAdornment, Typography ,Button , TextField} from '@mui/material';
import React,{useState} from 'react';
import StyledTextField from '../styledComponents/styledTextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import useMediaQuery from '@mui/material/useMediaQuery';
import moment from 'moment';
import { useTheme } from '@mui/material';
import StyledButton from '../styledComponents/styledButton';
import { DatePicker } from '@mui/lab';
import { API_URL } from '../config';
import {useDispatch , useSelector} from 'react-redux'
import axios from 'axios';
import { setBlackoutDates } from '../redux/blackoutDates';

function AddEventBox(props) {
    console.log(props)
    const matches = useMediaQuery("(min-width:370px)");
    const blackoutDates = useSelector(state => state.blackoutDates.blackoutDates)
    const currentHotel = useSelector(state => state.blackoutDates.currentHotel)
    const token = useSelector(state => state.user.token)
    const [start , setStart] = useState(moment(props.start))
    const [end , setEnd] = useState(moment(props.end))
    const [name , setName] = useState(props.name)
    const [refundableRates , setRefundableRates] = useState(props.refundableRates)
    const [nonRefundableRates , setNonRefundableRates] = useState(props.nonRefundableRates)
    const [quantity , setQuantity] = useState(props.quantity?props.quantity:0)
    const [formats, setFormats] = useState(() => [props.roomType?props.roomType[0]:'suite']);
    const theme = useTheme()
    const dispatch = useDispatch()
    const handleFormat = (event, newFormats) => {
    if(newFormats !== null){
    setFormats([newFormats])}
    };

    function isOverlapping(Blackoutdates , event){
        var array = Blackoutdates
        for(const i in array){
            if (event.end >= array[i].start && event.start <= array[i].end){
               return true;
            }
        }
        return false;
    }

    async function AddNewEvent(e){
        e.preventDefault()
        var copyBlackoutDates = blackoutDates.map(el => el)
        if(!isOverlapping(copyBlackoutDates , {title:name ,start:props.range? props.range[0]:start.format('YYYY-MM-DD') ,end: props.range? props.range[1] :end.format('YYYY-MM-DD') ,roomType:formats[0] ,refundableRates: refundableRates ,nonRefundableRates: nonRefundableRates ,quantity: quantity}))
        {await axios({
            method: "post",
            url: `${API_URL}/rooms/blackoutdates`,
            headers:{
                'Authorization': `Bearer ${token}`
              },
            data:{hotel: currentHotel , title:name ,start:props.range? props.range[0]:start.format('YYYY-MM-DD') ,end: props.range? props.range[1] :end.format('YYYY-MM-DD') ,roomType:formats[0] ,refundableRates: refundableRates ,nonRefundableRates: nonRefundableRates ,quantity: quantity} } ).then(res => 
                {
                    dispatch(setBlackoutDates([...copyBlackoutDates , {title:name ,start:props.range? props.range[0]:start.format('YYYY-MM-DD') ,end: props.range? props.range[1] :end.format('YYYY-MM-DD') ,roomType:formats[0] ,refundableRates: refundableRates ,nonRefundableRates: nonRefundableRates ,quantity: quantity , overlap: false }]))
                }).catch(err => {alert('Room type not found.')})}
            else{
                alert('Events cannot overlap.')
            }
            props.handleClose()
    }

    function editEvent(e){
        e.preventDefault()
        var copyBlackoutDates = blackoutDates.map(el => el)
        copyBlackoutDates.splice(copyBlackoutDates.findIndex(el => {el.title === props.name && el.start === props.start && el.end === props.end && Number(el.refundableRates) === props.refundableRates && Number(el.nonRefundableRates) === props.nonRefundableRates && Number(el.quantity) === props.quantity }) , 1 ,{title:name ,start:start.format('YYYY-MM-DD') ,end: end.format('YYYY-MM-DD') ,roomType:formats[0] ,refundableRates: refundableRates ,nonRefundableRates: nonRefundableRates ,quantity: quantity} )
        dispatch(setBlackoutDates(copyBlackoutDates))
        var oldObj ={
            title : props.name,  
            start : props.start,
            end : props.end ,
            roomType : formats,
            refundableRates : props.refundableRates,
            nonRefundableRates : props.nonRefundableRates,
            quantity : props.quantity
        }
        var newObj ={
            title:name ,
            start:start.format('YYYY-MM-DD') ,
            end: end.format('YYYY-MM-DD') ,
            roomType:formats,
            refundableRates: refundableRates ,
            nonRefundableRates: nonRefundableRates ,
            quantity: quantity
        }
        const res = axios({
            method: "post",
            url: `${API_URL}/rooms/blackoutdates/edit`,
            headers:{
                'Authorization': `Bearer ${token}`
              },
            data:{oldObj , newObj , hotel: currentHotel }}).then(res => res.data).catch(err => err)
            console.log(res) 
            props.handleClose()
    }
    



    return (
        <Box >
            <form onSubmit={(e) => {if(props.name){editEvent(e)}else{AddNewEvent(e)}}}>
            <Grid container spacing={2}>
                <Grid container item xs={12} >
                    <Grid item xs={12}><Typography color={'primary.main'} variant='h6'>Special Event Calender</Typography></Grid>
                    <Grid item xs={12}><Typography color={'primary.main'} fontWeight={400} variant='p'>Add Blackout Days</Typography></Grid>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12}><Typography color={'primary.main'} fontSize={14} variant='p'>Date Range</Typography></Grid>
                    {props.range?<Grid item xs={12}><Typography color={'primary.main'} fontSize={14} variant='p'>{props.range[0]} ------ {props.range[1]}</Typography></Grid>:
                    <>
                    <Grid container item xs={12}>
                    <Grid item xs={12} sm={6}>
                    <Grid alignContent='space-around' container item xs={12} direction='column' ><Grid item xs={12} sx={{paddingBottom:'8px'}}><Typography color='#FFF' variant='p'>Start Date</Typography></Grid>  <Grid item xs={12}> <DatePicker PaperProps={{style:{backgroundColor:theme.palette.background.main , backgroundImage:'none'}}} value={start} onChange={(newValue) => { setStart(newValue)   }} renderInput={(params) => <TextField required sx={{'& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{color:'#000'},'& .MuiInputAdornment-root':{'& .MuiButtonBase-root':{'& .MuiSvgIcon-root':{color:'button.main'}}}} , backgroundColor:'#FFF', borderRadius:'5px' }} size="small" variant="outlined" placeholder="MM/DD/YYYY" {...params} />}/></Grid></Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Grid alignContent='space-around' container item xs={12} direction='column' ><Grid item xs={12} sx={{paddingBottom:'8px'}}><Typography color='#FFF' variant='p'>End Date</Typography></Grid>  <Grid item xs={12}> <DatePicker PaperProps={{style:{backgroundColor:theme.palette.background.main , backgroundImage:'none'}}} value={end} onChange={(newValue) => { setEnd(newValue)   }} renderInput={(params) => <TextField required sx={{'& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{color:'#000'},'& .MuiInputAdornment-root':{'& .MuiButtonBase-root':{'& .MuiSvgIcon-root':{color:'button.main'}}}} , backgroundColor:'#FFF', borderRadius:'5px' }} size="small" variant="outlined" placeholder="MM/DD/YYYY" {...params} />}/></Grid></Grid>
                    </Grid>
                    </Grid>
                    </>
                    }
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12}><Typography color={'primary.main'} fontSize={14} variant='p'>Name of event:</Typography></Grid>
                    <Grid item xs={12}><StyledTextField value={name} onChange={e => setName(e.target.value)} fullWidth/></Grid>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12}><Typography color={'primary.main'} fontSize={14} variant='p'>Select room you want the blackout dates to apply on:</Typography></Grid>
                    <Grid item xs={12}>
                    <Box sx={{ width: '100%' }}>
        <ToggleButtonGroup
            fullWidth
            exclusive
        value={formats}
        onChange={handleFormat}
        orientation={`${matches ? `horizontal` : `vertical`}`}
        aria-label="text formatting"
        >
        <ToggleButton   sx={{'&.MuiToggleButton-root':{'&.Mui-selected':{backgroundColor:'button.main'}}}}  value="suite" aria-label="bold">
            <Typography variant='p'>Suite</Typography>
        </ToggleButton>
        <ToggleButton  sx={{'&.MuiToggleButton-root':{'&.Mui-selected':{backgroundColor:'button.main'}}}} value="executive" aria-label="italic">
        <Typography variant='p'>Executive</Typography>
        </ToggleButton>
        <ToggleButton  sx={{'&.MuiToggleButton-root':{'&.Mui-selected':{backgroundColor:'button.main'}}}} value="standard" aria-label="italic">
        <Typography variant='p'>Standard Room</Typography>
        </ToggleButton>
        </ToggleButtonGroup>
    </Box>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={12}><Typography color={'primary.main'} fontSize={16} variant='p'>Rates for Room</Typography></Grid>
                        <Grid item xs={6}><Typography color={'primary.main'} fontSize={14} variant='p'>Rates (Refundable):</Typography></Grid>
                        <Grid item xs={6}><StyledTextField value={refundableRates} onChange={e => setRefundableRates(e.target.value)} required sx={{'& .MuiInputBase-root':{padding:'0px' ,'& .MuiInputAdornment-positionStart':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'4px 0px 0px 4px' , padding:'0px 10px' ,'& .MuiTypography-root':{color:"#FFF"}},'& .MuiInputAdornment-positionEnd':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'0px 4px 4px 0px' , padding:'0px 10px' ,'& .MuiTypography-root':{color:"#FFF"}}}}}  InputProps={{startAdornment: <InputAdornment position="start">PKR</InputAdornment> , endAdornment: <InputAdornment  position="end">Per Person</InputAdornment> }} fullWidth/></Grid>
                        <Grid item xs={6}><Typography color={'primary.main'} fontSize={14} variant='p'>Rates (Non-Refundable):</Typography></Grid>
                        <Grid item xs={6}><StyledTextField value={nonRefundableRates} onChange={e => setNonRefundableRates(e.target.value)} required sx={{'& .MuiInputBase-root':{padding:'0px' ,'& .MuiInputAdornment-positionStart':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'4px 0px 0px 4px' , padding:'0px 10px' ,'& .MuiTypography-root':{color:"#FFF"}},'& .MuiInputAdornment-positionEnd':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'0px 4px 4px 0px' , padding:'0px 10px' ,'& .MuiTypography-root':{color:"#FFF"}}}}}  InputProps={{startAdornment: <InputAdornment position="start">PKR</InputAdornment> , endAdornment: <InputAdornment  position="end">Per Person</InputAdornment> }} fullWidth/></Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={12}><Typography color={'primary.main'} fontSize={16} variant='p'>Hotel Room Quantity</Typography></Grid>
                        <Grid item xs={6}><Typography color={'primary.main'} fontSize={14} variant='p'>Total units of room:</Typography></Grid>
                        <Grid xs={6} alignItems='center' spacing={2} direction='row' justifyContent='center' container item><Grid justifyContent='flex-end' alignContent='center' container item xs={4}> <Button onClick={() => {quantity -1 >= 0?setQuantity(Number(quantity) -1):setQuantity(0)}} sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'40px !important'}}>-</Button></Grid> <Grid container item sx={{textAlign:'center'}} xs={4}> <StyledTextField defaultValue="0" value={quantity} onChange={e => {e.target.value > 0? setQuantity(e.target.value) :setQuantity(0) }} id="outlined-name"  size='small' sx={{width:'100%'}} type='number' /></Grid> <Grid justifyContent='flex-start' alignContent='center' container item xs={4}> <Button onClick={() => {setQuantity(Number(quantity) + 1)}} sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'40px !important'}}>+</Button></Grid></Grid>
                    </Grid>
                </Grid>
                    <Grid container item xs={12} spacing={1} justifyContent='flex-end'>
                        <Grid item xs={12} sm={3}><StyledButton type='submit' fullWidth>Save Blackout Day</StyledButton></Grid>
                    </Grid>
            </Grid>
        </form>
        </Box>
    );
}

export default AddEventBox;