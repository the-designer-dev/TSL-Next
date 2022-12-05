import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& .MuiOutlinedInput-input": {
      color: "#000",
    },
    "& .Mui-disabled": {
      backgroundColor: "#DDD",
      borderRadius: "5px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2ab572",
      "&.Mui-focused": { borderColor: "#2ab572" },
    },
  },
  backgroundColor: "#FFF",
  borderRadius: "5px",
}));
export default StyledTextField;
