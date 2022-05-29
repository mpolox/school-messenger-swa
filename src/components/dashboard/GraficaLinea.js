import React from 'react'
import ReactECharts from "echarts-for-react";


export const GraficaLinea = ({cals, promedio}) => {

  const verde = "#36AE7C";
  const amarillo = "#F9D923";
  const rojo = "#EB5353"
  let colorPunto = verde;
  if (promedio < 70) colorPunto = amarillo;
  if (promedio < 50) colorPunto = rojo;

  console.log("C", cals);
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
        color: colorPunto,
        name: "Calificación:",
        data: cals,
        type: "line",
        smooth: true,
        lineStyle: {
          color: colorPunto,
          width: 5,
        },
        areaStyle: {
          color: colorPunto,
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
