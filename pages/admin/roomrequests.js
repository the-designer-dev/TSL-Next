import React, { useState } from 'react';
import StyledContainer from '../../styledComponents/styledContainer';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid, IconButton, TextField, Typography } from '@mui/material';
import AdminLayout from '../../components/adminLayout';
import { InputAdornment , Menu , MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import AcceptRoomModal from '../../components/acceptRoomModal';

function RoomRequests(props) {
  const [openModal , setOpenModal] = useState(false)
  const [rows , setRows] = useState([])
  const [params , setParams] = useState(null)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(async () => {
    const data = await axios({
      method:'GET',
      url:`${API_URL}/rooms`
    }).then(res => res.data.filter(el => el.approved !== true ))

    setRows(data.map(el => {return {id : el.id ,roomname : el.roomname , hotelname: el.hotel.hotelname , category: el.roomcategories , refundableprice : el.roomrefundprice , nonrefundableprice : el.roomnonrefundprice }}))

  } , [])

async function setRowData(){
  const data = await axios({
    method:'GET',
    url:`${API_URL}/rooms`
  }).then(res => res.data.filter(el => el.approved === 'pending' ))

  setRows(data.map(el => {return {id : el.id ,roomname : el.roomname , hotelname: el.hotel.hotelname , category: el.roomcategories , refundableprice : el.roomrefundprice , nonrefundableprice : el.roomnonrefundprice }}))

}

  useEffect(async () => {
    setRowData()
  } , [openModal])
async function rejectRequest(id){
  await axios({
    method:'DELETE',
    url:`${API_URL}/rooms/${id}`
}).then(res => {setRowData() })
}
    const columns = [
        { field: 'roomname', headerName: 'Room name' , flex:1 ,headerAlign: 'center'},
        { field: 'hotelname', headerName: 'Hotel Name',flex:1 ,headerAlign: 'center'},
        { field: 'category', headerName: 'Category',flex:1 ,headerAlign: 'center'},
        { field: 'refundableprice', headerName: 'Price (Refundable)',flex:1 ,headerAlign: 'center'},
        { field: 'nonrefundableprice', headerName: 'Price (Non-Refundable)',flex:1 ,headerAlign: 'center'},
        { field: 'details', headerName: '',flex:0.5 ,headerAlign: 'center',renderCell: (params) => (
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
              <MenuItem onClick={() => {handleClose() ; setOpenModal(true)}}>
                Accept
              </MenuItem>
              <MenuItem  onClick={() => { rejectRequest(params.id) }}>
                Reject
              </MenuItem>
              <MenuItem  onClick={handleClose}>
                More info
              </MenuItem> 
          </Menu>
          {setParams(params.row)}
          </>
          )}]   
    return (
        <StyledContainer>
        {params?<AcceptRoomModal open={openModal} onClose={() => setOpenModal(false)} room={params} />:''}
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">Room Requests</Typography>
                </Grid>
                <Grid item xs={12}>
            <TextField InputLabelProps={{shrink: false}} label='' sx={{'& .MuiOutlinedInput-notchedOutline':{borderColor:'primary.main'} ,'& .MuiSvgIcon-root':{color:'#FFF'} ,'& .MuiOutlinedInput-root' :{paddingRight:'0px'} , '& .MuiInputAdornment-outlined' :{padding:'27px 10px' , borderRadius:'4px' ,backgroundColor:'button.main'}  }} placeholder="Search by Room Name" fullWidth variant='outlined' InputProps={{endAdornment: <InputAdornment><SearchIcon style={{fontSize:'2.5rem'}}/></InputAdornment>}}/>
            </Grid>
            <Grid item xs={12}>
            <DataGrid columns={columns} rows={rows} sx={{ '& .MuiDataGrid-columnSeparator':{display:'none'}, '& .MuiDataGrid-footerContainer':{backgroundColor:'table.tableRow2' , borderRadius:'0px  0px 8px 8px'}, '& .MuiDataGrid-columnHeaders':{backgroundColor:'table.tableRow1' , borderRadius:'8px 8px 0px 0px'} , border:'none' , "& .MuiDataGrid-virtualScroller": { "& .MuiDataGrid-row": {'& .MuiDataGrid-cell':{border:'none' , justifyContent:'center'},  "&:nth-child(2n)": {   backgroundColor: "table.tableRow1" } , "&:nth-child(2n-1)": {  backgroundColor: "table.tableRow2" }}}}}  autoHeight/>
            </Grid>
            </Grid>

        </StyledContainer>
    );
}

RoomRequests.getLayout = function getLayout(RoomRequests) {
  return (
    <AdminLayout>
      {RoomRequests}
    </AdminLayout>
  )
}
export default RoomRequests;