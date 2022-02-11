import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React , {useState} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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

export default function SelectEventModal(props) {
    const matches = useMediaQuery("(min-width:370px)");
    const [formats, setFormats] = useState(null);
    const handleFormat = (event, newFormats) => {
    console.log(newFormats)
    if(newFormats !== null){
    setFormats(newFormats)
    if(newFormats === 'dragging'){props.setSelectable(true)}
    else{
        props.setNewDate()
        props.secondModal()
        props.setSelectable(false)} }
    else{
        if(formats === 'dragging'){props.setSelectable(true)}
    else{
        props.setNewDate()
        props.secondModal()
        props.setSelectable(false)}
    }
    props.handleClose()};

  return (
      <Modal
        open={props.open}
        onClose={props.handleClose}
        onBackdropClick={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}> 
        <ToggleButtonGroup
        fullWidth
        exclusive
    value={formats}
    onChange={handleFormat}
    orientation={`${matches ? `horizontal` : `vertical`}`}
    aria-label="text formatting"
    >
    <ToggleButton   sx={{'&.MuiToggleButton-root':{'&.Mui-selected':{backgroundColor:'button.main'}}}}  value="dragging" aria-label="bold">
        <Typography variant='p'>Add by dragging on calendar</Typography>
    </ToggleButton>
    <ToggleButton  sx={{'&.MuiToggleButton-root':{'&.Mui-selected':{backgroundColor:'button.main'}}}} value="manually" aria-label="italic">
    <Typography variant='p'>Add by selecting dates manually</Typography>
    </ToggleButton>
    </ToggleButtonGroup>
        </Box>
      </Modal>
  );
}
