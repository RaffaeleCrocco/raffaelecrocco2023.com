import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../media/logo.svg";
import grafica1 from "../media/grafica1.svg";
import circlelight from "../media/circle-light.svg";
import circledark from "../media/circle-dark.svg";
import uni from "../media/uni.svg";

const Home = () => {
  return (
    <div className="Home">
      <Row className="hero flex-column-reverse flex-md-row">
        <Col xs="auto" md={8} className="d-flex justify-content-start">
          <div className="title">
            <p>UI designer</p>& WEB DEVELOPER
          </div>
        </Col>
        <Col
          xs="auto"
          md={4}
          className="d-flex justify-content-start justify-content-md-end mb-5"
        >
          <img src={logo} />
        </Col>
      </Row>
      <Row className="aboutme">
        <Col xs="auto" className="d-none d-md-flex align-items-center">
          <img src={grafica1} />
        </Col>
        <Col className="d-flex flex-column justify-content-center mt-5">
          <div>
            <div className="subtitle">ABOUT ME</div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </Col>
      </Row>
      <Row className="projects">
        <Col className="d-flex align-items-end">
          <div>
            <p className="subtitle">PROGETTO</p>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <img src={circlelight} />
          </div>
        </Col>
        <Col className="d-flex align-items-end">
          <div>
            <p className="subtitle">PROGETTO</p>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <img src={circlelight} />
          </div>
        </Col>
        <Col className="d-flex align-items-end white-col">
          <div>
            <p className="subtitle">PROGETTO</p>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <img src={circledark} />
          </div>
        </Col>
      </Row>
      <div className="uni-projects d-md-flex justify-content-end align-items-center p-5">
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Home;
