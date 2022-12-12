import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography } from "@mui/material";
import { setServices } from "../redux/addHotel";
import { useDispatch, useSelector } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ProvidedServices() {
  const [formats, setFormats] = React.useState(() => []);

  const dispatch = useDispatch();
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
    dispatch(
      setServices(
        newFormats.map((el) => {
          return { extra_field_name: el, extra_field_price: 0 };
        })
      )
    );
  };
  const matches = useMediaQuery("(min-width:370px)");
  return (
    <ToggleButtonGroup
      fullWidth
      value={formats}
      onChange={handleFormat}
      orientation={`vertical`}
      aria-label="text formatting"
    >
      <ToggleButton
        sx={{
          "&.MuiToggleButton-root": {
            height: "64px",
            "&.Mui-selected": { backgroundColor: "button.main", color: "#fff" },
          },
        }}
        value="Breakfast"
        aria-label="bold"
      >
        <Typography variant="p">Breakfast</Typography>
      </ToggleButton>
      <ToggleButton
        sx={{
          "&.MuiToggleButton-root": {
            height: "64px",

            "&.Mui-selected": { backgroundColor: "button.main", color: "#fff" },
          },
        }}
        value="Lunch"
        aria-label="italic"
      >
        <Typography variant="p">Lunch</Typography>
      </ToggleButton>
      <ToggleButton
        sx={{
          "&.MuiToggleButton-root": {
            height: "64px",

            "&.Mui-selected": { backgroundColor: "button.main", color: "#fff" },
          },
        }}
        value="HiTea"
        aria-label="underlined"
      >
        <Typography variant="p">HiTea</Typography>
      </ToggleButton>
      <ToggleButton
        sx={{
          "&.MuiToggleButton-root": {
            height: "64px",

            "&.Mui-selected": { backgroundColor: "button.main", color: "#fff" },
          },
        }}
        value="Dinner"
        aria-label="color"
      >
        <Typography variant="p">Dinner</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
