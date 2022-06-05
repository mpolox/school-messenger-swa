import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/", { replace: true });
    console.log("Entrar");
  };

  return (
    <div className="home">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="user" placeholder="Nombre de usuario" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Entrar
        </Button>
        <Button variant="danger" type="submit" onClick={handleLogin}>
          Entrar
        </Button>        
      </Form>
    </div>
  );
};
