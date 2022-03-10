import * as React from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function DaysToggle() {
    const [formats, setFormats] = React.useState(() => ['']);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    return (
        <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"

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
