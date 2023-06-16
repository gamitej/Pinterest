import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// lazy
// const Home = lazy(() => import("../pages/Home/Home"));

const Login = lazy(() => import("../pages/Login/Login"));

const Router = () => {
  const route = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return route;
};

export default Router;
