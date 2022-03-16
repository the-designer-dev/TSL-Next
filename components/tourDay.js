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
import dynamic from 'next/dynamic';
import { convertToRaw, convertFromHTML, ContentState } from 'draft-js';
import { convertToHTML } from 'draft-convert'; import { setName, setCity, setAddress, setDescription } from '../redux/addHotel'
import { useDispatch, useSelector } from 'react-redux';
import Dropfile from './dropzone';


const MUIRichTextEditor = dynamic(() => import('mui-rte'), { ssr: false });
function TourDay() {
    const [duration, setDuration] = useState('');
    const dispatch = useDispatch();
    const handleChange = (event) => {
        setDuration(event.target.value);
    };
    var content;
    const SSR = typeof window === 'undefined'
    var contentHTML;
    var state;
    useEffect(() => {
        !SSR ? contentHTML = convertFromHTML('') : ''
        !SSR ? state = ContentState.createFromBlockArray(contentHTML.contentBlocks, contentHTML.entityMap) : ''
        !SSR ? content = JSON.stringify(convertToRaw(state)) : ''
    }, [])
    const onEditorChange = event => {
        const plainText = convertToHTML(event.getCurrentContent())
        dispatch(setDescription(plainText))
    }
    return (
        <Grid container item spacing={3}>
            <Grid container item xs={12} sm={12} alignItems='center'>
                <Grid item xs={12} sm={6}>
                    <Typography fontWeight={400} variant='p' color={"primary.main"}>
                        What time would you start your day?
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TimePicker renderInput={(params) => <TextField required placeholder='HH:MM am/pm'
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
                    <StyledTextField required fullWidth placeholder='Enter Place ' />
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
                            <InputLabel id="demo-simple-select-label">Duration</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={duration}
                                label="Duration"
                                onChange={handleChange}
                            >
                                <MenuItem value={'1'}>1</MenuItem>
                                <MenuItem value={'2'}>2</MenuItem>
                                <MenuItem value={'3'}>3</MenuItem>
                                <MenuItem value={'4'}>4</MenuItem>
                                <MenuItem value={'5'}>5</MenuItem>
                            </Select>
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
                    <Dropfile />
                </Grid>
            </Grid>
        </Grid >
    )
}

export default TourDay;