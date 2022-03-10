import * as React from 'react';
import TourPackageInfo from '../../../components/tourPackageInfo';
import VendorLayout from '../../../components/vendorLayout';
function PackageInfo() {
    return (
        <div>
            <TourPackageInfo />
        </div>
    )
}


PackageInfo.getLayout = function getLayout(PackageInfo) {
    return (
        <VendorLayout>
            {PackageInfo}
        </VendorLayout>
    )
}
export default PackageInfo;