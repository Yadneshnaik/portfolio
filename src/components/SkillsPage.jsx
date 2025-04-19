import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaJava, FaDrupal, FaWordpress, FaLaravel, FaFigma } from 'react-icons/fa';
import { DiMongodb, DiMysql } from 'react-icons/di';

const SkillsPage = () => {
  return (
    <Container id="skills" className="py-5">
      <h2 className="text-center mb-5" style={{ color: '#fff', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)' }}>My Skills</h2>
      
      <Row className="mb-4">
        <Col md={4} sm={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <FaHtml5 size={50} color="#E34F26" />
              <Card.Title>HTML</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <FaCss3Alt size={50} color="#1572B6" />
              <Card.Title>CSS</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <FaJs size={50} color="#F7DF1E" />
              <Card.Title>JavaScript</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="mb-4">
        <Col md={4} sm={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <DiMongodb size={50} color="#47A248" />
              <Card.Title>MongoDB</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <DiMysql size={50} color="#4479A1" />
              <Card.Title>MySQL</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <FaJava size={50} color="#007396" />
              <Card.Title>Java</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="mb-4">
        <Col md={4} sm={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <FaDrupal size={50} color="#0077C0" />
              <Card.Title>Drupal</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <FaPhp size={50} color="#777BB4" />
              <Card.Title>PHP</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <FaReact size={50} color="#61DAFB" />
              <Card.Title>React.js</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={4} sm={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <FaWordpress size={50} color="#0077C0" />
              <Card.Title>Wordpress</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <FaLaravel size={50} color="#FF2D20" />
              <Card.Title>Laravel</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <FaFigma size={50} color="#F24E1E" />
              <Card.Title>Figma</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsPage;
