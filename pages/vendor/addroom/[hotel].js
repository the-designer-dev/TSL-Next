import React from 'react';
import { Grid } from '@mui/material';
import StepperForm2 from '../../../components/stepper2';
import VendorLayout from '../../../components/vendorLayout';
import AddRoomForm from '../../../components/addRoomForm';
import Overview from '../../../components/overview';
import StyledContainer from '../../../styledComponents/styledContainer';
import {useSelector , useDispatch} from 'react-redux';
import {useRouter} from 'next/router'
function AddRoom(props) {
  const router = useRouter()
    const { hotel } = router.query
    const active = useSelector(state => state.formData.activeStep2)
    const dispatch = useDispatch()
    return (
        <StyledContainer>
            <Grid container>
        <Grid item xs={12}>
        <StepperForm2 />
    </Grid>
    {active == 0?
    <Grid item xs={12}>
    <AddRoomForm hotel={hotel}/>
    </Grid>:''}
    {active == 1?
    <Grid item xs={12}>
    <Overview hotel={hotel}/>
    </Grid>:''}
    </Grid>
        </StyledContainer>
    );
}
AddRoom.getLayout = function getLayout(AddRoom) {
    return (
      <VendorLayout>
        {AddRoom}
      </VendorLayout>
    )
  }


export default AddRoom;