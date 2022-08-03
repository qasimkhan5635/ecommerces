import React from "react";
import { Button, Card, Col } from "react-bootstrap";

export default function ShopProduct(props) {
  const item = props.item;
  return (
    <>
      <Col xs={6} sm={6} md={4} className="mb-3">
        <Card onClick={(e) => props.productDetailHandler(item)}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.price}</Card.Text>
            <Card.Text className="d-flex justify-content-between">
              <small className="text-muted">Size: {item.size}</small>
              <small className="text-muted">Year: {item.year}</small>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
            <small className="text-muted">Brand: {item.brand}</small>
            <small className="text-muted">Category: {item.category}</small>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
}
