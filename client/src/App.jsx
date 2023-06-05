import { RouterProvider } from "react-router-dom";
import publicRouter from "./routes/publicRoute";
import Cookie from "js-cookie";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { tokenUserAction } from "./redux/auth/authActions";

function App() {
  const token = Cookie.get("accessToken");
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(tokenUserAction({ token }));
    }
  }, [token, dispatch]);

  return (
    <>
      <RouterProvider router={publicRouter} />
    </>
  );
}

export default App;
