import { Box } from '@mui/material';
import React from 'react';
import StyledButton from '../styledComponents/styledButton';
import StyledTextField from '../styledComponents/styledTextField';
import { useState , useEffect} from "react";
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";
import { mapboxApiKey } from './mapComponent';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
function LocationPicker(props) {
    const [selectedLocation, setSelectedLocation] = useState(null)
    const [address, setAddress] = useState([])
  const [viewport, setViewport] = useState({
    width: "100%",
    longitude: 67.035286,
    latitude:24.849957,
    height: "400px",
    borderRadius:'20px',
    zoom: 15,
  });

function onSelect(value){
    setSelectedLocation(value)
    setViewport({
        ...viewport,
        longitude: value.center[0],
        latitude: value.center[1],
        zoom: 17,
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator()
      });
}

async function updateLocation(e){
    const res = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?access_token=${mapboxApiKey}&autocomplete=true&fuzzyMatch=true`)
    console.log(res.data.features)
    setAddress(res.data.features.map((el) => {return {label : el.place_name , center : el.center }}))
}
    return (
        <>
        <Box sx={{display:'flex' , flexDirection:'column'}}>     
        <Autocomplete
      disablePortal
      value={selectedLocation}
      onChange={(event, newValue) => {
          newValue?
        onSelect(newValue):''
      }}
      id="combo-box-demo"
      options={address.length> 0 ? address: []}
      sx={{ width: '100%' }}
      renderInput={(params) => <StyledTextField sx={{backgroundColor:'#FFF' , color:'#000'}} {...params} placeholder='Search'  fullWidth onChange={e => updateLocation(e)}  />}
    />    
        </Box>
    <Box>
<ReactMapGL
  mapStyle="mapbox://styles/mapbox/streets-v11"
  mapboxApiAccessToken={mapboxApiKey}
  {...viewport}
  onViewportChange={(nextViewport) => setViewport(nextViewport)}
  
  >
{selectedLocation?
    <Marker
      latitude={selectedLocation.center[1]}
      longitude={selectedLocation.center[0]}
      offsetLeft={-20}
      offsetTop={-10}>
        <span role="img" aria-label="push-pin">📌</span>

      </Marker>:''
      }
  </ReactMapGL>
  </Box>
  </>
    );
}

export default LocationPicker;