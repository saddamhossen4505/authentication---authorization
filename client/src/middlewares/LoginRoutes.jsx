import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const LoginRoutes = () => {
  const { loginState } = useSelector((state) => state.auth);

  return loginState ? <Outlet /> : <Navigate to={"/login"} />;
};

export default LoginRoutes;
