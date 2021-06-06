import React from "react";

import { useSelector } from "react-redux";
import Pizza from "./Pizza";

const Pizzas = () => {
  const pizzas = useSelector((state) => state.pizza.pizzas);

  if (!pizzas || pizzas.length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div className="pizzas_wrapper">
        <div className="articles">
          {pizzas.slice(0, 4).map((pizza) => {
            return (
              <Pizza
                key={pizza.id}
                id={pizza.id}
                text={pizza.text}
                name={pizza.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pizzas;
