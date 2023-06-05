import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Profile from "../components/Profile/Profile";
import LoginRoutes from "../middlewares/LoginRoutes";
import LogoutRoutes from "../middlewares/LogoutRoutes";

// Create Router
const publicRouter = createBrowserRouter([
  {
    path: "/login",
    element: (
      <LogoutRoutes>
        <Login />
      </LogoutRoutes>
    ),
  },
  {
    path: "/register",
    element: (
      <LogoutRoutes>
        <Register />
      </LogoutRoutes>
    ),
  },

  {
    path: "/",
    element: (
      <LoginRoutes>
        <Profile />
      </LoginRoutes>
    ),
  },
]);

// Export default.
export default publicRouter;
