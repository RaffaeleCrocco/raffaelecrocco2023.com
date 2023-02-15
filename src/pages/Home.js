import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { motion as m } from "framer-motion";
import logo from "../media/grafica.svg";
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  useEffect(() => {
    Array.from(document.getElementsByClassName("path")).forEach(
      (pathElement) => {
        pathElement.setAttribute(
          "style",
          "stroke-dasharray:" +
            pathElement.getTotalLength() +
            ";stroke-dashoffset:" +
            pathElement.getTotalLength()
        );
      }
    );
  }, []);

  return (
    <m.div
      className="Home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.8, delay: 0.1 }}
    >
      <Row className="hero flex-column-reverse flex-md-row">
        <Col xs="auto" md={8}>
          <div className="title">
            <p className="mb-0">UI designer</p>&
            <span className="accent"> WEB</span> DEVELOPER
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
          <svg
            width="659"
            height="516"
            viewBox="0 0 659 516"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              class="path rect"
              x="114"
              y="98"
              width="358"
              height="358"
              rx="22"
              fill="#D9D9D9"
            />
            <circle
              class="logo-circle"
              cx="367"
              cy="332"
              r="134"
              fill="#111111"
            />
            <circle
              class="path"
              cx="367"
              cy="332"
              r="133.5"
              stroke="#FFB700"
              stroke-opacity="0.5"
            />
            <line
              class="path second"
              y1="97.5"
              x2="659"
              y2="97.5"
              stroke="#FFB700"
              stroke-opacity="0.5"
            />
            <line
              class="path"
              y1="141.5"
              x2="659"
              y2="141.5"
              stroke="#FFB700"
              stroke-opacity="0.5"
            />
            <line
              class="path second"
              y1="411.5"
              x2="659"
              y2="411.5"
              stroke="#FFB700"
              stroke-opacity="0.5"
            />
            <line
              class="path"
              y1="455.5"
              x2="659"
              y2="455.5"
              stroke="#FFB700"
              stroke-opacity="0.5"
            />
            <line
              class="path second"
              x1="113.5"
              y1="516"
              x2="113.5"
              y2="-3.02792e-05"
              stroke="#FFB700"
              stroke-opacity="0.5"
            />
            <line
              class="path"
              x1="157.5"
              y1="516"
              x2="157.5"
              y2="-3.02792e-05"
              stroke="#FFB700"
              stroke-opacity="0.5"
            />
            <line
              class="path second"
              x1="427.5"
              y1="516"
              x2="427.5"
              y2="-3.02792e-05"
              stroke="#FFB700"
              stroke-opacity="0.5"
            />
            <line
              class="path"
              x1="471.5"
              y1="516"
              x2="471.5"
              y2="-3.02792e-05"
              stroke="#FFB700"
              stroke-opacity="0.5"
            />
            <line
              class="path"
              x1="500.5"
              y1="516"
              x2="500.5"
              y2="-3.02792e-05"
              stroke="#FFB700"
              stroke-opacity="0.5"
            />
            <line
              class="path"
              x1="520.63"
              y1="504.337"
              x2="54.6465"
              y2="38.3536"
              stroke="#FFB700"
              stroke-opacity="0.5"
            />
            <rect
              class="path second"
              x="114.5"
              y="98.5"
              width="43"
              height="43"
              rx="21.5"
              stroke="#FFB700"
              stroke-opacity="0.5"
            />
            <rect
              class="path second"
              x="428.5"
              y="412.5"
              width="43"
              height="43"
              rx="21.5"
              stroke="#FFB700"
              stroke-opacity="0.5"
            />
            <rect
              class="path"
              x="114.5"
              y="412.5"
              width="43"
              height="43"
              rx="21.5"
              stroke="#FFB700"
              stroke-opacity="0.5"
            />
            <rect
              class="path second"
              x="428.5"
              y="98.5"
              width="43"
              height="43"
              rx="21.5"
              stroke="#FFB700"
              stroke-opacity="0.5"
            />
          </svg>
        </Col>
      </Row>
      <Row className="aboutme">
        <Col xs="auto" className="d-none d-md-flex align-items-center">
          <div className="circle faded" />
        </Col>
        <Col className=" mb-5 d-flex align-items-center">
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
              <a className="accent" href="#contact">
                Contattami
              </a>{" "}
              o scarica il mio <span className="accent">Curriculum</span>.
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
            <a href="https://www.help-ukrainians.org/" target="_blank">
              <div className="circle pulsating" />
            </a>
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
            <a href="https://www.onlytechindustries.com/" target="_blank">
              <div className="circle pulsating" />
            </a>
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
      <Link to="/universita#top">
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
      </Link>
      <a name="contact"></a>
      <Row className="contact">
        <Col className="">
          <div className="title">
            <p className="mb-0">Contattami</p>&times; UN{" "}
            <span className="accent">NUOVO</span> PROGETTO
          </div>
          <p className="accent" style={{ marginLeft: "4.5px" }}>
            Attualmente disponibile per progetti e Co. Co. Co.
          </p>
        </Col>
        <Col className="d-flex align-items-end justify-content-end">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </Col>
      </Row>
      <div className="footer d-grid">
        <div className="separator"></div>
        <Row>
          <Col>
            <p className="subtitle">
              <img src={logo} />
              <span className="mt-5">raffaelecrocco.com</span>
            </p>
            <p className="text-secondary">
              Progettato e creato da Raffaele Crocco. <br />
              Vedi il sito precedente <a className="text-dark">qui</a>.
              @2022-2023
            </p>
          </Col>
          <Col>
            <Row xs={1} md={3}>
              <Col>
                <b>Site map</b>
                <ul className="text-secondary">
                  <li>Progetti</li>
                  <li>Università</li>
                  <li>Contatti</li>
                </ul>
              </Col>
              <Col>
                <b>Social</b>
                <ul className="text-secondary">
                  <li>GitHub</li>
                  <li>Telegram</li>
                  <li>LinkedIn</li>
                </ul>
              </Col>
              <Col>
                <b>Contatti</b>
                <ul className="text-secondary">
                  <li>info@raffaelecrocco.com</li>
                  <li>+39 3661055047</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </m.div>
  );
};

export default Home;
