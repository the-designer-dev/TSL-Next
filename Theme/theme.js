import { createTheme } from '@mui/material/styles';
export const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  },
    palette: {
      mode: 'dark',
      primary: {
        main: '#DDDDDD',
      },
      secondary: {
        main: '#999999',
      },
      button:{
        main: '#2AB572',
        danger: '#e7101a'
      },
      background: {
        main: '#1E3459',
        secondary: '#232229'
      },
      text:{
          primary: '#DDDDDD',
          secondary:'#6B718A',
          brevity:'#22806E',
          message:'#FFF',
      },
      tableBorder:{
          primary:'#9999'
      },
      table:{
        tableRow1: '#203B59',
        tableRow2: '#1E3459'
      }
    },
    overrides: {
      MUIRichTextEditor: {
        toolbar:{
              backgroundColor:'#2AB572',
              padding:'5px 10px'
        },
          root: {
              marginTop: 0,
              width: "inherit"
          },
          container: {
              border: "1px solid #203B59"
          },
          editorContainer:{
            width:'inherit',
            backgroundColor:'#FFF',
            color:'#000',
            minHeight:'200px'
          },
          placeHolder:{
            width:'inherit'
          }
      }
  }
  ,
  components: {
    MuiTextField:{
      defaultProps:{
        InputLabelProps:{shrink: false},
        label:''
    }} ,
    MuiList:{
      styleOverrides:{
      root:{
        backgroundColor:'#1E3459'}
}} ,
MuiPickersDay:{
  styleOverrides:{
  root:{
    backgroundColor:'#203B59'
  },
}
},
MuiDialog:{
  styleOverrides:{
    paper:{
      backgroundColor:'#203B59',
      backgroundImage:'none',
    },
}
  },
 
}
  });
export const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: 'Roboto'}
    ,
    palette: {
      mode: 'light',
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
        primary:'#E0E0E0'
    }
    },
  });