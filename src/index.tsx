/* eslint-disable-next-line no-use-before-define */
import React from "react";
import ReactDOM from "react-dom";

// https://ecomm-products.modus.workers.dev/

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
