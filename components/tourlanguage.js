import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useDispatch , useSelector } from 'react-redux';
import SelectLanguage from './selectLanguage';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { setLanguages } from '../redux/addTour';
function TourLanguage(props) {
    const [language, setLanguage] = React.useState('');
    const [language2, setLanguage2] = React.useState('');
    const tour = useSelector(state => state.addTour)
    const dispatch = useDispatch()
    const handleChange = (event) => {
        setLanguage(event.target.value);
        var newArr = tour.languages.map(el => el)
        newArr[props.id-1] = {...newArr[props.id-1] , primary: event.target.value }
        dispatch(setLanguages(newArr))
    };
    const handleChange2 = (event) => {
        setLanguage2(event.target.value);
        var newArr = tour.languages.map(el => el)
        newArr[props.id-1] = {...newArr[props.id-1] , secondary: event.target.value }
        dispatch(setLanguages(newArr))
    };
    return (
        <Grid container item justifyContent='center' spacing={2} xs={12}>
            <Grid item xs={12}>
                <Typography color={"primary.main"} variant='h6' fontWeight={500}> Language {props.id} </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography color={"primary.main"} variant='p' fontWeight={500}>
                    What's tour guide primary language?

                </Typography>
            </Grid>
            <Grid item xs={8} sm={4}>

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
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography color={"primary.main"} variant='p' fontWeight={500}>
                    What other languages they speak fluently?
                </Typography>
            </Grid>
            <Grid item xs={8} sm={4}>
            <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language2}
                    label="Language"
                    onChange={handleChange2}
                >
                    <MenuItem value={'urdu'}>Urdu</MenuItem>
                    <MenuItem value={'english'}>English</MenuItem>
                    <MenuItem value={'sindhi'}>Sindhi</MenuItem>
                    <MenuItem value={'pashto'}>Pashto</MenuItem>
                    <MenuItem value={'balochi'}>Balochi</MenuItem>
                </Select>
            </FormControl>
        </Box>
            </Grid>
        </Grid>
    )
}

export default TourLanguage;