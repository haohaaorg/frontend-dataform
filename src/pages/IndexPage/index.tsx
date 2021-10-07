import React, { useState } from "react";
import { Layout } from "antd";
import { connect } from "react-redux";
import { MySider } from "./MySider";
import MyHeader from "./MyHeader";
import MyContent from "./MyContent";
import "./style.less";
import { useWindowSize } from "../../utils/useWindowSize";
const { Header, Content, Sider } = Layout;

const IndexPage = ({ authUser }: any) => {
  const windowSize = useWindowSize();
  const isDesktop = windowSize?.width >= 680;

  const [activeMenu, setActiveMenu] = useState("");

  const [collapsed, setCollapsed] = useState(false);
  const [panes, setPanes] = useState([]);

  const handleCollapsed = (): void => {
    setCollapsed(!collapsed);
  };

  const handleState = (obj: any) => {
    setActiveMenu(obj._activeMenu);
    setPanes(obj._panes);
  };

  const checkC = !collapsed ? "block" : "none";
  return (
    <div>
      <Layout
        style={{
          height: "100vh",
          background: `${collapsed ? "rgba(0, 0, 0, 0.8)" : null}`,
        }}
      >
        <div
          className={`${!collapsed && !isDesktop ? "bg_cover" : null}`}
        ></div>

        <Sider
          theme={"dark"}
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            display: `${!isDesktop && checkC}`,
            transition: "opacity 1s ease-in 1s",
            zIndex: 2,
          }}
        >
          <MySider
            theme={"dark"}
            panes={panes}
            activeMenu={activeMenu}
            authUser={authUser}
            onChangeState={handleState}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <MyHeader
              collapsed={collapsed}
              onChangeCollapsed={handleCollapsed}
              onChangeState={handleState}
            />
          </Header>

          <Content>
            <MyContent
              panes={panes}
              activeMenu={activeMenu}
              onChangeState={handleState}
            />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  authUser: state?.auth?.user,
});

export default connect(mapStateToProps, {})(IndexPage);
