import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Elements";
import LanguageChanger from "./components/LanguageChanger";

function App() {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className={"title"}>{t("hello")} </h1>
        <Button variant={"primary"}> {t("test")} </Button>
      </header>
      {!loading && <LanguageChanger />}
    </div>
  );
}

export default App;
