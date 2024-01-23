import React from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

export default function PlayerComp() {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
    <Row>
      <Col lg={10} className="offset-lg-2">
        <Row>
          <Col sm={6} md={4} lg={2} className="offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
            <div className="d-flex justify-content-between">
              <a href="#">
                <img src="/playerbuttons/Shuffle.png" alt="shuffle" />
              </a>
              <a href="#">
                <img src="/playerbuttons/Previous.png" alt="previous" />
              </a>
              <a href="#">
                <img src="/playerbuttons/Play.png" alt="play" />
              </a>
              <a href="#">
                <img src="/playerbuttons/Next.png" alt="next" />
              </a>
              <a href="#">
                <img src="/playerbuttons/Repeat.png" alt="repeat" />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center playBar py-3">
          <Col sm={8} md={6}>
            <ProgressBar>
              <ProgressBar
                animated
                now={0}
                label={`${0}%`}
              />
            </ProgressBar>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
  )
}
