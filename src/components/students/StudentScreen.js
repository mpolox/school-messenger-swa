import React, { useReducer }  from "react";
import { Accordion, Button, Card, Container } from "react-bootstrap";
import { ACTIONS } from "../../Reducers/actions";
import { StudentReducer } from "../../Reducers/StudentReducer";

export const StudentScreen = () => {
  


  const [state, dispatch] = useReducer(StudentReducer, {count: 0});

  return (
    <div>
      <Container>
        <br />
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Matemáticas</Accordion.Header>
            <Accordion.Body>
            <Card style={{ height: "28rem" }}>              
              <Card.Body>
                Result: {state.count} <br/>
                <Button variant="success" onClick={() => dispatch({ type: ACTIONS.INCREMENT})}>+</Button>
                <Button variant="danger" onClick={() => dispatch({ type: ACTIONS.DECREMENT})}>-</Button>

              </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};
