import axios from "axios";
import {
  USER_REGISTER_FAIELD,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIELD,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIELD,
  TOKEN_USER_SUCCESS,
  TOKEN_USER_FAIELD,
} from "./actionTypes";

/**
 *  User Register Action.
 */
export const userRegisterAction =
  ({ input, setInput }) =>
  async (dispatch) => {
    try {
      await axios
        .post("http://localhost:5050/api/v1/auth/register", input)
        .then((res) => {
          setInput({
            name: "",
            email: "",
            password: "",
          });
          dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data.message });
        })
        .catch((err) => {
          dispatch({
            type: USER_REGISTER_FAIELD,
            payload: err.response.data.message,
          });
        });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIELD,
        payload: error.message,
      });
    }
  };

/**
 *  User Login Action.
 */
export const userLoginAction =
  ({ input, setInput, navigate }) =>
  async (dispatch) => {
    try {
      await axios
        .post("http://localhost:5050/api/v1/auth/login", input, {
          withCredentials: true,
        })
        .then((res) => {
          setInput({
            email: "",
            password: "",
          });
          dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.user });
          navigate("/");
        })
        .catch((err) => {
          dispatch({
            type: USER_LOGIN_FAIELD,
            payload: err.response.data.message,
          });
        });
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIELD,
        payload: error.message,
      });
    }
  };

/**
 *  User Login Action.
 */
export const userLogoutAction =
  ({ navigate }) =>
  async (dispatch) => {
    try {
      await axios
        .post(
          "http://localhost:5050/api/v1/auth/logout",
          {},
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          dispatch({ type: USER_LOGOUT_SUCCESS, payload: res.data.message });
          navigate("/login");
        })
        .catch((err) => {
          dispatch({
            type: USER_LOGOUT_FAIELD,
            payload: err.response.data.message,
          });
        });
    } catch (error) {
      dispatch({
        type: USER_LOGOUT_FAIELD,
        payload: error.message,
      });
    }
  };

/**
 *  User Login Action.
 */
export const tokenUserAction =
  ({ token }) =>
  async (dispatch) => {
    try {
      axios
        .get("http://localhost:5050/api/v1/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch({ type: TOKEN_USER_SUCCESS, payload: res.data.user });
        })
        .catch((error) => {
          dispatch({
            type: USER_LOGOUT_SUCCESS,
            payload: error.response.data.message,
          });
        });
    } catch (error) {
      dispatch({
        type: USER_LOGOUT_SUCCESS,
        payload: error.message,
      });
    }
  };
