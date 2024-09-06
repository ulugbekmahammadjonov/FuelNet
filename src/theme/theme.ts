import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Extra-small
      sm: 600, // Small
      md: 800, // Medium
      lg: 1200, // Large (custom qiymat)
      xl: 1392, // Extra-large
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
