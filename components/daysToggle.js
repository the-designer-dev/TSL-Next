import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import addTour, { setDays_available } from '../redux/addTour';

export default function DaysToggle() {
    const [formats, setFormats] = React.useState(() => ['']);
    const dispatch = useDispatch()
    const handleFormat = (event, newFormats) => {
        dispatch(setDays_available(newFormats))
        setFormats(newFormats);
    };
    const matches = useMediaQuery("(min-width:990px)");
    return (
        <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            orientation={`${matches ? `horizontal` : `vertical`}`}
            aria-label="text formatting"
            fullWidth
        >
            <ToggleButton sx={{ '&.MuiToggleButton-root': { '&.Mui-selected': { backgroundColor: 'button.main', color: '#fff' } } }} value="monday" aria-label="monday">
                Monday
            </ToggleButton>
            <ToggleButton sx={{ '&.MuiToggleButton-root': { '&.Mui-selected': { backgroundColor: 'button.main', color: '#fff' } } }} value="tuesday" aria-label="tuesday">
                Tuesday
            </ToggleButton>
            <ToggleButton sx={{ '&.MuiToggleButton-root': { '&.Mui-selected': { backgroundColor: 'button.main', color: '#fff' } } }} value="wednesday" aria-label="wednesday">
                Wednesday
            </ToggleButton>
            <ToggleButton sx={{ '&.MuiToggleButton-root': { '&.Mui-selected': { backgroundColor: 'button.main', color: '#fff' } } }} value="thursday" aria-label="thursday">
                Thursday
            </ToggleButton>
            <ToggleButton sx={{ '&.MuiToggleButton-root': { '&.Mui-selected': { backgroundColor: 'button.main', color: '#fff' } } }} value="friday" aria-label="friday">
                Friday
            </ToggleButton>
            <ToggleButton sx={{ '&.MuiToggleButton-root': { '&.Mui-selected': { backgroundColor: 'button.main', color: '#fff' } } }} value="saturday" aria-label="saturday">
                Saturday
            </ToggleButton>
            <ToggleButton sx={{ '&.MuiToggleButton-root': { '&.Mui-selected': { backgroundColor: 'button.main', color: '#fff' } } }} value="sunday" aria-label="sunday">
                Sunday
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
