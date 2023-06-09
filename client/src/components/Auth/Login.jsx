import React from "react";
import { Link, useNavigate } from "react-router-dom";
import babu from "../../assets/images/01.jpg";
import { useState } from "react";
import { userLoginAction } from "../../redux/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message } = useSelector((state) => state.auth);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  // handleInputChange.
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Tostify MSG.
  const notificationMsg = (msg, type) => {
    if (type == "success") {
      toast.success(`${msg}`);
    } else if (type == "error") {
      toast.error(`${msg}`);
    } else if (type == "warning") {
      toast.warning(`${msg}`);
    }
  };

  // handleLoginFormSubmit.
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    // Validation.
    if (!input.name || !input.email || !input.password) {
      // notificationMsg(`${message}`, "warning");
      notificationMsg(`All fields are required.`, "warning");
    }
    dispatch(userLoginAction({ input, setInput, navigate }));
  };

  return (
    <div className="auth-body">
      <div className="auth-wraper">
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="auth-featured">
          <img src={babu} />
        </div>
        <div className="auth-form">
          <h2>Sign In</h2>
          <div className="form-wraper">
            <form onSubmit={handleLoginFormSubmit}>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  name="email"
                  value={input.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <button type="submit">Log In</button>
              </div>
            </form>
          </div>
          <div className="utility">
            <a href="#">Forgot password</a>
            <Link to="/register">Create an account</Link>
          </div>
          <div className="social-login">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-google"></i>
            </a>
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
