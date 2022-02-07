import { Box, Grid, Typography , Button } from '@mui/material';
import StyledTextField from '../styledComponents/styledTextField';
import { useSelector , useDispatch } from 'react-redux';
import Modal from '@mui/material/Modal';
import React , {useState} from 'react';
import { setAdultInfo, setChildInfo, setGuestSet } from '../redux/bookingSlice';
import { setAdult, setChild } from '../redux/hotelQuery';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  //   border: '2px solid background.secondary',
    backgroundColor:'background.main',
    boxShadow: 24,
    width:'260px',
    borderRadius:'12px',
    p :2
    
  };

function GuestsModal(props) {
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(true);
    const [adult , setStateAdult] = useState(parseInt(sessionStorage.getItem('adult')))
    const [child , setStateChild] = useState(parseInt(sessionStorage.getItem('child')))

    function submitDetails(e){
        e.preventDefault()
        var adultArr =[]
        var childArr =[]
        
        for (let index = 0; index < adult; index++) {
            adultArr.push({})
        }
        dispatch(setAdultInfo(adultArr))
        console.log(adult)
        for (let index = 0; index < child; index++) {
            childArr.push({})
        }
        dispatch(setChildInfo(childArr))
        dispatch(setAdult(adult))
        dispatch(setChild(child))
        sessionStorage.setItem('adult' , adult)
        sessionStorage.setItem('child' , child)
        dispatch(setGuestSet(true))
    }

    return (
      <div>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={(e) => submitDetails(e)}>
                <Grid container spacing={2}>
                    <Grid container item spacing={1} xs={12}>
                        <Grid item xs={12} sm={2}>
                            <Typography fontSize={14} color={'primary.main'} fontWeight={600} variant='p'>Adult:</Typography>
                        </Grid>
                        <Grid xs={12} sm={10} alignItems='center' spacing={2} direction='row' justifyContent='center' container item>
                            <Grid justifyContent='flex-end' alignContent='center' container item xs={4}> <Button onClick={() => {if(adult-1 >= 1){ setStateAdult(adult-1)}}} sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'40px !important'}}>-</Button></Grid> <Grid container item sx={{textAlign:'center'}} xs={4}> <StyledTextField  min={1} max={props.adultMax} value={adult} onChange={(e) => {if(e.target.value >0 && e.target.value <= props.adultMax){setStateAdult(e.target.value)}}}    id="outlined-name"  size='small' sx={{width:'100%'}} type='number' /></Grid> <Grid justifyContent='flex-start' alignContent='center' container item xs={4}> <Button onClick={() => {if(adult+1 <= props.adultMax){ setStateAdult(adult+1)}}}  sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'40px !important'}}>+</Button></Grid>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} xs={12}>
                        <Grid item xs={12} sm={2}>
                            <Typography fontSize={14} fontWeight={600} color={'primary.main'} variant='p'>Child:</Typography>
                        </Grid>
                        <Grid xs={12} sm={10} alignItems='center' spacing={2} direction='row' justifyContent='center' container item>
                            <Grid justifyContent='flex-end' alignContent='center' container item xs={4}> <Button onClick={() => {if(child-1 >= 0){ setStateChild(child-1)}}} sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'40px !important'}}>-</Button></Grid> <Grid container item sx={{textAlign:'center'}} xs={4}> <StyledTextField min={0} max={props.childMax} value={child} onChange={(e) => {if(e.target.value >0 && e.target.value <= props.childMax){setStateChild(e.target.value)}}} id="outlined-name"  size='small' sx={{width:'100%'}} type='number' /></Grid> <Grid justifyContent='flex-start' alignContent='center' container item xs={4}> <Button onClick={() => {if(child+1 <= props.childMax){ setStateChild(child+1)}}} sx={{ borderRadius:'100%' , backgroundColor:'transparent' , color:'button.main'  , border:'1px solid' , minWidth:'40px !important'}}>+</Button></Grid>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} xs={12}>
                        <Grid item xs={12}>
                            <Button type='submit'>Submit</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
          </Box>
        </Modal>
      </div>
    );
}

export default GuestsModal;