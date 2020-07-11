import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
//import Counter from "./components/counter.jsx";
//import Counters from "./components/counters";
import App from "./App";
import store from "./store";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
