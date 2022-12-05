import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import {
  ElevatorOutlined,
  PoolOutlined,
  Restaurant,
  Wifi,
} from "@mui/icons-material";
import RulesModal from "./rulesModal";
import { setAmenities, setFacilities, setRules } from "../redux/addHotel";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { Button, FormControlLabel } from "@mui/material";
import StyledTextField from "../styledComponents/styledTextField";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { client_id, client_secret, ICON_KEY } from "../config";
import StyledButton from "../styledComponents/styledButton";
var selectedAmenities = [];
var selectedFacilities = [];
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Features() {
  const [value, setValue] = React.useState(0);
  const [amenities, setStateAmenities] = React.useState([]);
  const [facilities, setStateFacilities] = React.useState([]);
  const [serviceType, setServiceType] = React.useState("Facility");
  const [selectedIcon, setSelectedIcon] = React.useState(null);
  const [icon, setIcons] = React.useState([]);
  const [serviceName, setServiceName] = React.useState("");
  const [serviceDescription, setserviceDescription] = React.useState("");
  const dispatch = useDispatch();
  const rules = useSelector((state) => state.addHotel.rules);
  const amenitiesRedux = useSelector((state) => state.addHotel.amenities);
  const facilitiesRedux = useSelector((state) => state.addHotel.facilities);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function searchIcon(e) {
    axios
      .get(
        `https://api.iconfinder.com/v3/icons/search?query=${e.target.value}&count=30`,
        {
          params: {
            grant_type: "jwt_bearer",
            client_id: client_id,
            client_secret: client_secret,
          },
        }
      )
      .then((res) => {
        setIcons(res.data.icons);
        console.log(res.data.icons);
        console.log(
          res.data.icons.map((el) => el.raster_sizes[0].formats[0].preview_url)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addAmenity(checked, icon, name, description) {
    if (checked == true) {
      selectedAmenities = [
        ...selectedAmenities,
        {
          service_icon: icon,
          service_name: name,
          service_description: description,
        },
      ];
    } else {
      selectedAmenities = selectedAmenities.filter((el) => {
        return el.service_name !== name;
      });
    }
    dispatch(setAmenities(selectedAmenities));
  }

  function addFacility(checked, icon, name, description) {
    if (checked == true) {
      selectedFacilities = [
        ...selectedFacilities,
        {
          service_icon: icon,
          service_name: name,
          service_description: description,
        },
      ];
    } else {
      selectedFacilities = selectedFacilities.filter((el) => {
        return el.service_name !== name;
      });
    }
    dispatch(setFacilities(selectedFacilities));
  }

  function addService() {
    if (serviceType === "Facility") {
      setStateFacilities((facilities) => [
        ...facilities,
        {
          service_icon: selectedIcon,
          service_name: serviceName,
          service_description: serviceDescription,
        },
      ]);
      setValue(1);
    } else {
      setStateAmenities((amenities) => [
        ...amenities,
        {
          service_icon: selectedIcon,
          service_name: serviceName,
          service_description: serviceDescription,
        },
      ]);
      setValue(2);
    }
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ backgroundColor: "button.main" }}>
        <Tabs
          allowScrollButtonsMobile
          variant="scrollable"
          scrollButtons
          sx={{
            "& .MuiTabs-indicator": { height: "5px", backgroundColor: "#FFF" },
            "& .MuiTabs-flexContainer": { justifyContent: "space-between" },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ color: "#FFF", "&.Mui-selected": { color: "#fff" } }}
            label="Amenities"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ color: "#FFF", "&.Mui-selected": { color: "#fff" } }}
            label="Facilities"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ color: "#FFF", "&.Mui-selected": { color: "#fff" } }}
            label="Rules"
            {...a11yProps(2)}
          />
          <Tab
            sx={{ color: "#FFF", "&.Mui-selected": { color: "#fff" } }}
            label="Custom"
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={5}>
            <Grid container item xs={12} sm={6} alignItems="center">
              <Grid item xs={2}>
                <ElevatorOutlined sx={{ fontSize: "30px" }} />
              </Grid>
              <Grid container item direction="column" xs={8}>
                <Grid item xs={6}>
                  <Typography fontWeight={700} variant="p">
                    Elevator
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography fontWeight={300} variant="p">
                    Elevator available in hotel
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={2} justifyContent="flex-end">
                <Checkbox
                  checked={amenitiesRedux.find(
                    (el) => el.service_name === "Elevator"
                  )}
                  onChange={(e) =>
                    addAmenity(
                      e.target.checked,
                      "https://cdn1.iconfinder.com/data/icons/interface-travel-and-environment/64/wifi-interface-wireless-16.png",
                      "Elevator",
                      "Elevator available in hotel"
                    )
                  }
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={6} alignItems="center">
              <Grid item xs={2}>
                <Wifi sx={{ fontSize: "30px" }} />
              </Grid>
              <Grid container item direction="column" xs={8}>
                <Grid item xs={6}>
                  <Typography fontWeight={700} variant="p">
                    Free Wifi
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography fontWeight={300} variant="p">
                    Free Wifi available in hotel
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={2} justifyContent="flex-end">
                <Checkbox
                  checked={amenitiesRedux.find(
                    (el) => el.service_name === "Free Wifi"
                  )}
                  onChange={(e) =>
                    addAmenity(
                      e.target.checked,
                      "https://cdn1.iconfinder.com/data/icons/interface-travel-and-environment/64/wifi-interface-wireless-16.png",
                      "Free Wifi",
                      "Free Wifi available in hotel"
                    )
                  }
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={6} alignItems="center">
              <Grid item xs={2}>
                <PoolOutlined sx={{ fontSize: "30px" }} />
              </Grid>
              <Grid container item direction="column" xs={8}>
                <Grid item xs={6}>
                  <Typography fontWeight={700} variant="p">
                    Swimming Pool
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography fontWeight={300} variant="p">
                    Well maintained swimming pool available in hotel
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={2} justifyContent="flex-end">
                <Checkbox
                  checked={amenitiesRedux.find(
                    (el) => el.service_name === "Swimming Pool"
                  )}
                  onChange={(e) =>
                    addAmenity(
                      e.target.checked,
                      "https://cdn1.iconfinder.com/data/icons/interface-travel-and-environment/64/wifi-interface-wireless-16.png",
                      "Swimming Pool",
                      "Well maintained swimming pool available in hotel"
                    )
                  }
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={6} alignItems="center">
              <Grid item xs={2}>
                <Restaurant sx={{ fontSize: "30px" }} />
              </Grid>
              <Grid container item direction="column" xs={8}>
                <Grid item xs={6}>
                  <Typography fontWeight={700} variant="p">
                    Restaurant
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography fontWeight={300} variant="p">
                    Restaurant available with top notch food
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={2} justifyContent="flex-end">
                <Checkbox
                  checked={amenitiesRedux.find(
                    (el) => el.service_name === "Restaurant"
                  )}
                  onChange={(e) =>
                    addAmenity(
                      e.target.checked,
                      "https://cdn1.iconfinder.com/data/icons/interface-travel-and-environment/64/wifi-interface-wireless-16.png",
                      "Restaurant",
                      "Restaurant available with top notch food"
                    )
                  }
                />
              </Grid>
            </Grid>
            {amenities.map((el) => (
              <Grid container item xs={12} sm={6} alignItems="center">
                <Grid item xs={2}>
                  <img style={{ height: "25px" }} src={el.service_icon} />
                </Grid>
                <Grid container item direction="column" xs={8}>
                  <Grid item xs={6}>
                    <Typography fontWeight={700} variant="p">
                      {el.service_name}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography fontWeight={300} variant="p">
                      {el.service_description}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container item xs={2} justifyContent="flex-end">
                  <Checkbox
                    checked={amenitiesRedux.find(
                      (ele) => ele.service_name === el.service_name
                    )}
                    onChange={(e) =>
                      addAmenity(
                        e.target.checked,
                        el.service_icon,
                        el.service_name,
                        el.service_description
                      )
                    }
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={5}>
            <Grid container item xs={12} sm={6} alignItems="center">
              <Grid item xs={2}>
                <ElevatorOutlined sx={{ fontSize: "30px" }} />
              </Grid>
              <Grid container item direction="column" xs={8}>
                <Grid item xs={6}>
                  <Typography fontWeight={700} variant="p">
                    Elevator
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography fontWeight={300} variant="p">
                    Elevator available in hotel
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={2} justifyContent="flex-end">
                <Checkbox
                  checked={facilitiesRedux.find(
                    (el) => el.service_name === "Elevator"
                  )}
                  onChange={(e) =>
                    addFacility(
                      e.target.checked,
                      "https://cdn1.iconfinder.com/data/icons/interface-travel-and-environment/64/wifi-interface-wireless-16.png",
                      "Elevator",
                      "Elevator available in hotel"
                    )
                  }
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={6} alignItems="center">
              <Grid item xs={2}>
                <Wifi sx={{ fontSize: "30px" }} />
              </Grid>
              <Grid container item direction="column" xs={8}>
                <Grid item xs={6}>
                  <Typography fontWeight={700} variant="p">
                    Free Wifi
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography fontWeight={300} variant="p">
                    Free Wifi available in hotel
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={2} justifyContent="flex-end">
                <Checkbox
                  checked={facilitiesRedux.find(
                    (el) => el.service_name === "Free Wifi"
                  )}
                  onChange={(e) =>
                    addFacility(
                      e.target.checked,
                      "https://cdn1.iconfinder.com/data/icons/interface-travel-and-environment/64/wifi-interface-wireless-16.png",
                      "Free Wifi",
                      "Free Wifi available in hotel"
                    )
                  }
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={6} alignItems="center">
              <Grid item xs={2}>
                <PoolOutlined sx={{ fontSize: "30px" }} />
              </Grid>
              <Grid container item direction="column" xs={8}>
                <Grid item xs={6}>
                  <Typography fontWeight={700} variant="p">
                    Swimming Pool
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography fontWeight={300} variant="p">
                    Well maintained swimming pool available in hotel
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={2} justifyContent="flex-end">
                <Checkbox
                  checked={facilitiesRedux.find(
                    (el) => el.service_name === "Swimming Pool"
                  )}
                  onChange={(e) =>
                    addFacility(
                      e.target.checked,
                      "https://cdn1.iconfinder.com/data/icons/interface-travel-and-environment/64/wifi-interface-wireless-16.png",
                      "Swimming Pool",
                      "Well maintained swimming pool available in hotel"
                    )
                  }
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={6} alignItems="center">
              <Grid item xs={2}>
                <Restaurant sx={{ fontSize: "30px" }} />
              </Grid>
              <Grid container item direction="column" xs={8}>
                <Grid item xs={6}>
                  <Typography fontWeight={700} variant="p">
                    Restaurant
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography fontWeight={300} variant="p">
                    Restaurant available with top notch food
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={2} justifyContent="flex-end">
                <Checkbox
                  checked={facilitiesRedux.find(
                    (el) => el.service_name === "Restaurant"
                  )}
                  onChange={(e) =>
                    addFacility(
                      e.target.checked,
                      "https://cdn1.iconfinder.com/data/icons/interface-travel-and-environment/64/wifi-interface-wireless-16.png",
                      "Restaurant",
                      "Restaurant available with top notch food"
                    )
                  }
                />
              </Grid>
            </Grid>
            {facilities.map((el) => (
              <Grid container item xs={12} sm={6} alignItems="center">
                <Grid item xs={2}>
                  <img style={{ height: "25px" }} src={el.service_icon} />
                </Grid>
                <Grid container item direction="column" xs={8}>
                  <Grid item xs={6}>
                    <Typography fontWeight={700} variant="p">
                      {el.service_name}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography fontWeight={300} variant="p">
                      {el.service_description}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container item xs={2} justifyContent="flex-end">
                  <Checkbox
                    checked={facilitiesRedux.find(
                      (ele) => ele.service_name === el.service_name
                    )}
                    onChange={(e) =>
                      addFacility(
                        e.target.checked,
                        el.service_icon,
                        el.service_name,
                        el.service_description
                      )
                    }
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ width: "100%" }}>
          <Grid container>
            {rules.map((el) => (
              <Grid
                container
                item
                alignItems="center"
                direction="column"
                xs={6}
              >
                <Grid item xs={6}>
                  <Typography fontWeight={700} variant="p">
                    {el.service_name}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography fontWeight={300} variant="p">
                    {el.service_description}
                  </Typography>
                </Grid>
              </Grid>
            ))}
            <Grid container item alignItems="center" direction="column" xs={12}>
              <Grid item>
                <RulesModal hotel={true} />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography fontWeight={600} variant="p">
                Add more services:
              </Typography>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} sm={6}>
                <Typography fontWeight={300} variant="p">
                  Service Name:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  onChange={(e) => setServiceName(e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} sm={6}>
                <Typography fontWeight={300} variant="p">
                  Service Description:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  onChange={(e) => setserviceDescription(e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} sm={6}>
                <Typography fontWeight={300} variant="p">
                  Service Icon:
                </Typography>
              </Grid>

              <Grid item xs={11} sm={5}>
                <StyledTextField
                  placeholder="Search"
                  fullWidth
                  onChange={(e) => searchIcon(e)}
                />
              </Grid>
              <Grid item xs={1} sm={1}>
                {selectedIcon ? (
                  <img
                    style={{ paddingLeft: "10px", height: "56px" }}
                    src={selectedIcon}
                  />
                ) : (
                  ""
                )}
              </Grid>
              <Grid container justifyContent="flex-end" item xs={12}>
                <Grid item xs={12} sm={6}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                  >
                    <FormControlLabel
                      value="Facility"
                      control={<Radio />}
                      label="Facility"
                    />
                    <FormControlLabel
                      value="Amenity"
                      control={<Radio />}
                      label="Amenity"
                    />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={6}>
                  {icon.length > 0
                    ? icon.map((el) => (
                        <Button
                          onClick={() => {
                            setSelectedIcon(
                              el.raster_sizes[0].formats[0].preview_url
                            );
                          }}
                        >
                          <img
                            style={{ height: "20px" }}
                            src={el.raster_sizes[0].formats[0].preview_url}
                          />
                        </Button>
                      ))
                    : ""}
                </Grid>
              </Grid>
              <Grid container item justifyContent="flex-end">
                <Grid
                  sx={{ paddingTop: "16px", textAlign: "right" }}
                  item
                  xs={12}
                  sm={6}
                >
                  <StyledButton onClick={() => addService()}>
                    Add Service
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
    </Box>
  );
}
