import { basketActionTypes } from "./basketTypes";
import {
  addItemToBasket,
  calculatebasketTotal,
  removeItemToBasket,
} from "./basketUtils";

const initialState = {
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case basketActionTypes.ADD_ITEM_TO_BASKET:
      return {
        ...state,
        basket: addItemToBasket(action.payload, state.basket),
      };

    case basketActionTypes.REMOVE_ITEM_TO_BASKET:
      return {
        ...state,
        basket: removeItemToBasket(action.payload, state.basket),
      };
    case basketActionTypes.CLEAR_BASKET:
      return {
        ...state,
        basket: action.payload,
      };

    default:
      return state;
  }
};

export { basketReducer };
