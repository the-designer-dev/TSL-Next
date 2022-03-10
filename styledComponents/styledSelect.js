import { styled } from '@mui/material/styles';
import { Select } from '@mui/material';
const StyledSelect = styled(Select)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& .MuiOutlinedInput-input': {
            color: '#000'
        },
        '& .Mui-disabled': {
            backgroundColor: '#DDD',
            borderRadius: '5px'
        },
        '& .MuiSelect-icon': {
            color: 'black'
        }

    },
    backgroundColor: '#FFF',
    borderRadius: '5px'
}));
export default StyledSelect;