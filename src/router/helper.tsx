import React, { ReactNode } from "react";

import MainPage from "@pages/MainPage";
import ProductItem from "@pages/Product/ProductItem";

export interface Pages {
  node: Path[];
}

interface Path {
  path: string;
  element: ReactNode;
}

export const routes = [
  { path: "/main", element: <MainPage /> },
  { path: "*", element: <MainPage /> },
  { path: "/product/:id", element: <ProductItem /> },
];
