import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { store } from "./App";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
// const createStoreWithMiddleware = applyMiddleware(
//   PromiseMiddleware,
//   ReduxThunk
// )(createStore);
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
