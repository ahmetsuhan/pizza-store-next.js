import React, { useEffect, useState } from "react";

import BasketContainer from "@/components/BasketContainer.js";
import Slider from "@/components/Slider";

const BasketPage = ({ desserts }) => {
  return (
    <div className="basket-page">
      <div className="container">
        <div className="basket-area">
          <BasketContainer />
          <Slider title={"Desserts"} data={desserts} />
          <div className="odeme-fln">asdasd</div>

          <div className="bottom">
            <div className="delivery-btn">
              <button>Sipariş ver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3004/desserts", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  const desserts = await res.json();

  return {
    props: {
      desserts,
    },
  };
}

export default React.memo(BasketPage);
