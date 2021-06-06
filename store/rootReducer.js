import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { pizzaReducer } from "./pizza/pizzaReducer";
import { basketReducer } from "./basket/basketReducer";
export const rootReducer = combineReducers({
  user: userReducer,
  pizza: pizzaReducer,
  basket: basketReducer,
});
