import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const LogoutRoutes = ({ children }) => {
  const { loginState } = useSelector((state) => state.auth);

  return loginState == false ? children : <Navigate to={"/"} />;
};

export default LogoutRoutes;
