import React, { useState, useEffect } from "react";

import { Tabs, Dropdown, Badge, Spin, List, Avatar, Tag } from "antd";
// import { withApollo } from "react-apollo";
// import { ReactComponent as NoticeSvg } from '../../asset/icon/notice.svg';
import { LoadingOutlined } from "@ant-design/icons";
import { NotificationIcon } from "../../components/Icons";
import { GET_ME } from "../../graphql/user";
import { UPDATE_NOTIFICATION_SEEN } from "../../graphql/notification";
// import { getNoticeList } from 'api/layout.api';
import "./style.less";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const { TabPane } = Tabs;

const HeaderNoticeComponent = ({ authUser }: any) => {
  const [visible, setVisible] = useState(false);
  const [noticeList, setNoticeList] = useState(
    authUser?.newNotifications || []
  );
  const [loading, setLoading] = useState(false);
  const [isShowViewFeedback, setIsShowViewFeedback] = useState(false);
  const [feedbackInfo, setFeedbackInfo] = useState({});

  const noticeListFilter = (type: any) => {
    return noticeList.filter((notice: any) => notice.type === type);
  };

  const toggleShowViewFeedback = (visible: boolean) => {
    setIsShowViewFeedback(visible);
  };
  const handleViewFeedback = (record: object) => {
    toggleShowViewFeedback(true);

    setFeedbackInfo(record);
  };

  const getNotice = async () => {
    setLoading(true);
    // const { status, result } = await getNoticeList();
    setLoading(false);
    // status && setNoticeList(result);
  };

  useEffect(() => {
    getNotice();
  }, []);

  const handleVisible = (v: any) => {
    setVisible(v);

    if (!v) {
      setNoticeList([]);
      const updateNotificationSeen = async () => {
        try {
          // const { data } = await client.mutate({
          //   mutation: UPDATE_NOTIFICATION_SEEN,
          //   variables: {
          //     input: {
          //       userId: authUser.id,
          //     },
          //   },
          //   refetchQueries: () => [{ query: GET_ME }],
          // });
          // console.log("here si data:", data);
        } catch (error) {
          console.log("here is updateNotification", error);
        }
      };
      updateNotificationSeen();
    }
  };

  const tabs = (
    <div>
      <Spin tip="Loading..." indicator={antIcon} spinning={loading}>
        <Tabs defaultActiveKey="1">
          <TabPane tab={`Notification(${noticeList.length})`} key="1">
            <List
              dataSource={noticeList}
              renderItem={(item: any) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar size="large">
                        {" "}
                        {item?.feedback?.creator?.slice(0, 1)}{" "}
                      </Avatar>
                    }
                    title={
                      <a
                        href={item.title}
                        onClick={() => handleViewFeedback(item?.feedback)}
                      >
                        {item?.feedback?.creator} Feedbacked Kwarm Website!
                      </a>
                    }
                    description={item.datetime}
                  />
                </List.Item>
              )}
            />
          </TabPane>

          <TabPane
            tab={`Message(${noticeListFilter("message").length})`}
            key="2"
          >
            <List
              dataSource={noticeListFilter("message")}
              renderItem={(item: any) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.title}>{item.title}</a>}
                    description={
                      <div className="notice-description">
                        <div className="notice-description-content">
                          {item.description}
                        </div>
                        <div className="notice-description-datetime">
                          {item.datetime}
                        </div>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab={`Event(${noticeListFilter("event").length})`} key="3">
            <List
              dataSource={noticeListFilter("event")}
              renderItem={(item: any) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <div className="notice-title">
                        <div className="notice-title-content">{item.title}</div>
                        {/* <Tag color={EventStatus[item.status]}>{item.extra}</Tag> */}
                      </div>
                    }
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </TabPane>
        </Tabs>
      </Spin>
    </div>
  );

  return (
    <>
      <Dropdown
        overlay={tabs}
        placement="bottomRight"
        trigger={["click"]}
        visible={visible}
        onVisibleChange={handleVisible}
        overlayStyle={{
          width: 320,
          padding: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",

          borderRadius: 4,
        }}
      >
        <div className="notice" id="notice-center">
          <Badge count={noticeList.length} overflowCount={999}>
            {/* <NoticeSvg className="anticon" />
             */}
            <NotificationIcon />
            {/* <BellOutlined width={20} height={100} /> */}
          </Badge>
        </div>
      </Dropdown>
    </>
  );
};

export default HeaderNoticeComponent;
