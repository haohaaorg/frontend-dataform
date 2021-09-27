import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Routes from "./routes/Routes";
import "tailwindcss/tailwind.css";

import { LOGOUT } from "../src/actions/types";
// Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import { loadUser } from "./actions/auth";

const App = () => {
  useEffect(() => {
    // check for token in LS

    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
