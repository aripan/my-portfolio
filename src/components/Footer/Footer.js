import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <FacebookIcon style={{ fontSize: "50px" }} className="m-2" />

          <LinkedInIcon style={{ fontSize: "50px" }} className="m-2" />

          <GitHubIcon style={{ fontSize: "50px" }} className="m-2" />
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
