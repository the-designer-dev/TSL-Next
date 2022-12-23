import { Box, Button, Grid, Typography } from "@mui/material";
import FormWrapper from "../styledComponents/formWrapper";
import React, { useRef } from "react";
import StyledTextField from "../styledComponents/styledTextField";
import dynamic from "next/dynamic";
import Dropfile from "./dropzone";
import { nextStep, nextStep2, prevStep } from "../redux/formSlice";
import { InputAdornment } from "@mui/material";
import {
  setRoomName,
  setRoomDescription,
  setRoomQuantity,
  setExtraBedCapacityQuantity,
  setExtraBedCapacityRates,
} from "../redux/addRoom";
const MUIRichTextEditor = dynamic(() => import("mui-rte"), { ssr: false });
import StyledButton from "../styledComponents/styledButton";
import { useDispatch, useSelector } from "react-redux";
import Capacity from "./capacity";
import { setRefundableRates, setNonRefundableRates } from "../redux/addRoom";
import DateRange from "./dateRange";
import RoomType from "./roomType";
import RoomFeatures from "./roomFeatures";
import { convertToRaw, convertFromHTML, ContentState } from "draft-js";
import { convertToHTML } from "draft-convert";
import { useEffect } from "react";
import ProvidedServices from "./providedServices";
import PaymentPolicies from "./paymentPolicies";
import { useState } from "react";
function AddRoomForm(props) {
  const roomImages = useRef(null); //represents roomImages section
  const roomcapacity = useRef(null); //represents roomcapacity section
  const extraroomcapacity = useRef(null); //represents extraroomcapacity section
  const refundableRates = useRef(null); //represents refundableRates section
  const roomDescription = useRef(null); //represents roomDescription section
  const paymentPolicies = useRef(null); //represents paymentPolicies section
  const roomQty = useRef(null); //represents paymentPolicies section

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 200,
      left: 0,
      behavior: "smooth",
    });
  };

  const dispatch = useDispatch();
  const room = useSelector((state) => state.addRoom);
  async function submit(e) {
    e.preventDefault();
    const mod = await import("./dropzone");
    console.log(mod);
    if (room.roomDescription.trim() == "<p></p>") {
      handleScroll(roomDescription.current);
    } else if (mod.roomImgs.length == 0) {
      handleScroll(roomImages.current);
    } else if (room.adultCapacity == 0) {
      handleScroll(roomcapacity.current);
    } else if (
      room.extraBedCapacity.extra_bed_qty > 0 &&
      room.extraBedCapacity.extra_bed_rates == 0
    ) {
      handleScroll(extraroomcapacity.current);
    } else if (room.bedCapacity == 0) {
      handleScroll(roomcapacity.current);
    } else if (
      room.bedCapacity > 0 &&
      room.bedType.filter((el) => el.bedName.length === 0).length > 0
    ) {
      handleScroll(roomcapacity.current);
    } else if (room.refundableRates == 0) {
      handleScroll(refundableRates.current);
    } else if (
      room.freeCancellationDays == null ||
      room.freeCancellationDays == "" ||
      room.appliedForDays == null ||
      room.appliedForDays == ""
    ) {
      handleScroll(paymentPolicies.current);
    } else if (
      room.noShowState == true &&
      (room.noShow == null || room.noShow == "")
    ) {
      handleScroll(paymentPolicies.current);
    } else if (room.refundablePolicy == true && room.nonRefundableRates == 0) {
      handleScroll(paymentPolicies.current);
    } else if (room.roomQuantity == 0) {
      handleScroll(roomQty.current);
    } else {
      props.hotel ? dispatch(nextStep2()) : dispatch(nextStep());
    }
  }

  const SSR = typeof window === "undefined";
  var contentHTML;
  var state;
  const [content, setContent] = useState("");
  useEffect(() => {
    !SSR ? (contentHTML = convertFromHTML(room.roomDescription)) : "";
    console.log(contentHTML);
    !SSR
      ? (state = ContentState.createFromBlockArray(
          contentHTML.contentBlocks,
          contentHTML.entityMap
        ))
      : "";
    !SSR ? setContent(JSON.stringify(convertToRaw(state))) : "";

    console.log(state);
  }, []);

  const onEditorChange = (event) => {
    const plainText = convertToHTML(event.getCurrentContent());
    dispatch(setRoomDescription(plainText));
  };

  return (
    <FormWrapper>
      <form onSubmit={submit}>
        <Grid container spacing={3}>
          <Grid container item xs={12} lg={6} spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Tell us more about your hotel
              </Typography>
            </Grid>
            <Box
              sx={{
                backgroundColor: "background.secondary",
                p: 2,
                borderRadius: 3,
              }}
            >
              <Grid container item spacing={5}>
                <Grid container item spacing={1}>
                  <Grid item xs={12} sm={12}>
                    <StyledTextField
                      required
                      label="Full Name Of Room"
                      value={room.roomName}
                      fullWidth
                      onChange={(e) => dispatch(setRoomName(e.target.value))}
                    />
                  </Grid>
                </Grid>

                <Grid container item spacing={1}>
                  <Grid item xs={12} sm={12}>
                    <StyledTextField
                      required
                      label="Room No #"
                      fullWidth
                      value={room.roomQuantity}
                      onChange={(e) =>
                        dispatch(setRoomQuantity(e.target.value))
                      }
                      type="number"
                    />
                  </Grid>
                </Grid>

                <Grid ref={roomDescription} container item spacing={1}>
                  <Grid item xs={12} sm={12}>
                    <MUIRichTextEditor
                      required
                      controls={["bold"]}
                      defaultValue={content}
                      onChange={onEditorChange}
                      label="Room Description...*"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} spacing={2}>
            <Grid item height={"fit-content"} xs={12}>
              <Typography variant="h6">What Type of Room is This?</Typography>
            </Grid>

            <Grid item alignSelf={"flex-start"} xs={12}>
              <Box
                sx={{
                  backgroundColor: "background.secondary",
                  p: 2,
                  borderRadius: 3,
                }}
              >
                <Grid ref={roomQty} container item spacing={5}>
                  <Grid container item spacing={1}>
                    <Grid item xs={12} sm={12}>
                      <RoomType />
                    </Grid>
                  </Grid>

                  <Grid container item spacing={1}>
                    <Grid item xs={12} sm={12}>
                      <StyledTextField
                        required
                        InputLabelProps={{ shrink: false }}
                        label=""
                        type={"number"}
                        value={room.refundableRates}
                        onChange={(e) =>
                          dispatch(setRefundableRates(e.target.value))
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
                            <InputAdornment
                              sx={{ color: "#ffffff" }}
                              position="start"
                            >
                              Room Qty *{" "}
                            </InputAdornment>
                          ),
                        }}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>

          <Grid ref={roomImages} container item spacing={2}>
            <Grid item xs={12}>
              <Typography fontSize={18} fontWeight={600} variant="p">
                Room Images: *
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Dropfile hotel={false} />
            </Grid>
          </Grid>

          <Grid container item xs={12} lg={6} spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">What Is Your Room Capacity?</Typography>
            </Grid>

            <Box
              sx={{
                backgroundColor: "background.secondary",
                p: 2,
                width: "100%",
                borderRadius: 3,
              }}
            >
              <Grid container item spacing={5}>
                <Grid ref={roomcapacity} container item spacing={1}>
                  <Grid item xs={12} sm={12}>
                    <Capacity />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6} spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Tell Us About Extra Bed Capacity
              </Typography>
            </Grid>
            <Box
              sx={{
                backgroundColor: "background.secondary",
                p: 2,
                borderRadius: 3,
              }}
            >
              <Grid ref={extraroomcapacity} container item spacing={5}>
                <Grid container item spacing={5}>
                  <Grid
                    item
                    display={"flex"}
                    alignItems={"center"}
                    xs={12}
                    sm={12}
                  >
                    <Grid item xs={12} sm={12}>
                      <Typography fontWeight={600} fontSize={18} variant="p">
                        Extra Bed Capacity:{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <StyledTextField
                        required
                        fullWidth
                        InputLabelProps={{ shrink: false }}
                        label=""
                        value={room.extraBedCapacity.extra_bed_qty}
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
                                sx={{ color: "#ffffff" }}
                                onClick={() => {
                                  room.extraBedCapacity.extra_bed_qty > 0
                                    ? dispatch(
                                        setExtraBedCapacityQuantity(
                                          room.extraBedCapacity.extra_bed_qty -
                                            1
                                        )
                                      )
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
                                sx={{ color: "#ffffff" }}
                                onClick={() => {
                                  dispatch(
                                    setExtraBedCapacityQuantity(
                                      room.extraBedCapacity.extra_bed_qty + 1
                                    )
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
                  <Grid
                    item
                    display={"flex"}
                    alignItems={"center"}
                    xs={12}
                    sm={12}
                  >
                    <Grid item xs={12} sm={12}>
                      <Typography fontWeight={600} fontSize={18} variant="p">
                        Price:{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <StyledTextField
                        required
                        InputLabelProps={{ shrink: false }}
                        label=""
                        type={"number"}
                        value={room.extraBedCapacity.extra_bed_rates}
                        onChange={(e) =>
                          dispatch(setExtraBedCapacityRates(e.target.value))
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
                            <InputAdornment position="start">
                              PKR
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              Per Bed
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

          <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Rates and Terms & Policies of the Room
              </Typography>
            </Grid>

            <Box
              sx={{
                backgroundColor: "background.secondary",
                p: 2,
                width: "100%",
                borderRadius: 3,
              }}
            >
              <Grid ref={refundableRates} container item xs={12} spacing={5}>
                <Grid container item xs={6} spacing={5}>
                  <Grid item xs={6}>
                    <Typography variant="p">Refundable Rates</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <StyledTextField
                      required
                      InputLabelProps={{ shrink: false }}
                      label=""
                      value={room.refundableRates}
                      onChange={(e) =>
                        dispatch(setRefundableRates(e.target.value))
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
                  </Grid>
                  {room.refundablePolicy ? (
                    <Grid container item xs={12} sm={12}>
                      <Grid item xs={6} sm={6}>
                        <Typography variant="p">
                          Non-Refundable Rates
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <StyledTextField
                          InputLabelProps={{ shrink: false }}
                          label=""
                          required
                          value={room.nonRefundableRates}
                          onChange={(e) =>
                            dispatch(setNonRefundableRates(e.target.value))
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
                  ) : (
                    ""
                  )}
                </Grid>

                <Grid ref={paymentPolicies} item xs={6} spacing={5}>
                  <PaymentPolicies />
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid container item spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Tell us more about the features of your room:
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <RoomFeatures />
            </Grid>
          </Grid>

          <Grid container item xs={12} spacing={2} justifyContent="flex-end">
            {props.hotel ? (
              ""
            ) : (
              <Grid item>
                <StyledButton
                  type="button"
                  onClick={() => dispatch(prevStep())}
                >
                  Previous
                </StyledButton>
              </Grid>
            )}
            <Grid item>
              <StyledButton type="submit">Next</StyledButton>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </FormWrapper>
  );
}
export default AddRoomForm;
