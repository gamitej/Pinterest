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
      <img src={login} alt="" className="h-[88vh] w-full" />
    </div>
  );
};

export default Login;
