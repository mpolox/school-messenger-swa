import React, { Fragment } from "react";
import { Accordion, Card, Container, Spinner } from "react-bootstrap";
import ReactECharts from "echarts-for-react";

export const StudentScreen = () => {
  const option2 = {
    tooltip: {
      trigger: "item",
    },
    xAxis: {
      type: "category",
      data: ["1er Parcial", "2o Parcial", "3er Parcial", "4o Parcial"],
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

  const option3 = {
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
        name: "Calificación:",
        color: "#CE1D1D",
        symbolSize: 20,
        data: [15, 18, 7, 8],
        type: "line",
        smooth: true,
        lineStyle: { color: "#CE1D1D" },
        areaStyle: {
          shadowBlur: 1,
          color: "#CE1D1D",
        },
      },
    ],
  };

  return (
    <div>
      <Container>
        <br />
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Matemáticas</Accordion.Header>
            <Accordion.Body style={{ height: "28rem" }}>
                  <ReactECharts style={{ height: "100%" }} option={option2} />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>TLR II</Accordion.Header>
            <Accordion.Body>
              <Card style={{ height: "28rem" }}>
                <Card.Header>Dashboard2</Card.Header>
                <Card.Body>
                  <ReactECharts style={{ height: "100%" }} option={option3} />
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};
