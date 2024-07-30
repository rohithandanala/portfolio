import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navibar from "../components/Navibar";
import contactImg from "../Picsart_24-07-29_09-51-37-160.png";

function Contact() {
  return (
    <>
      <Container>
        <Navibar />
        <div className="contactcontainer">
          <Row>
            <Col xs={12} lg={4} md={4}>
              <img src={contactImg} className="contactimg" />
            </Col>
            <Col
              xs={12}
              lg={8}
              md={8}
              className="d-flex justify-content-center"
            >
              <div className="mailbox">
                <h3>Contact Me!</h3>
                <Row className="d-flex ">
                  <Col
                    xs={12}
                    lg={6}
                    md={6}
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                  >
                    <input
                      type="text"
                      placeholder="First Name"
                      style={{ width: "75%" }}
                    />
                  </Col>
                  <Col
                    xs={12}
                    lg={6}
                    md={6}
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                  >
                    <input
                      type="text"
                      placeholder="Last Name"
                      style={{ width: "75%" }}
                    />
                  </Col>
                  <Col
                    xs={12}
                    lg={12}
                    md={12}
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                  >
                    <input
                      type="text"
                      placeholder="Mail address"
                      style={{ width: "75%" }}
                    />
                  </Col>
                  <Col
                    xs={12}
                    lg={12}
                    md={12}
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                  >
                    <textarea placeholder="Message" style={{ width: "75%" }} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Contact;
