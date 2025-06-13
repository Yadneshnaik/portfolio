import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutMePage = () => {
  return (
    <Container id="about-me" className="py-5 text-light">
      <h2 className="text-center mb-4 fw-bold" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.6)' }}>
        About Me
      </h2>

      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <p className="lead" style={{ textAlign: 'justify', textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
            Hello, I'm a self-taught web developer with a strong passion for creating beautiful and functional websites. 
            My journey into web development began with curiosity and a drive to learn. Over time, I've honed my skills 
            and become specialized in front-end development. I love the challenge of transforming design concepts into 
            interactive and user-friendly interfaces.
          </p>

          <p className="lead" style={{ textAlign: 'justify', textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
            Through dedication and perseverance, I've mastered a variety of web technologies such as HTML, CSS, JavaScript, 
            and React.js. I thrive on solving complex problems, whether it's building responsive layouts or improving 
            the performance of web applications. Each project I work on excites me, as it allows me to push the boundaries 
            of what's possible on the web.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMePage;
