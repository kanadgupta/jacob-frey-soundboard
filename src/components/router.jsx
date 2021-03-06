import * as React from "react";
import { Switch, Route } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";

const Router = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
  </Switch>
);

export default Router;
