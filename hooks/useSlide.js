import { useState, useEffect } from "react";

export const useSlide = (element, options) => {
  const [scrollX, setScrollX] = useState(0);

  const scrollStepX = options.scrollStepX || 0;

  const scrollTime = options.scrollTime || 2000;
  const elScrollWidth = element.current.scrollWidth;
  let timeout;
  useEffect(() => {
    timeout = setTimeout(() => {
      element.current.scroll(scrollX, 0);
      setScrollX((prev) => (prev = prev + scrollStepX));
    }, scrollTime);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (scrollStepX >= elScrollWidth) {
    scrollStepX = options.scrollStepX;
  }
  return true;
};
