import { useLogin } from "../../store/login/useLogin";
import login from "../../assests/login.png";
import { Navigate } from "react-router-dom";
// import BasicModal from "../../components/Modal/BasicModal";

const Login = () => {
  const { isLoggined } = useLogin();

  if (isLoggined) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="">
      <img src={login} alt="" className="h-[92vh] w-full" />

      {/* <BasicModal /> */}
    </div>
  );
};

export default Login;
