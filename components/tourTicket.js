import React from 'react';
import { Grid, Typography } from '@mui/material';
import StyledTextField from '../styledComponents/styledTextField';
import CustomizeTextArea from '../styledComponents/styledTextarea';
import { setTickets } from '../redux/addTour'
import { useDispatch, useSelector } from 'react-redux'
function TourTicket(props) {
    const dispatch = useDispatch()
    const tour = useSelector(state => state.addTour)

    function changeTicketName(e) {
        var ticketVar = tour.tickets.map(el => el)
        ticketVar[props.id - 1] = { ...ticketVar[props.id - 1], name: e.target.value }
        dispatch(setTickets(ticketVar))
    }

    function changeTicketDesc(e) {
        var ticketVar = tour.tickets.map(el => el)
        ticketVar[props.id - 1] = { ...ticketVar[props.id - 1], description: e.target.value }
        dispatch(setTickets(ticketVar))
    }

    return (
        <Grid container item justifyContent='center' spacing={2} xs={12}>
            <Grid item xs={10}>
                <Typography color={"primary.main"} variant='h6' fontWeight={500}> Ticket {props.id} </Typography>
            </Grid>
            <Grid container item xs={10}>
                <Grid item xs={12} sm={4}>
                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                        Ticket Name:
                    </Typography>
                </Grid>
                <Grid item xs={8} sm={8}>
                    <StyledTextField InputLabelProps={{ shrink: false }}
                        label="" onChange={(e) => { changeTicketName(e) }} required fullWidth placeholder='Enter Ticket Name' />
                </Grid>
            </Grid>
            <Grid container item xs={10}>
                <Grid item xs={12} sm={4}>
                    <Typography color={"primary.main"} variant='p' fontWeight={500}>
                        Ticket Description:

                    </Typography>
                </Grid>
                <Grid item xs={8} sm={8}>
                    <CustomizeTextArea onChange={(e) => changeTicketDesc(e)} minRows={3} required fullWidth placeholder='Enter the things like what pass include, location of use. ' />

                </Grid>
            </Grid>
        </Grid>

    )
}

export default TourTicket;