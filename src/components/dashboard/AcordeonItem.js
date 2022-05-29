import React from "react";
import { Accordion } from "react-bootstrap";
import { GraficaLinea } from "./GraficaLinea";

export const AcordeonItem = ({data}) => {
  return (
    <Accordion.Item eventKey={data.id}>
      <Accordion.Header>{data.nombre}</Accordion.Header>
      <Accordion.Body  style={{ height: "28rem" }}>
        Materia: {data.nombre}<br/>
        Creditos: {data.creditos}<br/>
        Maestro: {data.nombreMaestro}<br/>
        Parciales: {data.parciales.length}
        <GraficaLinea parciales={data.parciales}/>
      </Accordion.Body>
    </Accordion.Item>
  );
};
