import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import StyledSelect from '../styledComponents/styledSelect';
export default function SelectLanguage() {
    const [language, setLanguage] = React.useState('');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <div>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Language</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={language}
                        label="Language"
                        onChange={handleChange}
                    >
                        <MenuItem value={'urdu'}>Urdu</MenuItem>
                        <MenuItem value={'english'}>English</MenuItem>
                        <MenuItem value={'sindhi'}>Sindhi</MenuItem>
                        <MenuItem value={'pashto'}>Pashto</MenuItem>
                        <MenuItem value={'balochi'}>Balochi</MenuItem>
                    </Select>
                </FormControl>
            </Box>

        </div>
    );
}