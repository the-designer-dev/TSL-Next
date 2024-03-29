import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const FormWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.background.main} !important`,
  margin: "10px auto",
  padding: "50px",

  borderRadius: "5px",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "80%",
  },
}));
export default FormWrapper;
