import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Sidebar(props) {
  const brands = ["rebook", "nike"];
  const categories = ["shoes"];

  return (
    <Row>
      <Col>
        <ul className="list-group list-group-flush rounded">
          <li className="list-group-item">
            <h5 className="mt-1 mb-1">Categories</h5>
            <div className="d-flex flex-column">
              {categories.map((item, i) => {
                return (
                  <div key={i} className="form-check">
                    <input className="form-check-input" type="checkbox" name={item} value={item} onChange={props.sideBarHandler}/>
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      {item}
                    </label>
                  </div>
                );
              })}
            </div>
          </li>

          <li className="list-group-item">
            <h5 className="mt-1 mb-1">Brands</h5>
            <div className="d-flex flex-column">
              {brands.map((item, i) => {
                return (
                  <div key={i} className="form-check">
                    <input className="form-check-input" type="checkbox" name={item} value={item} onChange={props.sideBarHandler}/>
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      {item}
                    </label>
                  </div>
                );
              })}
            </div>
          </li>
          
        </ul>
      </Col>
    </Row>
  );
}
