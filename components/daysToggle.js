import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function DaysToggle() {
    const [formats, setFormats] = React.useState(() => ['']);

    const handleFormat = (event, newFormats) => {
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
            <ToggleButton sx={{ '&.MuiToggleButton-root': { '&.Mui-selected': { backgroundColor: 'button.main' } } }} value="monday" aria-label="monday">
                Monday
            </ToggleButton>
            <ToggleButton sx={{ '&.MuiToggleButton-root': { '&.Mui-selected': { backgroundColor: 'button.main' } } }} value="tuesday" aria-label="tuesday">
                Tuesday
            </ToggleButton>
            <ToggleButton sx={{ '&.MuiToggleButton-root': { '&.Mui-selected': { backgroundColor: 'button.main' } } }} value="wednesday" aria-label="wednesday">
                Wednesday
            </ToggleButton>
            <ToggleButton sx={{ '&.MuiToggleButton-root': { '&.Mui-selected': { backgroundColor: 'button.main' } } }} value="thursday" aria-label="thursday">
                Thursday
            </ToggleButton>
            <ToggleButton sx={{ '&.MuiToggleButton-root': { '&.Mui-selected': { backgroundColor: 'button.main' } } }} value="friday" aria-label="friday">
                Friday
            </ToggleButton>
            <ToggleButton sx={{ '&.MuiToggleButton-root': { '&.Mui-selected': { backgroundColor: 'button.main' } } }} value="saturday" aria-label="saturday">
                Saturday
            </ToggleButton>
            <ToggleButton sx={{ '&.MuiToggleButton-root': { '&.Mui-selected': { backgroundColor: 'button.main' } } }} value="sunday" aria-label="sunday">
                Sunday
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
