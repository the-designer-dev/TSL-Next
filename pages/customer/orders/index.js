import { useState , useEffect } from "react";
import { Box, Button, Grid, OutlinedInput, TextField, Typography, IconButton,
    Menu,
    MenuItem } from "@mui/material";
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/router';
import DateRangePicker from '@mui/lab/DateRangePicker';
import { useTheme } from "@mui/material";
import { useRef } from "react";
import { useMediaQuery } from "@mui/material";
import MobileMenu from "../../../components/mobileMenu";
import CustomerLayout2 from "../../../components/customerLayout2";
import StyledContainer from '../../../styledComponents/styledContainer';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'
import { API_URL } from '../../../config';
import StyledButton from '../../../styledComponents/styledButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function CustomerDashBoard() {
  const [checkIn , setCheckInState] = useState(null)
  const [checkOut , setCheckOutState] = useState(null)
  const [destination , setDestinationState] = useState('')
  const [adult , setAdultState] = useState(0)
  const [child , setChildState] = useState(0)
  const [value, setValue] = useState([null, null]);
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [focused1, setFocused1] = useState(false)
  const [focused2, setFocused2] = useState(false)
  const [focused3, setFocused3] = useState(false)
  const [focused4, setFocused4] = useState(false)
  const text1Ref = useRef(null)
  const text2Ref = useRef(null)
  const text3Ref = useRef(null)
  const text4Ref = useRef(null)
  const buttonRef = useRef(null)
  const container = useRef(null)
  const dispatch = useDispatch()
  const router = useRouter();
  const theme = useTheme()
  const mobile = useMediaQuery('(min-width:870px)')
  const [options , setOptions] = useState([])
  const [tableData ,setTableData] = useState([])

  var citiesArr = ["Abbottabad","Adezai","Ali Bandar","Amir Chah","Attock","Ayubia","Bahawalpur","Baden","Bagh","Bahawalnagar","Burewala","Banda Daud Shah","Bannu district|Bannu","Batagram","Bazdar","Bela","Bellpat","Bhag","Bhakkar","Bhalwal","Bhimber","Birote","Buner","Burj","Chiniot","Chachro","Chagai","Chah Sandan","Chailianwala","Chakdara","Chakku","Chakwal","Chaman","Charsadda","Chhatr","Chichawatni","Chitral","Dadu","Dera Ghazi Khan","Dera Ismail Khan", "Dalbandin","Dargai","Darya Khan","Daska","Dera Bugti","Dhana Sar","Digri","Dina City|Dina","Dinga",", Pakistan|Diplo","Diwana","Dokri","Drosh","Duki","Dushi","Duzab","Faisalabad","Fateh Jang","Ghotki","Gwadar","Gujranwala","Gujrat","Gadra","Gajar","Gandava","Garhi Khairo","Garruck","Ghakhar Mandi","Ghanian","Ghauspur","Ghazluna","Girdan","Gulistan","Gwash","Hyderabad","Hala","Haripur","Hab Chauki","Hafizabad","Hameedabad","Hangu","Harnai","Hasilpur","Haveli Lakha","Hinglaj","Hoshab","Islamabad","Islamkot","Ispikan","Jacobabad","Jamshoro","Jhang","Jhelum","Jamesabad","Jampur","Janghar","Jati(Mughalbhin)","Jauharabad","Jhal","Jhal Jhao","Jhatpat","Jhudo","Jiwani","Jungshahi","Karachi","Kotri","Kalam","Kalandi","Kalat","Kamalia","Kamararod","Kamber","Kamokey","Kanak","Kandi","Kandiaro","Kanpur","Kapip","Kappar","Karak City","Karodi","Kashmor","Kasur","Katuri","Keti Bandar","Khairpur","Khanaspur","Khanewal","Kharan","kharian","Khokhropur","Khora","Khushab","Khuzdar","Kikki","Klupro","Kohan","Kohat","Kohistan","Kohlu","Korak","Korangi","Kot Sarae","Kotli","Lahore","Larkana","Lahri","Lakki Marwat","Lasbela","Latamber","Layyah","Leiah","Liari","Lodhran","Loralai","Lower Dir","Shadan Lund","Multan","Mandi Bahauddin","Mansehra","Mian Chanu","Mirpur",", Pakistan|Moro","Mardan","Mach","Madyan","Malakand","Mand","Manguchar","Mashki Chah","Maslti","Mastuj","Mastung","Mathi","Matiari","Mehar","Mekhtar","Merui","Mianwali","Mianez","Mirpur Batoro","Mirpur Khas","Mirpur Sakro","Mithi","Mongora","Murgha Kibzai","Muridke","Musa Khel Bazar","Muzaffar Garh","Muzaffarabad","Nawabshah","Nazimabad","Nowshera","Nagar Parkar","Nagha Kalat","Nal","Naokot","Nasirabad","Nauroz Kalat","Naushara","Nur Gamma","Nushki","Nuttal","Okara","Ormara","Peshawar","Panjgur","Pasni City","Paharpur","Palantuk","Pendoo","Piharak","Pirmahal","Pishin","Plandri","Pokran","Pounch","Quetta","Qambar","Qamruddin Karez","Qazi Ahmad","Qila Abdullah","Qila Ladgasht","Qila Safed","Qila Saifullah","Rawalpindi","Rabwah","Rahim Yar Khan","Rajan Pur","Rakhni","Ranipur","Ratodero","Rawalakot","Renala Khurd","Robat Thana","Rodkhan","Rohri","Sialkot","Sadiqabad","Safdar Abad- (Dhaban Singh)","Sahiwal","Saidu Sharif","Saindak","Sakrand","Sanjawi","Sargodha","Saruna","Shabaz Kalat","Shadadkhot","Shahbandar","Shahpur","Shahpur Chakar","Shakargarh","Shangla","Sharam Jogizai","Sheikhupura","Shikarpur","Shingar","Shorap","Sibi","Sohawa","Sonmiani","Sooianwala","Spezand","Spintangi","Sui","Sujawal","Sukkur","Suntsar","Surab","Swabi","Swat","Tando Adam","Tando Bago","Tangi","Tank City","Tar Ahamd Rind","Thalo","Thatta","Toba Tek Singh","Tordher","Tujal","Tump","Turbat","Umarao","Umarkot","Upper Dir","Uthal","Vehari","Veirwaro","Vitakri","Wadh","Wah Cantt","Warah","Washap","Wasjuk","Wazirabad","Yakmach","Zhob","Other"]

  function handleSubmit(e){
    e.preventDefault()
    dispatch(setDestination(destination))
    dispatch(setCheckIn(checkIn.format('YYYY-MM-DD')))
    dispatch(setCheckOut(checkOut.format('YYYY-MM-DD')))
    dispatch(setAdult(adult))
    dispatch(setChild(child))
    sessionStorage.setItem("destination", destination);
    sessionStorage.setItem("checkIn", checkIn.format('YYYY-MM-DD'));
    sessionStorage.setItem("checkOut", checkOut.format('YYYY-MM-DD'));
    sessionStorage.setItem("adult", adult);
    sessionStorage.setItem("child", child);
    cookieCutter.set('destination', destination)
    cookieCutter.set('checkIn', checkIn.format('YYYY-MM-DD'))
    cookieCutter.set('checkOut', checkOut.format('YYYY-MM-DD'))
    cookieCutter.set('adult', adult)
    cookieCutter.set('child', child)
    router.push({pathname:'/hotellisting'})
  }

  const columns = [
    { field: 'orderid', headerName: 'Order ID' , flex:1 ,headerAlign: 'center'},
    { field: 'booking_start_date', headerName: 'Start Date',flex:1 ,headerAlign: 'center'},
    { field: 'booking_end_date', headerName: 'End Date',flex:1 ,headerAlign: 'center'},
    { field: 'total_days', headerName: 'Total Days',flex:1 ,headerAlign: 'center'},
    { field: 'roomname', headerName: 'Room',flex:1 ,headerAlign: 'center'},
    { field: 'order_total', headerName: 'Total Price',flex:1 ,headerAlign: 'center'},
    { field: 'order_status', headerName: 'Status',flex:1 ,headerAlign: 'center',renderCell: (params) => (
        params.row.order_status === 'cancelled'?<Typography fontSize={14} fontWeight={400} sx={{color:'#FA2220'}}>Cancelled</Typography>:params.row.order_status === 'waiting'?<Typography fontSize={14} fontWeight={400} sx={{color:'#F18F05'}}>Waiting</Typography> : params.row.order_status === 'completed'?<Typography fontSize={14} fontWeight={400} sx={{color:'#2AB571'}}>Completed</Typography>: <Typography fontSize={14} fontWeight={400} sx={{color:'#2AB571'}}></Typography>
      )},
      { field: 'actions', headerName: 'Action',flex:0.5 ,headerAlign: 'center',renderCell: (params) => { 
        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);
  
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };
  
        const handleOpenModal = (row) => {
          setOpen(true)
          console.log(row)
          setObjId(row.id)
        }
   
  
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
            {params.row.order_status === "waiting" ? (
                <MenuItem onClick={() => {console.log(params.row)}}>
                Cancel Order
              </MenuItem>
            ) : ""}
            <MenuItem onClick={() => {console.log(params.row)}}>
              View details
            </MenuItem>
            
        </Menu>
        
        </>
        )}}
    
    ]     


  const MenuProps = {
    PaperProps: {
      sx: {
        backgroundColor: `${theme.palette.background.main}`,
        width: 210,
        marginTop:'10px'
      },    
    },  
  };


  useEffect(async ()=>{
    const orders = await axios({
        method: 'GET',
        url: `${API_URL}/orders_customer`,
        headers:{
          Accept: 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
      }).then(res => res.data)
    setTableData(orders.map((el , index) => {return {id: index+1 ,orderid: el.id,booking_start_date:el.booking_start_date, booking_end_date: el.booking_end_date , total_days: el.total_days ,roomname: el.roomname ,order_total:el.order_total ,order_status: el.order_status }}))
} , [])


  return (
    <Box sx={{height:'calc( 100vh - 77px )' , overflow:'hidden' , position:'relative'}}>
        <StyledContainer>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant='h6'>Order Listing</Typography>
                    <Typography fontSize={12} variant='p'>Lorem ipsum dolor sit amet, consectuer</Typography>
                </Grid>
                {/* <Grid container item spacing={2}   alignItems="stretch">
                <Grid item xs={3}>
                    <SmallDetailsCard heading='All Orders' number={tableData.length} img={AllOrders}/>
                </Grid>
                <Grid item xs={3}>
                    <SmallDetailsCard heading='Refunded Orders' number={tableData.filter(el => el.paymentstatus === 'refunded').length} img={RefundedOrders}/>
                </Grid>
                <Grid item xs={3}>
                    <SmallDetailsCard heading='Cancelled Orders' number={tableData.filter(el => el.paymentstatus === 'cancelled').length} img={CancelledOrders}/>
                </Grid>
                <Grid item xs={3}>
                    <SmallDetailsCard heading='Completed Orders' number={tableData.filter(el => el.paymentstatus === 'completed').length} img={CompletedOrders}/>
                </Grid>
                </Grid> */}
                <Grid item xs={12}>
                <DataGrid sx={{ '& .MuiDataGrid-columnSeparator':{display:'none'}, '& .MuiDataGrid-footerContainer':{backgroundColor:'table.tableRow2' , borderRadius:'0px  0px 8px 8px'}, '& .MuiDataGrid-columnHeaders':{backgroundColor:'table.tableRow1' , borderRadius:'8px 8px 0px 0px'} , border:'none' , "& .MuiDataGrid-virtualScroller": { backgroundColor:'background.main', "& .MuiDataGrid-row": {'& .MuiDataGrid-cell':{border:'none' , justifyContent:'center'},  "&:nth-child(2n)": {   backgroundColor: "table.tableRow1" } , "&:nth-child(2n-1)": {  backgroundColor: "table.tableRow2" }}}}} columns={columns} rows={tableData} autoHeight/>
                </Grid>
            </Grid>
        </StyledContainer>
    </Box>
  )
}

CustomerDashBoard.getLayout = function getLayout(CustomerDashBoard) {
  return (
    <CustomerLayout2>
      {CustomerDashBoard}
    </CustomerLayout2>
  )
}