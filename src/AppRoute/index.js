import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import History from "./history";

import Home from "../Home";
import Register from "../Components/Register";
import Login from "../Components/Login";

const AppRoute = () => {
  return (
    <Router history={History}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
};

export default AppRoute;
