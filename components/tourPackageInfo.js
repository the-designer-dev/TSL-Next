import FormWrapper from '../styledComponents/formWrapper';
import StyledTextField from '../styledComponents/styledTextField';
import CustomizeTextArea from '../styledComponents/styledTextarea';
import { Grid, Typography } from '@mui/material';
import LocationPicker from './locationPicker';
import SelectLanguage from './selectLanguage';
import LanguageIcon from '@mui/icons-material/Language';
function TourPackageInfo() {
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


                    <Grid container item alignItems='center' justifyContent='center' spacing={1}>
                        <Grid container alignItems='center' item>
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontSize={18} fontWeight={500}>
                                    <LanguageIcon sx={{ fontSize: '24px' }} />What's tour guide primary language?

                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>What's tour guide primary language?

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
                    </Grid>

                    <Grid container item alignItems='center' spacing={1}>


                    </Grid>


                </Grid>

            </form>
        </FormWrapper>
    )
}

export default TourPackageInfo;