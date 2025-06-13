import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center bg-dark text-light min-vh-100"
      style={{ position: 'relative', zIndex: 2 }}
    >
      <Row>
        <Col className="text-center px-4">
          <h1 className="display-3 fw-bold mb-3 fade-in-text" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.7)' }}>
            Yadnesh Naik
          </h1>
          <p className="lead fade-in-text" style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.5)' }}>
            Full Stack Developer
          </p>
        </Col>
      </Row>

      {/* Add CSS for fade-in effect */}
      <style jsx>{`
        .fade-in-text {
          opacity: 0;
          animation: fadeIn 1.5s ease-in-out forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </Container>
  );
};

export default HomePage;
