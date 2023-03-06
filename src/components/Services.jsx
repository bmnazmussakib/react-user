import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaHtml5 } from "react-icons/fa";

export default class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container className="services section">
          <Row>
            <Col>
              <h2 className="section-title">Services</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <div className="card">
                <div className="card-img">
                  <FaHtml5 />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Web Development</h3>
                  <p className="card-text section-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
