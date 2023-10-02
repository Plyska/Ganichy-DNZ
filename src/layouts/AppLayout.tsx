import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;
