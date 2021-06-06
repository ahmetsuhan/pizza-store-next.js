import React, { useEffect } from "react";

import "../styles/global.scss";
import store from "../store/store";
import { Provider } from "react-redux";
import { getUsers } from "../store/user/userAction";

import MainLayout from "@layouts/MainLayout.js";
import { getPizzas } from "store/pizza/pizzaAction";
const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    store.dispatch(getUsers());
    store.dispatch(getPizzas());
  }, []);
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
};

export default MyApp;
