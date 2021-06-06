import { pizzaActionTypes } from "./pizzaTypes";

const initialState = {
  pizzas: [],
};

export const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case pizzaActionTypes.GET_PIZZAS:
      return {
        ...state,
        pizzas: action.payload,
      };
    default:
      return state;
  }
};
