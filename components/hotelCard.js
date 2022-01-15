import { Paper , Box, Typography} from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import hotel2 from '../assets/hotelimage2.jpeg'
import hotel3 from '../assets/hotelimage3.jpeg'
import hotel4 from '../assets/hotelimage4.jpeg'
import bath from '../assets/Icon awesome-bath.png'
import parking from '../assets/Icon awesome-parking.png'
import swimmer from '../assets/Icon awesome-swimmer.png'
import wifi from '../assets/Icon awesome-wifi.png'
import gym from '../assets/Icon map-gym.png'
import breakfast from '../assets/Icon material-free-breakfast.png'
import restaurant from '../assets/Icon material-restaurant.png'
import smokeFree from '../assets/Icon material-smoke-free.png'
import Image from 'next/image';
import StyledButton from '../styledComponents/styledButton';



function HotelCard(props) {
    //checking code
var items = [hotel2 , hotel3 , hotel4]
    return (
        <Paper sx={{backgroundColor:'background.main' , width:'100%' , textAlign:'center'}} >
        
        <Carousel showThumbs={false}  showIndicators={false} showStatus={false} dynamicHeight={false}	 indicators={false} autoPlay={false} >
     {items.map((el) => {return <Box sx={{width:'100%', height:'200px' , position: 'relative'}}><Image layout='fill' objectFit='fill' src={el}/></Box>})}

      </Carousel>
      <Box sx={{paddingTop: '15px'}}>
      <Typography sx={{fontSize:'18px',fontWeight:'700'}} variant='p'>Hotel Sawat</Typography>
      <Box sx={{padding:'10px 30px',display:'flex' , justifyContent:'space-between'}}>
            <Image src={bath}/>
            <Image src={parking}/>
            <Image src={swimmer}/>
            <Image src={wifi}/>
            <Image src={gym}/>
            <Image src={breakfast}/>
            <Image src={restaurant}/>
            <Image src={smokeFree}/>
      </Box>
      <Box sx={{display:'flex' , flexDirection:'column'}}>
      <Typography sx={{fontSize:'16px'}} variant='p'>Starting from</Typography>
      <Typography sx={{fontSize:'18px',fontWeight:'700',paddingTop:'5px'}} variant='p'>PKR 10,000/-</Typography>
      <Typography  variant='p'>Per Night</Typography>
      </Box>
      <StyledButton sx={{margin:'15px'}} >View Details</StyledButton>
      </Box>
        </Paper>
    );
}

export default HotelCard;