import React, { useEffect, useState } from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Menu, Avatar, Switch } from "antd";
import {
  MenuUnfoldOutlined,
  CloseCircleFilled,
  MenuFoldOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";

import { logoutAction } from "../../actions/auth";
// import { SIGN_OUT, GET_ME } from "../../graphql/user";
import { useWindowSize } from "../../utils/useWindowSize";
import SettingModal from "./Setting";
import HeaderNoticeComponent from "../../components/Notice";
import LanguageChanger from "../../components/LanguageChanger";
import { useTranslation } from "react-i18next";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

interface MyHeaderProps {
  collapsed: any;
  onChangeCollapsed: any;
  onChangeState: any;
  authUser: any;
  loading: boolean;

  logoutAction: any;
}

type MyProps = MyHeaderProps &
  React.HTMLProps<HTMLButtonElement> &
  React.HTMLAttributes<HTMLButtonElement>;

const stringToBoolean = (string: string) =>
  string === "false" ? false : !!string;

const MyHeader: React.FC<MyProps> = ({
  collapsed,
  onChangeCollapsed,
  logoutAction,
}) => {
  const windowSize = useWindowSize();

  const { t } = useTranslation();

  const isDesktop = windowSize.width >= 680;

  const [isDarkMode, setIsDarkMode] = React.useState(
    stringToBoolean(localStorage.getItem("darkMode")) || false
  );
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked: any) => {
    setIsDarkMode(isChecked);
    localStorage.setItem("darkMode", isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  useEffect(() => {
    switcher({ theme: isDarkMode ? themes.dark : themes.light });
  }, [isDarkMode]);

  const [isShowSetting, setIsShowSetting] = useState(false);

  // if(error) {
  //       return <p>{error}</p>
  // }
  /**
   * expanding of the sidebar
   */
  const toggleCollapsed = () => {
    onChangeCollapsed(!collapsed);
  };

  const toggleShowSetting = (visible: boolean) => {
    setIsShowSetting(visible);
  };

  /**
   * Logout
   */

  const onLogout = async () => {
    logoutAction();

    return (window.location.href = process.env.REACT_APP_BASE_URL);
  };

  // Avoid theme change flicker
  if (status === "loading") {
    return null;
  }
  const checkAvatar = collapsed ? "block" : "none";

  return (
    <>
      <div
        style={{
          zIndex: 3,
          position: "relative",
          color: `${collapsed ? "#888" : `${isDesktop ? "#666" : "#fff"}`}`,
        }}
      >
        {React.createElement(
          collapsed
            ? MenuUnfoldOutlined
            : isDesktop
            ? MenuFoldOutlined
            : CloseCircleFilled,
          {
            className: "trigger",
            onClick: toggleCollapsed,
          }
        )}
      </div>

      <div
        style={{
          float: "right",
          display: "flex",
          height: 46,
          paddingRight: `${isDesktop ? "60px" : "0px"}`,
        }}
      >
        <div style={styles.headerItem}>
          <HeaderNoticeComponent />

          <LanguageChanger />

          <div className={"switch_theme"}>
            <Switch
              checkedChildren=" ☀"
              unCheckedChildren="☾"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
          </div>
          <Menu mode="horizontal" selectable={false}>
            <SubMenu
              title={
                <div style={styles.avatarBox}>
                  <Avatar
                    src={""}
                    style={{
                      backgroundColor: "rgb(0, 162, 174)",
                      display: `${!isDesktop && checkAvatar}`,
                      verticalAlign: "middle",
                      marginTop: "1rem",
                      borderBottom: "none",
                    }}
                    size={42}
                  >
                    {/* {!authUser?.avatar_url&&!loading&&(authUser?.fullName[0]).toUpperCase()} */}
                  </Avatar>
                  {/* &nbsp;<span>{user.username}</span> */}
                </div>
              }
            >
              <MenuItemGroup>
                <Menu.Item key={1} onClick={() => toggleShowSetting(true)}>
                  <SettingOutlined />

                  {t("setting")}
                </Menu.Item>
                {/* <Menu.Item key={77} onClick={() => this.togglePasswordVisible(true)}><Icon type="edit" />Edit Password</Menu.Item> */}
                <Menu.Item key={2} onClick={onLogout}>
                  {/* icons */}
                  <LogoutOutlined />

                  {t("logout")}
                </Menu.Item>
              </MenuItemGroup>
            </SubMenu>
          </Menu>
        </div>
      </div>

      <SettingModal
        toggleVisible={toggleShowSetting}
        // authUser={}
        visible={isShowSetting}
      />
      {/* <EditInfoModal toggleVisible={this.toggleInfoVisible} visible={infoVisible} />
        <EditPasswordModal toggleVisible={this.togglePasswordVisible} visible={passwordVisible} /> */}
    </>
  );
};

const styles = {
  headerRight: {
    float: "right",
    display: "flex",
    height: "46",
  },
  headerItem: {
    display: "flex",
    alignItems: "center",
  },
  avatarBox: {
    display: "flex",
    alignItems: "center",
  },
  textname: {
    fontSize: "20px",
  },
};

const MapStateToProps = (state: any) => ({
  authUser: state.auth.user as object,
  loading: state.auth.loading as boolean,
});
export default connect(MapStateToProps, { logoutAction })(MyHeader);
