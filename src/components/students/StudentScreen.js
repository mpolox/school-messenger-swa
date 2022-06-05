import React, { useReducer }  from "react";
import { Accordion, Button, Card, Container } from "react-bootstrap";
import { ACTIONS } from "../../Reducers/actions";
import { StudentReducer } from "../../Reducers/StudentReducer";
import { InitialStudentState } from "../../Reducers/InitialStudentState";

export const StudentScreen = () => {
  const [state, dispatch] = useReducer(StudentReducer, InitialStudentState);

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
                 <br/>
                 <div className="row">
                   <div className="col-4 center">
                      <Button variant="success" onClick={() => dispatch(ACTIONS.INCREMENT)}>+</Button>
                   </div>
                   <div className="col-4">
                   Result: {state.contador}
                   </div>                   
                   <div className="col-4">
                   <Button variant="danger" onClick={() => dispatch(ACTIONS.DECREMENT)}>-</Button>
                   </div>                   
                 </div>                
                <Button onClick={() => dispatch(ACTIONS.OTRO)}>Otro</Button>
              </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};
