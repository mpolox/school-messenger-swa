import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/', { replace: true });
    console.log("Entrar")
  }

  return (    
    <div className="home">
    <Card>
      <Card.Header>Login</Card.Header>
      <Card.Body>
        <Card.Text>
          Entrar a la aplicación.
        </Card.Text>
        <Button onClick={handleLogin}>Entrar</Button>
      </Card.Body>
    </Card>     
    </div>
  )
}
