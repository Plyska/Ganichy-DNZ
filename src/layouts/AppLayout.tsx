import { Outlet } from "react-router-dom";

const AppLayout = (): JSX.Element => {
  return (
    <>
      <header style={{ height: "80px", background: "silver" }}> HEADER </header>
      <Outlet />
    </>
  );
};

export default AppLayout;
