import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

const AppLayout = (): JSX.Element => {
  return (
    <>
      <Box component="header"> HEADER </Box>
      <Outlet />
    </>
  );
};

export default AppLayout;
