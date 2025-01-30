import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa"; // Importing React Icons

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-white py-4">
      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <p>&copy; 2025 My Portfolio. All rights reserved.</p>
        </Col>

        <Col md={4} className="text-center">
          <a
            href="https://www.linkedin.com/in/yadnesh-naik-286a6b235/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info mb-2 mx-2"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/Yadneshnaik"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark mb-2 mx-2"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://wa.me/+918421767210"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success mb-2 mx-2"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="mailto:naikyadnesh9@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success mb-2 mx-2"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </Col>

        <Col md={4} className="text-center">
          <Button
            variant="light"
            href="/cv/Yadnesh.pdf"
            download
            className="mb-2"
          >
            Download CV
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
