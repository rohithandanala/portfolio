import React from "react";
import { Carousel, Container } from "react-bootstrap";
import exampleImg from "../example.jpg";

function Skills() {
  return (
    <Container className="align-items-center">
      <h1>Expertise In</h1>
      <Carousel>
        <Carousel.Item>
          <img src={exampleImg} alt="Img 1" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={exampleImg} alt="Img 2" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={exampleImg} alt="Img 3" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Skills;
