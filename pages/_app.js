import Layout from "../components/Layout"
import '../styles/styles.css'
import Head from 'next/head';
import {darkTheme , lightTheme} from '../Theme/theme';
import { ThemeProvider  , createTheme,responsiveFontSizes} from '@mui/material';
import '../styles/custom.scss';

let theme = createTheme();
const darkResposive1 = responsiveFontSizes(darkTheme);
const lightResponsive1 = responsiveFontSizes(lightTheme);

function MyApp({ Component, pageProps }) {
  
  return (
    <><Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
  </Head>

  <ThemeProvider theme={darkResposive1}>    
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </ThemeProvider>
  </>
  )
}

export default MyApp
