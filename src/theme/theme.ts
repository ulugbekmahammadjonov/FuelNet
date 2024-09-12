import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, 
      sm: 700, 
      md: 900, 
      lg: 1200, 
      xl: 1392, 
    },
  },
  palette: {
    primary: {
      main: "#3ABAAA",
    },
    secondary: {
      main: "#ffffff",
    },
    error: {
      main: "#FF4E4E",
      
    },
    info: {
      main: "#E9E9E9",
    },
    text: {
      primary: "#171429",
      secondary: "#69757A",
    },
    
  },
});

export default theme;
