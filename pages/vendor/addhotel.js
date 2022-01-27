import * as React from 'react';
import VendorLayout from '../../components/vendorLayout';
import StyledContainer from '../../styledComponents/styledContainer';
import StepperForm from '../../components/stepper';
import AddHotelForm from '../../components/addHotelForm';

export default function AddHotel() {
  return (
      <StyledContainer>
    <StepperForm/>
    <AddHotelForm/>
    </StyledContainer>
  );
}

AddHotel.getLayout = function getLayout(AddHotel) {
    return (
      <VendorLayout>
        {AddHotel}
      </VendorLayout>
    )
  }

