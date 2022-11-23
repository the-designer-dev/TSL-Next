import React from "react";
import StyledContainer from "../../../styledComponents/styledContainer";
import VendorLayout from "../../../components/vendorLayout";
import axios from "axios";
import { useSelector } from "react-redux";
import { API_URL } from "../../../config";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import SmallCarouselWithThumbnail from "../../../components/smallCarouselWithThumbnails";
import FormWrapper from "../../../styledComponents/formWrapper";
import { Box, Grid, Typography } from "@mui/material";
import hotelImagesIcon from "../../../assets/hotelImages.png";
import hotelDetailsIcon from "../../../assets/hotelDetailsIcon.png";
import hotelLocationIcon from "../../../assets/hotelLocation.png";
import featuresAndAmenitiesIcon from "../../../assets/featuresAndAmenitiesIcon.png";
import clockIcon from "../../../assets/clockIcon.png";
import rulesIcon from "../../../assets/rulesIcon.png";
import servicesIcon from "../../../assets/servicesIcon.png";
import ShowMap from "../../../components/showMap";
const fetch2 = (hotel, token) =>
  axios({
    method: "GET",
    url: `${API_URL}/hotels/${hotel}`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.data);

function SingleHotel(props) {
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  const router = useRouter();
  const { hotel } = router.query;
  const { data, error } = useSWR([hotel, token], fetch2);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    console.log(data);
    setFilteredData(data);
  }, [data]);

  return (
    <StyledContainer square>
      <FormWrapper>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid container item xs={12} spacing={2}>
              <Grid item>
                <img src={hotelImagesIcon.src} />
              </Grid>
              <Grid item>
                <Typography sx={{ paddingBottom: "24px" }} variant="h6">
                  Hotel Images:
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{ height: "100%", maxHeight: "500px", padding: "20px" }}>
              <SmallCarouselWithThumbnail images={data?.images} />
            </Box>
          </Grid>

          <Grid container item xs={12}>
            <Grid container item xs={12} md={6} spacing={0}>
              <Grid container item xs={12} spacing={2}>
                <Grid item>
                  <img src={hotelDetailsIcon.src} />
                </Grid>
                <Grid item>
                  <Typography sx={{ paddingBottom: "12px" }} variant="h6">
                    Hotel Details:
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: "36px", fontWeight: "600" }}>
                  {data?.hotelname}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
                  <div
                    dangerouslySetInnerHTML={{ __html: data?.hoteldescription }}
                  />
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} md={6} spacing={0}>
              <Grid container item xs={12} spacing={2}>
                <Grid item>
                  <img src={hotelLocationIcon.src} />
                </Grid>
                <Grid item>
                  <Typography sx={{ paddingBottom: "12px" }} variant="h6">
                    Location:
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} spacing={1}>
                <Grid item xs={12}>
                  <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                    Address : {data?.hoteladdress}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                    City : {data?.hotelcity}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <ShowMap
                    height={"200px"}
                    longitude={data?.longitude}
                    latitude={data?.latitude}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item xs={12}>
            <Grid container item xs={12} md={6} spacing={0}>
              <Grid container item xs={12} spacing={2}>
                <Grid item>
                  <img src={featuresAndAmenitiesIcon.src} />
                </Grid>
                <Grid item>
                  <Typography sx={{ paddingBottom: "12px" }} variant="h6">
                    Features & Amenities:
                  </Typography>
                </Grid>
              </Grid>
              {data?.amenities.map((el) => (
                <Grid
                  container
                  item
                  xs={6}
                  md={4}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Grid item xs={4}>
                    <img style={{ width: "80%" }} src={el.service_icon} />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                      {el?.service_name}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid container item xs={12} md={6} spacing={0}>
              <Grid container item xs={12} spacing={2}>
                <Grid item>
                  <img src={clockIcon.src} />
                </Grid>
                <Grid item>
                  <Typography sx={{ paddingBottom: "12px" }} variant="h6">
                    Timing Details:
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} spacing={1}>
                <Grid item xs={12}>
                  <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                    Check In : {data?.checkintime}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                    Check Out : {data?.checkouttime}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item xs={12}>
            <Grid container item xs={12} md={6} spacing={0}>
              <Grid container item xs={12} spacing={2}>
                <Grid item>
                  <img src={rulesIcon.src} />
                </Grid>
                <Grid item>
                  <Typography sx={{ paddingBottom: "12px" }} variant="h6">
                    Rules:
                  </Typography>
                </Grid>
              </Grid>
              {data?.rules.map((el) => (
                <Grid
                  container
                  item
                  xs={6}
                  md={4}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Grid item xs={4}>
                    <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                      {el?.service_name}
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                      {el?.service_name}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid container item xs={12} md={6} spacing={0}>
              <Grid container item xs={12} spacing={2}>
                <Grid item>
                  <img src={servicesIcon.src} />
                </Grid>
                <Grid item>
                  <Typography sx={{ paddingBottom: "12px" }} variant="h6">
                    Services & Charges:
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} spacing={1}>
                {data?.hotel_extra_fields.map((el) => (
                  <Grid container item xs={4}>
                    <Grid item xs={6}>
                      <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                        Check In : {data?.checkintime}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                        Check In : {data?.checkintime}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </FormWrapper>
    </StyledContainer>
  );
}

SingleHotel.getLayout = function getLayout(SingleHotel) {
  return <VendorLayout>{SingleHotel}</VendorLayout>;
};

export default SingleHotel;
