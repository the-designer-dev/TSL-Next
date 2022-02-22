import { Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

import CancelledOrders from '../../assets/Cancelled Orders.png';
import TotalTable from '../../components/totalTable';
import StyledContainer from '../../styledComponents/styledContainer';
import StyledButton from '../../styledComponents/styledButton';
import SmallDetailsCard from '../../components/smallDetailsCard';
import VendorLayout from '../../components/vendorLayout';
function VendorWallet() {
    const [tableData, setTableData] = useState([])
    const columns = [
        { field: 'customername', headerName: 'Customer Name', flex: 1, headerAlign: 'center' },
        { field: 'orderid', headerName: 'Order ID', flex: 1, headerAlign: 'center' },
        { field: 'quantity', headerName: 'Quantity', flex: 1, headerAlign: 'center' },
        { field: 'totalprice', headerName: 'Total Price', flex: 1, headerAlign: 'center' },
    ]


    return (
        <StyledContainer>

            <Grid container  item   justifyContent='space-between' alignItems="center">

                <Grid container item xs={4}>
                    <Typography fontWeight={500} variant='h5'>Vendor Wallet</Typography>
                </Grid>

                
            </Grid>

            <Grid container justifyContent='space-around' alignItems="stretch">

                <Grid item xs={4}> <SmallDetailsCard heading='Wallet' number='Rs 13554' img={CancelledOrders} /></Grid>

                <Grid item xs={4}>
                    <SmallDetailsCard heading='Request For Withdrawals' number='Rs 13554' img={CancelledOrders} />
                </Grid>
            </Grid>

            <Grid container justifyContent='space-around' sx={{ padding: '40px 0px' }} >

                <Grid item xs={12} sx={{ backgroundColor: 'background.main', padding: '10px', borderRadius: '10px' }}>
                    <TotalTable columns={columns} rows={tableData} />
                </Grid>
            </Grid>

        </StyledContainer>
    );
}

VendorWallet.getLayout = function getLayout(VendorWallet) {
    return (
      <VendorLayout>
        {VendorWallet}
      </VendorLayout>
    )
  }


export default VendorWallet;