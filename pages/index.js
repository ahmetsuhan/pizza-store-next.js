import React from "react";
import { connect } from "react-redux";

import PizzaOfTheDay from "@/components/PizzaOfTheDay.js";
import Pizzas from "@/components/Pizzas.js";

const HomePage = ({ user, pizzas, pizzaOfTheDay }) => {
  if (
    user.length === 0 ||
    !user ||
    pizzas.length === 0 ||
    !pizzas ||
    !pizzaOfTheDay ||
    pizzaOfTheDay.length === 0
  ) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <PizzaOfTheDay
        img={pizzaOfTheDay[0].img}
        name={pizzaOfTheDay[0].name}
        text={pizzaOfTheDay[0].text}
        id={pizzaOfTheDay[0].id}
      />
      <Pizzas />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3004/pizzas", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  const resData = await res.json();

  const resPizzaOfTheDay = await fetch(
    "http://localhost:3004/pizzas/?pizzaOfTheDay=true",
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  const resPizzaOfTheDayData = await resPizzaOfTheDay.json();

  return {
    props: {
      pizzas: resData,
      pizzaOfTheDay: resPizzaOfTheDayData,
    },
  };
}

const mapStateToProps = (state) => {
  return {
    user: state.user.users,
  };
};

export default connect(mapStateToProps)(React.memo(HomePage));
