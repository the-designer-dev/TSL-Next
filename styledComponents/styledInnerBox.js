import {  styled } from '@mui/material/styles';
import { Box } from '@mui/material';
const StyledBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
        maxWidth:'1200px',
        margin:'0px auto'
      },
}));
export default StyledBox;