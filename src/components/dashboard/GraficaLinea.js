import React from 'react'
import ReactECharts from "echarts-for-react";


export const GraficaLinea = ({parciales}) => {
  const option = {
    tooltip: {
      trigger: "item",
    },
    xAxis: {
      type: "category",
      data: ["Parcial 1", "Parcial 2", "Parcial 3", "Parcial 4"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        symbol: "circle",
        symbolSize: 20,
        color: "#146356",
        name: "Calificación:",
        data: [25, 25, 20, 25],
        type: "line",
        smooth: true,
        lineStyle: {
          color: "#446A46",
          width: 5,
        },
        areaStyle: {
          color: "#14C38E",
        },
      },
    ],
  };

  return (
    <>
      <ReactECharts style={{ height: "80%" }} option={option} />
    </>    
  )
}
