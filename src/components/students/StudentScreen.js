import React  from "react";
import { Accordion, Card, Container } from "react-bootstrap";

export const StudentScreen = () => {
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
              </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};
