import React from "react";
import Link from "next/link";

const PizzaOfTheDay = ({ img, name, id, text }) => {
  return (
    <Link href="/pizzas/1">
      <a>
        <div
          className="featured_container"
          style={{ background: `url('${img}')` }}
        >
          <div className="overlay"></div>
          <div className="info">
            <div className="top">
              <h2>Pizza of the day</h2>
            </div>

            <div className="description">
              <h3>{name}</h3>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PizzaOfTheDay;
