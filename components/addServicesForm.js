import { useEffect, useState, React } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import TimePicker from "@mui/lab/TimePicker";
import FormWrapper from "../styledComponents/formWrapper";
import StyledTextField from "../styledComponents/styledTextField";
import { useDispatch, useSelector } from "react-redux";
import InputAdornment from "@mui/material/InputAdornment";
import {
  setName,
  setCity,
  setAddress,
  setDescription,
  setImages,
  setAmenities,
  setFacilities,
  setRules,
  setCheckIn,
  setCheckOut,
  setServices,
  setDaysToRefund,
  setFaqs,
} from "../redux/addHotel";
import { nextStep, prevStep } from "../redux/formSlice";
import moment from "moment";
import StyledButton from "../styledComponents/styledButton";
import ProvidedServices from "./providedServices";
import FAQs from "./faqs";
function AddServicesForm(props) {
  const addHotel = useSelector((state) => state.addHotel);
  var extra_services = addHotel.services;
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();

  function updatePrice(name, price) {
    extra_services = extra_services.map((obj) => ({
      ...obj,
    }));
    extra_services[
      extra_services.findIndex((el) => {
        return el.extra_field_name === name;
      })
    ] = {
      ...extra_services[
        extra_services.findIndex((el) => {
          return el.extra_field_name === name;
        })
      ],
      extra_field_price: price,
    };
    extra_services = extra_services;
    dispatch(setServices(extra_services));
  }

  async function submit(e) {
    e.preventDefault();
    dispatch(nextStep());
  }
  return (
    <FormWrapper>
      <form onSubmit={submit}>
        <Grid container spacing={3}>
          <Grid container item xs={12} lg={6} direction="column">
            <Grid container item spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h6">Timings</Typography>
              </Grid>
            </Grid>
            <Box
              sx={{
                backgroundColor: "background.secondary",
                p: 2,
                borderRadius: 3,
                m: 2,
              }}
            >
              <Grid container item spacing={5}>
                <Grid container item xs={12} spacing={1}>
                  {/* <Grid item xs={12} sm={3}>
              <Typography variant="p">Check-In time:</Typography>
            </Grid> */}
                  <Grid item xs={12}>
                    <TimePicker
                      value={moment(addHotel.checkIn, "hh:mm a")}
                      label={"Check-In time"}
                      onChange={(newValue) => {
                        newValue
                          ? dispatch(setCheckIn(newValue.format("hh:mm a")))
                          : "";
                      }}
                      renderInput={(params) => (
                        <TextField
                          required
                          placeholder="HH:MM am/pm"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "& .MuiOutlinedInput-input": { color: "#000" },
                              "& .MuiInputAdornment-root": {
                                "& .MuiButtonBase-root": {
                                  "& .MuiSvgIcon-root": {
                                    color: "button.main",
                                  },
                                },
                              },
                            },
                            backgroundColor: "#FFF",
                            borderRadius: "5px",
                          }}
                          fullWidth
                          {...params}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                  {/* <Grid item xs={12} sm={3}>
              <Typography variant="p">Check-Out time:</Typography>
            </Grid> */}
                  <Grid item xs={12}>
                    <TimePicker
                      value={moment(addHotel.checkOut, "hh:mm a")}
                      onChange={(newValue) => {
                        newValue
                          ? dispatch(setCheckOut(newValue.format("hh:mm a")))
                          : "";
                      }}
                      label={"Check-Out time"}
                      renderInput={(params) => (
                        <TextField
                          required
                          placeholder="HH:MM am/pm"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "& .MuiOutlinedInput-input": {
                                color: "#000",
                              },
                              "& .MuiInputAdornment-root": {
                                "& .MuiButtonBase-root": {
                                  "& .MuiSvgIcon-root": {
                                    color: "button.main",
                                  },
                                },
                              },
                            },
                            backgroundColor: "#FFF",
                            borderRadius: "5px",
                          }}
                          fullWidth
                          {...params}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid container item spacing={1} xs={12} lg={6} direction={"column"}>
            <Grid item>
              <Typography fontWeight={600} fontSize={18} variant="p">
                What services do you provide?
              </Typography>
            </Grid>
            <Box
              sx={{
                backgroundColor: "background.secondary",
                p: 2,
                borderRadius: 3,
                width: "100%",
                m: 2,
              }}
            >
              <Grid container item spacing={5}>
                <Grid item xs={6}>
                  <ProvidedServices />
                </Grid>
                <Grid item container xs={6}>
                  <Grid
                    container
                    item
                    xs={12}
                    sx={{
                      opacity: extra_services.find(
                        (el) => el.extra_field_name === "Breakfast"
                      )
                        ? "100%"
                        : "0%",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <StyledTextField
                        required
                        InputLabelProps={{ shrink: false }}
                        label=""
                        value={
                          extra_services.find(
                            (el) => el.extra_field_name === "Breakfast"
                          )?.extra_field_price
                        }
                        onChange={(e) =>
                          updatePrice("Breakfast", e.target.value)
                        }
                        sx={{
                          "& .MuiInputBase-root": {
                            padding: "0px",
                            "& .MuiInputAdornment-positionStart": {
                              backgroundColor: "button.main",
                              height: "100%",
                              maxHeight: "none",
                              borderRadius: "4px 0px 0px 4px",
                              padding: "0px 10px",
                              "& .MuiTypography-root": { color: "#FFF" },
                            },
                            "& .MuiInputAdornment-positionEnd": {
                              backgroundColor: "button.main",
                              height: "100%",
                              maxHeight: "none",
                              borderRadius: "0px 4px 4px 0px",
                              padding: "0px 10px",
                              "& .MuiTypography-root": { color: "#FFF" },
                            },
                            height: "100%",
                          },
                          height: "55px",
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              PKR
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              Per Person
                            </InputAdornment>
                          ),
                        }}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    sx={{
                      opacity: extra_services.find(
                        (el) => el.extra_field_name === "Lunch"
                      )
                        ? "100%"
                        : "0%",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <StyledTextField
                        required
                        InputLabelProps={{ shrink: false }}
                        label=""
                        value={
                          extra_services.find(
                            (el) => el.extra_field_name === "Lunch"
                          )?.extra_field_price
                        }
                        onChange={(e) => updatePrice("Lunch", e.target.value)}
                        sx={{
                          "& .MuiInputBase-root": {
                            padding: "0px",
                            "& .MuiInputAdornment-positionStart": {
                              backgroundColor: "button.main",
                              height: "100%",
                              maxHeight: "none",
                              borderRadius: "4px 0px 0px 4px",
                              padding: "0px 10px",
                              "& .MuiTypography-root": { color: "#FFF" },
                            },
                            "& .MuiInputAdornment-positionEnd": {
                              backgroundColor: "button.main",
                              height: "100%",
                              maxHeight: "none",
                              borderRadius: "0px 4px 4px 0px",
                              padding: "0px 10px",
                              "& .MuiTypography-root": { color: "#FFF" },
                            },
                            height: "100%",
                          },
                          height: "55px",
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              PKR
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              Per Person
                            </InputAdornment>
                          ),
                        }}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    sx={{
                      opacity: extra_services.find(
                        (el) => el.extra_field_name === "HiTea"
                      )
                        ? "100%"
                        : "0%",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <StyledTextField
                        required
                        InputLabelProps={{ shrink: false }}
                        label=""
                        value={
                          extra_services.find(
                            (el) => el.extra_field_name === "HiTea"
                          )?.extra_field_price
                        }
                        onChange={(e) => updatePrice("HiTea", e.target.value)}
                        sx={{
                          "& .MuiInputBase-root": {
                            padding: "0px",
                            "& .MuiInputAdornment-positionStart": {
                              backgroundColor: "button.main",
                              height: "100%",
                              maxHeight: "none",
                              borderRadius: "4px 0px 0px 4px",
                              padding: "0px 10px",
                              "& .MuiTypography-root": { color: "#FFF" },
                            },
                            "& .MuiInputAdornment-positionEnd": {
                              backgroundColor: "button.main",
                              height: "100%",
                              maxHeight: "none",
                              borderRadius: "0px 4px 4px 0px",
                              padding: "0px 10px",
                              "& .MuiTypography-root": { color: "#FFF" },
                            },
                            height: "100%",
                          },
                          height: "55px",
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              PKR
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              Per Person
                            </InputAdornment>
                          ),
                        }}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    sx={{
                      opacity: extra_services.find(
                        (el) => el.extra_field_name === "Dinner"
                      )
                        ? "100%"
                        : "0%",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <StyledTextField
                        required
                        InputLabelProps={{ shrink: false }}
                        label=""
                        value={
                          extra_services.find(
                            (el) => el.extra_field_name === "Dinner"
                          )?.extra_field_price
                        }
                        onChange={(e) => updatePrice("Dinner", e.target.value)}
                        sx={{
                          "& .MuiInputBase-root": {
                            padding: "0px",
                            "& .MuiInputAdornment-positionStart": {
                              backgroundColor: "button.main",
                              height: "100%",
                              maxHeight: "none",
                              borderRadius: "4px 0px 0px 4px",
                              padding: "0px 10px",
                              "& .MuiTypography-root": { color: "#FFF" },
                            },
                            "& .MuiInputAdornment-positionEnd": {
                              backgroundColor: "button.main",
                              height: "100%",
                              maxHeight: "none",
                              borderRadius: "0px 4px 4px 0px",
                              padding: "0px 10px",
                              "& .MuiTypography-root": { color: "#FFF" },
                            },
                            height: "100%",
                          },
                          height: "55px",
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              PKR
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              Per Person
                            </InputAdornment>
                          ),
                        }}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* <Grid container item spacing={1}>
                    <Grid item xs={12} sm={4}><Typography variant='p'>Days To Refund</Typography></Grid>
                    <Grid item xs={12} sm={8}><StyledTextField required value={addHotel.daysToRefund} onChange={(e) => dispatch(setDaysToRefund(e.target.value))} type='number' fullWidth placeholder='Enter days' /></Grid>
                    </Grid> */}
          <Grid container item spacing={2}>
            <Grid item xs={12}>
              <Typography fontSize={18} fontWeight={600} variant="p">
                Frequently Asked Questions
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundColor: "background.secondary",
                  p: 2,
                  borderRadius: 3,
                  width: "100%",
                  m: 2,
                }}
              >
                <FAQs />
              </Box>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={2} justifyContent="flex-end">
            <Grid item>
              <StyledButton type="button" onClick={() => dispatch(prevStep())}>
                Previous
              </StyledButton>
            </Grid>
            <Grid item>
              <StyledButton type="submit">Next</StyledButton>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </FormWrapper>
  );
}
export default AddServicesForm;
