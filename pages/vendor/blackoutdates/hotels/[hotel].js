import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import BlackoutCalendar from '../../../../components/blackoutCalendar';
import VendorLayout from '../../../../components/vendorLayout';
import StyledContainer from '../../../../styledComponents/styledContainer';
import { useSelector , useDispatch } from 'react-redux';
import StyledButton from '../../../../styledComponents/styledButton'; 
import {useRouter} from 'next/router';
import { setBlackoutDates, setCurrentHotel } from '../../../../redux/blackoutDates';
import { useEffect } from 'react';
import axios from 'axios';
import {API_URL} from '../../../../config'
import AddEventModal from '../../../../components/addEventModal';
function BlackoutDates(props) {
    const router = useRouter()
    const dispatch = useDispatch()
    const {hotel} = router.query
    const token = useSelector(state => state.user.token)
    dispatch(setCurrentHotel(hotel))
    const allBlackoutDates = useSelector(state => state.blackoutDates.blackoutDates)    
    const [start , setStart] = useState(null)
    const [end , setEnd] = useState(null)
    const [title , setTitle] = useState(null)
    const [refundableRates , setRefundableRates] = useState(null)
    const [nonRefundableRates , setNonRefundableRates] = useState(null)
    const [quantity , setQuantity] = useState(null)
    const [roomType , setRoomType] = useState(null)       
    const [openModal , setOpenModal] = useState(Boolean)

    async function removeEvent(id){
    const copyallBlackoutDates = allBlackoutDates.map(el => el)
    const objectRemoved =copyallBlackoutDates.splice(copyallBlackoutDates.findIndex((el) => el.id === id) , 1)
  
        dispatch(setBlackoutDates(copyallBlackoutDates))
        await axios({
            method: 'POST',
            url: `${API_URL}/rooms/blackoutdates/remove`,
            data:{objectRemoved , hotel:hotel},
            headers:{
              Accept: 'application/json',
              'Authorization': `Bearer ${token}`
            }
          }).then(res => res.data)
        }

    async function editEvent(id){
        setOpenModal(true)
        }   

        function removeDuplicateObjectFromArray(array) {
            var check = new Set();
            return array.filter(obj => !check.has(obj['start_date']) && !check.has(obj['end_date']) && !check.has(obj['nonrefundable_rates']) && !check.has(obj['quantity']) &&!check.has(obj['refundable_rates']) && !check.has(obj['room_type']) && !check.has(obj['title']) && check.add(obj['title'] ));
          } 
    useEffect(async ()=> {
        if(hotel){
        var hotels =  await axios({
            method: 'GET',
            url: `${API_URL}/hotels/${hotel}`,
            headers:{
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
          }).then(res => res.data)
          var blackoutDates = hotels.rooms.map(el => el.blackout_dates)
          var unique = removeDuplicateObjectFromArray(blackoutDates.flat())
          console.log(blackoutDates)
          dispatch(setBlackoutDates(unique.map(el => {return {id:el.id, title :el.title ,start :el.start_date ,end : el.end_date,roomType :el.room_type ,refundableRates : el.refundable_rates,nonRefundableRates : el.nonrefundable_rates ,quantity : el.quantity , overlap: false }} )))}
        } , [hotel])
    return (

        <StyledContainer >
            <AddEventModal start={start}  end={end}  name={title}  refundableRates={refundableRates}  nonRefundableRates={nonRefundableRates}  quantity={quantity}  roomType ={roomType} open={openModal}  handleClose={() => setOpenModal(false)} />
            <Grid container spacing={1}>
                {allBlackoutDates.length > 0?
                <Grid container spacing={1} alignContent={'flex-start'}  className='events' sx={{maxHeight:'calc( 100vh - 107px )' , overflow:'scroll' , overflowX:'hidden'}} item xs={12} sm={3}>
                {allBlackoutDates.map(el=>(
                    <Grid item >
                        <Box sx={{backgroundColor:'background.main' , padding:'10px' , borderRadius:'8px'}}>
                        <Grid container item spacing={1}>
                            <Grid item xs={12}><Typography fontSize={16} fontWeight={600} variant='p'>{el.title}</Typography></Grid>
                            <Grid item xs={12}><Typography fontSize={14} fontWeight={400} variant='p'>{el.start} ------ {el.end}</Typography></Grid>
                            <Grid item xs={12}><Typography fontSize={12} fontWeight={400} variant='p'>Room Type : {el.roomType}</Typography></Grid>
                            <Grid item xs={12}><Typography fontSize={12} fontWeight={400} variant='p'>Rates (Refundable) : {el.refundableRates}</Typography></Grid>
                            <Grid item xs={12}><Typography fontSize={12} fontWeight={400} variant='p'>Rates (Non-Refundable) : {el.nonRefundableRates}</Typography></Grid>
                            <Grid item xs={12}><Typography fontSize={12} fontWeight={400} variant='p'>Room Quantity : {el.quantity}</Typography></Grid>
                            <Grid container item xs={12} sm={6}><StyledButton onClick={() => removeEvent(el.id)} sx={{backgroundColor:'#7A2C2C !important'}} fullWidth>Remove</StyledButton></Grid>
                            <Grid container item xs={12} sm={6}><StyledButton onClick={() => {setTitle(el.title);setStart(el.start);setEnd(el.end),setRoomType(el.roomType);setRefundableRates(el.refundableRates);setNonRefundableRates(el.nonRefundableRates);setQuantity(el.quantity);editEvent()}} fullWidth>Edit</StyledButton></Grid>
                        </Grid>
                        </Box>
                    </Grid>
                ))}
                </Grid>
                :''}
                <Grid item xs={12} sm={allBlackoutDates.length > 0?9:12}>
                    <BlackoutCalendar hotel={hotel}/>
                </Grid>
            </Grid>
        </StyledContainer>
    );
}

BlackoutDates.getLayout = function getLayout(BlackoutDates) {
    return (
      <VendorLayout>
        {BlackoutDates}
      </VendorLayout>
    )
  }

export default BlackoutDates;
