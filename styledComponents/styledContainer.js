import {  styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
const StyledContainer = styled(Paper)(({ theme }) => ({
  backgroundColor : `${theme.palette.background.secondary} !important`,
  padding:'15px',
  minHeight:'calc( 100vh - 77px )',
  backgroundImage : 'none',
  boxShadow:'none'
}));
export default StyledContainer;