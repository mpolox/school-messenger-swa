import React, { useEffect, useState } from "react";
import {
  Container,
  Spinner,
} from "react-bootstrap";
import "../../Styles/App.css";
import { Acordeon } from "./Acordeon";
import { Dona } from "./Dona";
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

  const showContainer = () => {
    if (data) {
      return (
        <Container>
          <Resumen data={data} />
          <Dona data={data} />
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
