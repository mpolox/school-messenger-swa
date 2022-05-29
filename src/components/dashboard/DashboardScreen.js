import React, { useEffect, useState } from "react";
import {
  Container,
  Spinner,
} from "react-bootstrap";
import "../../Styles/App.css";
import { Acordeon } from "./Acordeon";
import { Resumen } from "./Resumen";

export const DashboardScreen = () => {
  const [data, setData] = useState("");
  const getDashboardData = async () => {
    const url = "https://eu2apisisdev01.azurewebsites.net/api/operation/GetResumen";
    const response = await fetch(url);
    const resp = await response.json();;
    setData(resp.data);
  };

  useEffect(() => {
    getDashboardData();
  }, []);

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
        itemStyle: {
          borderRadius: 5,
          borderColor: "#F0F0F0",
          borderWidth: 1,
        },
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
        data: [
          { value: 1048, name: "Mate I" },
          { value: 735, name: "TLR II" },
          { value: 580, name: "Física" },
          { value: 484, name: "Artes" },
          { value: 300, name: "Civismo" },
        ],
      },
    ],
  };

  const showContainer = () => {
    if (data) {
      return (
        <Container>
          <Resumen data={data} />
          <Acordeon data={data} />
        </Container>
      );
    }
    return (
      <Container className="text-center">
        <br />
        Espera un momento...
        <br />
        <br />
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  };

  return <>{showContainer()}</>;
};
