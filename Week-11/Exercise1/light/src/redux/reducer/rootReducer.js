import { combineReducers } from "redux";

import lightReducer from "./lightReducer";

const rootReducer = combineReducers({
  bulb: lightReducer,
});

export default rootReducer;
