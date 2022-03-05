import { Grid, Typography, Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

import CancelledOrders from '../../assets/Cancelled Orders.png';
import TotalTable from '../../components/totalTable';
import StyledContainer from '../../styledComponents/styledContainer';
import StyledDatagrid from '../../components/styledDatagrid';
import SmallDetailsCard from '../../components/smallDetailsCard';
import VendorLayout from '../../components/vendorLayout';
import axios from 'axios';
import { API_URL } from '../../config';
import StyledButton from '../../styledComponents/styledButton';
import StyledButtonDanger from '../../styledComponents/StyledButtonDanger';
import StyledTextField from '../../styledComponents/styledTextField';
import UniversalModal from '../../components/universalModal';
import { useDispatch , useSelector } from 'react-redux';

function VendorWallet() {
    const [tableData, setTableData] = useState([])
    const [orderTotal, setOrderTotal] = useState(null)
    const [withdrawAmount, setWithdrawAmount] = useState(Number)
    const [withdrawlWallet, setWithdrawlWallet] = useState(Number)
    const [remainingAmount, setRemainingAmount] = useState(Number)
    const [approved, setApproved] = useState(Number)
    const [open, setOpen] = useState(false)

    const token = useSelector(state => state.user.token)
    const userId = useSelector(state => state.user.user.id)
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
        console.log(orders.data)
        setTableData(orders.data.wallet[0].wallet_logs)
        setOrderTotal(orders.data.wallet[0].wallet_balance)
        setRemainingAmount(orders.data.wallet[0].wallet_balance)
        setWithdrawlWallet(orders.data.wallet[0].withdrawl_wallet)
        setApproved(orders.data.approved_Withdrawls)
    } , [])


    const handleWithdrawChange = (e) => {
      setWithdrawAmount(e.target.value)
      if(e.target.value >= orderTotal){
        setRemainingAmount(0)
      } else{
        setRemainingAmount(orderTotal - e.target.value)
      }
      


    } 

    const withdrawSubmit = async () => {
      if(withdrawAmount > orderTotal){
        alert("PLease Enter Correct Amount")
      } else {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        axios.put(`${API_URL}/withdrawl_update`,{
          userId: userId,
          withdrawAmount: Number(withdrawAmount)
        },config).then((result) => {
          console.log(result.data)
          setOrderTotal(orderTotal - Number(withdrawAmount))
          setRemainingAmount(orderTotal - Number(withdrawAmount))
          setWithdrawlWallet(withdrawlWallet + Number(withdrawAmount))
          setOpen(false)
        })
      }
   
      
    }


    return (
        <StyledContainer>
          
<Grid container spacing={3}>
                <Grid item xs={6} >
                <Typography fontWeight={500} variant='h5'>Vendor Wallet</Typography>
                </Grid>
                <Grid item xs={6} style={{display:"flex",justifyContent:"flex-end"}}>
                <StyledButton onClick={() => {setOpen(true)}}>Withdraw</StyledButton>
                </Grid>
                <Grid container item spacing={2} alignItems="stretch">
                <Grid item xs={12} sm={4}>
                <SmallDetailsCard heading='Wallet' number={`Rs ${orderTotal}/-`} img={CancelledOrders} /></Grid>
                
                <Grid item xs={12} sm={4}>
                <SmallDetailsCard heading='Request For Withdrawals' number={`Rs ${withdrawlWallet}/-`} img={CancelledOrders} />
                </Grid>
                <Grid item xs={12} sm={4}>
                <SmallDetailsCard heading='Approved Withdrawals' number={`Rs ${approved}/-`} img={CancelledOrders} />
                </Grid>
                </Grid>

                </Grid>
                <Grid item xs={12} sx={{paddingTop:'16px'}} >
                <StyledDatagrid columns={columns} rows={tableData} />
                </Grid>

                <UniversalModal open={open} children={<>
                  <Typography fontWeight={500} variant='h6' color={"#fff"} margin="0px 0px 20px 0px">How much do you like to withdraw? <br/> Amount Rs <span style={{color:'#2AB572'}}>{remainingAmount}</span></Typography>
                <StyledTextField type='number' onChange={handleWithdrawChange}/>
                <div style={{display:"flex", justifyContent:"flex-start",alignItems:"center",marginTop:"20px"}}>
                <StyledButtonDanger style={{marginRight:"20px"}} onClick={() => {setOpen(false)}}>Cancel</StyledButtonDanger>
                  <StyledButton onClick={withdrawSubmit}>Submit</StyledButton>
                  
                </div>
                </>}/>
     
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