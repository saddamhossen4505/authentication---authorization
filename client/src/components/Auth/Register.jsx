import { Link, useNavigate } from "react-router-dom";
import babu2 from "../../assets/images/02.jpg";
import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAction } from "../../redux/auth/authActions";

const Register = () => {
  const navigate = useNavigate();
  const { message } = useSelector((state) => state.auth);
  const [input, setInput] = useState({
    name: "",
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

  // Load dispatch.
  const dispatch = useDispatch();

  // handleRegisterForm.
  const handleRegisterForm = async (e) => {
    e.preventDefault();
    dispatch(userRegisterAction({ input, setInput }));
    navigate("/login");
  };

  return (
    <div className="auth-body">
      <div className="auth-wraper">
        <div className="auth-featured">
          <img src={babu2} />
        </div>
        <div className="auth-form">
          <h2>Sign Up</h2>
          <div className="form-wraper">
            <form onSubmit={handleRegisterForm}>
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={handleInputChange}
                />
              </div>
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
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
          <div className="utility">
            <a href="#">Forgot password</a>
            <Link to="/login">Log In now</Link>
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

export default Register;
