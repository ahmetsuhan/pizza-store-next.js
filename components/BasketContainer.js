import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addItemToBasket,
  removeItemToBasket,
} from "@store/basket/basketAction";
import { calculatebasketTotal } from "@store/basket/basketUtils";
const BasketContainer = () => {
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(addItemToBasket(item));
  };

  const removeItem = (item) => {
    dispatch(removeItemToBasket(item));
  };
  return (
    <div className="asd-basket-container">
      <ul>
        {basket.map((item) => {
          return (
            <li key={item.id}>
              <div className="left">
                <span className="title">{item.name}</span>
                <p className="order-info">{item.text}</p>
              </div>
              <div className="right">
                <div className="input-area">
                  <i onClick={() => addItem(item)} className="fas fa-plus"></i>
                  <span>{item.quantity}</span>
                  <i
                    onClick={() => removeItem(item)}
                    className="fas fa-minus"
                  ></i>
                </div>
                <div>$ {(item.price * item.quantity).toFixed(2)}</div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="order-total-area">
        <span>Total: &nbsp;</span>
        <span>${calculatebasketTotal(basket)}</span>
      </div>
    </div>
  );
};

export default React.memo(BasketContainer);
