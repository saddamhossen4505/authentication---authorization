import { RouterProvider } from "react-router-dom";
import Cookie from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tokenUserAction } from "./redux/auth/authActions";
import router from "./routes/routes";

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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
