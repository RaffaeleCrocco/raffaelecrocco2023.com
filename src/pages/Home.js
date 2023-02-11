import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../media/logo2.svg";
import grafica1 from "../media/grafica1.svg";
import circlelight from "../media/circle-light.svg";
import circledark from "../media/circle-dark.svg";
import uni from "../media/uni.svg";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <div className="Home">
      <Row className="hero flex-column-reverse flex-md-row">
        <Col xs="auto" md={8}>
          <div className="title">
            <p className="mb-0">UI designer</p>&
            <span className="accent">WEB</span> DEVELOPER
          </div>
          <p className="accent" style={{ marginLeft: "4.5px" }}>
            Raffaele Crocco
          </p>
        </Col>
        <Col
          xs="auto"
          md={4}
          className="d-flex justify-content-start justify-content-md-end"
        >
          <img src={logo} />
          {/* <m.div className="logodiv">
            <m.div
             animate={{
                opacity: [0, 0.7, 1],
              }}
              transition={{
                duration: 2,
                times: [0.1, 0.4],
              }}
            ></m.div>
          </m.div> */}
        </Col>
      </Row>
      <Row className="aboutme">
        <Col xs="auto" className="d-none d-md-block">
          <div className="circle faded" />
        </Col>
        <Col className="mt-5 mb-5">
          <div>
            <div className="subtitle">ABOUT ME</div>
            <div className="text">
              Laureando in Ingegneria Informatica all'
              <a href="https://www.unitn.it/" target="_blank">
                Università
              </a>{" "}
              degli Studi di Trento. Questo sito e i progetti al suo interno
              parlano di me e del mio viaggio nel mondo della programmazione che
              ho sempre percepito come il modo più veloce per rendere reali le
              nostre idee. Al momento scrivo la tesi e lavoro per{" "}
              <a href="https://www.onlytechindustries.com" target="_blank">
                Onlytech Industries
              </a>{" "}
              e ai loro progetti in smart working. Sono tutta via disponibile a
              collaborazioni Co. Co. Co. e a proposte di progetto di vario tipo.
              Per qualsiasi informazione{" "}
              <span className="accent">Contattami</span> o scarica il mio{" "}
              <span className="accent">Curriculum</span>.
            </div>
          </div>
        </Col>
      </Row>
      <Row className="projects">
        <Col className="project-dark d-flex align-items-end">
          <div>
            <p className="subtitle">
              Help- <br />
              ukrainians
            </p>
            <p className="text">
              E' un servizio gratuito a disposizione dei cittadini che permette
              la condivisione di iniziative benefiche a supporto del popolo
              ucraino. Condividiamo informazioni utili per il volontariato
              attraverso enti verificati.
            </p>
            <div className="circle pulsating" />
          </div>
        </Col>
        <Col className="project-dark d-flex align-items-end">
          <div>
            <p className="subtitle">onlytech industries</p>
            <p className="text">
              Azienda italiana con esperienza in Blockchain pubbliche e private
              che attraverso l’utilizzo di un ampio stack tecnologico, offre
              consulenza progettuale, sviluppo e integrazione di soluzioni
              Blockchain, sicurezza, e scalabilità.
            </p>
            <div className="circle pulsating" />
          </div>
        </Col>
        <Col className="project-light d-flex align-items-end">
          <div>
            <p className="subtitle">Landing VendImpresa</p>
            <p className="text">
              Landing che anticipa il portale VendImpresa, una realta
              immobiliare innovativa per la compravendita di asset aziendali
              composto da un gruppo di professionisti del settore che fanno
              parte di una rete di aziende tecnologicamente avanzate.
            </p>
            <div className="circle pulsating" />
          </div>
        </Col>
      </Row>
      <Row className="uni-projects p-5">
        <Col>
          <p className="subtitle">University related </p>
          <p className="text">
            In questa sezione alcuni progetti minori relativi al mio percorso
            universitario che potrebbero essere utili per valutare competenze
            trasversali, oltre che ai colleghi studenti ancora in facoltà.
          </p>
        </Col>

        <Col xs="auto" className="d-flex">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
