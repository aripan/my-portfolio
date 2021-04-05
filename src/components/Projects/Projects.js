import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import example from "../../images/3D-Wallpaper-8.jpg";

const Projects = () => {
  return (
    <div id="projects">
      <div className="text-center">
        <h2>Projects</h2>
      </div>
      <Container>
        <Row className="d-flex justify-content-between align-items-center mt-3">
          <Col sm={12} md={6}>
            <h5>Example body text</h5>
            <p>
              Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu
              leo. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nullam id dolor id nibh ultricies
              vehicula.
            </p>
            <Button variant="primary">Link</Button>
            <Button variant="secondary" className="m-1">
              Primary
            </Button>
          </Col>
          <Col sm={12} md={6}>
            <Image src={example} fluid />
          </Col>
        </Row>
        <Row className="d-flex justify-content-between align-items-center mt-3">
          <Col sm={12} md={6}>
            <Image src={example} fluid />
          </Col>
          <Col sm={12} md={6}>
            <h5>Example body text</h5>
            <p>
              Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu
              leo. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nullam id dolor id nibh ultricies
              vehicula.
            </p>
            <Button variant="primary">Link</Button>
            <Button variant="secondary" className="m-1">
              Primary
            </Button>
          </Col>
        </Row>
        <Row className="d-flex justify-content-between align-items-center mt-3">
          <Col sm={12} md={6}>
            <h5>Example body text</h5>
            <p>
              Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu
              leo. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nullam id dolor id nibh ultricies
              vehicula.
            </p>
            <Button variant="primary">Link</Button>
            <Button variant="secondary" className="m-1">
              Primary
            </Button>
          </Col>
          <Col sm={12} md={6}>
            <Image src={example} fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
