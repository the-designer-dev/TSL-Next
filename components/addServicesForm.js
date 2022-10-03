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
          <Grid container item spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h6">Add some amazing services</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={6} spacing={1}>
            <Grid item xs={12} sm={3}>
              <Typography variant="p">Check-In time:</Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TimePicker
                value={moment(addHotel.checkIn, "hh:mm a")}
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
                            "& .MuiSvgIcon-root": { color: "button.main" },
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
          <Grid container item xs={12} sm={6} spacing={1}>
            <Grid item xs={12} sm={3}>
              <Typography variant="p">Check-Out time:</Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TimePicker
                value={moment(addHotel.checkOut, "hh:mm a")}
                onChange={(newValue) => {
                  newValue
                    ? dispatch(setCheckOut(newValue.format("hh:mm a")))
                    : "";
                }}
                renderInput={(params) => (
                  <StyledTextField
                    requiredplaceholder="HH:MM am/pm"
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
                    fullWidth
                    {...params}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid container item spacing={1}>
            <Grid item xs={12}>
              <Typography fontWeight={600} fontSize={18} variant="p">
                What services do you provide?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ProvidedServices />
            </Grid>
            <Grid item container spacing={2} xs={12}>
              {" "}
              {extra_services.map((el) => (
                <Grid container item xs={12} sm={6}>
                  <Grid container item direction="column" xs={12} sm={3}>
                    {" "}
                    <Grid item>{el.extra_field_name}</Grid>{" "}
                    <Grid item>
                      <Typography fontSize={12} fontWeight={300} variant="p">
                        Rates
                      </Typography>
                    </Grid>{" "}
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <StyledTextField
                      required
                      value={el.extra_field_price}
                      onChange={(e) =>
                        updatePrice(el.extra_field_name, e.target.value)
                      }
                      sx={{
                        "& .MuiInputBase-root": {
                          padding: "0px",
                          "& .MuiInputAdornment-positionStart": {
                            backgroundColor: "button.main",
                            height: "56px",
                            maxHeight: "none",
                            borderRadius: "4px 0px 0px 4px",
                            padding: "0px 10px",
                            "& .MuiTypography-root": { color: "#FFF" },
                          },
                          "& .MuiInputAdornment-positionEnd": {
                            backgroundColor: "button.main",
                            height: "56px",
                            maxHeight: "none",
                            borderRadius: "0px 4px 4px 0px",
                            padding: "0px 10px",
                            "& .MuiTypography-root": { color: "#FFF" },
                          },
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">PKR</InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            Per Person
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                  </Grid>{" "}
                </Grid>
              ))}{" "}
            </Grid>
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
              <FAQs />
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
