import {
  createBrowserRouter,
  RouteObject,
  useRouteError,
} from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import NewsScreen from "../pages/NewsScreen";
import DocumentsScreen from "../pages/DocumentsScreen";
import InformationForParentScreen from "../pages/InformationForParentScreen";
import AppLayout from "../layouts/AppLayout";
import Typography from "@mui/material/Typography";

const ErrorElement = () => {
  const error = useRouteError();

  console.log("error: ", error);

  return <Typography component="h1">OOOPS...</Typography>;
};

const staticPages: RouteObject = {
  path: "/",
  element: <AppLayout />,
  errorElement: <ErrorElement />,
  children: [
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "news",
      element: <NewsScreen />,
    },
    {
      path: "documents",
      element: <DocumentsScreen />,
    },
    {
      path: "info-for-parent",
      element: <InformationForParentScreen />,
    },
  ],
};

const routes: RouteObject[] = [staticPages];

export default createBrowserRouter(routes);
