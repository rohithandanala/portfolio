import { Card, Col, Container, Row } from "react-bootstrap";
import projectimg from "../projectImg.png";
import Projectdetails from "./Projectdetails";
import { useEffect, useState } from "react";

function Projects() {
  const url = "http://127.0.0.1:8000/project";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <Container>
      <h1>Projects</h1>
      <Row>
        {data.map((d) => (
          <Col className="d-flex justify-content-center">
            <Card
              className="projectile"
              style={{
                width: "25rem",
                textAlign: "justify",
                marginBottom: "10px",
                alignItems: "center",
              }}
            >
              <Card.Img src={projectimg} />
              <Card.Title>{d.title}</Card.Title>
              <Card.Text>{d.description}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
