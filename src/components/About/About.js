import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div id="about">
      <div className="text-center">
        <h2>About</h2>
        <h4>Personal Info</h4>
      </div>

      <Container>
        <Row>
          <Col sm={12} md={6}>
            <h4>Hello!</h4>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
            <button type="button" className="btn btn-secondary" disabled>
              Button
            </button>
          </Col>
          <Col md={1}></Col>
          <Col sm={12} md={5}>
            <h4>Skills</h4>
            <div className="text-center">
              <button type="button" className="btn btn-primary disabled m-2">
                Primary
              </button>
              <button type="button" className="btn btn-primary disabled m-2">
                Primary
              </button>
              <button type="button" className="btn btn-primary disabled m-2">
                Primary
              </button>
              <button type="button" className="btn btn-primary disabled m-2">
                Primary
              </button>
              <button type="button" className="btn btn-primary disabled m-2">
                Primary
              </button>
              <button type="button" className="btn btn-primary disabled m-2">
                Primary
              </button>
              <button type="button" className="btn btn-primary disabled m-2">
                Primary
              </button>
              <button type="button" className="btn btn-primary disabled m-2">
                Primary
              </button>
              <button type="button" className="btn btn-primary disabled m-2">
                Primary
              </button>
              <button type="button" className="btn btn-primary disabled m-2">
                Primary
              </button>
              <button type="button" className="btn btn-primary disabled m-2">
                Primary
              </button>
              <button type="button" className="btn btn-primary disabled m-2">
                Primary
              </button>
              <button type="button" className="btn btn-primary disabled m-2">
                Primary
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
