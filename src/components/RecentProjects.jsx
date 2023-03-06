import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default class RecentProjects extends Component {
  render() {
    return (
      <Fragment>
        <Container className="recent-project section">
            <h2 className="section-title">Recent Projects</h2>
          <Row>
            
            <Col lg={4} md={6} sm={12} className="mb-3">
              <Card className="text-center">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title className="card-title text-center">Card Title</Card.Title>
                  <Card.Text className="section-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button >Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
