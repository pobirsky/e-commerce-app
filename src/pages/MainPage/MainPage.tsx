import React from "react";

import Header from "@components/Header";
import Navbar from "@components/Navbar";
import Product from "@pages/Product";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Product />
    </div>
  );
};

export default MainPage;
