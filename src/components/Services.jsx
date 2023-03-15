import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaHtml5 } from "react-icons/fa";
import appURL from "../RestAPI/appURL";
import RestClient from "../RestAPI/RestClient";

export default class Services extends Component {
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
      return (
        <Col sm={12} md={6} lg={4} >
          <div className="card">
            <div className="card-img">
              <img src={data.service_logo} alt="" />
            </div>
            <div className="card-body">
              <h3 className="card-title">{data.service_name}</h3>
              <p className="card-text section-text">{data.short_description}</p>
            </div>
          </div>
        </Col>
      );
    });

    return (
      <Fragment>
        <Container className="services section">
          <Row>
            <Col>
              <h2 className="section-title">Services</h2>
            </Col>
          </Row>
          <Row>
            {myView}
          </Row>
        </Container>
      </Fragment>
    );
  }
}
