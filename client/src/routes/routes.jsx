import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

// Create Router.
const router = createBrowserRouter([...PublicRoutes, ...PrivateRoutes]);

// Export Default.
export default router;
