import { Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

import CancelledOrders from '../../assets/Cancelled Orders.png';
import TotalTable from '../../components/totalTable';
import StyledContainer from '../../styledComponents/styledContainer';
import StyledDatagrid from '../../components/styledDatagrid';
import SmallDetailsCard from '../../components/smallDetailsCard';
import VendorLayout from '../../components/vendorLayout';
import axios from 'axios';
import { API_URL } from '../../config';
function VendorWallet() {
    const [tableData, setTableData] = useState([])
    const [orderTotal, setOrderTotal] = useState(null)
    const columns = [
        { field: 'order_id', headerName: 'Order ID', flex: 0.5, headerAlign: 'center' },
        { field: 'log_description', headerName: 'Description', flex: 10, headerAlign: 'center' ,  renderCell: (params) => (
            <div>
              <Typography color="primary.main">{params.row.log_description}</Typography>
            </div>) },
        { field: 'customername', headerName: 'Customer Name', flex: 1, headerAlign: 'center' },
        { field: 'room_id', headerName: 'Room Id', flex: 0.5, headerAlign: 'center' },
        { field: 'order_total', headerName: 'Total Price', flex: 1, headerAlign: 'center' },
    ]


    useEffect(async () => {
        const orders = await axios({
            method:'GET',
            url:`${API_URL}/wallets/getwallet`,
            headers:{
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        setTableData(orders.data[0].wallet_logs)
        setOrderTotal(orders.data[0].wallet_balance)
    } , [])

    return (
        <StyledContainer>
<Grid container spacing={3}>
                <Grid item xs={12}>
                <Typography fontWeight={500} variant='h5'>Vendor Wallet</Typography>
                </Grid>
                <Grid container item spacing={2} alignItems="stretch">
                <Grid item xs={12} sm={6}>
                <SmallDetailsCard heading='Wallet' number={`Rs ${orderTotal}/-`} img={CancelledOrders} /></Grid>
                
                <Grid item xs={12} sm={6}>
                <SmallDetailsCard heading='Request For Withdrawals' number='Rs 0' img={CancelledOrders} />
                </Grid>
                </Grid>

                </Grid>
                <Grid item xs={12} sx={{paddingTop:'16px'}} >
                <StyledDatagrid columns={columns} rows={tableData} />
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