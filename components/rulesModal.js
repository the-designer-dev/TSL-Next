import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import StyledTextField from '../styledComponents/styledTextField';
import StyledButton from '../styledComponents/styledButton';
import { Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '320px',
  bgcolor: 'background.main',
  boxShadow: 24,
  p: 4,
  borderRadius:'10px'
};

export default function RulesModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <StyledButton onClick={handleOpen}>Add Rule</StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Grid container spacing={2}>
        <Grid container item spacing={2}>
            <Grid item xs={3} >
          <Typography sx={{color:'primary.main'}} variant='p'>Rule Name</Typography></Grid>
          <Grid item xs={8}>
          <StyledTextField fullWidth/></Grid>
          </Grid>
          <Grid container item spacing={2}>
              <Grid item xs={3}>
          <Typography sx={{color:'primary.main'}} variant='p'>Rule Description</Typography></Grid>
          <Grid item xs={8}>
          <StyledTextField fullWidth /></Grid>
          </Grid>
          <Grid sx={{margin:'10px 0px 0px 0px'}} container justifyContent='space-around' spacing={2}>
              <Grid item><StyledButton>Submit</StyledButton></Grid>
          </Grid>
        </Grid>
        </Box>
      </Modal>
    </div>
  );
}