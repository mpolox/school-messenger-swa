import React from "react";
import { Accordion } from "react-bootstrap";
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
  return (
    <Accordion.Item eventKey={data.id}>
      <Accordion.Header>{data.nombre}</Accordion.Header>
      <Accordion.Body border="danger" style={{ height: "35rem" }}>
        Materia: {data.nombre}<br/>
        Creditos: {data.creditos}<br/>
        Maestro: {data.nombreMaestro}<br/>
        Parciales: {data.parciales.length}<br/>
        Promedio: {promedio}<br/>
        <GraficaLinea cals={cals} promedio={promedio}/>
        <br/>
      </Accordion.Body>
    </Accordion.Item>
  );
};
