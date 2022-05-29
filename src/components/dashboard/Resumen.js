import React from "react";
import { Card } from "react-bootstrap";

export const Resumen = ({ data }) => {
  return (
    <>
      <br />
      <Card bg="success" text="white">
        <Card.Header>{data.alumno.nombre}</Card.Header>
        <Card.Body>
          {data.alumno.nombre} {data.alumno.apellidos}{" "}
          <Card.Text>
            Matricula: {data.alumno.matricula} <br />
            {data.descripcion} <br />
            {data.alumno.nota} <br />
            Cursando {data.materias.length} materias
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
