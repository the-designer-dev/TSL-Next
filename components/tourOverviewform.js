import React from 'react'
import { Grid, Button, Typography } from '@mui/material';
import FormWrapper from '../styledComponents/formWrapper';
import PeopleIcon from '@mui/icons-material/People';
export default function TourOverviewForm() {
    return (
        <FormWrapper>
            <form>
                <Grid item container spacing={3}>
                    <Grid item xs={12}>
                        <Typography color={"primary.main"} variant='h6'>
                            Package Overview
                        </Typography>
                    </Grid>

                    <Grid container item xs={12} justifyContent='center' >
                        <Grid item xs={12} sm={3}>
                            <Typography color={"primary.main"} variant='p' fontWeight={600}>
                                Package Name
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Typography color={"primary.main"} variant='p' fontWeight={400}>
                                Hunza valley Tour
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container item xs={12} justifyContent='center' >
                        <Grid item xs={12} sm={3}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                City
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Typography color={"primary.main"} variant='p' fontWeight={400}>
                                Karachi
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container item xs={12} justifyContent='center' >
                        <Grid item xs={12} sm={3}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                Pickup Point
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Typography color={"primary.main"} variant='p' fontWeight={400}>
                                Khalid Commercial Area Phase 7 Ext Karachi, 75500,
                                Karachi City, Sindh, Pakistan
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container item xs={12} justifyContent='center' >
                        <Grid item xs={12} sm={3}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                Destination
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Typography color={"primary.main"} variant='p' fontWeight={400}>
                                Hunza Valley Tour, Pakistan
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container item xs={12} justifyContent='center' >
                        <Grid item xs={12} sm={3}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                Language
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Typography color={"primary.main"} variant='p' fontWeight={400}>
                                English
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container item xs={12} justifyContent='center' >
                        <Grid item xs={12} sm={3}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                Guests
                            </Typography>
                        </Grid>
                        <Grid container item xs={12} sm={8} spacing={1}>
                            <Grid container item xs={12} alignItems='center'>
                                <Grid item xs={2} sm={1}>
                                    <PeopleIcon sx={{ fontSize: '28px', marginRight: '10px', color: '#2AB572' }} />

                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        Maximum Allowed
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={400}>
                                        4 Guests
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} alignItems='center'>
                                <Grid item xs={1}>

                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        Minimum Age
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={400}>
                                        4 year old
                                    </Typography>
                                </Grid>
                            </Grid>


                            <Grid container item xs={12} alignItems='center'>
                                <Grid item xs={1}>

                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        Parents can bring kids under 2 years
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid container item xs={12} justifyContent='center' >
                        <Grid item xs={3}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                Event Validity
                            </Typography>
                        </Grid>
                        <Grid container item xs={8} spacing={2}>
                            <Grid container item xs={12} alignItems='center'>

                                <Grid item xs={5}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        Date Range Available:
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        01/14/2020 - 01/25/2020
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} alignItems='center'>

                                <Grid item xs={5}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        Days Available:
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        Mon, Tue, Wed, Thu, Fri
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container item xs={12} justifyContent='center' >
                        <Grid item xs={3}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                Duration
                            </Typography>
                        </Grid>
                        <Grid container item xs={8} spacing={2}>
                            <Grid container item xs={12} alignItems='center'>

                                <Grid item xs={5}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        How long is the tour?

                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        2 Days
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} alignItems='center'>

                                <Grid item xs={5}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        How long is your experience?
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        4.5 Hours
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container item xs={12} justifyContent='center' >
                        <Grid item xs={3}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                Pricing
                            </Typography>
                        </Grid>
                        <Grid container item xs={8} spacing={1}>
                            <Grid container item xs={12} alignItems='center'>

                                <Grid item xs={5}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        Rates (Adult):
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        PKR 3000 Per Person
                                    </Typography>
                                </Grid>
                            </Grid>


                        </Grid>
                    </Grid>


                    <Grid container item xs={12} spacing={2} justifyContent='center' >
                        <Grid item xs={3}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                Transport
                            </Typography>
                        </Grid>
                        <Grid container item xs={8} spacing={1}>
                            <Grid container item xs={12} spacing={2} alignItems='center'>
                                <Grid item xs={12}>
                                    Vehicle 1
                                </Grid>
                                <Grid container item xs={12}>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Car Type
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            SUV
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12}>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Does it have air-conditioning?
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Yes
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12}>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Does it include driver?
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Yes
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12}>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Driver primary language

                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            English
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12}>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Name
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Toyota Vitz 2016
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12}>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Vehicle Price
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>

                                            PKR
                                            3000
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12}>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Max Capacity
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            4 People
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button sx={{ backgroundColor: 'transparent', color: 'white', padding: '7px 15px', border: '1px solid white' }}  >View Photos</Button>

                                </Grid>
                            </Grid>


                        </Grid>

                        <Grid item xs={3}>

                        </Grid>
                        <Grid container item xs={8} spacing={1}>
                            <Grid container item xs={12} spacing={2} alignItems='center'>
                                <Grid item xs={12}>
                                    Vehicle 1
                                </Grid>
                                <Grid container item xs={12}>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Car Type
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            SUV
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12}>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Does it have air-conditioning?
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Yes
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12}>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Does it include driver?
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Yes
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12}>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Driver primary language

                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            English
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12}>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Name
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Toyota Vitz 2016
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12}>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Vehicle Price
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>

                                            PKR
                                            3000
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12}>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            Max Capacity
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                            4 People
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button sx={{ backgroundColor: 'transparent', color: 'white', padding: '7px 15px', border: '1px solid white' }}  >View Photos</Button>

                                </Grid>
                            </Grid>


                        </Grid>

                    </Grid>


                    <Grid container item xs={12} justifyContent='center' >
                        <Grid item xs={3}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                Ticket
                            </Typography>
                        </Grid>
                        <Grid container item xs={8} spacing={2}>
                            <Grid container item xs={12} alignItems='center'>

                                <Grid item xs={5}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        Ticket Name
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        Central Park
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} alignItems='start'>

                                <Grid item xs={5}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        Ticket Address
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={400}>
                                        Khalid Commercial Area Phase 7 Ext Karachi,
                                        75500, Karachi City, Sindh, Pakistan
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} alignItems='start'>

                                <Grid item xs={5}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        Ticket Price
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        PKR 3000 Standard
                                    </Typography>
                                </Grid>
                            </Grid>


                        </Grid>
                    </Grid>




                    <Grid container item xs={12} justifyContent='center' >
                        <Grid item xs={3}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                Day 1
                            </Typography>
                        </Grid>
                        <Grid container item xs={8} spacing={2}>
                            <Grid container item xs={12} alignItems='center'>

                                <Grid item xs={5}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        Day Starting Time
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        7:00 AM
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} alignItems='start'>

                                <Grid item xs={5}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        Day Title
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={400}>
                                        Central Park
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} alignItems='start'>

                                <Grid item xs={5}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={400}>
                                        Description
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={400}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a autem,
                                        nisi nihil eum laudantium facere recusandae unde
                                        ipsam dicta ea dolor cum ab explicabo modi, voluptate odio beatae quaerat?
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button sx={{ backgroundColor: 'transparent', color: 'white', padding: '7px 15px', border: '1px solid white' }}  >View Photos</Button>

                                </Grid>
                            </Grid>


                        </Grid>
                    </Grid>

                    <Grid container item xs={12} justifyContent='center' >
                        <Grid item xs={3}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                Day 2
                            </Typography>
                        </Grid>
                        <Grid container item xs={8} spacing={2}>
                            <Grid container item xs={12} alignItems='center'>

                                <Grid item xs={5}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        Day Starting Time
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        7:00 AM
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} alignItems='start'>

                                <Grid item xs={5}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        Day Title
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={400}>
                                        Central Park
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} alignItems='start'>

                                <Grid item xs={5}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={400}>
                                        Description
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={400}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a autem,
                                        nisi nihil eum laudantium facere recusandae unde
                                        ipsam dicta ea dolor cum ab explicabo modi, voluptate odio beatae quaerat?
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button sx={{ backgroundColor: 'transparent', color: 'white', padding: '7px 15px', border: '1px solid white' }}  >View Photos</Button>

                                </Grid>
                            </Grid>


                        </Grid>
                    </Grid>

                    <Grid container item xs={12} justifyContent='center' alignItems="start">
                        <Grid item xs={3}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                What guests should bring
                            </Typography>
                        </Grid>
                        <Grid container item xs={8} spacing={1}>
                            <Grid container item xs={12} alignItems='center'>

                                <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                    1. Camping Tent
                                </Typography>

                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container item xs={12} justifyContent='center' alignItems="start" >
                        <Grid item xs={3}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                What will you provide?
                            </Typography>
                        </Grid>
                        <Grid container item xs={8} spacing={1}>
                            <Grid container item xs={12} alignItems='center'>
                                <Grid item xs={3}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        1. Steak
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                        Food & Drink
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container item xs={12} justifyContent='center' alignItems="start" >
                        <Grid item xs={3}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                Refund Policy
                            </Typography>
                        </Grid>
                        <Grid container item xs={8} spacing={1}>
                            <Grid container item xs={12} alignItems='center'>
                                <Grid item xs={12}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={400}>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                                        clita kasd gubergren.
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container item xs={12} justifyContent='center' alignItems="start" >
                        <Grid item xs={3}>
                            <Typography color={"primary.main"} variant='p' fontWeight={500}>
                                Admission Rules
                            </Typography>
                        </Grid>
                        <Grid container item xs={8} spacing={1}>
                            <Grid container item xs={12} alignItems='center'>
                                <Grid item xs={12}>
                                    <Typography color={"primary.main"} variant='p' fontWeight={400}>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                                        clita kasd gubergren.
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>



                </Grid>
            </form>
        </FormWrapper>
    )
}