import { Box } from "@mui/material";
import React from "react";
import StyledButton from "../styledComponents/styledButton";
import StyledTextField from "../styledComponents/styledTextField";
import { useState, useEffect } from "react";
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";
import { mapboxApiKey } from "./mapComponent";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCoordinates } from "../redux/addHotel";
function ShowMap(props) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const hotel = useSelector((state) => state.addHotel);
  const [longitude, setLongitude] = useState(
    props.latitude ? props.latitude : hotel.coordinates[0].latitude
  );
  const [latitude, setLatitude] = useState(
    props.longitude ? props.longitude : hotel.coordinates[0].longitude
  );
  useEffect(() => {
    setLatitude(
      props.longitude ? props.longitude : hotel.coordinates[0].longitude
    );
    setLongitude(
      props.latitude ? props.latitude : hotel.coordinates[0].latitude
    );
  }, [props]);
  const [address, setAddress] = useState([]);
  const dispatch = useDispatch();
  const [viewport, setViewport] = useState({
    width: "100%",
    longitude: props.latitude ? props.latitude : hotel.coordinates[0].latitude,
    latitude: props.longitude
      ? props.longitude
      : hotel.coordinates[0].longitude,
    height: props.height ? props.height : "400px",
    borderRadius: "20px",
    zoom: 15,
  });
  function onSelect(value) {
    setSelectedLocation(value);
    setViewport({
      ...viewport,
      longitude: value.center[0],
      latitude: value.center[1],
      zoom: 17,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
    });
    setLongitude(value.center[0]);
    setLatitude(value.center[1]);
    dispatch(
      setCoordinates([
        { longitude: value.center[0], latitude: value.center[1] },
      ])
    );
  }
  async function updateLocation(e) {
    if (e.target.value !== "") {
      const res = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?access_token=${mapboxApiKey}&autocomplete=true&fuzzyMatch=true`
      );
      console.log(res.data.features);
      setAddress(
        res.data.features.map((el) => {
          return { label: el.place_name, center: el.center };
        })
      );
    }
  }
  const onMarkerDragStart = (event) => {
    const { latitude, longitude } = event;
    // Any functionality for when a drag starts
  };
  const onMarkerDragEnd = (event) => {
    // Any functionality for when a drag ends
    setLongitude(event.lngLat[0]);
    setLatitude(event.lngLat[1]);
    dispatch(
      setCoordinates([
        { longitude: event.lngLat[0], latitude: event.lngLat[1] },
      ])
    );
  };
  const onMarkerDrag = (event) => {
    const { latitude, longitude } = event;
    // Any functionality when marker moves while being dragged
  };
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}></Box>
      <Box>
        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxApiAccessToken={mapboxApiKey}
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
          {longitude ? (
            <Marker
              latitude={latitude}
              longitude={longitude}
              onDragStart={(e) => onMarkerDragStart(e)}
              onDragEnd={(e) => onMarkerDragEnd(e)}
              onDrag={(e) => onMarkerDrag(e)}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <span role="img" aria-label="push-pin">
                📌
              </span>
            </Marker>
          ) : (
            ""
          )}
        </ReactMapGL>
      </Box>
    </>
  );
}
export default ShowMap = React.memo(ShowMap);
