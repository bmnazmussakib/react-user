import React, { Component, Fragment } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { FaPlayCircle } from "react-icons/fa";
import { BigPlayButton, Player } from "video-react";
import 'video-react/dist/video-react.css';
import appURL from "../RestAPI/appURL";
import RestClient from "../RestAPI/RestClient";




export default class Video extends Component {

    constructor(){
        super();
        this.state = {
            show: false,
            videoDescription: '',
            videoURL: ''
        }
    }

    componentDidMount() {
      RestClient.GetRequest(appURL.video)
      .then((res) => {
        this.setState({ 
          videoDescription: res[0].video_description,
          videoURL: res[0].video_url
         });
      });
    }


    modalOpen = () => {this.setState({show: true})}
    modalClose = () => {this.setState({show: false})}


  render() {

    const videoURL = this.state.videoURL;
    const description = this.state.videoDescription;

    return (
      <Fragment>
        <Container className="video section">
          <Row>
            <Col>
              <div className="video-card text-center">
                <h4>How I do</h4>
                <p className="section-text">
                  {description}
                </p>
                <p className="play-btn" onClick={this.modalOpen}>
                  <FaPlayCircle />
                </p>
              </div>



              {/* MODAL */}
              <Modal show={this.state.show} onHide={this.modalClose} centered size="lg">
                <Modal.Body >
                  <Player src={videoURL}>
                  <BigPlayButton position="center" />
                  </Player>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={this.modalClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
