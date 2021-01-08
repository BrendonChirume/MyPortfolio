import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route component={Home} />
      </Switch>
    );
  }
}

export default Router;
