import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion as m } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

const Contact = () => {
  return (
    <m.div
      className="University pt-5"
      id="top"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
    >
      <div>
        <span className="title mb-0">Grazie di avermi contattato</span>
        <p className="text">Verrai presto ricontattato all'indirizzo scelto.</p>
        <Link to="/">
          <p className="accent d-flex align-items-center">
            <div className="circle pulsating me-2"></div>torna alla home
          </p>
        </Link>
      </div>
    </m.div>
  );
};

export default Contact;
