import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default class TopBanner extends Component {





  render() {
    return (
      <Fragment>
        <Container fluid className="topBanner p-0">
          <Row>
            <Col>
              <div className="topBannerOverlay"></div>
              <div className="banner-text">
                <h1>John Doe</h1>
                <p>Software Engineer</p>
                <Button>Read More</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
