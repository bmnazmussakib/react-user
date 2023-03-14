import axios from "axios";
import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import appURL from "../RestAPI/appURL";
import RestClient from "../RestAPI/RestClient";

export default class TopBanner extends Component {
  
  
  constructor() {
    super();
    this.state = {
      title: "",
      subtitle: "",
    };
  }

  componentDidMount() {
    RestClient.GetRequest(appURL.topTitle).then((res) => {
      this.setState({
        title: res[0].home_title,
        subtitle: res[0].home_subtitle,
      });
    });
  }

  render() {
    const title = this.state.title;
    const subtitle = this.state.subtitle;
    return (
      <Fragment>
        <Container fluid className="topBanner p-0">
          <Row>
            <Col>
              <div className="topBannerOverlay"></div>
              <div className="banner-text">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <Button>Read More</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
