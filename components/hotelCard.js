import { Paper , Box, Typography} from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bath from '../assets/Icon awesome-bath.png'
import parking from '../assets/Icon awesome-parking.png'
import swimmer from '../assets/Icon awesome-swimmer.png'
import wifi from '../assets/Icon awesome-wifi.png'
import gym from '../assets/Icon map-gym.png'
import breakfast from '../assets/Icon material-free-breakfast.png'
import restaurant from '../assets/Icon material-restaurant.png'
import smokeFree from '../assets/Icon material-smoke-free.png'
import Image from 'next/image';
import { API_URL } from '../config';
import StyledButton from '../styledComponents/styledButton';

function HotelCard(props) {
    //checking code
    var items = props.images
    
    const onClick = () => {
        props.clickFunction()
    }

    return (
        <Paper sx={{backgroundColor:'background.main' , width:'100%' , textAlign:'center' , borderRadius:'20px'}} >
        
        <Carousel showThumbs={false}  showIndicators={false} showStatus={false} dynamicHeight={false} indicators={false} autoPlay={false} >
     {items.map((el) => {return <Box className='carousel-img' sx={{width:'100%', height:'200px' , position: 'relative'}}><Image layout='fill' objectFit='fill' src={API_URL + el.url}/></Box>})}

      </Carousel>
      <Box sx={{paddingTop: '15px'}}>
      <Typography sx={{fontSize:'18px',fontWeight:'700'}} variant='p'>{props.name}</Typography>
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
      <Typography fontWeight='300' fontSize='16px' variant='p'>Starting from</Typography>
      <Typography fontSize='18px' fontWeight='700'sx={{paddingTop:'5px'}} variant='p'>PKR {props.startingPrice}/-</Typography>
      <Typography  variant='p'>(Per Night)</Typography>
      </Box>
      <StyledButton type='submit' onClick={onClick} sx={{margin:'15px'}} >View Details</StyledButton>
      </Box>
        </Paper>
    );
}

export default HotelCard;