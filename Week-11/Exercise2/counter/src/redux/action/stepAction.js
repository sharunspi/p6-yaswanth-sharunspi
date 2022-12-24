import { ADD_STEP, RESET_STEP } from "../types";

export const addStep = () => {
  return {
    type: ADD_STEP,
  };
};

export const resetStep = () => {
  return {
    type: RESET_STEP,
  };
};
