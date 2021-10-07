import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import en_US from "antd/lib/locale/en_US";

import { ThemeSwitcherProvider } from "react-css-theme-switcher";

import "./index.css";

import store from "./store";
import "./i18n";
import reportWebVitals from "./reportWebVitals";
import Preloader from "./components/Preloader";

const App = lazy(() => import("./App"));

const API_URL = process.env.REACT_APP_API_URL;

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={en_US}>
      <Suspense fallback={<Preloader />}>
        <ThemeSwitcherProvider themeMap={themes} defaultTheme={"light"}>
          <App />
        </ThemeSwitcherProvider>
      </Suspense>
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
