import { pizzaActionTypes } from "./pizzaTypes";

export const getPizzas = () => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:3004/pizzas", {
      method: "GET",
      "Content-type": "application/json",
    });

    const resData = await res.json();

    dispatch({ type: pizzaActionTypes.GET_PIZZAS, payload: resData });
  };
};

export const postPizza = (pizza) => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:3004/pizzas", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(pizza),
    });
  };
};
