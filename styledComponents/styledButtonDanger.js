import {  styled } from '@mui/material/styles';
import { Button } from '@mui/material';
const StyledButtonDanger = styled(Button)(({ theme }) => ({
  backgroundColor : `${theme.palette.button.danger} !important`,
  padding:'2px 20px'

}));
export default StyledButtonDanger;