import Link from "next/link";
import React from "react";

const Pizza = ({ id, name, text }) => {
  return (
    <Link
      key={id}
      // as={`/pizzas/${id}`}
      // href={{
      //   pathname: `/pizzas/${id}`,
      //   query: {
      //     pizzaId: id,
      //   },
      // }}
      href={`/pizzas/${id}`}
    >
      <a>
        <div className="item">
          <div
            className="inner-item"
            style={{ background: `url('/images/pizza_${id}.jpg')` }}
          >
            <div className="overlay"></div>
            <div className="item-info">
              <h3>{name}</h3>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default React.memo(Pizza);
