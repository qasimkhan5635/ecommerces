import React from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";

export default function ProductDetails(props) {
  const viewProduct = props.viewProduct;
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {viewProduct.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <img src={viewProduct.image} className="img-fluid" />
            </Col>
            <Col xs={12} sm={12} md={6}>
              <Card.Text>{viewProduct.price}</Card.Text>

              <div className="d-flex justify-content-between">
                <small className="text-muted">Size: {viewProduct.size}</small>
                <small className="text-muted">Year: {viewProduct.year}</small>
              </div>
              <div className="d-flex justify-content-between">
                <small className="text-muted">Brand: {viewProduct.brand}</small>
                <small className="text-muted">
                  Category: {viewProduct.category}
                </small>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
