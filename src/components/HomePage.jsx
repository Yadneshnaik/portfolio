import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className="text-center py-5" style={{ zIndex: 2, position: 'relative' }}>
      <Row>
        <Col>
          <h1
            style={{
              fontSize: '3rem',
              color: '#fff',
              textShadow: '3px 3px 8px rgba(0, 0, 0, 0.7)',
              fontWeight: 'bold',
            }}
          >
            Yadnesh Naik
          </h1>
          <p
            style={{
              fontSize: '1.5rem',
              color: '#fff',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
            }}
          >
            Full Stack Developer
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
