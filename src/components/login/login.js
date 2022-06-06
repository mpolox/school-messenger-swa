import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../Styles/App.css";
import logo from '../../assets/af.jpg'

export const LoginScreen = () => {
  const [access, setAccess] = useState({
    loggedIn: false,
    token: null,
  });

  const [showAlert, setShowAlert] = useState(false);
  const [showConnecting, setShowConnecting] = useState(false);

  const [usuario, setUsuario] = useState({
    userName: null,
    password: null,
  });

  const ShowThealert = () => {
    if (showAlert)
      return (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          Contraseña incorrecta, intentelo nuevamente.
        </Alert>
      );
  };

  const ShowConnecting = () => {
    if (showConnecting)
      return (
        <Alert variant="warning">
          <Row className="text-center">
            <Col><Spinner animation="border"/></Col>

          </Row>
        </Alert>
      );
  };

  useEffect(() => {}, [access.loggedIn]);

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    setShowConnecting(true);
    setShowAlert(false);
    e.preventDefault();
    axios
      .post("https://eu2apisisdev01.azurewebsites.net/api/user/Login", {
        userName: usuario.userName,
        password: usuario.password,
      })
      .then(function (response) {
        setShowConnecting(false);
        setAccess({
          loggedIn: true,
          token: response.data,
        });
        navigate("/", { replace: true });
      })
      .catch(function (error) {
        setShowConnecting(false);
        setShowAlert(true);
        setAccess({
          loggedIn: false,
          token: null,
        });
      });
  };

  return (
    <div className="home">
      <Card border="success" className="loginCard">
        {/* <Card.Img variant="top" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" /> */}
        <Card.Img variant="top" src={logo} /> 
        <ShowThealert></ShowThealert>
        <ShowConnecting></ShowConnecting>        
        <Card.Body>
          <Card.Title>Acceso</Card.Title>
          <Card.Text>
            Hola, para poder entrar es necesario tu nombre de usuario y
            contraseña.
          </Card.Text>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label >Usuario</Form.Label>
              <Form.Control
                type="user"
                placeholder="Nombre de usuario"
                name="userName"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword" >
              <Form.Label>contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                name="password"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Button variant="success w-100" type="submit">
              Entrar
            </Button>
            <br />
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
