import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: `${theme.palette.button.main} !important`,
  color: "#fff",
  padding: "2px 20px",
}));
export default StyledButton;
