import React, { Component } from "react";
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { RxAvatar } from "react-icons/rx";
import RestClient from "../RestAPI/RestClient";
import appURL from "../RestAPI/appURL";

export default class Testimonial extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    RestClient.GetRequest(appURL.testimonial).then((res) => {
      this.setState({ data: res });
    });
  }

  render() {
    var settings = {
      autoplay: true,
      autoPlaySpeed: 3000,
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
    };

    const data = this.state.data;
    const myView = data.map((data) => {
      return (
        <div>
          <Row className="justify-content-center">
            <Col lg={6} md={6} sm={12} className="text-center">
              <div className="single-slider text-center">
                <div className="client-img">
                  <img src={data.client_image} alt="" />
                </div>
                <h3 className="card-title">{data.client_name}</h3>
                <p className="section-text">
                  {data.client_description}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      );
    });

    return (
      <Fragment>
        <Container className="testimonial section">
          <h2 className="section-title">Testimonial</h2>

          <Slider {...settings}>{myView}</Slider>
        </Container>
      </Fragment>
    );
  }
}
