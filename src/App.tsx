import { FC } from "react";
import { connect } from "react-redux";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./components/Login";

import { LoadableComponent } from "./utils/LoadableComponent";
import "./App.less";
import "nprogress/nprogress.css";

import PrivateRoute from "./components/PrivateRoute";

// import Loading from './components/Loading';
const IndexPage = LoadableComponent(import("./pages/IndexPage"));
const ChangePasswordPage = LoadableComponent(
  import("./components/ChangePassword")
);
const ForgotPasswordPage = LoadableComponent(
  import("./components/ForgotPassword")
);

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/login"} component={Login} />
          <Route
            path={"/change-password/:token"}
            component={ChangePasswordPage}
          />

          <Route path={"/forgot-password"} component={ForgotPasswordPage} />

          <Route path={"/"} component={IndexPage} />

          {/* <PrivateRoute path={"/"} component={IndexPage} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const MapStateToProps = (state: any) => ({
  auth: state.auth,
});
export default connect(MapStateToProps)(App);
