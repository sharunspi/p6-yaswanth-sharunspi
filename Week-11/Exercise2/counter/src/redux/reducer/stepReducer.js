import { ADD_STEP, RESET_STEP } from "../types";

const INITIAL_STATE = {
  steps: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_STEP:
      return {
        ...state,
        steps: state.steps + 1,
      };

    case RESET_STEP:
      return {
        ...state,
        steps: 0,
      };

    default:
      return state;
  }
};

export default reducer;
