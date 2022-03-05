import React from 'react';
import { Box, Grid, Typography, Checkbox } from '@mui/material'
import PropTypes from 'prop-types';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

function RoomDetailCard({room_name, room_desc, people_capacity, bed_capacity, bed_types}) {

    return (
        <Box sx={{ backgroundColor: 'background.main', width: '100%', height: '100%', borderRadius: '10px', padding: '40px 30px', margin: '0px 0px 30px 0px' }}>
            <Grid container item spacing={2}>
                <Grid item xs={12}>
                    <Typography fontWeight={600} variant='h6'>Room Details</Typography>
                </Grid>

                <Grid container item alignItems='center'>
                    <Grid item xs={4}>
                        <Typography fontWeight={600} variant='h6'>Room Name :</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography fontWeight={400} variant='p'>{room_name}</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontWeight={400} variant='p'><LocationOnOutlinedIcon />
                    {room_desc}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontWeight={400} variant='p'>Total Capacity: {people_capacity} people</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontWeight={400} variant='p'>Number of Beds : {bed_capacity}</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography fontWeight={400} variant='p'>Type of Beds : {bed_types ? bed_types.map((bed, ind) => {
                        return (
                            <div key={ind}>
                                <p>{bed.bedValue} {bed.bedName}</p>
                            </div>
                        )
                    }) : ""}</Typography>
                </Grid>


            </Grid>


        </Box >
    );
}

export default RoomDetailCard;

RoomDetailCard.propTypes = {
    room_name: PropTypes.string.isRequired,
    room_desc: PropTypes.string.isRequired,
    people_capacity: PropTypes.number.isRequired,
    bed_capacity: PropTypes.number.isRequired,
    bed_types: PropTypes.arrayOf(PropTypes.shape({
        bedName: PropTypes.string,
        bedValue: PropTypes.number,
      }))

}