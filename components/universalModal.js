import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import LoginBox from './loginBox';
import PropTypes from 'prop-types';
import { useRouter } from "next/router";




export default function UniversalModal({ open, setOpen, children, modalBackgroundColor, redirectURL }) {
  const router = useRouter();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '300px',
    backgroundColor: modalBackgroundColor ? modalBackgroundColor : '#fff',
    boxShadow: 24,
    borderRadius: '12px',
    padding: '20px'
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          redirectURL ? router.push(redirectURL) : "";
        }}
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