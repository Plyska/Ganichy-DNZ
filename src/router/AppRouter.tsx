import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import NewsScreen from "../pages/NewsScreen";
import DocumentsScreen from "../pages/DocumentsScreen";
import InformationForParentScreen from "../pages/InformationForParentScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/news",
    element: <NewsScreen />,
  },
  {
    path: "/documents",
    element: <DocumentsScreen />,
  },
  {
    path: "/info-for-parent",
    element: <InformationForParentScreen />,
  },
]);

const AppRouter = () => <RouterProvider router={router} />

export default AppRouter;
