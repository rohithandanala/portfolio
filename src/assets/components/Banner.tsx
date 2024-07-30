import { Col, Container, Row } from "react-bootstrap";
import programmer from "../programmer.png";

function Banner() {
  return (
    <Container className="banner">
      <Row>
        <Col xs={12} lg={8} md={8}>
          <h1>Hi There!</h1>
          <h2>I'm Rohith Andanala</h2>
          <a>I am a professional programmer.</a>
        </Col>
        <Col xs={12} lg={4} md={4}>
          <img src={programmer} />
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
