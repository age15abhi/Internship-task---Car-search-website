import { ActionTypes } from "../constants/action.types";

export const setCars = cars => {
  return {
    type: ActionTypes.SET_CARS,
    payload: cars,
  };
};

export const selectedCar = car => {
  return {
    type: ActionTypes.SELECTED_CAR,
    payload: car,
  };
};
