import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppStore from "./Store";
import "./Assets/CSS/customClass.css";

import AppRoute from "./AppRoute";

const App = () => {
  return (
    <div className="ui container containerDiv" id="container">
      <AppRoute />
    </div>
  );
};

ReactDOM.render(
  <Provider store={AppStore}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
