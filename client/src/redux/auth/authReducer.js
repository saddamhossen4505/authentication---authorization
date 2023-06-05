import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIELD,
  USER_REGISTER_FAIELD,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT_SUCCESS,
  TOKEN_USER_SUCCESS,
  TOKEN_USER_FAIELD,
} from "./actionTypes";
import initialState from "./initialState";

// Create AuthReducer.
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_REGISTER_SUCCESS:
      return (state = {
        ...state,
        message: payload,
      });

    case USER_REGISTER_FAIELD:
      return (state = {
        ...state,
        message: payload,
      });

    case USER_LOGIN_SUCCESS:
      return (state = {
        ...state,
        message: "User login successful",
        user: payload,
        loginState: true,
      });

    case USER_LOGIN_FAIELD:
      return (state = {
        ...state,
        message: payload,
      });

    case USER_LOGOUT_SUCCESS:
      return (state = {
        ...state,
        message: payload,
        loginState: false,
        user: null,
      });

    case TOKEN_USER_SUCCESS:
      return (state = {
        ...state,
        message: "You are logedin",
        user: payload,
        loginState: true,
      });

    case TOKEN_USER_FAIELD:
      return (state = {
        ...state,
        message: payload,
      });

    default:
      return state;
  }
};

// Export.
export default authReducer;
