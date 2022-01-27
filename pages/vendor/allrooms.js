import {React , useEffect , useState } from "react";
import {  Grid , Typography , TextField , InputAdornment } from "@mui/material";
import StyledContainer from "../../styledComponents/styledContainer";
import StyledDatagrid from "../../components/styledDatagrid";
import SearchIcon from '@mui/icons-material/Search';
import VendorLayout from "../../components/vendorLayout";
function AllRooms(props) { 
    const [tableData, setTableData] = useState([])

useEffect(()=> {
    setTableData([
        {id:1 ,roomname:'asdasd', capacityAdult : 3, capacityChild : 3, price : 3, priceNonRef : 3, details : 'asdxcasd'},
        {id:2 ,roomname:'asdasd', capacityAdult : 3, capacityChild : 3, price : 3, priceNonRef : 3, details : 'asdxcasd'},
        {id:3 ,roomname:'asdasd', capacityAdult : 3, capacityChild : 3, price : 3, priceNonRef : 3, details : 'asdxcasd'},
        {id:4 ,roomname:'asdasd', capacityAdult : 3, capacityChild : 3, price : 3, priceNonRef : 3, details : 'asdxcasd'},
    ])
} , [])
    const columns = [
  { field: 'roomname', headerName: 'Room Name' , flex:1 },
  { field: 'capacityAdult', headerName: 'Capacity Adult',flex:1 },
  { field: 'capacityChild', headerName: 'Capacity Child',flex:1 },
  { field: 'price', headerName: 'Price (Refundable)',flex:1 },
  { field: 'priceNonRef', headerName: 'Price (Non-Refundable)',flex:1 },
  { field: 'details', headerName: 'Details',flex:1 },
]    
    return (
        <StyledContainer  square={true}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">All Rooms</Typography>
                </Grid>
                <Grid item xs={12}>
            <TextField sx={{'& .MuiOutlinedInput-notchedOutline':{borderColor:'primary.main'} ,'& .MuiSvgIcon-root':{color:'#FFF'} ,'& .MuiOutlinedInput-root' :{paddingRight:'0px'} , '& .MuiInputAdornment-outlined' :{padding:'27px 10px' , borderRadius:'4px' ,backgroundColor:'button.main'}  }} placeholder="Search by Room Name" fullWidth variant='outlined' InputProps={{endAdornment: <InputAdornment><SearchIcon style={{fontSize:'2.5rem'}}/></InputAdornment>}}/>
            </Grid>
            <Grid item xs={12}>
            <StyledDatagrid columns={columns} rows={tableData}/></Grid>
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