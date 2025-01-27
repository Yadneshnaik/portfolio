import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className="text-center py-5">
      <Row>
        <Col>
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a passionate Full Stack Developer</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
