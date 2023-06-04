import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIELD,
  USER_REGISTER_FAIELD,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT_SUCCESS,
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

    default:
      return state;
  }
};

// Export.
export default authReducer;
