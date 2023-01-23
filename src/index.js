import ReactDOM from "react-dom";
import React from "react";

import "./styles/reset.css";
import "./styles/styles.css";

import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
