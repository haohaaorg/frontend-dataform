import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "./Elements/Button";
import LanguageChanger from "./LanguageChanger";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className={"title"}>{t("hello")} </h1>
        <Button variant={"primary"}> {t("test")} </Button>
      </header>
      {!loading && <LanguageChanger />}
    </div>
  );
}

export default Dashboard;
