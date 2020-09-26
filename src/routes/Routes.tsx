import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";

const Routes: FC = () => (
  <Switch>
    <Route path="/home" component={HomePage} />
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
  </Switch>
);

export default Routes;
