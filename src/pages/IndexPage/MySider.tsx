import React, { useEffect } from "react";
import { Menu } from "antd";
import { useTranslation } from "react-i18next";

import { tabs, menu } from "../tabs";
import { RenderMenu } from "../../utils/renderMenu";

interface MySiderProps {
  activeMenu: any;
  theme: any;
  onChangeState: any;
  panes: any;
  authUser: any;
}

const AdminMenu = menu.filter((m) => m.type === "admin");
const AcademicMenu = menu.filter((m) => m.type === "academic");

export const MySider: React.FC<MySiderProps> = ({
  activeMenu,
  theme,
  onChangeState,
  panes,
  authUser,
}) => {
  useEffect(() => {
    const defaultPane = {
      name: "dashboard",
      key: "Dashboard",
    };
    addPane(defaultPane);
  }, []);

  const { t } = useTranslation();

  //  const CustomMenu = userType?.admin&&userType?.academic && role === 100 ?menu: userType?.admin&& role === 100 ?AdminMenu:userType?.academic && role === 100?AcademicMenu:[];
  const CustomMenu = AdminMenu;
  /**
   * 点击侧边栏菜单添加标签页
   */
  const addPane = (item: any) => {
    // console.log('here is item', item)
    if (!panes) {
      return false;
    }
    const _panes = panes.slice();
    const _activeMenu = item.key;

    //如果标签页不存在就添加一个
    if (!_panes.find((i: any) => i.key === _activeMenu)) {
      _panes.push({
        name: item.name,
        key: item.key,
        content: tabs[item.key] || item.name,
      });
    }
    // console.log('here is add Pane:', _panes)
    onChangeState({
      _panes,
      _activeMenu,
    });
  };

  // userType?.admin && item.type === "admin" || userType?.academic && item.type === "academic" || item.type === "all"

  return (
    <div className={`my-sider ${theme}`}>
      <div className={`sider-menu-logo ${theme}`}>
        <a
          href="https://shanlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="logo-text">{t("name")}</h1>
        </a>
      </div>
      <Menu
        theme={theme}
        mode="inline"
        selectedKeys={[activeMenu]}
        style={{ paddingTop: 16 }}
      >
        {RenderMenu(CustomMenu, addPane)}
      </Menu>
    </div>
  );
};
