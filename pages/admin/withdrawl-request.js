import React, { useState } from 'react';
import StyledContainer from '../../styledComponents/styledContainer';
import StyledButton from '../../styledComponents/StyledButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid, IconButton, TextField, Typography, Tab ,Tabs, Box } from '@mui/material';
import AdminLayout from '../../components/adminLayout';
import { InputAdornment , Menu , MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import AcceptRoomModal from '../../components/acceptRoomModal';



function withdrawlRequest(props) {

  const [tableData, setTableData] = useState([])
  const [value, setValue] = useState(0);
  const [params , setParams] = useState(null)
  const [withdrawls , setWithdrawls] = useState(null)
  




  const pendingColumns = [
    { field: 'username', headerName: 'Username', flex: 0.5, headerAlign: 'center' },
  
    { field: 'date', headerName: 'Date', flex: 1, headerAlign: 'center' },
    { field: 'amount', headerName: 'Amount', flex: 0.5, headerAlign: 'center' },
    { field: 'status', headerName: 'Status', flex: 1, headerAlign: 'center' },
    { field: 'actions', headerName: 'Action',flex:0.5 ,headerAlign: 'center',renderCell: (params) => { 
      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);

      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
    
      return (
      <>
        <IconButton
          onClick={handleClick}
        >
          <MoreVertIcon/>
        </IconButton>
        <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
          <MenuItem >
            Accept
          </MenuItem>
          <MenuItem  onClick={() => {withdraw_rejected(params.row)}}>
            Reject
          </MenuItem>
          <MenuItem  >
            More info
          </MenuItem> 
      </Menu>
      {setParams(params.row)}
      </>
      )}}
]
  const columns = [
    { field: 'username', headerName: 'Username', flex: 0.5, headerAlign: 'center' },
  
    { field: 'date', headerName: 'Date', flex: 1, headerAlign: 'center' },
    { field: 'amount', headerName: 'Amount', flex: 0.5, headerAlign: 'center' },
    { field: 'status', headerName: 'Status', flex: 1, headerAlign: 'center' },
    
]
useEffect(async () => {
    await axios({
        method:'GET',
        url:`${API_URL}/withdrawl`,
        headers:{
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
    }).then((res) => {
      console.log(res.data)
      const datamap = res.data.withdrawl_request.map((el) => {
        return {
          id: el.id,
          username: el.users_permissions_user.username,
          date: el.date,
          amount: el.amount,
          status: el.status
        }
      })
      setTableData(datamap)
      setWithdrawls(res.data.withdrawl_request)
    // setOrderTotal(res.data.wallet_total)
    })
    
} , [])

const pending = tableData.filter((el) => el.status === "pending")
const approved = tableData.filter((el) => el.status === "approved")
const rejected = tableData.filter((el) => el.status === "rejected")

const withdraw_rejected = (prop) => {
  console.log(prop)
  const withdrawUpd = withdrawls.findIndex((el) => el.id === prop.id)
  withdrawls[withdrawUpd].status = "rejected"
  console.log(withdrawls)
  const config = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  };
  axios.put(`${API_URL}/withdrawl_reject`, {
    withdraw_Id: prop.id
  }, config).then((res) => {
    console.log(res.data)
    const datamap1 = res.data.withdrawl_request.map((el) => {
      return {
        id: el.id,
        username: el.users_permissions_user.username,
        date: el.date,
        amount: el.amount,
        status: el.status
      }
    })
    setTableData(datamap1)
  })
}

const handleChange = (event, newValue) => {
  setValue(newValue);
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

    return (
        <StyledContainer>
          <Tabs allowScrollButtonsMobile centered scrollButtons sx={{'& .MuiTabs-indicator':{height:'5px',backgroundColor:'button.main'} , '& .MuiTabs-flexContainer':{justifyContent:'flex-start'}}}  value={value} onChange={handleChange} >
                <Tab sx={{'&.Mui-selected' :{color:'button.main'}, color:'button.main'}} label="Pending" />
                <Tab sx={{'&.Mui-selected' :{color:'button.main'}, color:'button.main'}} label="Approved" />
                <Tab sx={{'&.Mui-selected' :{color:'button.main'}, color:'button.main'}} label="Rejected" />
              
            </Tabs>
            <TabPanel value={value} index={0}>
           
           <Grid container item spacing={2}>
           <DataGrid columns={pendingColumns} rows={pending} sx={{ '& .MuiDataGrid-columnSeparator':{display:'none'}, '& .MuiDataGrid-footerContainer':{backgroundColor:'table.tableRow2' , borderRadius:'0px  0px 8px 8px'}, '& .MuiDataGrid-columnHeaders':{backgroundColor:'table.tableRow1' , borderRadius:'8px 8px 0px 0px'} , border:'none' , "& .MuiDataGrid-virtualScroller": { "& .MuiDataGrid-row": {'& .MuiDataGrid-cell':{border:'none' , justifyContent:'center'},  "&:nth-child(2n)": {   backgroundColor: "table.tableRow1" } , "&:nth-child(2n-1)": {  backgroundColor: "table.tableRow2" }}}}}  autoHeight/>
           </Grid>
      
   </TabPanel>
            <TabPanel value={value} index={1}>
           
           <Grid container item spacing={2}>
           <DataGrid columns={columns} rows={approved} sx={{ '& .MuiDataGrid-columnSeparator':{display:'none'}, '& .MuiDataGrid-footerContainer':{backgroundColor:'table.tableRow2' , borderRadius:'0px  0px 8px 8px'}, '& .MuiDataGrid-columnHeaders':{backgroundColor:'table.tableRow1' , borderRadius:'8px 8px 0px 0px'} , border:'none' , "& .MuiDataGrid-virtualScroller": { "& .MuiDataGrid-row": {'& .MuiDataGrid-cell':{border:'none' , justifyContent:'center'},  "&:nth-child(2n)": {   backgroundColor: "table.tableRow1" } , "&:nth-child(2n-1)": {  backgroundColor: "table.tableRow2" }}}}}  autoHeight/>

           </Grid>
      
   </TabPanel>
            <TabPanel value={value} index={2}>
           
           <Grid container item spacing={2}>
           <DataGrid columns={columns} rows={rejected} sx={{ '& .MuiDataGrid-columnSeparator':{display:'none'}, '& .MuiDataGrid-footerContainer':{backgroundColor:'table.tableRow2' , borderRadius:'0px  0px 8px 8px'}, '& .MuiDataGrid-columnHeaders':{backgroundColor:'table.tableRow1' , borderRadius:'8px 8px 0px 0px'} , border:'none' , "& .MuiDataGrid-virtualScroller": { "& .MuiDataGrid-row": {'& .MuiDataGrid-cell':{border:'none' , justifyContent:'center'},  "&:nth-child(2n)": {   backgroundColor: "table.tableRow1" } , "&:nth-child(2n-1)": {  backgroundColor: "table.tableRow2" }}}}}  autoHeight/>

           </Grid>
      
   </TabPanel>
        {/* {params?<AcceptRoomModal open={openModal} onClose={() => setOpenModal(false)} room={params} />:''}
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">Room Requests</Typography>
                </Grid>
                <Grid item xs={12}>
            <TextField InputLabelProps={{shrink: false}} label='' sx={{'& .MuiOutlinedInput-notchedOutline':{borderColor:'primary.main'} ,'& .MuiSvgIcon-root':{color:'#FFF'} ,'& .MuiOutlinedInput-root' :{paddingRight:'0px'} , '& .MuiInputAdornment-outlined' :{padding:'27px 10px' , borderRadius:'4px' ,backgroundColor:'button.main'}  }} placeholder="Search by Room Name" fullWidth variant='outlined' InputProps={{endAdornment: <InputAdornment><SearchIcon style={{fontSize:'2.5rem'}}/></InputAdornment>}}/>
            </Grid>
            <Grid item xs={12}>
            
            </Grid>
            </Grid> */}

        </StyledContainer>
    );
}

withdrawlRequest.getLayout = function getLayout(withdrawlRequest) {
  return (
    <AdminLayout>
      {withdrawlRequest}
    </AdminLayout>
  )
}
export default withdrawlRequest;