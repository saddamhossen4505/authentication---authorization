import Profile from "../components/Profile/Profile";
import LoginRoutes from "../middlewares/LoginRoutes";

// Create PrivateRoutes.
const PrivateRoutes = [
  {
    element: <LoginRoutes />,
    children: [
      {
        path: "/",
        element: <Profile />,
      },
    ],
  },
];

// Export.
export default PrivateRoutes;
