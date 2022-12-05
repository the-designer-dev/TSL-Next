import React, { useEffect, useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import StyledTextField from "../styledComponents/styledTextField";
import Checkbox from "@mui/material/Checkbox";
import StyledButton from "../styledComponents/styledButton";
import { DatePicker } from "@mui/lab";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@mui/material";
import { setAdultCards, setAdultInfo, setOneLead } from "../redux/bookingSlice";
function AdultCard(props) {
  const [checked, setChecked] = React.useState(false);
  const [dob, setDOB] = React.useState(null);
  const dispatch = useDispatch();
  const oneLead = useSelector((state) => state.booking.oneLead);
  const adults = useSelector((state) => state.booking.adultInfo);
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [phone, setPhone] = useState(null);
  const [saved, setSaved] = useState(false);
  const theme = useTheme();
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  function submitData(e) {
    e.preventDefault();
    var copyAdultinfo = adults.map((el) => el);
    copyAdultinfo[props.num] = {
      name: name,
      cnic: cnic,
      dob: dob,
      isLeadGuest: checked,
      phonenumber: phone,
    };
    dispatch(setAdultInfo(copyAdultinfo));
    setSaved(true);
  }

  useEffect(() => {
    setSaved(false);
  }, [dob, name, cnic, phone]);

  useEffect(() => {
    dispatch(setOneLead(checked));
  }, [checked]);

  return (
    <Box
      sx={{
        backgroundColor: "background.main",
        width: "100%",
        height: "100%",
        borderRadius: "5px",
      }}
    >
      <form onSubmit={(e) => submitData(e)}>
        <Box
          sx={{
            textAlign: "center",
            padding: "15px 15px 0px 15px",
          }}
        >
          <Typography variant="p">Adult {props.num + 1}</Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          {saved ? (
            <Typography fontSize={12} sx={{ color: "button.main" }} variant="p">
              Saved
            </Typography>
          ) : (
            <Typography fontSize={12} sx={{ color: "#FF002C" }} variant="p">
              Unsaved Changes
            </Typography>
          )}
        </Box>
        <Grid sx={{ padding: "15px" }} container spacing={1}>
          <Grid container item>
            <Grid item xs={12}>
              <Typography fontWeight={400} variant="p">
                Name
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item xs={12}>
              <Typography fontWeight={400} variant="p">
                CNIC/Passport
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                required
                onChange={(e) => setCnic(e.target.value)}
                placeholder="Enter CNIC/Passpost"
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item xs={12}>
              <Typography fontWeight={400} variant="p">
                Date of Birth
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <DatePicker
                value={dob}
                required
                PaperProps={{
                  style: {
                    backgroundColor: theme.palette.background.main,
                    backgroundImage: "none",
                  },
                }}
                onChange={(newValue) => {
                  setDOB(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& .MuiOutlinedInput-input": { color: "#000" },
                        "& .MuiInputAdornment-root": {
                          "& .MuiButtonBase-root": {
                            "& .MuiSvgIcon-root": { color: "button.main" },
                          },
                        },
                      },
                      backgroundColor: "#FFF",
                      borderRadius: "5px",
                    }}
                    size="small"
                    variant="outlined"
                    placeholder="MM/DD/YYYY"
                    {...params}
                  />
                )}
              />{" "}
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item xs={12}>
              <Typography fontWeight={400} variant="p">
                Is this a lead guest?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Checkbox
                disabled={!checked && oneLead}
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Grid>
          </Grid>
          <Grid display={checked ? "flex" : "none"} container item>
            <Grid item xs={12}>
              <Typography fontWeight={400} variant="p">
                Phone
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                onChange={(e) => setPhone(e.target.value)}
                required={!checked}
                disabled={!checked}
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
          <Grid container item sx={{ textAlign: "center" }}>
            <Grid item xs={12}>
              <StyledButton type="submit">Save</StyledButton>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default AdultCard;
