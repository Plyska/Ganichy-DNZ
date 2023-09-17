import { RouterProvider } from "react-router-dom";
import router from "./constants/router";

import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
