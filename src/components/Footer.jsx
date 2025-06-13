import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#212529", color: "#ffffff" }}>
      <Container fluid className="py-4">
        <Row className="align-items-center text-center">
          {/* Copyright */}
          <Col md={4} className="mb-3 mb-md-0">
            <small>&copy; {new Date().getFullYear()} Yadnesh Naik. All rights reserved.</small>
          </Col>

          {/* Social Icons */}
          <Col md={4} className="mb-3 mb-md-0">
            <div className="d-flex justify-content-center gap-3">
              <a
                href="https://www.linkedin.com/in/yadnesh-naik-286a6b235/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-info fs-5"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Yadneshnaik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-5"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.me/+918421767210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-success fs-5"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:naikyadnesh9@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-danger fs-5"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </Col>

          {/* CV Download */}
          <Col md={4}>
            <Button
              variant="outline-light"
              href="/cv/Yadnesh.pdf"
              download
              className="fw-semibold"
            >
              Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
