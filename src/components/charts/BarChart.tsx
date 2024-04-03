import React from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const BarChart = () => {
  const chartSeries = [
    {
      data: [
        { x: "2008", y: [2800, 4500] },
        { x: "2009", y: [3200, 4100] },
        { x: "2010", y: [2950, 7800] },
        { x: "2011", y: [3000, 4600] },
        { x: "2012", y: [3500, 4100] },
        { x: "2013", y: [4500, 6500] },
        { x: "2014", y: [4100, 5600] },
      ],
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "rangeBar" as const, // Corrected type for rangeBar
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        isDumbbell: true,
        columnWidth: 3,
        dumbbellColors: [["#008FFB", "#00E396"]],
      },
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      position: "top",
      horizontalAlign: "left",
      customLegendItems: ["2022", "2021", "2023", "2024"],
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        gradientToColors: ["#00E396"],
        inverseColors: true,
        stops: [0, 100],
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      tickPlacement: "on",
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={chartSeries}
      type="rangeBar"
      height={330}
    />
  );
};

export default BarChart;
