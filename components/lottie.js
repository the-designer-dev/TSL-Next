import React, { useEffect } from "react";
// import Lottie from "react-lottie";
import animationData from "./room.json";
import { Box, Grid, Typography , Button } from '@mui/material';
import Modal from '@mui/material/Modal';

function RoomLottie(props) {

    useEffect(() => {
        const timer = setTimeout(() => {
            props.onClose()
          }, 9000);
          return () => clearTimeout(timer);
    } , [props.open])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      //   border: '2px solid background.secondary',
        backgroundColor:'background.main',
        boxShadow: 24,
        width:'350px',
        borderRadius:'12px',
        p :2
        
      };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Modal
    disableBackdropClick 
    open={props.open}
    onClose={props.onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
     <Box sx={style}> 
     <Grid container>
         <Grid sx={{textAlign:'center'}} item xs={12}>
             <Typography color={'primary.main'} variant="h6">Room Approved</Typography>
         </Grid>
         <Grid item xs={12}>
  {/* <Lottie options={defaultOptions} height={300} width={300} /> */}
  </Grid>
  </Grid>
  </Box>
  </Modal>
  )
}

export default RoomLottie;