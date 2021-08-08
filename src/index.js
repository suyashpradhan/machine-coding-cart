import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { StateContextProvider } from "./context";
import "./assets/css/base.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
