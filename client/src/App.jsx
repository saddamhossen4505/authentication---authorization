import { RouterProvider } from "react-router-dom";
import publicRouter from "./routes/publicRoute";
import Cookie from "js-cookie";

function App() {

  const token = Cookie.get("accessToken")
  console.log(token);
  
  return (
    <>
      <RouterProvider router={publicRouter} />
    </>
  );
}

export default App;
