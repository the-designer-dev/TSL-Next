import '../styles/styles.css'
import Head from 'next/head';
import {darkTheme , lightTheme} from '../Theme/theme';
import { ThemeProvider  , createTheme,responsiveFontSizes} from '@mui/material';
import '../styles/custom.scss';
import AdapterMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Provider } from 'react-redux';
import store from '../redux/store.js';
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";
import "@fullcalendar/bootstrap5/main.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

let theme = createTheme();
const darkResposive1 = responsiveFontSizes(darkTheme);
const lightResponsive1 = responsiveFontSizes(lightTheme);

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <><Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
<link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
 
  </Head>
  <Provider store={store}>

  <ThemeProvider theme={darkResposive1}>  
  <LocalizationProvider dateAdapter={AdapterMoment}>  
  {getLayout(<Component {...pageProps} />)}
  </LocalizationProvider>
  </ThemeProvider>
  </Provider>
  </>
  )
}

export default MyApp
