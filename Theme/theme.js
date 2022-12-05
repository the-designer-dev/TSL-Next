import { createTheme } from "@mui/material/styles";
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
    mode: "dark",
    primary: {
      main: "#DDDDDD",
    },
    secondary: {
      main: "#999999",
    },
    button: {
      main: "#2AB572",
      danger: "#db242a",
    },
    background: {
      main: "#1E3459",
      secondary: "#232229",
    },
    text: {
      primary: "#DDDDDD",
      secondary: "#6B718A",
      brevity: "#22806E",
      message: "#FFF",
    },
    tableBorder: {
      primary: "#9999",
    },
    table: {
      tableRow1: "#203B59",
      tableRow2: "#1E3459",
    },
  },
  overrides: {
    MUIRichTextEditor: {
      toolbar: {
        backgroundColor: "#2AB572",
        padding: "5px 10px",
      },
      root: {
        marginTop: 0,
        width: "inherit",
      },
      container: {
        border: "1px solid #203B59",
      },
      editorContainer: {
        width: "inherit",
        backgroundColor: "#FFF",
        color: "#000",
        minHeight: "200px",
      },
      placeHolder: {
        width: "inherit",
      },
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        InputLabelProps: { shrink: false },
        label: "",
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E3459",
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          backgroundColor: "#203B59",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#203B59",
          backgroundImage: "none",
        },
      },
    },
  },
});
export const lightTheme = createTheme({
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
    mode: "light",
    primary: {
      main: "#232229",
    },
    secondary: {
      main: "#999999",
    },
    button: {
      main: "#2AB572",
      danger: "#db242a",
    },
    background: {
      main: "#f1f1f1",
      secondary: "#FFF",
    },
    text: {
      primary: "#1E3458",
      secondary: "#6B718A",
      brevity: "#22806E",
      message: "#FFF",
    },
    tableBorder: {
      primary: "#9999",
    },
    table: {
      tableRow1: "#fff",
      tableRow2: "#fff",
    },
  },
  overrides: {
    MUIRichTextEditor: {
      toolbar: {
        backgroundColor: "#2AB572",
        padding: "5px 10px",
        color: "#fff",
      },
      root: {
        marginTop: 0,
        width: "inherit",
      },
      container: {
        border: "1px solid #2ab572",
        borderRadius: "10px",
        overflow: "hidden",
      },
      editorContainer: {
        width: "inherit",
        backgroundColor: "#FFF",
        color: "#000",
        minHeight: "200px",
        padding: "10px 10px",
      },
      placeHolder: {
        width: "inherit",
      },
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        // InputLabelProps: { shrink: false },
        // label: "",
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          backgroundColor: "#203B59",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#203B59",
          backgroundImage: "none",
        },
      },
    },
  },
});
