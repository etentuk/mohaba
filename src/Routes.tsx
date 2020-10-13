import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import Survey from "./pages/Survey";

type RouteTypes = {
  path: string;
  exact: boolean;
  component: FC;
};

const routes: RouteTypes[] = [{ path: "/", exact: true, component: Survey }];

const Routes: FC = () => (
  <Switch>
    {routes.map(({ exact, path, component }) => (
      <Route key={path} exact={exact} path={path} component={component} />
    ))}
  </Switch>
);

export default Routes;
