import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="text-center">
            <span className="text-muted">Copyright &copy; Website 2022</span>
          </Col>
        </Row>
      </Container>
    </>
  );
}
