import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddEventBox from './addEventBox';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth:'300px',
  backgroundColor:'background.main',
  boxShadow: 24,
  borderRadius:'12px',
  p:1};

export default function AddEventModal(props) {
  // console.log(props)
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        onBackdropClick={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <AddEventBox start={props.start}  end={props.end}  name={props.name}  refundableRates={props.refundableRates}  nonRefundableRates={props.nonRefundableRates}  quantity={props.quantity}  roomType ={props.roomType} handleClose={props.handleClose} range={props.range}/>
        </Box>
      </Modal>
    </div>
  );
}