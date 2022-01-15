import {  styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
const StyledContainer = styled(Paper)(({ theme }) => ({
  backgroundColor : `${theme.palette.background.secondary} !important`,
  padding:'15px'
}));
export default StyledContainer;