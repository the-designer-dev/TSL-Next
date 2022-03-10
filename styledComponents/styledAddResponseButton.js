import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
const StyledAddResponseButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'none !important',
    borderBottom: `1px solid ${theme.palette.button.main}`,
    padding: '2px 0px',
    borderRadius: '0px',
    color: `${theme.palette.button.main} `

}));
export default StyledAddResponseButton;