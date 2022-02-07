import { Box } from "@mui/material";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
export const mapboxApiKey = 'pk.eyJ1IjoibWNzbGluZ2VyIiwiYSI6ImNreW85djl3MDBicjQydm4yc24yd2N5Z2EifQ.6I9gfbJAP6_toYGBM9lSLQ';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
export default function Map({ locations, restaurants,airports,hospitals,attractions }) {
const [selectedLocation, setSelectedLocation] = useState({})

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "400px",
    borderRadius:'20px',
    latitude: locations.latitude,
    longitude: locations.longitude,
    zoom: 15
  });
return(
<Box sx={{ borderRadius:'20px'}}>
<ReactMapGL
  mapStyle="mapbox://styles/mapbox/streets-v11"
  mapboxApiAccessToken={mapboxApiKey}
  {...viewport}
  onViewportChange={(nextViewport) => setViewport(nextViewport)}
  >
  
      <Marker
      latitude={locations.latitude}
      longitude={locations.longitude}
      offsetLeft={-20}
      offsetTop={-10}>
           <a onClick={() => {
          setSelectedLocation(location);
        }}>
        <span role="img" aria-label="push-pin">📌</span>
        </a>
      </Marker>
  
    
  
  {restaurants.map((location) => (
    <div key={location.id}>
      <Marker
      latitude={location.center[1]}
      longitude={location.center[0]}
      offsetLeft={-20}
      offsetTop={-10}>
           <a onClick={() => {
          setSelectedLocation(location);
        }}>
        <RestaurantOutlinedIcon sx={{color:'button.main'}}/>
        </a>
      </Marker>
      {selectedLocation.id === location.id ? (
      <Popup
      onClose={() => setSelectedLocation({})}
      closeOnClick={true}
      latitude={location.center[1]}
      longitude={location.center[0]}>
        {location.place_name}
      </Popup>) : (false)}
    </div>
  ))}
  {airports.map((location) => (
    <div key={location.id}>
      <Marker
      latitude={location.center[1]}
      longitude={location.center[0]}
      offsetLeft={-20}
      offsetTop={-10}>
           <a onClick={() => {
          setSelectedLocation(location);
        }}>
        <LocalAirportIcon sx={{color:'button.main'}}/>
        </a>
      </Marker>
      {selectedLocation.id === location.id ? (
      <Popup
      onClose={() => setSelectedLocation({})}
      closeOnClick={true}
      latitude={location.center[1]}
      longitude={location.center[0]}>
        {location.place_name}
      </Popup>) : (false)}
    </div>
  ))}
  {hospitals.map((location) => (
    <div key={location.id}>
      <Marker
      latitude={location.center[1]}
      longitude={location.center[0]}
      offsetLeft={-20}
      offsetTop={-10}>
           <a onClick={() => {
          setSelectedLocation(location);
        }}>
        <LocalHospitalIcon sx={{color:'button.main'}}/>
        </a>
      </Marker>
      {selectedLocation.id === location.id ? (
      <Popup
      onClose={() => setSelectedLocation({})}
      closeOnClick={true}
      latitude={location.center[1]}
      longitude={location.center[0]}>
        {location.place_name}
      </Popup>) : (false)}
    </div>
  ))}
  {attractions.map((location) => (
    <div key={location.id}>
      <Marker
      latitude={location.center[1]}
      longitude={location.center[0]}
      offsetLeft={-20}
      offsetTop={-10}>
           <a onClick={() => {
          setSelectedLocation(location);
        }}>
        <AccountBalanceOutlinedIcon sx={{color:'button.main'}}/>
        </a>
      </Marker>
      {selectedLocation.id === location.id ? (
      <Popup
      onClose={() => setSelectedLocation({})}
      closeOnClick={true}
      latitude={location.center[1]}
      longitude={location.center[0]}>
        {location.place_name}
      </Popup>) : (false)}
    </div>
  ))}
</ReactMapGL>
</Box>)
}