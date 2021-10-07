import React from "react";
import { Tabs, Layout } from "antd";
import { useTranslation } from "react-i18next";

const Footer = Layout.Footer;
const TabPane = Tabs.TabPane;

interface MyContentProps {
  panes: any;
  activeMenu: any;
  onChangeState: any;
}

const MyContent: React.FC<MyContentProps> = ({
  panes,
  activeMenu,
  onChangeState,
}) => {
  const { t } = useTranslation();

  const handleTabsChange = (activeKey: any) => {
    // console.log('her eis activeKEy:', activeKey)
    onChangeState({
      _activeMenu: activeKey,
      _panes: panes,
    });
  };

  /**
   * 关闭标签页
   */
  const remove = (targetKey: any) => {
    if (!panes) return false;

    let _activeMenu = activeMenu;

    let _panes = panes.slice();
    let preIndex = _panes.findIndex((item: any) => item.key === targetKey) - 1;
    preIndex = Math.max(preIndex, 0);

    _panes = _panes.filter((item: any) => item.key !== targetKey);

    if (targetKey === _activeMenu) {
      _activeMenu = _panes[preIndex] ? _panes[preIndex].key : "";
    }
    onChangeState({
      _activeMenu,
      _panes,
    });
  };

  const onEdit = (targetKey: any, action: any) => {
    if (action === "remove") {
      remove(targetKey);
    }
  };

  return (
    <div
      className="content-container site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 18,
        minHeight: 280,
      }}
    >
      <Tabs
        style={{ height: "100%" }}
        tabBarStyle={{ marginBottom: 0 }}
        onEdit={onEdit}
        onChange={handleTabsChange}
        activeKey={activeMenu}
        type="editable-card"
        hideAdd
      >
        {panes &&
          panes.map((item: any) => (
            <TabPane key={item.key} tab={t(item.name)}>
              <div className="tabpane-box">{item.content}</div>

              <Footer
                style={{ textAlign: "center", backgroundColor: "transparent" }}
              >
                ©{new Date().getFullYear()} Kwarm{" "}
                <a
                  target="_blank"
                  href="https://shanlang.org/"
                  rel="noopener noreferrer"
                >
                  {/* <Icon type="github" /> */}
                </a>
              </Footer>
            </TabPane>
          ))}
      </Tabs>
    </div>
  );
};

export default MyContent;
