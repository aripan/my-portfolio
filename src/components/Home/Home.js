import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import pic from "../../images/Photo.jpg";

const Home = () => {
  return (
    <div id="home">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm={12} md={6}>
            <h1>Md Asaduzzaman Ripan</h1>
            <p className="lead">A self taught front end developer</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Learn more
              </a>
            </p>
          </Col>
          <Col md={6} className="d-none d-sm-none d-md-block">
            <Image src={pic} className="p-4" fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
