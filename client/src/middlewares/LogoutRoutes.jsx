import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const LogoutRoutes = () => {
  const { loginState } = useSelector((state) => state.auth);

  return loginState == false ? <Outlet /> : <Navigate to={"/"} />;
};

export default LogoutRoutes;
