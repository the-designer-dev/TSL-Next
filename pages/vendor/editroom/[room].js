import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import StepperForm2 from '../../../components/stepper2';
import VendorLayout from '../../../components/vendorLayout';
import EditRoomForm from '../../../components/editRoomForm';
import Overview from '../../../components/overview';
import StyledContainer from '../../../styledComponents/styledContainer';
import {useSelector , useDispatch} from 'react-redux';
import {useRouter} from 'next/router'
import axios from 'axios';
import { API_URL } from '../../../config';
import {setRoomName,setRoomDescription,setRoomImages,setAdultCapacity,setChildCapacity,setBedCapacity , setRoomType , setRoomQuantity,setRoomAmenities,setRoomFacilities,setRoomRules,setRoomIncludes,setRefundableRates,setNonRefundableRates , setBedType , setExtraBedCapacityRates , setExtraBedCapacityQuantity} from '../../../redux/addRoom'
import EditOverview from '../../../components/editOverview';
function EditRoom(props) {
  const router = useRouter()
    const { room } = router.query
    const dispatch = useDispatch()
    const active = useSelector(state => state.formData.activeStep2)

    useEffect(async () => {
        if(room)
        {const rooms =await axios({
            method:'GET',
            url:`${API_URL}/rooms/${room}`,
            headers:{
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        }).then(res => res.data)
        
    dispatch(setRoomName(rooms.roomname))
    dispatch(setRoomDescription(rooms.roomdescription))
    dispatch(setRoomImages(rooms.roomimages))
    dispatch(setAdultCapacity(rooms.adult))
    dispatch(setChildCapacity(rooms.child))
    dispatch(setBedCapacity(rooms.bedcapacity))
    dispatch(setBedType(rooms.bed_type))
    dispatch(setRefundableRates(rooms.roomrefundprice))
    dispatch(setNonRefundableRates(rooms.roomnonrefundprice))
    dispatch(setRoomType(rooms.roomcategories))
    dispatch(setRoomQuantity(rooms.roomqty))
    dispatch(setRoomAmenities(rooms.room_amenities))
    dispatch(setRoomFacilities(rooms.room_facilities))
    dispatch(setRoomRules(rooms.room_rules))
    dispatch(setRoomIncludes(rooms.room_included))
    dispatch(setExtraBedCapacityRates(rooms.extra_bed.extra_bed_rates))
    dispatch(setExtraBedCapacityQuantity(rooms.extra_bed.extra_bed_qty))
        }
    }  , [room])
    return (
        <StyledContainer>
            <Grid container>
        <Grid item xs={12}>
        <StepperForm2 />
    </Grid>
    {active == 0?
    <Grid item xs={12}>
    <EditRoomForm room={room}/>
    </Grid>:''}
    {active == 1?
    <Grid item xs={12}>
    <EditOverview room={room}/>
    </Grid>:''}
    </Grid>
        </StyledContainer>
    );
}
EditRoom.getLayout = function getLayout(EditRoom) {
    return (
      <VendorLayout>
        {EditRoom}
      </VendorLayout>
    )
  }


export default EditRoom;