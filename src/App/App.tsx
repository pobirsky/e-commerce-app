import React from "react";

import "@styles/App.scss";
import "@styles/index.scss";
import "@styles/normalize.css";

import AppRouter from "../router/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
