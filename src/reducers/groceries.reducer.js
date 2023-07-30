import { initalState } from "./initalState";

export const groceries = (state = initalState, action) => ({
  ...state,
  groceries: action.payload,
});
