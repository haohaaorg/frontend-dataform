import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GlobalOutlined } from "@ant-design/icons";
import "./style.less";
import { Menu } from "antd";

const { SubMenu } = Menu;

const LanguageChanger = () => {
  let [lang, setLang] = useState(localStorage.getItem("LANGUAGE") || "en");
  const { i18n } = useTranslation();

  const handleChangeLang = useCallback((lang) => {
    i18n.changeLanguage(lang);
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
      return "Eng";
    }
    if (lang === "shn") {
      return "Tai";
    }
  };

  return (
    <div className="notice">
      <Menu mode={"horizontal"}>
        <SubMenu
          key={1}
          icon={<GlobalOutlined />}
          title={displayLanguage(lang)}
        >
          <Menu.Item key="en" onClick={() => handleChangeLang("en")}>
            Eng
          </Menu.Item>
          <Menu.Item key="shn" onClick={() => handleChangeLang("shn")}>
            Tai
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default LanguageChanger;
