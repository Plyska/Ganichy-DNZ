import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello Home!</div>,
  },
  {
    path: "/about-us",
    element: <div>Hello About Us!</div>,
  },
  {
    path: "/rooms",
    element: <div>Hello About Us!</div>,
  },
]);

const AppRouter = () => <RouterProvider router={router} />

export default AppRouter;
