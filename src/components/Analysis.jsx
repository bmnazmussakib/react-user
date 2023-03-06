import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactVisibilitySensor from "react-visibility-sensor";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export default class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { technology: "HTML", project: "80" },
        { technology: "CSS", project: "80" },
        { technology: "Javascript", project: "40" },
        { technology: "Bootstrap", project: "65" },
        { technology: "SCSS", project: "35" },
        { technology: "React", project: "60" },
        { technology: "Next", project: "33" },
        { technology: "Node", project: "21" },
        { technology: "PHP", project: "15" },
        { technology: "MongoDB", project: "21" },
        { technology: "MySQL", project: "15" },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <Container className="analysis section">
          <h2 className="section-title">Analysis</h2>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div className="analysis-chart">
                <ReactVisibilitySensor>
                  <ResponsiveContainer>
                    <BarChart width={100} height={300} data={this.state.data}>
                      <XAxis dataKey="technology" />
                      <Tooltip />
                      <Bar dataKey="project" fill="#0884e9"></Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ReactVisibilitySensor>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="analysis-text">
                <p className="text-justify section-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, quisquam quo, quidem temporibus nulla nihil maxime
                  magnam vel doloremque consequatur ipsum natus amet quis eaque
                  dignissimos ducimus veniam rem! Labore vero libero mollitia.
                  Fugit eveniet ex at eius enim excepturi. Consectetur vitae
                  ipsum labore consequuntur perspiciatis! Soluta a at expedita
                  quae delectus dignissimos illo inventore quisquam placeat nisi
                  beatae ducimus dolorem pariatur dicta nulla, repellat ea
                  repudiandae suscipit iusto quos velit modi natus! Nulla neque
                  doloremque facere, nemo eum corrupti.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
