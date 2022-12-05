import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StyledTextField from "../styledComponents/styledTextField";
import { InputAdornment } from "@mui/material";
import {
  setChildCapacity,
  setAdultCapacity,
  setBedCapacity,
  setBedType,
} from "../redux/addRoom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
function Capacity(props) {
  const room = useSelector((state) => state.addRoom);
  const [bedTypes, setBedTypes] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    var arr = [];
    for (let index = 0; index < room.bedCapacity; index++) {
      arr.push({ bedName: room.bedType[index] ? room.bedType[index].bedName : "", bedValue: room.bedType[index] ? room.bedType[index].bedValue : "" });
    }
    dispatch(setBedType(arr));
  }, [room.bedCapacity]);

  function changeBedType(value, index) {
    var varTypes = room.bedType.map((el) => el);

    varTypes[index] = JSON.parse(value);
    dispatch(setBedType(varTypes));
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid container item xs={12} sm={6} spacing={1}>
          <Grid item xs={4}>
            <Typography fontWeight={400} variant="p">
              Child Capacity:
            </Typography>
            <Typography fontWeight={200} fontSize={10} lineHeight={0} variant="span">
              <><br></br>(below 12 years)  </>
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <StyledTextField
              fullWidth
              onChange={(e) => {
                e.target.value >= 0
                  ? dispatch(setChildCapacity(e.target.value))
                  : "";
              }}
              value={room.childCapacity}
              sx={{
                "& .MuiInputBase-root": {
                  padding: "0px",
                  "& .MuiInputAdornment-positionStart": {
                    backgroundColor: "button.main",
                    height: "56px",
                    maxHeight: "none",
                    borderRadius: "4px 0px 0px 4px",
                    "& .MuiTypography-root": { color: "#FFF" },
                  },
                  "& .MuiInputAdornment-positionEnd": {
                    backgroundColor: "button.main",
                    height: "56px",
                    maxHeight: "none",
                    borderRadius: "0px 4px 4px 0px",
                    "& .MuiTypography-root": { color: "#FFF" },
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Button
                      onClick={() => {
                        room.childCapacity > 0
                          ? dispatch(setChildCapacity(room.childCapacity - 1))
                          : "";
                      }}
                    >
                      -
                    </Button>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      onClick={() => {
                        dispatch(
                          setChildCapacity(Number(room.childCapacity) + 1)
                        );
                      }}
                    >
                      +
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={6} spacing={1}>
          <Grid item xs={4}>
            <Typography fontWeight={400} variant="p">
              Adult Capacity:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <StyledTextField
              fullWidth
              onChange={(e) => {
                e.target.value >= 0
                  ? dispatch(setAdultCapacity(e.target.value))
                  : "";
              }}
              value={room.adultCapacity}
              sx={{
                "& .MuiInputBase-root": {
                  padding: "0px",
                  "& .MuiInputAdornment-positionStart": {
                    backgroundColor: "button.main",
                    height: "56px",
                    maxHeight: "none",
                    borderRadius: "4px 0px 0px 4px",
                    "& .MuiTypography-root": { color: "#FFF" },
                  },
                  "& .MuiInputAdornment-positionEnd": {
                    backgroundColor: "button.main",
                    height: "56px",
                    maxHeight: "none",
                    borderRadius: "0px 4px 4px 0px",
                    "& .MuiTypography-root": { color: "#FFF" },
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Button
                      onClick={() => {
                        room.adultCapacity > 0
                          ? dispatch(setAdultCapacity(room.adultCapacity - 1))
                          : "";
                      }}
                    >
                      -
                    </Button>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      onClick={() => {
                        dispatch(
                          setAdultCapacity(Number(room.adultCapacity) + 1)
                        );
                      }}
                    >
                      +
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={6} spacing={1}>
          <Grid item xs={4}>
            <Typography fontWeight={400} variant="p">
              Number of Beds:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <StyledTextField
              fullWidth
              onChange={(e) => {
                e.target.value >= 0
                  ? dispatch(setBedCapacity(e.target.value))
                  : "";
              }}
              value={room.bedCapacity}
              sx={{
                "& .MuiInputBase-root": {
                  padding: "0px",
                  "& .MuiInputAdornment-positionStart": {
                    backgroundColor: "button.main",
                    height: "56px",
                    maxHeight: "none",
                    borderRadius: "4px 0px 0px 4px",
                    "& .MuiTypography-root": { color: "#FFF" },
                  },
                  "& .MuiInputAdornment-positionEnd": {
                    backgroundColor: "button.main",
                    height: "56px",
                    maxHeight: "none",
                    borderRadius: "0px 4px 4px 0px",
                    "& .MuiTypography-root": { color: "#FFF" },
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Button
                      onClick={() => {
                        room.bedCapacity > 0
                          ? dispatch(setBedCapacity(room.bedCapacity - 1))
                          : "";
                      }}
                    >
                      -
                    </Button>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      onClick={() => {
                        dispatch(setBedCapacity(Number(room.bedCapacity) + 1));
                      }}
                    >
                      +
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        {room.bedType.map((el, index) => {
          console.log(el);
          console.log(
            JSON.stringify({
              bedName: el.bedName,
              bedValue: el.bedValue,
            })
          );
          return (
            <Grid container item xs={12} sm={6} spacing={1}>
              <Grid item xs={12} sm={4}>
                <Typography fontWeight={400} variant="p">
                  Bed Type:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <FormControl fullWidth>
                  <Select
                    sx={{
                      "&.MuiOutlinedInput-root": {
                        backgroundColor: "#FFF",
                        color: "secondary.main",
                      },
                    }}
                    value={JSON.stringify({
                      bedName: el.bedName,
                      bedValue: el.bedValue,
                    })}
                    onChange={(e) => changeBedType(e.target.value, index)}
                  >
                    <MenuItem
                      value={JSON.stringify({ bedName: "King", bedValue: 2 })}
                    >
                      King
                    </MenuItem>
                    <MenuItem
                      value={JSON.stringify({ bedName: "Queen", bedValue: 2 })}
                    >
                      Queen
                    </MenuItem>
                    <MenuItem
                      value={JSON.stringify({ bedName: "Twin", bedValue: 2 })}
                    >
                      Twin
                    </MenuItem>
                    <MenuItem
                      value={JSON.stringify({ bedName: "Single", bedValue: 1 })}
                    >
                      Single
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Box >
  );
}
export default Capacity;
