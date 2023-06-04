import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";

// Create RootReducer.
const rootReducer = combineReducers({
  auth: authReducer,
});

// Export.
export default rootReducer;
