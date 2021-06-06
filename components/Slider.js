import React, { useEffect, useRef, useState } from "react";
import { addItemToBasket } from "@store/basket/basketAction";
import { useDispatch } from "react-redux";
const Slider = ({ data, title }) => {
  const sliderScrollRef = useRef(null);
  const dispatch = useDispatch();
  if (!data || data.length === 0) {
    return null;
  }

  const handleClick = (item) => {
    dispatch(addItemToBasket(item));
  };

  return (
    <div className="slider">
      <div className="slider-container">
        <div className="slider-container-inner">
          <div className="slider-title">{title}</div>

          <div ref={sliderScrollRef} className="scroll">
            {data.map((d, index) => {
              return (
                <div key={d.id} className="box">
                  <div className="left">
                    <img src={d.img} alt="" />
                  </div>
                  <div className="right">
                    <span className="title">{d.name}</span>
                    <span className="price">
                      $ {Number(d.price).toFixed(2)}
                    </span>
                    <div
                      onClick={() => handleClick(d)}
                      className="icon-container"
                    >
                      <i className="fas fa-plus fa-2x"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Slider);
