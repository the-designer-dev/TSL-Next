import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@mui/material';
import {setServices} from '../redux/addHotel'
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ProvidedServices() {
  const [formats, setFormats] = React.useState(() => []);
  const dispatch = useDispatch()
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats)
    dispatch(setServices(newFormats.map((el) => {return {extra_field_name:el , extra_field_price : 0}})))};
    const matches = useMediaQuery("(min-width:370px)");
  return (
    <ToggleButtonGroup
        fullWidth
      value={formats}
      onChange={handleFormat}
      orientation={`${matches ? `horizontal` : `vertical`}`}
      aria-label="text formatting"
    >
      <ToggleButton   sx={{'&.MuiToggleButton-root':{'&.Mui-selected':{backgroundColor:'button.main'}}}}  value="Breakfast" aria-label="bold">
        <Typography variant='p'>Breakfast</Typography>
      </ToggleButton>
      <ToggleButton  sx={{'&.MuiToggleButton-root':{'&.Mui-selected':{backgroundColor:'button.main'}}}} value="Lunch" aria-label="italic">
      <Typography variant='p'>Lunch</Typography>
      </ToggleButton>
      <ToggleButton  sx={{'&.MuiToggleButton-root':{'&.Mui-selected':{backgroundColor:'button.main'}}}} value="HiTea" aria-label="underlined">
      <Typography variant='p'>HiTea</Typography>
      </ToggleButton>
      <ToggleButton  sx={{'&.MuiToggleButton-root':{'&.Mui-selected':{backgroundColor:'button.main'}}}} value="Dinner" aria-label="color" >
      <Typography variant='p'>Dinner</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}