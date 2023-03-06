import React, { Component } from "react";
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { RxAvatar } from "react-icons/rx";

export default class Testimonial extends Component {
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

    return (
      <Fragment>
        <Container className="testimonial section">
          <h2 className="section-title">Testimonial</h2>

          <Slider {...settings}>
            <div>
              <Row className="justify-content-center">
                <Col lg={6} md={6} sm={12} className="text-center">
                  <div className="single-slider text-center">
                    <div className="client-img">
                      <RxAvatar />
                    </div>
                    <h3 className="card-title">Web Development</h3>
                    <p className="section-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur consectetur, impedit quo provident debitis
                      ipsam facilis! Sed, natus rem architecto dolorum neque
                      placeat dignissimos cum, sit impedit eos numquam
                      voluptatem.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="justify-content-center">
                <Col lg={6} md={6} sm={12} className="text-center">
                  <div className="single-slider text-center">
                    <div className="client-img">
                      <RxAvatar />
                    </div>
                    <h3 className="card-title">Web Development</h3>
                    <p className="section-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur consectetur, impedit quo provident debitis
                      ipsam facilis! Sed, natus rem architecto dolorum neque
                      placeat dignissimos cum, sit impedit eos numquam
                      voluptatem.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="justify-content-center">
                <Col lg={6} md={6} sm={12} className="text-center">
                  <div className="single-slider text-center">
                    <div className="client-img">
                      <RxAvatar />
                    </div>
                    <h3 className="card-title">Web Development</h3>
                    <p className="section-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur consectetur, impedit quo provident debitis
                      ipsam facilis! Sed, natus rem architecto dolorum neque
                      placeat dignissimos cum, sit impedit eos numquam
                      voluptatem.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="justify-content-center">
                <Col lg={6} md={6} sm={12} className="text-center">
                  <div className="single-slider text-center">
                    <div className="client-img">
                      <RxAvatar />
                    </div>
                    <h3 className="card-title">Web Development</h3>
                    <p className="section-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur consectetur, impedit quo provident debitis
                      ipsam facilis! Sed, natus rem architecto dolorum neque
                      placeat dignissimos cum, sit impedit eos numquam
                      voluptatem.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Slider>
        </Container>
      </Fragment>
    );
  }
}
