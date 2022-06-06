import  axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  
const [access, setAccess] = useState({
  loggedIn: false,
  token: null
});

const [showAlert, setShowAlert] = useState(false);

const [usuario, setUsuario] = useState({
  userName: null,
  password: null,
});

  const ShowThealert = () => {
    if (showAlert)
    return(
      <Alert variant='danger' >
      Contraseña incorrecta, intentelo nuevamente.
      </Alert>
    )
  }

  useEffect(() => {
  },[access.loggedIn]); 

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setUsuario({...usuario, [e.target.name]: e.target.value })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const {data} = axios.post('https://localhost:7253/api/user/Login',{
      userName: usuario.userName,
      password: usuario.password
    })
    .then(function (response) {
      setShowAlert(false);
      setAccess({
        loggedIn: true,
        token: response.data        
      });
      navigate("/", { replace: true });
    })
    .catch(function (error) {
      setShowAlert(true);
      setAccess({
        loggedIn: false,
        token: null
      });
    });    
  };
 
  return (
  <div className="home">
  <Card border="primary" style={{ width: '20rem' }}>
    <ShowThealert></ShowThealert>


    <Card.Header>Mi Ateneo</Card.Header>
    <Card.Body>
      <Card.Title>Acceso</Card.Title>
      <Card.Text>
        Hola, para poder entrar es necesario tu nombre de usuario y contraseña.
      </Card.Text>
      <Form variant="w-50" onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="user" placeholder="Nombre de usuario" name="userName" onChange={handleOnChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" name="password" onChange={handleOnChange}/>
        </Form.Group>
        <Button variant="primary w-100" type="submit">
          Entrar
        </Button>
        <br/>       
      </Form>      
    </Card.Body>
  </Card>

    </div>
  );
};
