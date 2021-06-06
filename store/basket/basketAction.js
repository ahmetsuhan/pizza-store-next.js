import { basketActionTypes } from "./basketTypes";

export const addItemToBasket = (item) => {
  return {
    type: basketActionTypes.ADD_ITEM_TO_BASKET,
    payload: item,
  };
};

export const removeItemToBasket = (item) => {
  return {
    type: basketActionTypes.REMOVE_ITEM_TO_BASKET,
    payload: item,
  };
};

export const clearBasket = () => {
  return {
    type: basketActionTypes.CLEAR_BASKET,
    payload: [],
  };
};
