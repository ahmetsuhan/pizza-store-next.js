import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Basket = () => {
  const router = useRouter();
  const { currentUser } = useSelector((state) => state.user);
  const basket = useSelector((state) => state.basket.basket);

  if (Object.keys(currentUser).length === 0 || basket.length === 0) {
    return null;
  }

  if (router.pathname.includes("basket")) {
    return null;
  }

  const handleBasketCount = () => {
    if (basket.length > 0) {
      return basket.length;
    }
    return null;
  };

  const handleBasketClick = () => {
    router.push("/basket");
  };
  return (
    <div onClick={handleBasketClick} className="basket">
      <div className="basket-container">
        <i className="fas fa-shopping-basket fa-4x"></i>
        <span>{handleBasketCount()}</span>
      </div>
    </div>
  );
};

export default React.memo(Basket);
