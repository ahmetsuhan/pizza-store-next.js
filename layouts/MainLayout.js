import React from "react";
import Head from "next/head";
import Header from "@/components/Header.js";
import Basket from "@/components/Basket";

const MainLayout = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Overlock:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.1/css/bootstrap.min.css"
          integrity="sha512-Ez0cGzNzHR1tYAv56860NLspgUGuQw16GiOOp/I2LuTmpSK9xDXlgJz3XN4cnpXWDmkNBKXR/VDMTCnAaEooxA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords}></meta>
      </Head>
      <div className="mainLayout_container">
        <Header />

        <div className="main_container">{children}</div>
        <Basket />
      </div>
    </>
  );
};

MainLayout.defaultProps = {
  title: "Pizzeria",
  description: "Delicious Pizza",
  keywords: "pizza, delicious, pizzaria, italian",
};

export default MainLayout;
