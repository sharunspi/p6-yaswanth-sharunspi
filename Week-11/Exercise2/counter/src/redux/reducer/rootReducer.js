import { combineReducers } from "redux";

import stepReducer from "./stepReducer";

// combined reducer
const rootReducer = combineReducers({
  stepper: stepReducer,
});

export default rootReducer;
