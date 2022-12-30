import React from "react";
import VendorLayout from "../../components/vendorLayout";
function Index() {
  return <div>index</div>;
}

Index.getLayout = function getLayout(Index) {
  return <VendorLayout>{Index}</VendorLayout>;
};

export default Index;
