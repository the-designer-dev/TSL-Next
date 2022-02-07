import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import LoginBox from './loginBox';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth:'300px',
  backgroundColor:'background.secondary',
  boxShadow: 24,
  borderRadius:'12px'
  
};

export default function LoginModal(props) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <LoginBox/>
        </Box>
      </Modal>
    </div>
  );
}