import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactVisibilitySensor from "react-visibility-sensor";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import appURL from "../RestAPI/appURL";
import RestClient from "../RestAPI/RestClient";

export default class Analysis extends Component {
  
  
  constructor() {
    super();
    this.state = {
      data: [],
      dummyData: [
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
      description: ""
    };
  }


  componentDidMount(){
    RestClient.GetRequest(appURL.chartData)
    .then(res => {
      this.setState({data: res})
    })

    RestClient.GetRequest(appURL.techDesc)
    .then(res => {
      this.setState({description: res})
    })
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
                    <BarChart width={100} height={300} data={this.state.dummyData}>
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
                  
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
