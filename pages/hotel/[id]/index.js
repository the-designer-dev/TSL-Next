import {
  Grid,
  Box,
  Typography,
  Button,
  Tab,
  Tabs,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import StyledContainer from "../../../styledComponents/styledContainer";
import CustomerLayout from "../../../components/customerLayout";
import CarouselWithThumbnail from "../../../components/carouselWithThumbnail";
import axios from "axios";
import Cookies from "cookies";
import { API_URL } from "../../../config";
import { useDispatch } from "react-redux";
import { mapboxApiKey } from "../../../components/mapComponent";
import useSWR from "swr";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import MenuItem from "@mui/material/MenuItem";
import dynamic from "next/dynamic";
import { setGuestSet } from "../../../redux/bookingSlice";
import { useRouter } from "next/router";
import RoomInfo from "../../../components/roomInfo";
import RoomInfo2 from "../../../components/roominfo2";
const Map = dynamic(() => import("../../../components/mapComponent"), {
  loading: () => "Loading...",
  ssr: false,
});

const fetch = (id, destination, checkin, checkout, adult, child) =>
  axios({
    method: "post",
    url: `${API_URL}/filter-hotels/${id}`,
    data: {
      city: destination,
      checkindate: checkin,
      checkoutdate: checkout,
      adult: parseInt(adult),
      child: parseInt(child),
    },
  }).then((res) => res.data);

function options(arg) {
  var arr = [];
  for (let index = 0; index < arg; index++) {
    arr.push(<MenuItem value={index + 1}>{index + 1} room</MenuItem>);
  }
  return arr;
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Hotel({ resData, reqData, id }) {
  const { data, revalidate } = useSWR(
    [
      id,
      reqData.city,
      reqData.checkindate,
      reqData.checkoutdate,
      reqData.adult,
      reqData.child,
    ],
    fetch,
    { fallbackData: resData }
  );
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [restaurant, setRestaurant] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [airports, setAirports] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  useEffect(async () => {
    const fetchRestaurants = async () => {
      await axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/restaurant.json?type=poi&proximity=${data.longitude},${data.latitude}&access_token=${mapboxApiKey}&limit=5`
        )
        .then((res) => {
          console.log(res.data.features);
          setRestaurant(res.data.features);
        })
        .catch((err) => console.log({ err }));
    };
    fetchRestaurants();
    const fetchAttractions = async () => {
      await axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/outdoors.json?type=poi&proximity=${data.longitude},${data.latitude}&access_token=${mapboxApiKey}&limit=5`
        )
        .then((res) => {
          console.log(res.data.features);
          setAttractions(res.data.features);
        })
        .catch((err) => console.log({ err }));
    };
    fetchAttractions();
    const fetchHospitals = async () => {
      await axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/hospital.json?type=poi&proximity=${data.longitude},${data.latitude}&access_token=${mapboxApiKey}&limit=5`
        )
        .then((res) => {
          console.log(res.data.features);
          setHospitals(res.data.features);
        })
        .catch((err) => console.log({ err }));
    };
    fetchHospitals();
    const fetchAirports = async () => {
      await axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/airport.json?type=poi&proximity=${data.longitude},${data.latitude}&access_token=${mapboxApiKey}&limit=5`
        )
        .then((res) => {
          console.log(res.data.features);
          setAirports(res.data.features);
        })
        .catch((err) => console.log({ err }));
    };
    fetchAirports();
    dispatch(setGuestSet(false));
  }, []);

  return (
    <StyledContainer sx={{ height: "100%" }}>
      <Grid container spacing={5}>
        <Grid
          container
          item
          spacing={2}
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item xs={12} md={8}>
            <Box sx={{ marginBottom: { xs: "20px", sm: "20px", md: "0px" } }}>
              <CarouselWithThumbnail images={data.images} />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "background.main",
                height: "103%",
                maxWidth: { md: "350px", sm: "100%" },
                padding: "20px 20px 0px 20px",
                borderRadius: "8px",
              }}
            >
              <Grid container spacing={4}>
                <Grid container item spacing={2}>
                  <Grid item xs={12}>
                    <Typography fontWeight={500} variant="h5">
                      {data.hotelname}
                    </Typography>
                  </Grid>
                  <Grid container item alignItems="center" xs={12}>
                    <Typography
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "1",
                        WebkitBoxOrient: "vertical",
                      }}
                      fontSize={14}
                      variant="p"
                    >
                      <LocationOnOutlinedIcon />
                      {data.hoteladdress}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical",
                    }}
                    fontSize={14}
                    variant="p"
                  >
                    {data.hoteldescription}
                  </Typography>
                </Grid>
                <Grid container item spacing={2}>
                  <Grid item xs={12}>
                    <Typography fontWeight={500} variant="p">
                      About Hotel
                    </Typography>
                  </Grid>
                  <Grid alignItems="center" container item xs={12}>
                    <AccessTimeOutlinedIcon sx={{ color: "button.main" }} />
                    <Typography sx={{ paddingLeft: "10px" }} variant="p">
                      Check-In: {data.checkintime}
                    </Typography>
                  </Grid>
                  <Grid alignItems="center" container item xs={12}>
                    <AccessTimeOutlinedIcon sx={{ color: "button.main" }} />
                    <Typography sx={{ paddingLeft: "10px" }} variant="p">
                      Check-In: {data.checkouttime}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container item justifyContent="space-evenly" spacing={2}>
                  <Grid container item xs={12}>
                    <Typography fontWeight={500} variant="p">
                      Amenities
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    spacing={2}
                    justifyContent={"center"}
                  >
                    {data?.amenities?.map((el) => (
                      <Grid
                        container
                        item
                        alignItems="center"
                        xs={6}
                        sm={3}
                        md={6}
                      >
                        <Grid item xs={2}>
                          <Box
                            sx={{ display: "flex", justifyContent: "flex-end" }}
                          >
                            <img src={el.service_icon} />
                          </Box>{" "}
                        </Grid>
                        <Grid item xs={10}>
                          {" "}
                          <Typography sx={{ paddingLeft: "10px" }} variant="p">
                            {el.service_name}
                          </Typography>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid container justifyContent="space-evenly" item xs={12}>
                  <Button sx={{ backgroundColor: "button.main" }}>
                    Show all amenities
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              width: "95.5%",
              margin: "auto",
              bgcolor: "background.main",
              borderRadius: "8px",
            }}
          >
            <Tabs
              allowScrollButtonsMobile
              centered
              scrollButtons
              sx={{
                "& .MuiTabs-indicator": {
                  height: "5px",
                  backgroundColor: "button.main",
                },
                "& .MuiTabs-flexContainer": { justifyContent: "space-between" },
              }}
              value={value}
              onChange={handleChange}
            >
              <Tab
                sx={{
                  "&.Mui-selected": { color: "button.main" },
                  color: "button.main",
                }}
                label="Rooms"
              />
              <Tab
                sx={{
                  "&.Mui-selected": { color: "button.main" },
                  color: "button.main",
                }}
                label="Location"
              />
              <Tab
                sx={{
                  "&.Mui-selected": { color: "button.main" },
                  color: "button.main",
                }}
                label="Ratings"
              />
              <Tab
                sx={{
                  "&.Mui-selected": { color: "button.main" },
                  color: "button.main",
                }}
                label="Policies"
              />
              <Tab
                sx={{
                  "&.Mui-selected": { color: "button.main" },
                  color: "button.main",
                }}
                label="FAQs"
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Grid container item spacing={2}>
              {data.rooms?.map((el) => (
                <Grid item xs={12}>
                  {/* <RoomInfo el={el} data={data}/> */}
                  <RoomInfo2 el={el} data={data} />
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box
              sx={{ backgroundColor: "background.main", padding: "20px 25px" }}
            >
              <Grid container spacing={2}>
                <Grid container direction="column" item xs={12} sm={4}>
                  <Box sx={{ display: "flex" }}>
                    <Typography fontWeight={500} variant="p">
                      Location
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography fontWeight={300} variant="p">
                      {data.hotelname}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <LocationOnOutlinedIcon sx={{ fontSize: "18px" }} />
                    <Typography fontSize={12} fontWeight={300} variant="p">
                      {data.hoteladdress}
                    </Typography>
                  </Box>
                  <Tabs
                    allowScrollButtonsMobile
                    scrollButtons
                    sx={{
                      "& .MuiTabs-indicator": {
                        height: "5px",
                        backgroundColor: "button.main",
                      },
                    }}
                    value={value2}
                    onChange={handleChange2}
                    centered
                  >
                    <Tab
                      sx={{
                        "&.Mui-selected": { color: "button.main" },
                        color: "button.main",
                      }}
                      label="Point of interests"
                    />
                  </Tabs>
                  <TabPanel value={value2} index={0}>
                    <Box
                      className="poi_box"
                      sx={{
                        maxHeight: "200px",
                        overflow: "scroll",
                        overflowX: "hidden",
                      }}
                    >
                      <Accordion
                        sx={{
                          "&.MuiAccordion-root": {
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            backgroundImage: "none",
                          },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreOutlinedIcon />}
                          sx={{ display: "flex", alignItems: "center" }}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <RestaurantOutlinedIcon />
                          <Typography fontWeight={600} variant="p">
                            Restaurant
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Grid container spacing={2}>
                            {restaurant.map((el) => (
                              <>
                                <Grid container item>
                                  <Grid item xs={12}>
                                    <Typography fontWeight={500} variant="p">
                                      {el.text}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Typography fontWeight={300} variant="p">
                                      {el.place_name}
                                    </Typography>
                                    <Grid
                                      justifyContent="left"
                                      direction="row"
                                      alignItems="center"
                                      container
                                      spacing={1}
                                    >
                                      {el.properties.category
                                        .split(",")
                                        .map((el, index) =>
                                          index < 4 ? (
                                            <Grid item>
                                              <Box
                                                sx={{
                                                  backgroundColor:
                                                    "button.main",
                                                  justifyContent: "center",
                                                  padding: "5px",
                                                  borderRadius: "20px",
                                                  display: "flex",
                                                  textAlign: "center",
                                                }}
                                              >
                                                <Typography
                                                  fontSize="12px"
                                                  fontWeight={400}
                                                  variant="p"
                                                >
                                                  {el}
                                                </Typography>
                                              </Box>
                                            </Grid>
                                          ) : (
                                            ""
                                          )
                                        )}
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </>
                            ))}
                          </Grid>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion
                        sx={{
                          "&.MuiAccordion-root": {
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            backgroundImage: "none",
                          },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreOutlinedIcon />}
                          sx={{ display: "flex", alignItems: "center" }}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <AccountBalanceOutlinedIcon />
                          <Typography fontWeight={600} variant="p">
                            Attractions
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Grid container spacing={2}>
                            {attractions.map((el) => (
                              <>
                                <Grid container item>
                                  <Grid item xs={12}>
                                    <Typography fontWeight={500} variant="p">
                                      {el.text}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Typography fontWeight={300} variant="p">
                                      {el.place_name}
                                    </Typography>
                                    <Grid
                                      justifyContent="left"
                                      direction="row"
                                      alignItems="center"
                                      container
                                      spacing={1}
                                    >
                                      {el.properties.category
                                        .split(",")
                                        .map((el, index) =>
                                          index < 4 ? (
                                            <Grid item spacing>
                                              <Box
                                                sx={{
                                                  backgroundColor:
                                                    "button.main",
                                                  justifyContent: "center",
                                                  padding: "5px",
                                                  borderRadius: "20px",
                                                  display: "flex",
                                                  textAlign: "center",
                                                }}
                                              >
                                                <Typography
                                                  fontSize="12px"
                                                  fontWeight={400}
                                                  variant="p"
                                                >
                                                  {el}
                                                </Typography>
                                              </Box>
                                            </Grid>
                                          ) : (
                                            ""
                                          )
                                        )}
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </>
                            ))}
                          </Grid>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion
                        sx={{
                          "&.MuiAccordion-root": {
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            backgroundImage: "none",
                          },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreOutlinedIcon />}
                          sx={{ display: "flex", alignItems: "center" }}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <LocalHospitalIcon />
                          <Typography fontWeight={600} variant="p">
                            Hospitals
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Grid container spacing={2}>
                            {hospitals.map((el) => (
                              <>
                                <Grid container item>
                                  <Grid item xs={12}>
                                    <Typography fontWeight={500} variant="p">
                                      {el.text}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Typography fontWeight={300} variant="p">
                                      {el.place_name}
                                    </Typography>
                                    <Grid
                                      justifyContent="left"
                                      direction="row"
                                      alignItems="center"
                                      container
                                      spacing={2}
                                    >
                                      {el.properties.category
                                        ? el.properties.category
                                            .split(",")
                                            .map((el, index) =>
                                              index < 4 ? (
                                                <Grid item spacing>
                                                  <Box
                                                    sx={{
                                                      backgroundColor:
                                                        "button.main",
                                                      justifyContent: "center",
                                                      padding: "5px",
                                                      borderRadius: "20px",
                                                      display: "flex",
                                                      textAlign: "center",
                                                    }}
                                                  >
                                                    <Typography
                                                      fontSize="12px"
                                                      fontWeight={400}
                                                      variant="p"
                                                    >
                                                      {el}
                                                    </Typography>
                                                  </Box>
                                                </Grid>
                                              ) : (
                                                ""
                                              )
                                            )
                                        : ""}
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </>
                            ))}
                          </Grid>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion
                        sx={{
                          "&.MuiAccordion-root": {
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            backgroundImage: "none",
                          },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreOutlinedIcon />}
                          sx={{ display: "flex", alignItems: "center" }}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <LocalAirportIcon />
                          <Typography fontWeight={600} variant="p">
                            Airports
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Grid container spacing={2}>
                            {airports.map((el) => (
                              <>
                                <Grid container item>
                                  <Grid item xs={12}>
                                    <Typography fontWeight={500} variant="p">
                                      {el.text}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Typography fontWeight={300} variant="p">
                                      {el.place_name}
                                    </Typography>
                                    <Grid
                                      justifyContent="left"
                                      direction="row"
                                      alignItems="center"
                                      container
                                      spacing={2}
                                    >
                                      {el.properties.category
                                        .split(",")
                                        .map((el, index) =>
                                          index < 4 ? (
                                            <Grid item spacing>
                                              <Box
                                                sx={{
                                                  backgroundColor:
                                                    "button.main",
                                                  justifyContent: "center",
                                                  padding: "5px",
                                                  borderRadius: "20px",
                                                  display: "flex",
                                                  textAlign: "center",
                                                }}
                                              >
                                                <Typography
                                                  fontSize="12px"
                                                  fontWeight={400}
                                                  variant="p"
                                                >
                                                  {el}
                                                </Typography>
                                              </Box>
                                            </Grid>
                                          ) : (
                                            ""
                                          )
                                        )}
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </>
                            ))}
                          </Grid>
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  </TabPanel>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Map
                    locations={{
                      longitude: data.longitude,
                      latitude: data.latitude,
                    }}
                    restaurants={restaurant}
                    airports={airports}
                    hospitals={hospitals}
                    attractions={attractions}
                  />
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}

Hotel.getLayout = function getLayout(Hotel) {
  return <CustomerLayout>{Hotel}</CustomerLayout>;
};

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  const cookies = new Cookies(req, res);
  const id = params.id;
  const destination = cookies.get("destination");
  const checkin = cookies.get("checkIn");
  const checkout = cookies.get("checkOut");
  const adult = cookies.get("adult");
  const child = cookies.get("child");
  const reqData = {
    city: destination,
    checkindate: checkin,
    checkoutdate: checkout,
    adult: parseInt(adult),
    child: parseInt(child),
  };
  const resData = await axios({
    method: "post",
    url: `${API_URL}/filter-hotels/${id}`,
    data: reqData,
  }).then((res) => res.data);
  return { props: { resData, reqData, id } };
}
