import React from "react";
import { Accordion, ListGroup } from "react-bootstrap";
import { GraficaLinea } from "./GraficaLinea";

export const AcordeonItem = ({data}) => {

  const parciales = data.parciales;
  let promedio = 0;
  let cals = []
  const getPrice = parciales.map(item => {
    cals.push(item.calificacion);
    promedio = promedio + item.calificacion;
  });
  promedio = promedio / 4;
  let variante= "success";
  if (promedio < 70) variante = "warning";
  if (promedio < 50) variante = "danger";
  return (
    <Accordion.Item eventKey={data.id}>
      <Accordion.Header>{data.nombre}</Accordion.Header>
      <Accordion.Body style={{ height: "35rem" }}>
        <ListGroup>
          <ListGroup.Item>Materia: {data.nombre}</ListGroup.Item>
          <ListGroup.Item>Creditos: {data.creditos}</ListGroup.Item>
          <ListGroup.Item>Maestro: {data.nombreMaestro}</ListGroup.Item>
          <ListGroup.Item>Parciales: {data.parciales.length}</ListGroup.Item>
          <ListGroup.Item variant={variante}>Promedio: {promedio}</ListGroup.Item>

        </ListGroup>
        <GraficaLinea cals={cals} promedio={promedio}/>
        <br/>
      </Accordion.Body>
    </Accordion.Item>
  );
};
