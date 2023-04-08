import React from "react";
import { Row, Col, Container } from "react-bootstrap";
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
      <Container>
        <p className="title mb-0">Grazie di avermi contattato</p>
        <p className="text text-end">
          Verrai presto ricontattato all'indirizzo scelto.
        </p>
        <Link to="/">
          <p className="accent text-end">torna alla home</p>
        </Link>
      </Container>
    </m.div>
  );
};

export default Contact;
