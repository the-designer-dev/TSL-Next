import {  styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root':{
    '& .MuiOutlinedInput-input':{
      color:'#000'}},
  backgroundColor:'#FFF', 
  borderRadius:'5px'
}));
export default StyledTextField;