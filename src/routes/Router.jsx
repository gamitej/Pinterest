import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { useLogin } from "../store/login/useLogin";
import ProtectedRoute from "../pages/Login/ProtectedRoutes";

// lazy
const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));

const Router = () => {
  const { isloggined } = useLogin();

  const route = useRoutes([
    {
      path: "/",
      element: <ProtectedRoute isAuth={isloggined} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "*",
          element: <div>Page Not Found</div>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <Navigate to="/login" />,
    },
  ]);

  return route;
};

export default Router;
