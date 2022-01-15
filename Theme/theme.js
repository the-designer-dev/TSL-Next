import { createTheme } from '@mui/material/styles';


export const darkTheme = createTheme({
  typography: {
    fontFamily: 'Roboto'}
    ,
    palette: {
      type: 'dark',
      primary: {
        main: '#DDDDDD',
      },
      secondary: {
        main: '#999999',
      },
      button:{
        main: '#2AB572'
      },
      background: {
        main: '#1E3459', 
        secondary: '#17161E'
      },
      text:{
          primary: '#DDDDDD',
          secondary:'#6B718A',
          brevity:'#22806E',
          message:'#FFF',
          
      },
      tableBorder:{
          primary:'#9999'
      }
    },
  });

export const lightTheme = createTheme({
  typography: {
    fontFamily: 'Roboto'}
    ,
    palette: {
      type: 'light',
      primary: {
        main: '#646777',
      },
      secondary: {
        main: '#999999',
      },
      background: {
          main: '#fff',
          secondary: '#17161E',
      },
      text:{
        primary: '#646777',
        secondary:'#999999',
        brevity:'#22806E',
        message:'#000'
    },
    tableBorder:{
        primary:'#e0e0e0'
    }
    },
  });