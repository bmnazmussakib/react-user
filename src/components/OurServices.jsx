import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import appURL from "../RestAPI/appURL";
import RestClient from "../RestAPI/RestClient";

export default class OurServices extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    RestClient.GetRequest(appURL.service).then((res) => {
      this.setState({ data: res });
    });
  }

  render() {
    const data = this.state.data;

    const myView = data.map((data) => {
      return <>
        <Col lg={6} md={6} sm={12}>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={data.service_logo}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
      </>;
    });

    return (
      <Fragment>
        <Container className="our-service section">
          <h2 className="section-title">Our Services</h2>
          <Row>
            {myView}
          </Row>
        </Container>
      </Fragment>
    );
  }
}
