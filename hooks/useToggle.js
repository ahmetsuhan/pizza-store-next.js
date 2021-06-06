import { useState } from "react";

export const useToggle = (initialState) => {
  const [toggle, setToggle] = useState(initialState);

  return [toggle, setToggle];
};
