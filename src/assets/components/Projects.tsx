import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import projectimg from "../projectImg.png";
import { useEffect, useState } from "react";

function Projects() {
  let jsonData = '{"title":"dummy", "description":"dummy description"}';
  let dummy = JSON.parse(jsonData);

  const url =
    "http://127.0.0.1:8000/project/?skip=0&limit=100"; /* http://192.168.1.113:3456/project*/
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(dummy);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
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

                <Button
                  onClick={() => {
                    setModalData(d), setModalIsOpen(true);
                  }}
                >
                  Show More
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Modal
        show={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        dialogClassName="modal-20w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {modalData.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Project Description</h4>
          <p>{modalData.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalIsOpen(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Projects;
