import { Card, Col, Container, Row } from "react-bootstrap";
import projectimg from "../projectImg.png";
import Projectdetails from "./Projectdetails";

function Projects() {
  const projects = Projectdetails();
  return (
    <Container>
      <h1>Projects</h1>
      <a>
        <pre>{JSON.stringify(projects)}</pre>
      </a>
    </Container>
  );
}

export default Projects;
