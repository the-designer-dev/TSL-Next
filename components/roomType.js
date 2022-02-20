import {React , useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import { Box , Typography } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { setRoomType } from '../redux/addRoom';


function RoomType(props) {
    const dispatch = useDispatch()
    const matches = useMediaQuery("(min-width:370px)");
    const [formats, setFormats] = useState(() => ['Suite']);
    
    const handleFormat = (event, newFormats) => {
    if(newFormats !== null){
    setFormats(newFormats)
    dispatch(setRoomType(newFormats))}
    };
    return (
        <Box sx={{ width: '100%' }}>
        <ToggleButtonGroup
            fullWidth
            exclusive
        value={formats}
        onChange={handleFormat}
        orientation={`${matches ? `horizontal` : `vertical`}`}
        aria-label="text formatting"
        >
        <ToggleButton   sx={{'&.MuiToggleButton-root':{'&.Mui-selected':{backgroundColor:'button.main'}}}}  value="suite" aria-label="bold">
            <Typography variant='p'>Suite</Typography>
        </ToggleButton>
        <ToggleButton  sx={{'&.MuiToggleButton-root':{'&.Mui-selected':{backgroundColor:'button.main'}}}} value="executive" aria-label="italic">
        <Typography variant='p'>Executive Room</Typography>
        </ToggleButton>
        <ToggleButton  sx={{'&.MuiToggleButton-root':{'&.Mui-selected':{backgroundColor:'button.main'}}}} value="standard" aria-label="italic">
        <Typography variant='p'>Standard Room</Typography>
        </ToggleButton>
    
        </ToggleButtonGroup>
    </Box>
    );
}

export default RoomType;