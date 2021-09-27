import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import Dashboard from "@/components/Dashboard";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />

        <PrivateRoute exact path="/" component={Dashboard} />
      </Switch>
    </section>
  );
};

export default Routes;
