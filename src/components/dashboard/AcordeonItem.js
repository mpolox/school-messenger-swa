import React from "react";
import { Accordion } from "react-bootstrap";
import { GraficaLinea } from "./GraficaLinea";

export const AcordeonItem = ({data}) => {

  const parciales = data.parciales;
  let promedio = 0;
  const getPrice = parciales.map(product => {
    promedio = promedio + product.calificacion;
  });
  promedio = promedio / 4;
  return (
    <Accordion.Item eventKey={data.id}>
      <Accordion.Header>{data.nombre}</Accordion.Header>
      <Accordion.Body  style={{ height: "35rem" }}>
        Materia: {data.nombre}<br/>
        Creditos: {data.creditos}<br/>
        Maestro: {data.nombreMaestro}<br/>
        Parciales: {data.parciales.length}<br/>
        Promedio: {promedio}<br/>
        <GraficaLinea parciales={data.parciales}/>
        <br/>
      </Accordion.Body>
    </Accordion.Item>
  );
};
