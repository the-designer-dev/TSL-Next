import { React, useState } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';

import image1 from '../assets/tour1.png'
import image2 from '../assets/tour2.png'
import image3 from '../assets/tour3.png'
import image4 from '../assets/tour4.png'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BedIcon from '@mui/icons-material/Bed';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import ReviewDiv from './reviewDiv';
import TourCard from './tourCard';
function TourImageCollage() {
    const [guest, setGuest] = useState(0);
    const handleChange = (event) => {
        setGuest(event.target.value);
    };

    return (
        <Grid container spacing={2}  >
            <Grid container xs={12} item alignItems='start'>
                <Grid item xs={10} sm={6}>
                    <img src={image1.src} style={{ width: "100%" }} />
                </Grid>
                <Grid container item xs={6} sm={2}  >
                    <Grid item xs={12}>
                        <img src={image2.src} style={{ width: "100%" }} />
                    </Grid>
                    <Grid item xs={12}>
                        <img src={image3.src} style={{ width: "100%" }} />
                    </Grid>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <img src={image4.src} style={{ width: "100%" }} />
                </Grid>
            </Grid>
            <Grid container xs={12} sm={12} item alignItems='start'>
                <Grid container item xs={12} md={8} sm={12} spacing={2}>
                    <Grid item xs={12}>
                        <Typography color={"primary.main"} variant='h6' >
                            Explore Hunza valley mountains and village on a bike
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography color={"primary.main"} variant='p' fontWeight={600} fontSize={14} >
                            <StarIcon sx={{ fontSize: '16px', marginRight: '10px', color: '#2AB572' }} />
                            4.5 (16)
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <a href='#' sx={{ color: "primary.main" }}>Hunza Valley</a>
                    </Grid>
                    <Grid item xs={10}>
                        <hr />
                    </Grid>




                    <Grid container item xs={12}>
                        <Typography color={"primary.main"} variant='h6' >
                            Adventure By Aslam Foundations
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} sm={12} spacing={2}>
                        <Grid container item xs={12} md={6} sm={12} alignItems='center'>

                            <Grid item xs={2} md={2}>
                                <AccessTimeIcon sx={{ fontSize: '32px', marginRight: '10px', color: '#2AB572' }} />
                            </Grid>
                            <Grid item xs={10} md={10}>
                                <Typography color={"primary.main"} variant='p' fontWeight={600} fontSize={16} >
                                    3 Days
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} sm={6} alignItems='center'>
                            <Grid item xs={2}>
                                <ChatBubbleOutlineIcon sx={{ fontSize: '32px', marginRight: '10px', color: '#2AB572' }} />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography color={"primary.main"} variant='p' fontWeight={600} fontSize={16} >

                                    English,Urdu
                                </Typography>

                            </Grid>
                        </Grid>

                        <Grid container item xs={12} sm={6} alignItems='center'>
                            <Grid item xs={2}>
                                <AssignmentTurnedInIcon sx={{ fontSize: '32px', marginRight: '10px', color: '#2AB572' }} />
                            </Grid>
                            <Grid item xs={10}>

                                <Typography color={"primary.main"} variant='p' fontWeight={600} fontSize={16} >
                                    Includes food & drinks,
                                    transportation, equipment  </Typography>
                            </Grid>

                        </Grid>
                        <Grid container item xs={12} sm={6} alignItems='center'>
                            <Grid item xs={2}>
                                <PeopleAltIcon sx={{ fontSize: '32px', marginRight: '10px', color: '#2AB572' }} />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography color={"primary.main"} variant='p' fontWeight={600} fontSize={16} >
                                    1- 5 persons, Age 2+
                                </Typography>
                                <br />
                                <Typography color={"primary.main"} variant='p' fontWeight={400} fontSize={12}>
                                    Parents can bring kids under 2 years
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10}>
                        <hr />
                    </Grid>


                    <Grid container item xs={12}>
                        <Typography color={"primary.main"} variant='h6' >
                            What you'll do
                        </Typography>
                    </Grid>
                    <Grid container item md={10} xs={12}>
                        <Typography color={"primary.main"} variant='p' >
                            It's package that takes you for about 3 days around the best part of the Hunza Valley
                            Mountain, with its stunning views & Mountain villages and valleys . You will be staying
                            in the best Riads / Hotels and Guest houses that are owned by local people in the
                            villages , that has shared facilities but with local traditions. It is suitable for individuals
                            and Families with children.The trek listed can be changed, extended or shortened to
                            meet your requirements. Treks can start on any day to suit your needs open
                            bookings...

                        </Typography>
                    </Grid>
                    <Grid item md={10} xs={12}>
                        <hr />
                    </Grid>


                    <Grid container item xs={12}>
                        <Typography color={"primary.main"} variant='h6' >
                            What's Included
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} s>
                        <Grid item xs={5} md={3} sm={6} sx={{ border: '1px solid white', padding: '10px', borderRadius: '10px', margin: '10px' }}>
                            <Grid item xs={12}>
                                <BedIcon sx={{ fontSize: '32px', marginRight: '10px', color: '#2AB572' }} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                    Accomodations
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontSize={12} fontWeight={300}>
                                    3 nights in a local hostel
                                    with traditional experience
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={5} md={3} sm={6} sx={{ border: '1px solid white', padding: '10px', borderRadius: '10px', margin: '10px' }}>
                            <Grid item xs={12}>
                                <FastfoodIcon sx={{ fontSize: '32px', marginRight: '10px', color: '#2AB572' }} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                    Food & Drink
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontSize={12} fontWeight={300}>
                                    4 lunches, 3 breakfasts, 3
                                    dinners, dessert, snacks,
                                    water, tea
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={5} md={3} sm={6} sx={{ border: '1px solid white', padding: '10px', borderRadius: '10px', margin: '10px' }}>
                            <Grid item xs={12}>
                                <HomeRepairServiceIcon sx={{ fontSize: '32px', marginRight: '10px', color: '#2AB572' }} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                    Equipments
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontSize={12} fontWeight={300}>
                                    Drone with camera for
                                    photography
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={5} md={3} sm={6} sx={{ border: '1px solid white', padding: '10px', borderRadius: '10px', margin: '10px' }}>
                            <Grid item xs={12}>
                                <DirectionsCarIcon sx={{ fontSize: '32px', marginRight: '10px', color: '#2AB572' }} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                    Transport
                                </Typography>
                            </Grid>
                            <Grid container item xs={12}>
                                <Grid item xs={8}>
                                    <Typography color={"primary.main"} variant='p' fontSize={12} fontWeight={600}>
                                        Sweden
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography color={"primary.main"} variant='p' fontSize={12} fontWeight={600}>
                                        Rs. 6000
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography color={"primary.main"} variant='p' fontSize={10} fontWeight={600}>
                                        Airconditioned - Driver
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12}>
                                <Grid item xs={8}>
                                    <Typography color={"primary.main"} variant='p' fontSize={12} fontWeight={600}>
                                        Coaster
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography color={"primary.main"} variant='p' fontSize={12} fontWeight={600}>
                                        Rs. 1000
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography color={"primary.main"} variant='p' fontSize={10} fontWeight={600}>
                                        Airconditioned - Driver
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5} md={3} sm={6} sx={{ border: '1px solid white', padding: '10px', borderRadius: '10px', margin: '10px' }}>
                            <Grid item xs={12}>
                                <LocalActivityIcon sx={{ fontSize: '32px', marginRight: '10px', color: '#2AB572' }} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                    Tickets
                                </Typography>
                            </Grid>

                            <Grid container item xs={12}>
                                <Grid item xs={8}>
                                    <Typography color={"primary.main"} variant='p' fontSize={12} fontWeight={600}>
                                        VIP
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography color={"primary.main"} variant='p' fontSize={12} fontWeight={600}>
                                        Rs. 3000
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography color={"primary.main"} variant='p' fontSize={10} fontWeight={600}>
                                        Includes access to private drone
                                        photography, bike suit and...

                                    </Typography>
                                </Grid>

                            </Grid>
                            <Grid container item xs={12}>
                                <Grid item xs={8}>
                                    <Typography color={"primary.main"} variant='p' fontSize={12} fontWeight={600}>
                                        Standard
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography color={"primary.main"} variant='p' fontSize={12} fontWeight={600}>
                                        Rs. 1000
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography color={"primary.main"} variant='p' fontSize={10} fontWeight={600}>
                                        Includes basic group drone
                                        photography.

                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={10}>
                        <hr />
                    </Grid>


                    <Grid container item xs={12}>
                        <Typography color={"primary.main"} variant='h6' >
                            Your itinerary
                        </Typography>
                    </Grid>

                    <Grid container item spacing={2}>
                        <Grid item xs={12}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500} >
                                Day 1
                            </Typography>
                        </Grid>
                        <Grid container item xs={12} md={10} alignItems='stretch'>

                            <Grid item xs={12} md={4} sm={12}>
                                <Image src={image1} layout="responsive" />
                            </Grid>

                            <Grid container item sm={8} xs={12} sx={{
                                padding: '10px',
                                borderRight: '1px solid white',
                                borderBottom: '1px solid white',
                                borderTop: '1px solid white'
                            }}>
                                <Grid item xs={12}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500} >
                                        Welcome to Hunza Valley
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography color={"primary.main"} variant='p' fontSize={14} fontWeight={300} >
                                        After the scenic drive from Karachi to Hunza in a
                                        classic car, we'll explore the valleys & my Village
                                        on bike

                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button sx={{ backgroundColor: 'transparent', color: 'white', padding: '7px 15px', border: '1px solid white' }}  >Show More</Button>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container item spacing={2}>
                        <Grid item xs={12}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500} >
                                Day 2
                            </Typography>
                        </Grid>
                        <Grid container item xs={12} md={10} alignItems='stretch'>

                            <Grid item xs={12} md={4} sm={12}>
                                <Image src={image1} layout="responsive" />
                            </Grid>

                            <Grid container item sm={8} xs={12} sx={{
                                padding: '10px',
                                borderRight: '1px solid white',
                                borderBottom: '1px solid white',
                                borderTop: '1px solid white'
                            }}>
                                <Grid item xs={12}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500} >
                                        Welcome to Hunza Valley
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography color={"primary.main"} variant='p' fontSize={14} fontWeight={300} >
                                        After the scenic drive from Karachi to Hunza in a
                                        classic car, we'll explore the valleys & my Village
                                        on bike

                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button sx={{ backgroundColor: 'transparent', color: 'white', padding: '7px 15px', border: '1px solid white' }}  >Show More</Button>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <hr />
                    </Grid>

                </Grid>


                <Grid container item xs={12} md={4} sm={12} spacing={1} sx={{ border: '1px solid white', padding: '0px 10px 10px 10px', borderRadius: '10px' }}>
                    <Grid item xs={12}>
                        <Typography color={"primary.main"} variant='p' fontWeight={600}  >
                            From Rs. 1000 <sub>/person</sub>
                        </Typography>
                    </Grid>
                    <Grid container item spacing={2}>
                        <Grid item xs={6}>
                            <Box sx={{ minWidth: 80 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Guest</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Guests"
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
                        <Grid item xs={6}>
                            <Box sx={{ minWidth: 80 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Guest</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Guests"
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
                    <Grid container item spacing={1} justifyContent='space-between' alignItems='center'>
                        <Grid item xs={8}>
                            <Grid xs={12}>
                                <Typography color={"primary.main"} variant='p' fontWeight={600}  >
                                    Thu, Oct 1
                                </Typography>
                            </Grid>
                            <Grid xs={12}>
                                <Typography color={"primary.main"} variant='p' fontWeight={600}  >
                                    8:00 AM - 4:30 PM

                                </Typography>
                            </Grid>
                            <Grid xs={12}>
                                <Typography color={"primary.main"} variant='p' fontWeight={600}  >
                                    Join 3 other guests
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} spacing={2}>
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontWeight={300} fontSize={12}  >
                                    Rs. 1000 (Adult)
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontWeight={300} fontSize={12}  >
                                    Rs. 800 (Child)
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontWeight={300} fontSize={12}  >
                                    Rs. 100 (Infant)
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button sx={{ backgroundColor: 'button.main', color: 'primary.main', boxShadow: '0px 0px 56px 18px rgba(0,0,0,0.25)', padding: '2px 20px' }}  >Choose</Button>
                            </Grid>

                        </Grid>
                        <Grid item xs={12}>
                            <hr />
                        </Grid>
                        <Grid item xs={8}>
                            <Grid xs={12}>
                                <Typography color={"primary.main"} variant='p' fontWeight={600}  >
                                    Thu, Oct 1
                                </Typography>
                            </Grid>
                            <Grid xs={12}>
                                <Typography color={"primary.main"} variant='p' fontWeight={600}  >
                                    8:00 AM - 4:30 PM

                                </Typography>
                            </Grid>
                            <Grid xs={12}>
                                <Typography color={"primary.main"} variant='p' fontWeight={600}  >
                                    Join 3 other guests
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} spacing={2}>
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontWeight={300} fontSize={12}  >
                                    Rs. 1000 (Adult)
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontWeight={300} fontSize={12}  >
                                    Rs. 800 (Child)
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color={"primary.main"} variant='p' fontWeight={300} fontSize={12}  >
                                    Rs. 100 (Infant)
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button sx={{ backgroundColor: 'button.main', color: 'primary.main', boxShadow: '0px 0px 56px 18px rgba(0,0,0,0.25)', padding: '2px 20px' }}  >Choose</Button>
                            </Grid>

                        </Grid>
                        <Grid item xs={12}>
                            <hr />
                        </Grid>
                    </Grid>


                </Grid>




                <Grid container item xs={12} spacing={3}>
                    <Grid container item xs={12} justifyContent='left' >
                        <Grid item xs={1}>
                            <StarIcon sx={{ fontSize: '32px', color: '#2AB572' }} />
                        </Grid>
                        <Grid item xs={11}>
                            <Typography color={"primary.main"} variant='h6' >
                                4.5 (16 reviews)
                            </Typography>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} md={10} sm={5}>
                        <ReviewDiv />
                    </Grid>
                    <Grid item xs={12} md={10} sm={5}>
                        <ReviewDiv />
                    </Grid>
                    <Grid item xs={12} md={10} sm={5}>
                        <ReviewDiv />
                    </Grid>
                    <Grid item xs={12} md={10} sm={5}>
                        <ReviewDiv />
                    </Grid>
                    <Grid item xs={12} md={10} sm={5}>
                        <ReviewDiv />
                    </Grid>
                    <Grid item xs={12} md={10} sm={5}>
                        <ReviewDiv />
                    </Grid>

                    <Grid item xs={12}>
                        <Button sx={{ backgroundColor: 'transparent', color: 'white', padding: '10px 40px', border: '1px solid white' }}  >Show All Reviews</Button>

                    </Grid>
                    <Grid item xs={12}>
                        <hr />

                    </Grid>

                </Grid>



                <Grid container item xs={12} spacing={3}>


                    <Grid item xs={12}>
                        <Typography color={"primary.main"} variant='h6' >
                            Things to Know
                        </Typography>
                    </Grid>


                    <Grid item xs={12} md={10} sm={5}>
                        <Grid item xs={12}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500} >
                                Cancellation Policy
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color={"primary.main"} variant='p' fontWeight={300} fontSize={14} >
                                Any Booking can be canceled and fully refunded within
                                24 hours of purchase
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <a href='#'>Learn More</a>
                        </Grid>
                    </Grid>


                    <Grid item xs={12} md={10} sm={5}>
                        <Grid item xs={12}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500} >
                                Guest Requirements
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color={"primary.main"} variant='p' fontWeight={300} fontSize={14} >
                                From one to group of five guests of 2+ ages can attend.
                                Parents can bring kids under 2 years
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <a href='#'>Learn More</a>
                        </Grid>
                    </Grid>


                    <Grid item xs={12} md={10} sm={5}>
                        <Grid item xs={12}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500} >
                                Admission Rules
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color={"primary.main"} variant='p' fontWeight={300} fontSize={14} >
                                Be prepared for a bumpy ride, but totally worth it!
                                You should be able to ride bike. we won't take the
                                dangerous so don't worry about the kids, we will have
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <a href='#'>Learn More</a>
                        </Grid>
                    </Grid>


                    <Grid item xs={12} md={10} sm={5}>
                        <Grid item xs={12}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500} >
                                What to bring
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color={"primary.main"} variant='p' fontWeight={300} fontSize={14} >
                                Comfortable clothing that might get mucky
                                Sensible shoes to ride bike and hike a mountain

                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <a href='#'>Learn More</a>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <hr />

                    </Grid>

                </Grid>



                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12}>
                        <Typography color={"primary.main"} variant='h6' >
                            Similar Adventures
                        </Typography>
                    </Grid>

                    <Grid item md={3} xs={6}>
                        <TourCard />
                    </Grid>

                    <Grid item md={3} xs={6}>
                        <TourCard />
                    </Grid>

                    <Grid item md={3} xs={6}>
                        <TourCard />
                    </Grid>

                    <Grid item md={3} xs={6}>
                        <TourCard />
                    </Grid>
                </Grid>


            </Grid>

        </Grid >
    )
}

export default TourImageCollage;