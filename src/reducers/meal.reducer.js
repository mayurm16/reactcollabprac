import { initalState } from "./initalState";

export const meals = (state = initalState, action) => ({
  ...state,
  meals: {
    ...state.meals,
    ...action.payload,
  },
});
