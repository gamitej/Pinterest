import { Suspense, lazy } from "react";
import { useLogin } from "./store/login/useLogin";
import { Navigate, Route, Routes } from "react-router-dom";

// lazy
const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
// comp
import Navbar from "./pages/Navbar/Navbar";
import ProtectedRoute from "./pages/Login/ProtectedRoutes";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  const { isLoggined } = useLogin();

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Routes */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<ProtectedRoute isAuth={isLoggined} />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>
    </div>
  );
}

const Loading = () => {
  return (
    <div
      className="h-[90vh] w-full flex justify-center
   items-center"
    >
      Loading...
    </div>
  );
};

export default App;
