import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class ProjectDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col>
              <div className="project-image">
                <img src="..." alt="" className="img-fluid" />
              </div>
            </Col>
            <Col>
                <div className="project-info">
                    <h2>App Name</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit aliquid consectetur eligendi laudantium itaque ex voluptate minima ipsa consequuntur odit.</p>
                    <ul className="features">
                        <li>Ecommerce App</li>
                        <li>Ecommerce App</li>
                        <li>Ecommerce App</li>
                        <li>Ecommerce App</li>
                        <li>Ecommerce App</li>
                        <li>Ecommerce App</li>
                        <li>Ecommerce App</li>
                        <li>Ecommerce App</li>
                        <li>Ecommerce App</li>
                        <li>Ecommerce App</li>
                        <li>Ecommerce App</li>
                        <li>Ecommerce App</li>
                    </ul>
                </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
