import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  const [url, setUrl] = useState(
    "mailto:test@example.com?subject=subject&body=body"
  );
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    // window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
    setUrl(
      `mailto:aripan017@gmail.com?subject=${subject}&body=${name}: ${message}`
    );
    window.open(url);
  };
  return (
    <div id="contact">
      <div className="text-center">
        <h2>Contact</h2>
      </div>
      <Container className="mt-3">
        <Row>
          <Col sm={12} md={6}>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  defaultValue=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue=""
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={3}
                  defaultValue=""
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={handleClick}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col sm={12} md={1}></Col>
          <Col sm={12} md={5} className="mt-2">
            <div>
              <h4>Address and Phone</h4>
              <p>
                Md Asaduzzaman Ripan
                <br />
                Gladbacher Str. 218 <br />
                47805,Krefeld,Krefeld <br />
                Germany
                <br />
                <span>+4917636715365</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
