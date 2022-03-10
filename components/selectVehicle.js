import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import StyledSelect from '../styledComponents/styledSelect';
export default function SelectVehicle() {
    const [vehicle, setVehicle] = React.useState('');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <div>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Vehicle</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={vehicle}
                        label="Vehicle"
                        onChange={handleChange}
                    >
                        <MenuItem value={'corolla'}>Corolla</MenuItem>
                        <MenuItem value={'alto'}>Alto</MenuItem>
                        <MenuItem value={'civic'}>Civic</MenuItem>
                        <MenuItem value={'mira'}>Mira</MenuItem>
                        <MenuItem value={'cultus'}>Cultus</MenuItem>
                    </Select>
                </FormControl>
            </Box>

        </div>
    );
}