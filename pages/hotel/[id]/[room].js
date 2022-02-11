import { Box, Grid, Typography } from '@mui/material';
import {React , useEffect, useState} from 'react';
import Slider from "react-slick";
import moment from 'moment';
import { API_URL } from '../../../config';
import axios from 'axios';
import { useRouter } from 'next/router';
import { setDestination ,setCheckIn,setCheckOut,setAdult,setChild} from "../../../redux/hotelQuery";
import { useDispatch , useSelector } from 'react-redux';
import useSWR from 'swr';
import StyledContainer from '../../../styledComponents/styledContainer';
import CustomerLayout from '../../../components/customerLayout';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckIcon from '@mui/icons-material/Check';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from '@mui/material';
import {setReduxPrice,setExtra_items , setCurrentHotel, setRoom_quantity, setCurrentRoom} from '../../../redux/bookingSlice'
import AdultCard from '../../../components/adultCard';
import ChildCard from '../../../components/childCard';
import TotalTable from '../../../components/totalTable';
import Easypaisa from '../../../assets/Easypaisa-logo@300x.png'
import Jazzcash from '../../../assets/JazzCash-logo@300x.png'
import Upaisa from '../../../assets/UPaisa-logo@300x.png'
import Image from 'next/image';
import StyledButton from '../../../styledComponents/styledButton';
import CustomerLayout2 from '../../../components/customerLayout2';
const fetch = (id,destination,checkin,checkout,adult,child) => axios({
    method: "post",
    url: `${API_URL}/filter-hotels/${id}`,
    data:{city:destination,checkindate:checkin,checkoutdate:checkout,adult:parseInt(adult) ,child:parseInt(child)} } ).then(res => res.data).catch(err => undefined)


function Book(props) {
    const token =  useSelector(state => state.user.token)
    const price =  useSelector(state => state.booking.price)
    const extra_items =  useSelector(state => state.booking.extra_items)
    const currentHotel =  useSelector(state => state.booking.currentHotel)
    const roomQuantity =  useSelector(state => state.booking.room_quantity)
    const checkout = useSelector(state => state.hotelquery.checkOut)
    const checkin = useSelector(state => state.hotelquery.checkIn)
    const destination = useSelector(state => state.hotelquery.destination)
    const adult = useSelector(state => state.hotelquery.adult)
    const child = useSelector(state => state.hotelquery.child)
    const adultInfo = useSelector(state => state.booking.adultInfo)
    const childInfo = useSelector(state => state.booking.childInfo)
    const router = useRouter()
    const { id , room } = router.query
    var reqData = [id,useSelector(state => state.hotelquery.destination),useSelector(state => state.hotelquery.checkIn),useSelector(state => state.hotelquery.checkOut),useSelector(state => state.hotelquery.adult),useSelector(state => state.hotelquery.child)]
    const theme = useTheme()
    const dispatch = useDispatch()
    const { data, error } = useSWR(reqData, fetch )
    var [adultCards ,setAdultCards ] = useState([])
    var [childCards ,setChildCards ] = useState([])

    const [columns , setColumns] = useState([
        { field: 'sign', headerName: '' , flex:1 , align:'center' },
        { field: 'particular', headerName: 'Particular' , flex:2 },
        { field: 'quantity', headerName: 'Quantity',flex:2 },
        { field: 'unit price', headerName: 'Unit Price',flex:2 },
        { field: 'price', headerName: 'Price (PKR)',flex:2 }
      ] )
    const [rows , setRows] = useState([] )
    
function checkOut(){
    var extras = []
    for (const [key, value] of Object.entries(extra_items)) {
        data !== undefined  && id !== undefined && room !== undefined?
          extras= [...extras , {extra_field_name: key , extra_field_qty : value , extra_field_price : data.hotel_extra_fields.find((el) => el.extra_field_name === key).extra_field_price }] 
          :console.log('not entered')} 
    var reqData = {
        "total_days":moment(checkout).diff(moment(checkin), 'days')+1,
        "booking_start_date":checkin,
        "booking_end_date":checkout,
        "room_qty":roomQuantity,
        "room_id":room,
        "adult_booking":adultInfo,
        "child_booking":childInfo,
        "extras":extras
    }
    const headers={
         Authorization:`Bearer ${token}`
    }
    console.log(headers)
    axios.post(`${API_URL}/orders`, reqData, {
        headers: headers
    })
      .then((response) => {
        console.log(response)
        alert('Order created!')
        router.push('/')
      })
      .catch((error) => {
       console.log(error)
       alert('Order could not be created , try again')
      })
    }
     
    useEffect(()=>{
        if(checkout === undefined || checkout === null ){
            if(sessionStorage.getItem('destination') !== undefined && sessionStorage.getItem('destination') !== null ){
        dispatch(setDestination(sessionStorage.getItem('destination')))
        dispatch(setCheckIn(moment(sessionStorage.getItem('checkIn') , 'YYYY-MM-DD' )))
        dispatch(setCheckOut(moment(sessionStorage.getItem('checkOut') , 'YYYY-MM-DD' )))
        dispatch(setAdult(sessionStorage.getItem('adult')))
        dispatch(setChild(sessionStorage.getItem('child')))
        dispatch(setReduxPrice(sessionStorage.getItem('ReduxPrice' )))
        dispatch(setExtra_items(JSON.parse(sessionStorage.getItem('Extra_items'))))
        dispatch(setCurrentHotel(sessionStorage.getItem('CurrentHotel' )))
        dispatch(setCurrentRoom(sessionStorage.getItem('CurrentRoom' )))
        dispatch(setRoom_quantity(sessionStorage.getItem('Room_quantity' )))
    }
        else{
             router.push({pathname:'/'})
        }
    }
    
    },[])

    useEffect(()=>{
        for (let index = 0; index < adult; index++) {
        
            setAdultCards(adultCards=> [...adultCards, index+1])
            
        }
        for (let index = 0; index < child; index++) {
            
            setChildCards(childCards => [...childCards, index+1])
            
        }
    },[adult,child])

    useEffect(()=>{
        var index =1
        data !== undefined  && id !== undefined && room !== undefined  ? setRows(rows => [...rows , {id: index , sign:'>' , particular: data.rooms.find((el) => el.id === parseInt(room)).roomname , quantity : 'x'+roomQuantity , 'unit price' : data.rooms.find((el) => el.id === parseInt(room)).roomnonrefundprice , price: data.rooms.find((el) => el.id === parseInt(room)).roomnonrefundprice*roomQuantity } ])
      : setRows([])
      for (const [key, value] of Object.entries(extra_items)) {
        data !== undefined  && id !== undefined && room !== undefined?
          setRows(rows => [...rows , {id: ++index , sign:'>' , particular: key , quantity : 'x'+value , 'unit price' : data.hotel_extra_fields.find((el) => el.extra_field_name === key).extra_field_price , price: data.hotel_extra_fields.find((el) => el.extra_field_name === key).extra_field_price*value  } ])
          :setRows(rows => [...rows])} 
        console.log(rows)
        },[data])

    const settings = {
        dots: true,
        infinite: true,
        dotsClass: 'hero_dots',
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows :true,
        autoplay:true,
        nextArrow: (
              <div className="right_arr"> <ChevronRightIcon  sx={{ fontSize: '40px',color:'#FFF' , borderRadius:'50px'}}/> </div>
            
          ),
          prevArrow: (
            
          <div className="left_arr"> <ChevronLeftIcon  sx={{fontSize: '40px',color:'#FFF' , borderRadius:'50px'}}/> </div>
            
          )
      };

      
    return (
        data !== undefined  && id !== undefined && room !== undefined && checkout?
        <Box>
  <Slider className='hero_slider' style={{backgroundColor : 'transparent'}} {...settings}>{data.rooms.find((el) => el.id === parseInt(room)).images.map((slide) =>
      <div style={{width:'100%' , height:'100%'}}>
    <img style={{width: '100%' , height:'100%' , maxHeight:'70vh'}} src={`${API_URL}${slide.url}`} /></div>
  )}</Slider>
  <StyledContainer sx={{maxWidth:'1200px' , margin:'auto'}} square={true}>
        
            <Box sx={{backgroundColor:'background.main' , padding:"16px" , margin:'16px 0px' , borderRadius:'5px'}}>
      <Grid container spacing={2} >
        <Grid container item xs={3} >
            <Grid container item spacing={2} >
                <Grid item xs={12}>
                <Typography fontWeight={300} variant='p'>Capacity</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Typography sx={{wordBreak:'keep-all'}}  variant='p'>{data.rooms.find((el) => el.id === parseInt(room)).adult} adult</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Typography sx={{wordBreak:'keep-all'}} variant='p'>{data.rooms.find((el) => el.id === parseInt(room)).child} child</Typography>
                </Grid>
            </Grid>
            
        </Grid>

        <Grid container item xs={4} >
            <Grid container item spacing={1} >
                <Grid item xs={12}>
                <Typography fontWeight={300} variant='p'>Benefits</Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography fontSize={14} variant='p'>This option includes:</Typography>
                </Grid>

                  {data.rooms.find((el) => el.id === parseInt(room)).room_includes.map((el) => (  
                <Grid container item xs={12} sm={6} md={3} alignItems='center' spacing={2}>
                <Grid item xs={2}><CheckIcon sx={{fontSize:'18px', color:'button.main'}}/></Grid><Grid item xs={10}><Typography  fontSize={12} variant='p'>{el.service_name}</Typography></Grid>
                </Grid>))}
            </Grid>
        </Grid>
        <Grid container item xs={5} >
            <Grid container item spacing={2} >
                <Grid item xs={12}>
                <Typography fontWeight={300} variant='p'>Amenities</Typography>
                </Grid>
                {data.rooms.find((el) => el.id === parseInt(room)).amenities.map((el , index) => (  
                 index <4?   
                <Grid container item xs={12} sm={6} md={3} alignItems='center' >
                <Grid item xs={3}><img style={{height:'16px'}} src={el.service_icon}/></Grid><Grid item xs={9}><Typography fontSize={12}  variant='p'>{el.service_name}</Typography></Grid>
                </Grid>:<></>))}
                  {data.rooms.find((el) => el.id === parseInt(room)).amenities.map((el , index) => (
                    index>3 && index <7?  
                <Grid container item  xs={12} sm={6} md={3} alignItems='center' >
                <Grid item xs={3}><img style={{height:'16px'}} src={el.service_icon}/></Grid><Grid item xs={9}><Typography fontSize={12}  variant='p'>{el.service_name}</Typography></Grid>
                </Grid> : <></>))}
            </Grid>
        </Grid>
      </Grid>
      </Box>
    <Grid container spacing={2}  sx={{padding:'16px 0px'}}>
      {adultCards.map((el , index) => <Grid item xs={12} sm={4} md ={3} lg={2} ><AdultCard num={index}/></Grid>  )}
      {childCards.map((el , index) =>  <Grid item xs={12} sm={4} md ={3} lg={2} ><ChildCard num={index}/></Grid> )}
      </Grid>
      <Grid container spacing={2} alignItems='stretch'>
        <Grid item xs={12} sm={8}><TotalTable columns={columns} rows={rows} total={price}/></Grid>
        <Grid item xs={12} sm={4}><Box sx={{backgroundColor:'background.main' , padding:'16px' , borderRadius:'5px'}}> 
        <Grid container item spacing={1}>
            <Grid item>
                <Typography fontWeight={500} variant='h5'>Payment Gateway</Typography>
            </Grid>
            <Grid item>
                <Typography fontSize={12} fontWeight={300} variant='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
            </Grid>
            <Grid container item xs={12} alignItems='center' spacing={1} >
                <Grid item xs={4}><Box className='image-container' sx={{ border:'1px solid' ,borderColor:'button.main' , borderRadius:'5px' ,padding:'5px 10px' }}><Image layout='responsive' width={60} height={15} src={Easypaisa}/></Box></Grid> <Grid item xs={4}><Box className='image-container' sx={{ backgroundColor:'#FFF', border:'1px solid' ,borderColor:'button.main' , borderRadius:'5px' ,padding:'5px 10px' }}><Image layout='responsive' width={60} height={15} src={Jazzcash}/></Box></Grid> <Grid item xs={4}><Box className='image-container' sx={{ border:'1px solid' ,borderColor:'button.main' , borderRadius:'5px' ,padding:'5px 10px' }}><Image layout='responsive' width={60} height={15} src={Upaisa}/></Box></Grid>
            </Grid>
        <Grid item ><StyledButton onClick={() => checkOut()} sx={{marginTop:'20px'}}>Check Out</StyledButton></Grid>
        </Grid>
        </Box></Grid>
      </Grid>
      </StyledContainer>            
        </Box>:''
    );
}

export default Book;


Book.getLayout = function getLayout(Book) {
    return (
      <CustomerLayout2>
        {Book}
      </CustomerLayout2>
    )
  }
  