import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion as m } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

const University = () => {
  return (
    <m.div
      className="University mt-5"
      id="top"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.8, delay: 0.1 }}
    >
      <a name="uni-top"></a>
      <div className="title">
        <span className="mb-0">Progetti </span>&times; l'
        <span className="accent">Università</span>
        <Link to="/">
          <p className="accent d-flex align-items-center">
            <div className="circle pulsating me-2"></div>torna alla home
          </p>
        </Link>
      </div>
      <Row className="projects">
        <Col className="project-dark d-flex align-items-end">
          <div>
            <p className="subtitle">Network security trainer</p>
            <p className="text">
              Tool per gli studenti che vogliono allenare la propria conoscenza
              sul tema della Network Security in preparazione all'esame. Da
              usare solo a scopo educativo.
            </p>
            <div className="circle pulsating" />
          </div>
        </Col>
        <Col className="project-dark d-flex align-items-end">
          <div>
            <p className="subtitle">EcoG, IoT &times; la natura</p>
            <p className="text">
              Interfaccia utente e source code per un vaso smart che
              collegandosi al Wifi domestico permetta il monitoraggio delle
              proprie piante. Include 3D printing e PCB printing.
            </p>
            <div className="circle pulsating" />
          </div>
        </Col>
        <Col className="project-dark d-flex align-items-end">
          <div>
            <p className="subtitle">Computer vision in python</p>
            <p className="text">
              Codice python per un algoritmo di computer vision creato per
              riconoscere e classificare lego in un ambiente simulato e
              permettere ad un braccio robotico controllato con ROS di
              manipolarli.
            </p>
            <div className="circle pulsating" />
          </div>
        </Col>
      </Row>
    </m.div>
  );
};

export default University;