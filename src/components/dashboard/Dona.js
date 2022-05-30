import React from "react";
import ReactECharts from "echarts-for-react";
import { Card } from "react-bootstrap";

export const Dona = ({ data }) => {
  const materias = data.materias;
  let promedios = [];

  materias.forEach((item) => {
    let promedio = 0;
    const parciales = item.parciales;
    const numParciales = parciales.length;
    parciales.forEach((p) => {
      promedio += p.calificacion;
    });
    promedio = promedio / numParciales;
    let materiaPromedio = {
      value: promedio,
      name: item.nombre,
    };
    promedios.push(materiaPromedio);
  });

  const option = {
    // backgroundColor: "#2c343c",
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Promedio:",
        type: "pie",
        radius: ["35%", "70%"],
        avoidLabelOverlap: false,

        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: promedios,
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "inner",
              formatter: function (params) {
                return params.value;
              },
            },
            labelLine: {
              show: false,
            },
          },
        },
      },
    ],
  };

  return (
    <>
      <br />
      <Card style={{ height: "28rem" }}>
        <Card.Header>Calificaciones por materia</Card.Header>
        <Card.Body>
          <ReactECharts style={{ height: "100%" }} option={option} />
        </Card.Body>
      </Card>
    </>
  );
};
