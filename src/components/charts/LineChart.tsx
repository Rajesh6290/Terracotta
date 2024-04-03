import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const LineChart = () => {
  const series = [
    {
      name: "Sales",
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 5,
      curve: "smooth",
    },
    grid: {
      show: false,
    },
    xaxis: {
      type: "datetime",
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    title: {
      text: "",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#333",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#FDD835"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
  };

  return (
    <div id="chart" style={{ height: "190px" }}>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={190}
      />
    </div>
  );
};

export default LineChart;
