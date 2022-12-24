import { combineReducers } from "redux";

import lightReducer from "./lightReducer";

// combined reducer
const rootReducer = combineReducers({
  bulb: lightReducer,
});

export default rootReducer;
