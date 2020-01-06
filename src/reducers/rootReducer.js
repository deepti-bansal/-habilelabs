import { combineReducers } from "redux";

const appReducer = combineReducers({});

const rootReducer = (state, action) => {
  if (action.type === "APP_LOGOUT_SUCCESS") {
    state = undefined;
  }

  return appReducer(state, action);
};
export default rootReducer;
