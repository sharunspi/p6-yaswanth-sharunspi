import { SWITCH_OFF, SWITCH_ON } from "../types";

export const bulbOn = () => {
  return {
    type: SWITCH_ON,
  };
};

export const bulbOff = () => {
  return {
    type: SWITCH_OFF,
  };
};
