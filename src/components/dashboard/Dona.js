import React from "react";
import ReactECharts from "echarts-for-react";
import { Card } from "react-bootstrap";

export const Dona = ({ data }) => {
  const materias = data.materias;
  let promedios = [];

  materias.map(item => {
    let promedio = 0;    
    const parciales = item.parciales;
    const numParciales = parciales.length;
    parciales.map(p => {
      promedio += p.calificacion;
    });
    promedio = promedio / numParciales;
    let materiaPromedio = new Object();
    materiaPromedio.value = promedio;
    materiaPromedio.name = item.nombre;
    promedios.push(materiaPromedio);
  });

  const option = {
    // backgroundColor: "#2c343c",
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "5%",
    },
    series: [
      {
        name: "Materia:",
        type: "pie",
        radius: ["40%", "70%"],
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
      },
    ],
  };

  return (
    <>
    <br/>
      <Card style={{ height: "28rem" }}>
      <Card.Header>Calificaciones por materia</Card.Header>
        <Card.Body>
          <ReactECharts style={{ height: "100%" }} option={option} />
        </Card.Body>
      </Card>
    </>
  );
};
