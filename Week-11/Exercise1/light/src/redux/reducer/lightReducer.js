import { SWITCH_OFF, SWITCH_ON } from "../types";

const INITIAL_STATE = {
  light: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SWITCH_OFF:
      return {
        ...state,
        light: false,
      };

    case SWITCH_ON:
      return {
        ...state,
        light: true,
      };

    default:
      return state;
  }
};

export default reducer;
