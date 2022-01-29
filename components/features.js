import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { ElevatorOutlined, PoolOutlined, Restaurant, Wifi } from '@mui/icons-material';
import RulesModal from './rulesModal'
import {setAmenities,setFacilities,setRules} from '../redux/addHotel';
import { useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const dispatch = useDispatch()
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Features() {
  const [value, setValue] = React.useState(0);
  const [rules , setRules] = React.useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{  backgroundColor:'button.main' }}>
        <Tabs allowScrollButtonsMobile variant='scrollable'  scrollButtons sx={{'& .MuiTabs-indicator':{height:'5px',backgroundColor:'#FFF'} , '& .MuiTabs-flexContainer':{justifyContent:'space-between'}}} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{color:'#FFF'}} label="Amenities" {...a11yProps(0)} />
          <Tab sx={{color:'#FFF'}} label="Facilities" {...a11yProps(1)} />
          <Tab sx={{color:'#FFF'}} label="Rules" {...a11yProps(2)} />
          <Tab sx={{color:'#FFF'}} label="Custom" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <Box sx={{width:'100%'}}>

            <Grid container spacing={2}>
                <Grid container item xs={12} sm={6} alignItems='center'>
                    <Grid item xs={2}><ElevatorOutlined sx={{fontSize:'30px'}}/></Grid>
                    <Grid container item direction='column' xs={8}>
                    <Grid item xs={6}><Typography fontWeight={700} variant='p'>Elevator</Typography></Grid>
                    <Grid item xs={6}><Typography fontWeight={300} variant='p'>Elevator available in hotel</Typography></Grid>
                    </Grid>
                    <Grid container item xs={2} justifyContent='flex-end'><Checkbox/></Grid>
                </Grid>
                <Grid container item xs={12} sm={6} alignItems='center'>
                    <Grid item xs={2}><Wifi sx={{fontSize:'30px'}}/></Grid>
                    <Grid container item direction='column' xs={8}>
                    <Grid item xs={6}><Typography fontWeight={700} variant='p'>Free Wifi</Typography></Grid>
                    <Grid item xs={6}><Typography fontWeight={300} variant='p'>Free Wifi available in hotel</Typography></Grid>
                    </Grid>
                    <Grid container item xs={2} justifyContent='flex-end'><Checkbox/></Grid>
                </Grid>
                <Grid container item xs={12} sm={6} alignItems='center'>
                    <Grid item xs={2}><PoolOutlined sx={{fontSize:'30px'}}/></Grid>
                    <Grid container item direction='column' xs={8}>
                    <Grid item xs={6}><Typography fontWeight={700} variant='p'>Swimming Pool</Typography></Grid>
                    <Grid item xs={6}><Typography fontWeight={300} variant='p'>Well maintained swimming pool available in hotel</Typography></Grid>
                    </Grid>
                    <Grid container item xs={2} justifyContent='flex-end'><Checkbox/></Grid>
                </Grid>
                <Grid container item xs={12} sm={6} alignItems='center'>
                    <Grid item xs={2}><Restaurant sx={{fontSize:'30px'}}/></Grid>
                    <Grid container item direction='column' xs={8}>
                    <Grid item xs={6}><Typography fontWeight={700} variant='p'>Restaurant</Typography></Grid>
                    <Grid item xs={6}><Typography fontWeight={300} variant='p'>Restaurant available with top notch food</Typography></Grid>
                    </Grid>
                    <Grid container item xs={2} justifyContent='flex-end'><Checkbox/></Grid>
                </Grid>
            </Grid>
          </Box>
          
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Box sx={{width:'100%'}}>

<Grid container spacing={2}>
    <Grid container item xs={12} sm={6} alignItems='center'>
        <Grid item xs={2}><ElevatorOutlined sx={{fontSize:'30px'}}/></Grid>
        <Grid container item direction='column' xs={8}>
        <Grid item xs={6}><Typography fontWeight={700} variant='p'>Elevator</Typography></Grid>
        <Grid item xs={6}><Typography fontWeight={300} variant='p'>Elevator available in hotel</Typography></Grid>
        </Grid>
        <Grid container item xs={2} justifyContent='flex-end'><Checkbox/></Grid>
    </Grid>
    <Grid container item xs={12} sm={6} alignItems='center'>
        <Grid item xs={2}><Wifi sx={{fontSize:'30px'}}/></Grid>
        <Grid container item direction='column' xs={8}>
        <Grid item xs={6}><Typography fontWeight={700} variant='p'>Free Wifi</Typography></Grid>
        <Grid item xs={6}><Typography fontWeight={300} variant='p'>Free Wifi available in hotel</Typography></Grid>
        </Grid>
        <Grid container item xs={2} justifyContent='flex-end'><Checkbox/></Grid>
    </Grid>
    <Grid container item xs={12} sm={6} alignItems='center'>
        <Grid item xs={2}><PoolOutlined sx={{fontSize:'30px'}}/></Grid>
        <Grid container item direction='column' xs={8}>
        <Grid item xs={6}><Typography fontWeight={700} variant='p'>Swimming Pool</Typography></Grid>
        <Grid item xs={6}><Typography fontWeight={300} variant='p'>Well maintained swimming pool available in hotel</Typography></Grid>
        </Grid>
        <Grid container item xs={2} justifyContent='flex-end'><Checkbox/></Grid>
    </Grid>
    <Grid container item xs={12} sm={6} alignItems='center'>
        <Grid item xs={2}><Restaurant sx={{fontSize:'30px'}}/></Grid>
        <Grid container item direction='column' xs={8}>
        <Grid item xs={6}><Typography fontWeight={700} variant='p'>Restaurant</Typography></Grid>
        <Grid item xs={6}><Typography fontWeight={300} variant='p'>Restaurant available with top notch food</Typography></Grid>
        </Grid>
        <Grid container item xs={2} justifyContent='flex-end'><Checkbox/></Grid>
    </Grid>
</Grid>
</Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Box sx={{width:'100%'}}>

          <Grid container>
        {rules.map((el) => (
        <Grid container item alignItems='center' direction='column' xs={6}>
            <Grid item xs={6}><Typography fontWeight={700} variant='p'>{el.Service_name}</Typography></Grid>
            <Grid item xs={6}><Typography fontWeight={300} variant='p'>{el.Service_description}</Typography></Grid>
        </Grid>
        ))}
        <Grid container item alignItems='center' direction='column' xs={12}>
            <Grid item>
                <RulesModal/>
            </Grid>
            </Grid>
        </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Box sx={{width:'100%'}}>

        <Grid container>
        {rules.map((el) => (
        <Grid container item alignItems='center' direction='row' xs={12}>
        <Grid item xs={4}><Typography fontWeight={700} variant='p'>{el.Service_name}</Typography></Grid>
        <Grid item xs={8}><Typography fontWeight={300} variant='p'>{el.Service_description}</Typography></Grid>
        </Grid>
        ))}
    
        </Grid>
        </Box>
      </TabPanel>
    </Box>
  );
}