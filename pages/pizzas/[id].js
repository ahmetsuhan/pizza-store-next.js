import { useToggle } from "@hooks/useToggle";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToBasket } from "@store/basket/basketAction";

const PizzaDetailPage = ({ pizza }) => {
  // return (
  //   <div className="item">
  //     <div
  //       className="inner-item"
  //       style={{ background: `url('/images/pizza_${pizza.id}.jpg')` }}
  //     >
  //       <div className="overlay"></div>
  //       <div className="item-info">
  //         <h3>{pizza.name}</h3>
  //         <p>{pizza.text}</p>
  //       </div>
  //     </div>
  //   </div>
  // );
  const { currentUser } = useSelector((state) => state.user);
  const [btnActive, setBtnActive] = useToggle(false);
  const [hover, sethover] = useToggle(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser || Object.keys(currentUser).length === 0) {
      setBtnActive(false);
    } else {
      setBtnActive(true);
    }
  }, [currentUser]);

  const handleBuyBtnClick = () => {
    dispatch(addItemToBasket(pizza));
  };
  return (
    <div className="pizza_page">
      <div
        className="top"
        style={{ background: `url('/images/pizza_${pizza.id}.jpg')` }}
      ></div>
      <div className="middle">
        <h1>{pizza.name}</h1>
        <div className="description">{pizza.text}</div>
        <div
          onMouseLeave={() => sethover(false)}
          onMouseEnter={() => sethover(true)}
          className="btn-area"
        >
          <button
            onClick={handleBuyBtnClick}
            className={`price btn `}
            disabled={!btnActive}
          >
            Get it for $ {pizza.price}
          </button>
          {!btnActive && (
            <span className={`${hover && "active"}`}>
              You have to
              <Link href="/login">
                <a>Login</a>
              </Link>
              to buy
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params: { id } }) {
  const res = await fetch(`http://localhost:3004/pizzas/${id}`);

  const resData = await res.json();

  return {
    props: {
      pizza: resData,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3004/pizzas`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  const resData = await res.json();

  const paths = resData.map((pizza) => {
    return {
      params: {
        id: String(pizza.id),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default React.memo(PizzaDetailPage);
