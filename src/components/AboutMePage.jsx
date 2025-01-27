import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutMePage = () => {
  return (
    <Container id="about-me" className="py-5">
      <h2 className="text-center mb-4">About Me</h2>
      <Row>
        <Col>
          <p>
            I'm a self-taught web developer with a passion for creating
            beautiful and functional websites. I specialize in front-end
            development and love solving complex problems.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMePage;
