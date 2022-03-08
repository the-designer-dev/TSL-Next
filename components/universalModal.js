import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import LoginBox from './loginBox';
import PropTypes from 'prop-types';




export default function UniversalModal({open, children, modalBackgroundColor}) {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth:'300px',
    backgroundColor:modalBackgroundColor,
    boxShadow: 24,
    borderRadius:'12px',
    padding:'20px'
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            
            {children}
        </Box>
      </Modal>
    </div>
  );
}

UniversalModal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.instanceOf(<></>),
  modalBackgroundColor: PropTypes.string.isRequired
}   