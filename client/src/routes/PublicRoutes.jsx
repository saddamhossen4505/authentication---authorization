import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import LogoutRoutes from "../middlewares/LogoutRoutes";

// Create PublicRoutes.
const PublicRoutes = [
  {
    element: <LogoutRoutes />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
];

// Export.
export default PublicRoutes;
