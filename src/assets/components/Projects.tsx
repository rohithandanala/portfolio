import { Card, Col, Container, Row } from "react-bootstrap";
import { projects } from "./Projectdetails";

function Projects() {
  return (
    <Container>
      <h1>Projects</h1>
      <Row>
        {projects.map((d) => (
          <Col className="d-flex justify-content-center">
            <Card
              style={{
                width: "25rem",
                textAlign: "justify",
                marginBottom: "10px",
                alignItems: "center",
              }}
            >
              <Card.Img src={d.cover} />
              <Card.Title>{d.title}</Card.Title>
              <Card.Text>{d.Description}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
