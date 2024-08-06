import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./main.css";

import { Global } from "@emotion/react";
import { GlobalStyle } from "./styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
