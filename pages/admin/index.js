import React,{useState, useEffect} from 'react';
import AdminLayout from '../../components/adminLayout';
import StyledContainer from '../../styledComponents/styledContainer';
import CancelledOrders from '../../assets/Cancelled Orders.png';
import { Grid, Typography, Box } from '@mui/material';
import StyledDatagrid from '../../components/styledDatagrid';
import SmallDetailsCard from '../../components/smallDetailsCard';
import axios from 'axios';
import { API_URL } from '../../config';

function Index(props) {

  const [tableData, setTableData] = useState([])
  const [orderTotal, setOrderTotal] = useState(null)
  const columns = [
    
    { field: 'users_permissions_user', headerName: 'User Id', flex: 0.5, headerAlign: 'center' },
    { field: 'order_id', headerName: 'Order Id', flex: 0.5, headerAlign: 'center' },
    { field: 'order_total', headerName: 'Order Total', flex: 0.5, headerAlign: 'center' },
    { field: 'room_id', headerName: 'Room Id', flex: 0.5, headerAlign: 'center' },
    { field: 'commission', headerName: 'Commission', flex: 1, headerAlign: 'center' },
    { field: 'earned_amount', headerName: 'Vendor Earning', flex: 0.5, headerAlign: 'center' },
    { field: 'date', headerName: 'Date', flex: 1, headerAlign: 'center' },
]
  useEffect(async () => {
    await axios({
        method:'GET',
        url:`${API_URL}/all_wallets`,
        headers:{
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
    }).then((res) => {
      console.log(res.data)
      setTableData(res.data.wallet)
    setOrderTotal(res.data.wallet_total)
    })
    
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


Index.getLayout = function getLayout(Index) {
    return (
      <AdminLayout>
        {Index}
      </AdminLayout>
    )
  }

export default Index;