import React from "react";

import ProductItem from "@components/ProductItem";
import MainPage from "@pages/MainPage";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="*" element={<MainPage />} />
      <Route path="/product/:id" element={<ProductItem />} />
    </Routes>
  );
};

export default AppRouter;
