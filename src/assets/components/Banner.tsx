import { Col, Container, Row } from "react-bootstrap";

function Banner() {
  return (
    <Container>
      <Row>
        <Col xs={8}>
          <h1>Hello World!</h1>
        </Col>
        <Col xs={4}>
          <a>Image</a>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
