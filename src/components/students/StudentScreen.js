import React, { useEffect, useReducer, useState } from "react";
import { Card, Container, ListGroup, Spinner } from "react-bootstrap";
import { ACTIONS } from "../../Reducers/actions";
import { StudentReducer } from "../../Reducers/StudentReducer";
import { InitialStudentState } from "../../Reducers/InitialStudentState";
import { useNavigate } from "react-router-dom";

export const StudentScreen = ({ currentUser }) => {
  const [state, dispatch] = useReducer(StudentReducer, InitialStudentState);
  const [data, setData] = useState(null);

  useEffect(() => {
    getDashboardData();
  }, []);

  const getDashboardData = async () => {
    const url =
      "https://eu2apisisdev01.azurewebsites.net/api/operation/GetResumen";
    const response = await fetch(url);
    const resp = await response.json();
    setData(resp.data);
  };

  const LoadNews = () => {
    console.log("DATA", data);
    if (data) {
      return (
        <Card.Text className="text-bold">
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li" variant="warning">Cras justo odio Cras justo odio Cras justo odio Cras justo odio CraCras justo odio Cras justo odio Cras justo odio Cras justo odio Crs justo odioCras justo odio</ListGroup.Item>
            <ListGroup.Item as="li" variant="warning">Dapibus ac facilisis Dapibus ac facilisis Dapibus ac facilisis DapiDapibus ac facilisis Dapibus ac facilisis Dapibus ac facilisis Dapbus ac facilisis Dapibus ac facilisisDapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item as="li" variant="warning">Morbi leo risus Morbi leo risus Morbi leo risus Morbi leo risus MorMorbi leo risus Morbi leo risus Morbi leo risus Morbi leo risus Mobi leo risusMorbi leo risus</ListGroup.Item>
            <ListGroup.Item as="li" variant="warning">Porta ac consectetur Porta ac consectetur Porta ac consectetur PortPorta ac consectetur Porta ac consectetur Porta ac consectetur Pora ac consectetur Porta ac consecteturPorta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item as="li" variant="warning">Vestibulum at eros Vestibulum at eros Vestibulum at eros VestibulumVestibulum at eros Vestibulum at eros Vestibulum at eros Vestibulu at eros Vestibulum at erosVestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card.Text>
      );
    }
    return (
      <Card.Text className="text-center">
        <Spinner animation="border" />
      </Card.Text>
    );
  };

  const StudentResume = () => {
    if (currentUser !== null) {
      return (
<>
<br />
        <div className="studentHome">
          <Card className="studentCard">
            <Card.Header className="text-center">Featured</Card.Header>
            <Card.Body>
              <Card.Title>
                Hola {currentUser.firstName} {currentUser.parentName}
              </Card.Title>
              <Card.Text>
                Bienvenido al portal de alumnos del Ateneo Fuente, aqui podrás
                encontrar información sobre tus calificaciones asi como mensajes
                de tus maestros.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
</>
      );
    }
  };

  const StudentNews = () => {
    return (
      <>
        <br />
        <Card>
          <Card.Header className="text-center" variant="warning">Notificaciones de tus maestros</Card.Header>
          <Card.Body>
            <LoadNews></LoadNews>
          </Card.Body>
        </Card>
      </>
    );
  };

  return (
    <Container>
      <StudentResume />
      <StudentNews />
    </Container>
  );
};
