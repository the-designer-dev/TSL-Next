import { useEffect , useState ,React} from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import TimePicker from '@mui/lab/TimePicker';
import FormWrapper from '../styledComponents/formWrapper';

import StyledTextField from '../styledComponents/styledTextField';
import { useDispatch , useSelector } from 'react-redux';
import InputAdornment from '@mui/material/InputAdornment';
import  {setName ,setCity,setAddress,setDescription,setImages,setAmenities,setFacilities,setRules,setCheckIn,setCheckOut,setServices,setDaysToRefund,setFaqs} from '../redux/addHotel'
import moment from 'moment';
import ProvidedServices from './providedServices';
import FAQs from './faqs';

function AddServicesForm(props) {
    const [extraServices , setExtraServices] = useState(['Breakfast','Lunch','HiTea','Dinner'])
    const [value, setValue] = useState(null);
    const dispatch = useDispatch()
    const addHotel = useSelector(state => state.addHotel)
    return (
        <FormWrapper>
            <form>
                <Grid container spacing={3}>
                    <Grid container item  spacing={1}>
                    <Grid item xs={12}><Typography variant='h6'>Add some amazing services</Typography></Grid>
                    </Grid>
                    <Grid container item xs={12} sm={6} spacing={1}>
                    <Grid item xs={12} sm={3}><Typography variant='p'>Check-In time:</Typography></Grid>
                    <Grid item xs={12} sm={9}><TimePicker value={moment(addHotel.checkIn , "hh:mm a")} onChange={(newValue) => { newValue ? dispatch(setCheckIn(newValue.format("hh:mm a"))) :''}} renderInput={(params) => <TextField placeholder='HH:MM am/pm' sx={{'& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{color:'#000'},'& .MuiInputAdornment-root':{'& .MuiButtonBase-root':{'& .MuiSvgIcon-root':{color:'button.main'}}}} , backgroundColor:'#FFF', borderRadius:'5px' }} fullWidth {...params} />} /></Grid>
                    </Grid>
                    <Grid container item xs={12} sm={6} spacing={1}>
                    <Grid item xs={12} sm={3}><Typography variant='p'>Check-Out time:</Typography></Grid>
                    <Grid item xs={12} sm={9}><TimePicker value={moment(addHotel.checkOut , "hh:mm a")} onChange={(newValue) => {newValue ? dispatch(setCheckOut(newValue.format("hh:mm a"))) :''}} renderInput={(params) => <StyledTextField placeholder='HH:MM am/pm' sx={{'& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{color:'#000'},'& .MuiInputAdornment-root':{'& .MuiButtonBase-root':{'& .MuiSvgIcon-root':{color:'button.main'}}}} , backgroundColor:'#FFF', borderRadius:'5px' }} fullWidth {...params} />} /></Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                    <Grid item xs={12}><Typography fontWeight={600} fontSize={18} variant='p'>What services do you provide?</Typography></Grid>
                    <Grid item xs={12} ><ProvidedServices/></Grid>
                    <Grid item container spacing={2} xs={12}> {addHotel.services.map((el) =>  (<Grid container item xs={12} sm={6}><Grid container item direction='column' xs={12} sm={3}> <Grid item >{el.extra_field_name}</Grid> <Grid item ><Typography fontSize={12} fontWeight={300} variant='p'>Rates</Typography></Grid> </Grid><Grid item xs={12} sm={9}><StyledTextField sx={{'& .MuiInputBase-root':{padding:'0px' ,'& .MuiInputAdornment-positionStart':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'4px 0px 0px 4px' , padding:'0px 10px' ,'& .MuiTypography-root':{color:"#FFF"}},'& .MuiInputAdornment-positionEnd':{backgroundColor:'button.main' , height:'56px' ,maxHeight:'none' , borderRadius:'0px 4px 4px 0px' , padding:'0px 10px' ,'& .MuiTypography-root':{color:"#FFF"}}}}}  InputProps={{startAdornment: <InputAdornment position="start">PKR</InputAdornment> , endAdornment: <InputAdornment  position="end">Per Person</InputAdornment> }} fullWidth/></Grid> </Grid>) )} </Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                    <Grid item xs={12} sm={4}><Typography variant='p'>Days To Refund</Typography></Grid>
                    <Grid item xs={12} sm={8}><StyledTextField type='number' fullWidth placeholder='Enter days' /></Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                    <Grid item xs={12} ><Typography fontSize={18} fontWeight={600} variant='p'>Frequently Asked Questions</Typography></Grid>
                    <Grid item xs={12} ><FAQs/></Grid>
                    </Grid>
                   
                </Grid>
            </form>
        </FormWrapper>
    );
}

export default AddServicesForm;