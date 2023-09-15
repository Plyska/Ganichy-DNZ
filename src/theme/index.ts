import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#6200ea",
    },
    secondary: {
      main: "#ff3d00",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#6200ea",
    },
    secondary: {
      main: "#ff3d00",
    },
    mode: "dark",
  },
});

export { lightTheme, darkTheme };
