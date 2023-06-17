import { Navigate } from "react-router-dom";
import login from "../../assests/login.png";
import { useLogin } from "../../store/login/useLogin";

const Login = () => {
  const { isLoggined } = useLogin();

  if (isLoggined) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="">
      <img
        src={login}
        alt=""
        className="h-[calc(100vh-5rem)] w-full"
        loading="lazy"
      />
    </div>
  );
};

export default Login;
