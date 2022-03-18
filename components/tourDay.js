import { React, useState, useEffect } from 'react';
import { Grid, Typography, Button, Checkbox, TextField } from '@mui/material';
import TimePicker from '@mui/lab/TimePicker';
import StyledTextField from '../styledComponents/styledTextField';
import CustomizeTextArea from '../styledComponents/styledTextarea';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputAdornment } from '@mui/material';
import dynamic from 'next/dynamic';
import { setDaysLayout } from '../redux/addTour';
import { convertToRaw, convertFromHTML, ContentState } from 'draft-js';
import { convertToHTML } from 'draft-convert'; import { setName, setCity, setAddress, setDescription } from '../redux/addHotel'
import { useDispatch, useSelector } from 'react-redux';

import DaysDropfile from './daysDropzone';


const MUIRichTextEditor = dynamic(() => import('mui-rte'), { ssr: false });
function TourDay(props) {
    const [duration, setDuration] = useState('');
    const dispatch = useDispatch();
    const handleChange = (event) => {
        setDuration(event.target.value);
    };
    const dayLayout = useSelector(state => state.addTour.daysLayout) 
    var content;
    const SSR = typeof window === 'undefined'
    var contentHTML;
    var state;

    function setStartTime(val){
        var daysLayoutVar = dayLayout.map(el => el)
        daysLayoutVar[props.number] = {...daysLayoutVar[props.number] , startTime : val }
        dispatch(setDaysLayout(daysLayoutVar))
    }
    function changeTitle(e){
        var daysLayoutVar =  dayLayout.map(el => el)
        daysLayoutVar[props.number] = {...daysLayoutVar[props.number] , title : e.target.value }
        dispatch(setDaysLayout(daysLayoutVar))
    }

    useEffect(() => {
        !SSR ? contentHTML = convertFromHTML('') : ''
        !SSR ? state = ContentState.createFromBlockArray(contentHTML.contentBlocks, contentHTML.entityMap) : ''
        !SSR ? content = JSON.stringify(convertToRaw(state)) : ''
    }, [])

    const onEditorChange = event => {
        const plainText = convertToHTML(event.getCurrentContent())
        var daysLayoutVar =  dayLayout.map(el => el)
        daysLayoutVar[props.number] = {...daysLayoutVar[props.number] , description : plainText }
        dispatch(setDaysLayout(daysLayoutVar))
    }
    return (
        <Grid container item spacing={3}>
            <Grid container item xs={12} sm={12} alignItems='center'>
            <Grid item xs={12} sm={12}>
                                <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                    Day {props.number + 1}
                                </Typography>
                            </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography fontWeight={400} variant='p' color={"primary.main"}>
                        What time would you start your day?
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TimePicker renderInput={(params) => <TextField required placeholder='HH:MM am/pm'
                        onChange={(newValue) => {
                          setStartTime(newValue)
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& .MuiOutlinedInput-input': { color: '#000' },
                                '& .MuiInputAdornment-root': {
                                    '& .MuiButtonBase-root': {
                                        '& .MuiSvgIcon-root': { color: 'button.main' }
                                    }
                                }
                            },
                            backgroundColor: '#FFF', borderRadius: '5px'
                        }} fullWidth {...params} />} />
                </Grid>
            </Grid>


            <Grid container item xs={12} sm={12} alignItems='center'>
                <Grid item xs={12} sm={6}>
                    <Typography fontWeight={400} variant='p' color={"primary.main"}>
                        Title for experience:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <StyledTextField onChange={e => changeTitle(e)} required fullWidth placeholder='Enter Place ' />
                </Grid>
            </Grid>

            <Grid container item xs={12} sm={12} alignItems='center'>
                <Grid item xs={12} sm={6}>
                    <Typography fontWeight={400} variant='p' color={"primary.main"}>
                        How long is your experience?
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
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
                        </FormControl>
                    </Box>

                </Grid>
            </Grid>


            <Grid container item xs={12} sm={12} spacing={2} alignItems='center'>
                <Grid item xs={12} sm={12}>
                    <Typography fontWeight={400} variant='p' color={"primary.main"}>
                        Long Description for trip (optional)
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <MUIRichTextEditor required defaultValue={content} onChange={onEditorChange} label="Start typing..." />
                </Grid>
            </Grid>

            <Grid container item xs={12} sm={12} spacing={2} alignItems='center'>
                <Grid item xs={12} sm={12}>
                    <Typography fontWeight={400} variant='p' color={"primary.main"}>
                        Add Images
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <DaysDropfile/>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default TourDay;