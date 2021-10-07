import React, { useState } from "react";
import ReactECharts from "echarts-for-react";

import { useTranslation } from "react-i18next";

const DashboardPage = ({ academic = true, admin = true }: any) => {
  const { t } = useTranslation();

  let nameWithTranslation: string[] = [];

  const MyDataAll: any = [];

  const option = {
    title: {
      text: t("name"),

      subtext: `${"Kwarm EChart Data"}`,
      x: "center",
      textStyle: {
        color: "#007bfe",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      bottom: "bottom",
      data: nameWithTranslation,
      textStyle: {
        color: "#6EB1F6",
      },
    },
    series: [
      {
        name: "total",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: MyDataAll,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  const [count, setCount] = useState(0);

  function onChartReady(echarts: any) {
    // console.log('echarts is ready', echarts);
  }

  function onChartClick(param: any, echarts: any) {
    console.log(param, echarts);
    setCount(count + 1);
  }

  function onChartLegendselectchanged(param: any, echarts: any) {
    console.log(param, echarts);
  }

  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <ReactECharts
        option={option}
        style={{ height: 400, fontFamily: "GHK Muse" }}
        onChartReady={onChartReady}
        onEvents={{
          click: onChartClick,
          legendselectchanged: onChartLegendselectchanged,
        }}
      />
      {/* <div>Click Count: {count}</div>
      <div>Open console, see the log detail.</div> */}
    </div>
  );
};

export default DashboardPage;
