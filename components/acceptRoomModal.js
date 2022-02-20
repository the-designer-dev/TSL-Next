import { Box, Grid, Typography , Button } from '@mui/material';
import StyledTextField from '../styledComponents/styledTextField';
import Modal from '@mui/material/Modal';
import React , {useState} from 'react';
import axios from 'axios';
import { API_URL } from '../config';
import StyledButton from '../styledComponents/styledButton';
import RoomLottie from './lottie';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  //   border: '2px solid background.secondary',
    backgroundColor:'background.main',
    boxShadow: 24,
    width:'100%',
    maxWidth:'600px',
    borderRadius:'12px',
    p :2
    
  };

function AcceptRoomModal(props) {
    const [commission , setCommission] = useState(null)
    const [open , setOpen] = useState(false)
    function submitDetails(e){
        e.preventDefault()
        axios({
            method:'PUT',
            url:`${API_URL}/rooms/${props.room.id}`,
            data:{commission: commission , approved:true}
        }).then(res => {props.onClose()
            setOpen(true) })
        
    }

    return (
      <div>
        <RoomLottie open={open} onClose={() => setOpen(false)} />
        <Modal
          open={props.open}
          onClose={props.onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={(e) => submitDetails(e)}>
                <Grid container spacing={2}>
                    <Grid container item spacing={1} xs={12}>
                        <Grid item xs={12} >
                            <Typography fontSize={14} color={'primary.main'} fontWeight={600} variant='h6'>Enter the commission on room:</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} xs={12} sm ={6}>
                        <Grid item xs={12} sm={6}>
                            <Typography fontSize={14} fontWeight={600} color={'primary.main'} variant='p'>Room Name:</Typography>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                        <Typography fontSize={14} fontWeight={600} color={'primary.main'} variant='p'>{props.room.roomname}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} xs={12} sm ={6}>
                        <Grid item xs={12} sm={6}>
                            <Typography fontSize={14} fontWeight={600} color={'primary.main'} variant='p'>Hotel Name:</Typography>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                        <Typography fontSize={14} fontWeight={600} color={'primary.main'} variant='p'>{props.room.hotelname}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} xs={12} sm ={6}>
                        <Grid item xs={12} sm={6}>
                            <Typography fontSize={14} fontWeight={600} color={'primary.main'} variant='p'>Refunable Price:</Typography>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                        <Typography fontSize={14} fontWeight={600} color={'primary.main'} variant='p'>{props.room.refundableprice}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} xs={12} sm ={6}>
                        <Grid item xs={12} sm={6}>
                            <Typography fontSize={14} fontWeight={600} color={'primary.main'} variant='p'>Non-refundable Price:</Typography>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                        <Typography fontSize={14} fontWeight={600} color={'primary.main'} variant='p'>{props.room.nonrefundableprice}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} xs={12} >
                        <Grid item xs={12} sm={3}>
                            <Typography fontSize={14} fontWeight={600} color={'primary.main'} variant='p'>Commission:</Typography>
                        </Grid>
                        <Grid xs={12} sm={9} item>
                        <StyledTextField fullWidth type={'number'} max={'100'} min={'0'} value={commission} onChange={(e) => {e.target.value>=0 && e.target.value <=100?setCommission(e.target.value):''}} placeholder='Enter the precentage commission' />
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} xs={12}>
                        <Grid item xs={12}>
                            <StyledButton fullWidth type='submit'>Submit</StyledButton>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
          </Box>
        </Modal>
      </div>
    );
}

export default AcceptRoomModal;