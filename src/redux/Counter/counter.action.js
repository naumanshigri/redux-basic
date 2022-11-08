import { INCREAMENT, DECREAMENT } from "./counter.types";

export const increateCounter = () => {
  return {
    type: INCREAMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREAMENT,
  };
};
