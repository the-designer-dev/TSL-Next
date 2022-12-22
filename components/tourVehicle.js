import { React, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import SelectLanguage from './selectLanguage';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import SelectVehicle from './selectVehicle';
import Dropfile from './dropzone';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { setVehicles } from '../redux/addTour';
import StyledTextField from '../styledComponents/styledTextField';
import { useDispatch, useSelector } from 'react-redux';
import CarsDropfile from './carsDropzone';
function TourVehicle(props) {
    const dispatch = useDispatch()
    const [value2, setValue2] = useState();
    const [value3, setValue3] = useState();
    const vehicle = useSelector(state => state.addTour.vehicles)
    const changeType = (event) => {
        var varVehicles = vehicle.map(el => el)
        varVehicles[props.id - 1] = { ...varVehicles[props.id - 1], type: event.target.value }
        dispatch(setVehicles(varVehicles))
    };

    const changeAirconditioning = (event) => {
        var varVehicles = vehicle.map(el => el)
        varVehicles[props.id - 1] = { ...varVehicles[props.id - 1], airConditioning: event.target.value }
        dispatch(setVehicles(varVehicles))
    };

    const changeDriver = (event) => {
        var varVehicles = vehicle.map(el => el)
        varVehicles[props.id - 1] = { ...varVehicles[props.id - 1], driver: event.target.value }
        dispatch(setVehicles(varVehicles))
    };

    const changePrimaryLanguage = (event) => {
        var varVehicles = vehicle.map(el => el)
        varVehicles[props.id - 1] = { ...varVehicles[props.id - 1], primaryLanguage: event.target.value }
        dispatch(setVehicles(varVehicles))
    };

    const changeSecondaryLanguage = (event) => {
        var varVehicles = vehicle.map(el => el)
        varVehicles[props.id - 1] = { ...varVehicles[props.id - 1], secondaryLanguage: event.target.value }
        dispatch(setVehicles(varVehicles))
    };

    const changeMake = (event) => {
        var varVehicles = vehicle.map(el => el)
        varVehicles[props.id - 1] = { ...varVehicles[props.id - 1], make: event.target.value }
        dispatch(setVehicles(varVehicles))
    };

    const changeModel = (event) => {
        var varVehicles = vehicle.map(el => el)
        varVehicles[props.id - 1] = { ...varVehicles[props.id - 1], model: event.target.value }
        dispatch(setVehicles(varVehicles))
    };

    const changeYear = (event) => {
        var varVehicles = vehicle.map(el => el)
        varVehicles[props.id - 1] = { ...varVehicles[props.id - 1], year: event.target.value }
        dispatch(setVehicles(varVehicles))
    };


    return (
        <Grid container justifyContent='center' spacing={3} item xs={12}>


            <Grid container item xs={12} sm={10} alignItems='center' justifyContent='left'>
                <Grid container item>
                    <Grid item xs={12}>
                        <Typography color={"primary.main"} variant='p' fontSize={18} fontWeight={500}>
                            Vehicle {props.id}

                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container item justifyContent='left' alignItems='center' spacing={2} xs={12} sm={10}>
                <Grid item xs={12} sm={4}>
                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                        Transport Vehicle Type:

                    </Typography>
                </Grid>
                <Grid item xs={8} sm={4}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Vehicle</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={vehicle[props.id]?.type}
                                label="Vehicle"
                                onChange={changeType}
                            >
                                <MenuItem value={'corolla'}>Corolla</MenuItem>
                                <MenuItem value={'alto'}>Alto</MenuItem>
                                <MenuItem value={'civic'}>Civic</MenuItem>
                                <MenuItem value={'mira'}>Mira</MenuItem>
                                <MenuItem value={'cultus'}>Cultus</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>                </Grid>

            </Grid>

            <Grid container item xs={12} sm={10} justifyContent='left' alignItems='center'>
                <Grid items xs={5}>
                    <Typography fontWeight={400} variant='p' color={"primary.main"}>
                        Does it have air-conditioning
                    </Typography>
                </Grid>
                <Grid items xs={4}>
                    <FormControl>

                        <RadioGroup
                            row

                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value2}
                            onChange={(e) => { changeAirconditioning(e) }}
                        >
                            <FormControlLabel value={true} control={<Radio />} label="Yes" sx={{ color: '#22806E' }} />
                            <FormControlLabel value={false} control={<Radio />} label="No" sx={{ color: '#22806E' }} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container item xs={12} sm={10} justifyContent='left' alignItems='center'>
                <Grid items xs={5}>
                    <Typography fontWeight={400} variant='p' color={"primary.main"}>
                        Does it includes driver?
                    </Typography>
                </Grid>
                <Grid items xs={4}>
                    <FormControl>

                        <RadioGroup
                            row

                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value3}
                            onChange={(e) => { changeDriver(e) }}
                        >
                            <FormControlLabel value={true} control={<Radio />} label="Yes" sx={{ color: '#22806E' }} />
                            <FormControlLabel value={false} control={<Radio />} label="No" sx={{ color: '#22806E' }} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>

            <Grid container item justifyContent='left' alignItems='center' spacing={2} xs={12} sm={10}>
                <Grid item xs={12} sm={6}>
                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                        What's driver primary language?

                    </Typography>
                </Grid>
                <Grid item xs={8} sm={4}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Language</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={language}
                                label="Language"
                                onChange={changePrimaryLanguage}
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
            <Grid container item justifyContent='left' alignItems='center' spacing={2} xs={12} sm={10}>
                <Grid item xs={12} sm={6}>
                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                        What other languages he speak fluently?

                    </Typography>
                </Grid>
                <Grid item xs={8} sm={4}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Language</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={language}
                                label="Language"
                                onChange={changeSecondaryLanguage}
                            >
                                <MenuItem value={'urdu'}>Urdu</MenuItem>
                                <MenuItem value={'english'}>English</MenuItem>
                                <MenuItem value={'sindhi'}>Sindhi</MenuItem>
                                <MenuItem value={'pashto'}>Pashto</MenuItem>
                                <MenuItem value={'balochi'}>Balochi</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>                </Grid>

            </Grid>

            <Grid container item justifyContent='left' alignItems='center' spacing={2} xs={12} sm={10}>
                <Grid item xs={12} sm={4}>
                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                        Vehicle Make:

                    </Typography>
                </Grid>
                <Grid item xs={8} sm={8}>
                    <StyledTextField InputLabelProps={{ shrink: false }}
                        label="" onChange={(e) => changeMake(e)} required fullWidth placeholder='Like Toyota,BMW,etc' />
                </Grid>

            </Grid>

            <Grid container item justifyContent='left' alignItems='center' spacing={2} xs={12} sm={10}>
                <Grid item xs={12} sm={4}>
                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                        Vehicle Model & Year:

                    </Typography>
                </Grid>
                <Grid item xs={8} sm={4}>
                    <StyledTextField InputLabelProps={{ shrink: false }}
                        label="" onChange={(e) => changeModel(e)} required fullWidth placeholder='Like Corolla,Vitz,etc' />
                </Grid>
                <Grid item xs={8} sm={4}>
                    <StyledTextField InputLabelProps={{ shrink: false }}
                        label="" onChange={(e) => changeYear(e)} required fullWidth placeholder='Model Year' />
                </Grid>

            </Grid>


            <Grid container item justifyContent='left' alignItems='center' spacing={2} xs={12} sm={10}>
                <Grid item xs={12} sm={10}>
                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                        Add Images

                    </Typography>
                </Grid>
                <Grid item xs={8} sm={12}>
                    <CarsDropfile length={props.id} />
                </Grid>

            </Grid>
        </Grid>
    )
}

export default TourVehicle;