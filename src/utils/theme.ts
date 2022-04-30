import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

/**
 * Here is a basic custom theme for this app
 */
const theme = createTheme({
  shape: {
    borderRadius: 9,
  },
  typography: {
    // ITC Avant Garde Gothic Pro Book
    fontFamily: ["itc-avant-garde-gothic-pro", "sans-serif"].join(","),
    button: {
      textTransform: "none",
      textShadow: "none",
      fontWeight: 700,
    },
    h1: {
      fontWeight: 700, // bold
      fontSize: 58,
      letterSpacing: -0.8,
      textShadow: "2px 2px 3px rgba(0,0,20,0.4)",
    },
    h2: {
      fontWeight: 600, // semi bold
      fontSize: 34,
    },
    h3: {
      fontWeight: 600, // semi bold
      fontSize: 23,
    },
    body1: {
      fontWeight: 700,
      fontSize: 20,
    },
  },
  palette: {
    text: {
      primary: "#f4f4fd",
    },
    background: {
      default: "#0c1220",
    },
    primary: {
      main: "#003399",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
