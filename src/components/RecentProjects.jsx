import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import appURL from "../RestAPI/appURL";
import RestClient from "../RestAPI/RestClient";

export default class RecentProjects extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    RestClient.GetRequest(appURL.projects).then((res) => {
      this.setState({ data: res });
    });
  }

  render() {
    const data = this.state.data;

    const myView = data.map((data) => {
      return (
        <Col lg={4} md={6} sm={12} className="mb-3">
          <Card className="text-center">
            <Card.Img variant="top" src={data.project_thumbnail}/>
            <Card.Body>
              <Card.Title className="card-title text-center">
                {data.project_name}
              </Card.Title>
              <Card.Text className="section-text text-center">
                {data.short_description}
              </Card.Text>
              <Button>
                <Link to="/projectDetails">Details</Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });

    return (
      <Fragment>
        <Container className="recent-project section">
          <h2 className="section-title">Recent Projects</h2>
          <Row>
            {myView}
          </Row>
        </Container>
      </Fragment>
    );
  }
}
