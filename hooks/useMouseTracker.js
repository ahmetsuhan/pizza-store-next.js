import { useState, useEffect } from "react";

export const useMouseTracker = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  function mouseCord(e) {
    setX(e.clientX);
    setY(e.clientY);
  }
  useEffect(() => {
    window.addEventListener("mousemove", mouseCord);

    return () => {
      window.removeEventListener("mousemove", mouseCord);
    };
  }, []);

  return [x, y];
};
