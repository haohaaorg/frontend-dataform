import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import { GlobalOutlined } from "@ant-design/icons";
import "./style.css";
// import { Menu } from "antd";

// const { SubMenu } = Menu;

const LanguageChanger = () => {
  let [lang, setLang] = useState(localStorage.getItem("LANGUAGE") || "en");
  const { i18n } = useTranslation();

  const handleChangeLang = useCallback((lang) => {
    i18n.changeLanguage(lang);
    console.log("here is lang:", lang);
    setLang(lang);
  }, []);

  useEffect(() => {
    i18n.changeLanguage(lang);
    // @ts-ignore
    // setData(MyProjectsData[lang]);
    localStorage.setItem("LANGUAGE", lang);
  }, [lang]);

  const displayLanguage = (lang: string) => {
    if (lang === "en") {
      return "English";
    }
    if (lang === "shn") {
      return "Tai";
    }
  };

  return (
    <div className="notice">
      <ul>
        <li
          style={{
            display: "block",
            width: "100px",
            background: `${lang === "en" ? "orange" : "none"}`,
          }}
          onClick={() => handleChangeLang("en")}
        >
          English
        </li>
        <li
          style={{
            display: "block",
            width: "100px",
            background: `${lang === "shn" ? "orange" : "none"}`,
          }}
          onClick={() => handleChangeLang("shn")}
        >
          Tai
        </li>
      </ul>
    </div>
  );
};

export default LanguageChanger;
