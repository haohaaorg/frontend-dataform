import {
  BarChartOutlined,
  DownloadOutlined,
  StockOutlined,
  TeamOutlined,
  EditTwoTone,
  AppstoreAddOutlined,
  CommentOutlined,
  NotificationOutlined,
  HomeTwoTone,
} from "@ant-design/icons";
import { LoadableComponent } from "../utils/LoadableComponent";
const DashboardPage = LoadableComponent(import("../components/Dashboard"));

type tagsOpions = {
  [key: string]: any;
};

let menu = [
  {
    name: "dashboard",
    icon: <BarChartOutlined />,
    key: "Dashboard",
    type: "all",
  },

  {
    name: "admin_name",
    icon: <StockOutlined />,
    key: "Admin",
    admin: true,
    academic: false,
    type: "admin",
    children: [
      {
        name: "dashboard",
        icon: <BarChartOutlined />,
        key: "AdminDashboard",
        type: "admin",
      },

      {
        name: "Category",
        icon: <AppstoreAddOutlined />,
        key: "Category",
        type: "admin",
      },

      {
        name: "admin.user",
        icon: <TeamOutlined />,
        key: "User",
      },

      {
        name: "academic.feedbacks",
        icon: <CommentOutlined />,
        key: "Feedback",
      },
    ],
  },
];

const tabs: tagsOpions = {
  Dashboard: <DashboardPage />,
};

export { menu, tabs };
