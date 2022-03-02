import TextareaAutosize from '@mui/material/TextareaAutosize';
import { styled } from '@mui/material/styles';

const CustomizeTextArea = styled(TextareaAutosize)(({ theme }) => ({

    backgroundColor : `#FFF !important`,
    padding: '5px',
    color: `#000`,
    width: "100%",
    margin: "0px 0px",
    outline:"none",
    borderRadius:'5px'
    
    }))

export default CustomizeTextArea;