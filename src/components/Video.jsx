import React, { Component, Fragment } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { FaPlayCircle } from "react-icons/fa";
import { BigPlayButton, Player } from "video-react";
import 'video-react/dist/video-react.css';




export default class Video extends Component {

    constructor(){
        super();
        this.state = {
            show: false
        }
    }


    modalOpen = () => {this.setState({show: true})}
    modalClose = () => {this.setState({show: false})}




  render() {
    return (
      <Fragment>
        <Container className="video section">
          <Row>
            <Col>
              <div className="video-card text-center">
                <h4>How I do</h4>
                <p className="section-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur ea nemo iusto cumque, autem cupiditate repudiandae
                  soluta temporibus saepe reiciendis, numquam quod magni odio!
                  Velit nam, ut voluptatum qui, perferendis suscipit, odit
                  ratione neque soluta expedita facilis et rerum nesciunt
                  aliquid excepturi cupiditate consequatur ducimus vel rem ipsum
                  fugit. Omnis unde nisi, nobis a laudantium saepe temporibus
                  totam quod tempore.
                </p>
                <p className="play-btn" onClick={this.modalOpen}>
                  <FaPlayCircle />
                </p>
              </div>



              {/* MODAL */}
              <Modal show={this.state.show} onHide={this.modalClose} centered size="lg">
                <Modal.Body >
                  <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" >
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
