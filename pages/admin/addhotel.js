import * as React from 'react';
import { Grid, Box } from '@mui/material';
import VendorLayout from '../../components/vendorLayout';
import StyledContainer from '../../styledComponents/styledContainer';
import StepperForm from '../../components/stepper';
import AddHotelForm from '../../components/addHotelForm';
import { useDispatch, useSelector } from 'react-redux';
import AddServicesForm from '../../components/addServicesForm';
import AddRoomForm from '../../components/addRoomForm';
import Overview from '../../components/overview';
import AdminLayout from '../../components/adminLayout';

export default function AddHotel() {
  const active = useSelector(state => state.formData.activeStep)
  const dispatch = useDispatch()
  return (
    <StyledContainer>
      <Grid container>
        <Grid item xs={12}>
          <StepperForm />
        </Grid>
        {active == 0 ?
          <Grid item xs={12}>
            <AddHotelForm />
          </Grid> : ''}
        {active == 1 ?
          <Grid item xs={12}>
            <AddServicesForm />
          </Grid> : ''}
        {active == 2 ?
          <Grid item xs={12}>
            <AddRoomForm />
          </Grid> : ''}
        {active == 3 ?
          <Grid item xs={12}>
            <Overview />
          </Grid> : ''}
      </Grid>
    </StyledContainer>
  );
}

AddHotel.getLayout = function getLayout(AddHotel) {
  return (
    <AdminLayout>
      {AddHotel}
    </AdminLayout>
  )
}

