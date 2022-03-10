import { React, useState } from 'react';
import FormWrapper from '../styledComponents/formWrapper';
import StyledTextField from '../styledComponents/styledTextField';
import CustomizeTextArea from '../styledComponents/styledTextarea';
import { Grid, Typography, Button, Checkbox, TextField } from '@mui/material';
import LocationPicker from './locationPicker';
import SelectLanguage from './selectLanguage';
import LanguageIcon from '@mui/icons-material/Language';
import TourLanguage from './tourlanguage';
import StyledAddResponseButton from '../styledComponents/styledAddResponseButton';
import GroupIcon from '@mui/icons-material/Group';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputAdornment } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { DatePicker } from '@mui/lab';
import DaysToggle from './daysToggle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomServiceIcon from '@mui/icons-material/RoomService';

function TourPackageInfo() {
    const [language, setLanguage] = useState(0)
    const [age, setAge] = useState(0)
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    return (
        <FormWrapper>
            <form>
                <Grid container spacing={3}>
                    <Grid container item spacing={1}>
                        <Grid item xs={12}><Typography color={"primary.main"} variant='h6'>Tell us more about your Tour Packages</Typography></Grid>
                    </Grid>


                    <Grid container item alignItems='center' spacing={1}>
                        <Grid item xs={12} sm={4}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>Title for the package
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <StyledTextField required fullWidth placeholder='Enter Package Name' />
                        </Grid>
                    </Grid>


                    <Grid container item alignItems='center' spacing={1}>
                        <Grid item xs={12} sm={4}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>Which city will you host in?
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <StyledTextField required fullWidth placeholder='Enter City' />
                        </Grid>
                    </Grid>


                    <Grid container item alignItems='start' spacing={1}>
                        <Grid item xs={12} sm={4}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>Where should guests meet you?
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <CustomizeTextArea minRows={3} required fullWidth placeholder='Enter the address where everyone should arrive at' /></Grid>
                    </Grid>


                    <Grid container item spacing={2}>
                        <Grid item xs={12} ><Typography fontWeight={500} variant='p' color={"primary.main"}>Place a pin to locate your hotel</Typography></Grid>
                        <Grid item xs={12} ><LocationPicker /></Grid>
                    </Grid>


                    <Grid container item alignItems='start' spacing={1}>
                        <Grid item xs={12} sm={4}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}> How guests can find you once
                                they arrive? (optional)

                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <CustomizeTextArea minRows={3} fullWidth placeholder='If location is hard to find, include detailed instructions' />
                        </Grid>
                    </Grid>


                    <Grid container item alignItems='center' spacing={1}>
                        <Grid item xs={12} sm={4}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>Where we'll be going
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <StyledTextField required fullWidth placeholder='Enter the location where tour takes place' />
                        </Grid>
                    </Grid>


                    <Grid container item alignItems='center' justifyContent='center' spacing={2}>
                        <Grid container alignItems='center' item >
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontSize={18} fontWeight={500}>
                                    <LanguageIcon sx={{ fontSize: '34px', marginRight: '10px', color: '#2AB572' }} /> Language

                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container item justifyContent='center' spacing={2} xs={12}>
                            <Grid item xs={12} sm={6}>
                                <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                    What's tour guide primary language?

                                </Typography>
                            </Grid>
                            <Grid item xs={8} sm={4}>
                                <SelectLanguage />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                    What other languages they speak fluently?
                                </Typography>
                            </Grid>
                            <Grid item xs={8} sm={4}>
                                <SelectLanguage />
                            </Grid>
                            {[...Array(language)].map((a, i) => <TourLanguage key={i} id={i + 1} />)}
                        </Grid>
                        <Grid container item justifyContent='left'>

                            <StyledAddResponseButton type='button' onClick={() => setLanguage(language + 1)}>
                                + Add another response</StyledAddResponseButton>
                        </Grid>

                    </Grid>

                    {/* Guests Start */}

                    <Grid container item alignItems='center' justifyContent='center' spacing={2}>
                        <Grid container alignItems='center' item >
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontSize={18} fontWeight={500}>
                                    <GroupIcon sx={{ fontSize: '34px', marginRight: '10px', color: '#2AB572' }} /> Guests

                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container item justifyContent='center' spacing={4}>

                            <Grid container item xs={12} sm={5} spacing={1} alignItems='center' >
                                <Grid item xs={12} sm={4}>
                                    <Typography fontWeight={400} variant='p' color={"primary.main"}>Min Group Size:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <StyledTextField size='small' fullWidth sx={{
                                        '& .MuiInputBase-root': {
                                            padding: '0px',
                                            '& .MuiInputAdornment-positionStart': {
                                                backgroundColor: 'button.main',
                                                height: '40px', maxHeight: 'none', borderRadius: '4px 0px 0px 4px',
                                                '& .MuiTypography-root': { color: "#FFF" }
                                            },
                                            '& .MuiInputAdornment-positionEnd': {
                                                backgroundColor: 'button.main',
                                                height: '40px', maxHeight: 'none', borderRadius: '0px 4px 4px 0px',
                                                '& .MuiTypography-root': { color: "#FFF" }
                                            }
                                        }
                                    }} InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            <Button>-</Button>
                                        </InputAdornment>, endAdornment: <InputAdornment position="end">
                                            <Button>+</Button></InputAdornment>
                                    }} />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} sm={5} spacing={1} alignItems='center'>
                                <Grid item xs={12} sm={4}>
                                    <Typography fontWeight={400} variant='p' color={"primary.main"}>Max Group Size:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <StyledTextField fullWidth size='small' sx={{
                                        '& .MuiInputBase-root': {
                                            padding: '0px',
                                            '& .MuiInputAdornment-positionStart': {
                                                backgroundColor: 'button.main', height: '40px',
                                                maxHeight: 'none', borderRadius: '4px 0px 0px 4px',
                                                '& .MuiTypography-root': { color: "#FFF" }
                                            },
                                            '& .MuiInputAdornment-positionEnd': {
                                                backgroundColor: 'button.main', height: '40px',
                                                maxHeight: 'none', borderRadius: '0px 4px 4px 0px',
                                                '& .MuiTypography-root': { color: "#FFF" }
                                            }
                                        }
                                    }}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">
                                                <Button>-</Button>
                                            </InputAdornment>, endAdornment: <InputAdornment position="end">
                                                <Button  >+</Button></InputAdornment>
                                        }} />
                                </Grid>
                            </Grid>


                            <Grid container item xs={12} sm={5} spacing={1} alignItems='center'>
                                <Grid item xs={12} sm={4}>
                                    <Typography fontWeight={400} variant='p' color={"primary.main"}>Minimum Age:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"

                                                label="Language"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                                <MenuItem value={3}>3</MenuItem>
                                                <MenuItem value={4}>4</MenuItem>
                                                <MenuItem value={5}>5</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} sm={5} alignItems='center'>
                                <Grid item xs={2} sm={2}>
                                    <Checkbox sx={{ padding: '0px' }} />
                                </Grid>
                                <Grid item xs={10} sm={10}>
                                    <Typography fontWeight={400} variant='p' color={"primary.main"}>Parents can bring kids under 2 years</Typography>
                                </Grid>
                            </Grid>


                            <Grid container item xs={12} sm={10} justifyContent='left' alignItems='start'>
                                <Grid item xs={1}>
                                    <InfoIcon sx={{ color: '#2AB572' }} />
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography fontWeight={400} variant='p' color={"primary.main"}>
                                        Note: Minors can only attend with their legal guardian.
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} sm={5} spacing={0} alignItems='center'>
                                <Grid item xs={12} sm={4}>
                                    <Typography fontWeight={400} variant='p' color={"primary.main"}>Min Private Group Size:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <StyledTextField size='small' fullWidth sx={{
                                        '& .MuiInputBase-root': {
                                            padding: '0px',
                                            '& .MuiInputAdornment-positionStart': {
                                                backgroundColor: 'button.main', height: '40px',
                                                maxHeight: 'none', borderRadius: '4px 0px 0px 4px',
                                                '& .MuiTypography-root': { color: "#FFF" }
                                            },
                                            '& .MuiInputAdornment-positionEnd': {
                                                backgroundColor: 'button.main', height: '40px',
                                                maxHeight: 'none', borderRadius: '0px 4px 4px 0px',
                                                '& .MuiTypography-root': { color: "#FFF" }
                                            }
                                        }
                                    }}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">
                                                <Button>-</Button>
                                            </InputAdornment>, endAdornment: <InputAdornment position="end">
                                                <Button  >+</Button></InputAdornment>
                                        }} />
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} sm={5} alignItems='center'>
                                <Grid item xs={2} sm={2}>
                                    <Checkbox sx={{ padding: '0px' }} />
                                </Grid>
                                <Grid item xs={10} sm={10}>
                                    <Typography fontWeight={400} variant='p' color={"primary.main"}>Can be booked as private</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Guests End */}


                    {/* Event Validity Starts */}
                    <Grid container item alignItems='center' justifyContent='center' spacing={3}>
                        <Grid container alignItems='center' item >
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontSize={18} fontWeight={500}>
                                    <EventAvailableIcon sx={{ fontSize: '34px', marginRight: '10px', color: '#2AB572' }} /> Event Validity

                                </Typography>
                            </Grid>
                        </Grid>


                        <Grid container item xs={12} sm={10} justifyContent='left' alignItems='start'>
                            <Grid item xs={1}>
                                <InfoIcon sx={{ color: '#2AB572' }} />
                            </Grid>
                            <Grid item xs={11}>
                                <Typography fontWeight={400} variant='p' color={"primary.main"}>
                                    Note: add time period when this tour is available
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} sm={10} alignItems='center'>
                            <Grid item xs={1} sm={1}>
                                <Checkbox sx={{ padding: '0px' }} />
                            </Grid>
                            <Grid item xs={11} sm={11}>
                                <Typography fontWeight={400} variant='p' color={"primary.main"}>This tour does not have date range</Typography>
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} sm={10} alignItems='center' justifyContent='left' spacing={1}>
                            <Grid item xs={12} sm={4}>
                                <Typography fontWeight={400} variant='p' color={"primary.main"}>Date range when its available: </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <DatePicker value={startDate} onChange={(newValue) => { setStartDate(newValue) }} renderInput={(params) => <TextField fullWidth sx={{ '& .MuiOutlinedInput-root': { '& .MuiOutlinedInput-input': { color: '#000' }, '& .MuiInputAdornment-root': { '& .MuiButtonBase-root': { '& .MuiSvgIcon-root': { color: 'button.main' } } } }, backgroundColor: '#FFF', borderRadius: '5px' }} variant="outlined" placeholder="MM/DD/YYYY" {...params} />} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <DatePicker value={endDate} onChange={(newValue) => { setEndDate(newValue) }} renderInput={(params) => <TextField fullWidth sx={{ '& .MuiOutlinedInput-root': { '& .MuiOutlinedInput-input': { color: '#000' }, '& .MuiInputAdornment-root': { '& .MuiButtonBase-root': { '& .MuiSvgIcon-root': { color: 'button.main' } } } }, backgroundColor: '#FFF', borderRadius: '5px' }} variant="outlined" placeholder="MM/DD/YYYY" {...params} />} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography fontWeight={500} variant='p' color={"primary.main"}>Days (Available) </Typography>

                            </Grid>
                            <Grid item xs={12}>
                                <DaysToggle />

                            </Grid>
                        </Grid>

                    </Grid>

                    {/* Event Validity Ends */}

                    {/* Duration Starts */}
                    <Grid container item alignItems='center' justifyContent='center' spacing={3}>
                        <Grid container alignItems='center' item >
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontSize={18} fontWeight={500}>
                                    <AccessTimeIcon sx={{ fontSize: '34px', marginRight: '10px', color: '#2AB572' }} /> Duration

                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} sm={10} justifyContent='left' alignItems='start'>
                            <Grid item xs={1}>
                                <InfoIcon sx={{ color: '#2AB572' }} />
                            </Grid>
                            <Grid item xs={11}>
                                <Typography fontWeight={400} variant='p' color={"primary.main"}>
                                    Later on, you’ll be able to pick the exact calendar dates and you’ll
                                    also be able to adjust times for each individual date
                                </Typography>
                            </Grid>
                        </Grid>


                        <Grid container item xs={12} sm={10} alignItems='center' justifyContent='center' spacing={1}>

                            <Grid item xs={12} sm={6}>
                                <Typography fontWeight={400} variant='p' color={"primary.main"}>
                                    How Long is the tour
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{ minWidth: 80 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Days</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"

                                            label="Days"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                            <MenuItem value={6}>6</MenuItem>
                                            <MenuItem value={7}>7</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>

                        </Grid>
                    </Grid>
                    {/* Duration Ends */}


                    {/* Optional Features Starts*/}
                    <Grid container item alignItems='center' justifyContent='center' spacing={3}>
                        <Grid container alignItems='center' item >
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontSize={18} fontWeight={500}>
                                    <RoomServiceIcon sx={{ fontSize: '34px', marginRight: '10px', color: '#2AB572' }} /> Optional Features

                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} sm={10} justifyContent='left' alignItems='start'>
                            <Grid item xs={1}>
                                <InfoIcon sx={{ color: '#2AB572' }} />
                            </Grid>
                            <Grid item xs={11}>
                                <Typography fontWeight={400} variant='p' color={"primary.main"}>
                                    We are providing you the ability to offer customized packages to your customers so they can truly personalize their
                                    experience with you. This section is optional.
                                </Typography>
                            </Grid>
                        </Grid>



                    </Grid>


                    {/* Optional Features Ends */}
                </Grid>

            </form>
        </FormWrapper >
    )
}

export default TourPackageInfo;