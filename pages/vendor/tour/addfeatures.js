import * as React from 'react';
import TourAddFeatures from '../../../components/tourAddFeatures';
import VendorLayout from '../../../components/vendorLayout';
function AddFeatures() {
    return (
        <div>
            <TourAddFeatures />
        </div>
    )
}


AddFeatures.getLayout = function getLayout(AddFeatures) {
    return (
        <VendorLayout>
            {AddFeatures}
        </VendorLayout>
    )
}
export default AddFeatures;