import React from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const CircleChart = () => {
  const series = [44, 55, 67, 83];
  const options: ApexOptions = {
    chart: {
      height: 200,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Weekly",
            formatter: function (w) {
              // Convert the number to a string before returning
              return String(249);
            },
          },
        },
      },
    },
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
    colors: ["#696cff", "#696cff", "#696cff", "#696cff"],
  };
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={200}
      />
    </div>
  );
};
export default CircleChart;
