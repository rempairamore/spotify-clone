import React from "react";
import { Row, Col } from 'react-bootstrap';

export default function HeaderComp() {
  return (
    <>
    <div className="col-12 col-md-9 offset-md-3 mainPage mt-2">
    <Row>
      <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
        <a href="#">TRENDING</a>
        <a href="#">PODCAST</a>
        <a href="#">MOODS AND GENRES</a>
        <a href="#">NEW RELEASES</a>
        <a href="#">DISCOVER</a>
      </Col>
    </Row>
    <Row>
      <Col xs={10}>
        <div id="searchResults" style={{ display: 'none' }}>
          <h2>Search Results</h2>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></Row>
        </div>
      </Col>
    </Row>
    </div>
  </>
  );
}
