import {React , useEffect , useState } from "react";
import {  Grid , Typography , TextField , InputAdornment, IconButton , Menu,MenuItem } from "@mui/material";
import MoreVert from "@mui/icons-material/MoreVert";
import StyledContainer from "../../styledComponents/styledContainer";
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import StyledButton from "../../styledComponents/styledButton";
import VendorLayout from "../../components/vendorLayout";
import axios from "axios";
import { API_URL } from "../../config";
import { useSelector } from "react-redux";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetch = (user,token) =>  axios({
  method: 'GET',
  url: `${API_URL}/rooms?hotel.users_permissions_user=${user.id}`,
  headers:{
    Accept: 'application/json',
    'Authorization': `Bearer ${token}`
  }
}).then(res => res.data)

async function duplicate(id){
  const room = await axios({
    method:'POST',
    url:`${API_URL}/rooms/duplicate/${id}`
  }).then(res => res.data)
}

async function deleteRoom(id){
  const room = await axios({
    method:'DELETE',
    url:`${API_URL}/rooms/${id}`
  }).then(res => res.data)
}

function AllRooms(props) { 
    const [tableData, setTableData] = useState([])
    const token = useSelector(state => state.user.token)
    const user = useSelector(state => state.user.user)
    const { data, error } = useSWR([user , token] ,fetch)
    const router = useRouter();
 
useEffect(()=> {
  data !=undefined && data != null?
    setTableData(data.map((el , index) => {console.log(el) ;return {id:index+1 , roomId : el.id,roomname:el.roomname , capacityAdult: el.adult, capacityChild:el.child, price: `PKR ${el.roomrefundprice}/-` ,priceNonRef:`PKR ${el.roomnonrefundprice}/-`}})):''
  } , [data])
const columns = [
  { field: 'roomname', headerName: 'Room Name' , flex:1 ,headerAlign: 'center'},
  { field: 'capacityAdult', headerName: 'Adult Capacity',flex:1 ,headerAlign: 'center'},
  { field: 'capacityChild', headerName: 'Child Capacity',flex:1 ,headerAlign: 'center'},
  { field: 'price', headerName: 'Price',flex:1 ,headerAlign: 'center'},
  { field: 'priceNonRef', headerName: 'Price (Non-Refundable)',flex:1 ,headerAlign: 'center'},
  { field: 'details', headerName: 'Details',flex:1 ,headerAlign: 'center',renderCell: (params) => {
    const [anchorEl, setAnchorEl] = useState(null);
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
      <MoreVert/>
    </IconButton>
    <Menu
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
  >
      <MenuItem onClick={() => {router.push(`/vendor/editroom/${params.row.roomId}`)}}>
        Edit 
      </MenuItem>
      <MenuItem  onClick={() => { duplicate(params.row.roomId) }}>
        Duplicate
      </MenuItem>
      <MenuItem  onClick={() =>{deleteRoom(params.row.roomId)}}>
        Delete
      </MenuItem> 
      <MenuItem  onClick={() =>console.log(params)}>
        View Details
      </MenuItem> 
  </Menu>
  </>
    )}}]
    return (
        <StyledContainer  square={true}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">All Rooms</Typography>
                </Grid>
                <Grid item xs={12}>
            <TextField InputLabelProps={{shrink: false}} label='' sx={{'& .MuiOutlinedInput-notchedOutline':{borderColor:'primary.main'} ,'& .MuiSvgIcon-root':{color:'#FFF'} ,'& .MuiOutlinedInput-root' :{paddingRight:'0px'} , '& .MuiInputAdornment-outlined' :{padding:'27px 10px' , borderRadius:'4px' ,backgroundColor:'button.main'}  }} placeholder="Search by Room Name" fullWidth variant='outlined' InputProps={{endAdornment: <InputAdornment><SearchIcon style={{fontSize:'2.5rem'}}/></InputAdornment>}}/>
            </Grid>
            <Grid item xs={12}>
            <DataGrid sx={{ '& .MuiDataGrid-columnSeparator':{display:'none'}, '& .MuiDataGrid-footerContainer':{backgroundColor:'table.tableRow2' , borderRadius:'0px  0px 8px 8px'}, '& .MuiDataGrid-columnHeaders':{backgroundColor:'table.tableRow1' , borderRadius:'8px 8px 0px 0px'} , border:'none' , "& .MuiDataGrid-virtualScroller": { "& .MuiDataGrid-row": {'& .MuiDataGrid-cell':{border:'none' , justifyContent:'center'},  "&:nth-child(2n)": {   backgroundColor: "table.tableRow1" } , "&:nth-child(2n-1)": {  backgroundColor: "table.tableRow2" }}}}} columns={columns} rows={tableData} autoHeight/>
            </Grid>
            </Grid>
        </StyledContainer> 
    );
}

AllRooms.getLayout = function getLayout(AllRooms) {
    return (
      <VendorLayout>
        {AllRooms}
      </VendorLayout>
    )
  }

export default AllRooms;