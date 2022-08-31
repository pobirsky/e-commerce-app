import React from "react";

import ReactDOM from "react-dom/client";
import "./assets/index.module.scss";
import { BrowserRouter } from "react-router-dom";
import "@config/configureMobX";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
