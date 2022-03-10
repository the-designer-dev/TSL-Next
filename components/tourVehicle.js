import { React, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import SelectLanguage from './selectLanguage';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import SelectVehicle from './selectVehicle';
import Dropfile from './dropzone';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import StyledTextField from '../styledComponents/styledTextField';
function TourVehicle(props) {
    const [value2, setValue2] = useState();
    const [value3, setValue3] = useState();
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
                    <SelectVehicle />
                </Grid>

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
                            onChange={(e) => { setValue2(e.target.value) }}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" sx={{ color: 'white' }} />
                            <FormControlLabel value="no" control={<Radio />} label="No" sx={{ color: 'white' }} />
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
                            onChange={(e) => { setValue3(e.target.value) }}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" sx={{ color: 'white' }} />
                            <FormControlLabel value="no" control={<Radio />} label="No" sx={{ color: 'white' }} />
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
                    <SelectLanguage />
                </Grid>

            </Grid>
            <Grid container item justifyContent='left' alignItems='center' spacing={2} xs={12} sm={10}>
                <Grid item xs={12} sm={6}>
                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                        What other languages he speak fluently?

                    </Typography>
                </Grid>
                <Grid item xs={8} sm={4}>
                    <SelectLanguage />
                </Grid>

            </Grid>

            <Grid container item justifyContent='left' alignItems='center' spacing={2} xs={12} sm={10}>
                <Grid item xs={12} sm={4}>
                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                        Vehicle Make:

                    </Typography>
                </Grid>
                <Grid item xs={8} sm={8}>
                    <StyledTextField required fullWidth placeholder='Like Toyota,BMW,etc' />
                </Grid>

            </Grid>

            <Grid container item justifyContent='left' alignItems='center' spacing={2} xs={12} sm={10}>
                <Grid item xs={12} sm={4}>
                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                        Vehicle Model & Year:

                    </Typography>
                </Grid>
                <Grid item xs={8} sm={4}>
                    <StyledTextField required fullWidth placeholder='Like Corolla,Vitz,etc' />
                </Grid>
                <Grid item xs={8} sm={4}>
                    <StyledTextField required fullWidth placeholder='Model Year' />
                </Grid>

            </Grid>


            <Grid container item justifyContent='left' alignItems='center' spacing={2} xs={12} sm={10}>
                <Grid item xs={12} sm={10}>
                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                        Add Images

                    </Typography>
                </Grid>
                <Grid item xs={8} sm={12}>
                    <Dropfile />
                </Grid>

            </Grid>
        </Grid>
    )
}

export default TourVehicle;