import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaJava, FaDrupal, FaWordpress, FaLaravel } from 'react-icons/fa';
import { DiMongodb, DiMysql } from 'react-icons/di';

const SkillsPage = () => {
  return (
    <Container id="skills" className="py-5">
      <h2 className="text-center mb-4">My Skills</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body className="text-center">
              <FaHtml5 size={50} color="#E34F26" />
              <Card.Title>HTML</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body className="text-center">
              <FaCss3Alt size={50} color="#1572B6" />
              <Card.Title>CSS</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body className="text-center">
              <FaJs size={50} color="#F7DF1E" />
              <Card.Title>JavaScript</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body className="text-center">
              <DiMongodb size={50} color="#47A248" />
              <Card.Title>MongoDB</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body className="text-center">
              <DiMysql size={50} color="#4479A1" />
              <Card.Title>MySQL</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body className="text-center">
              <FaJava size={50} color="#007396" />
              <Card.Title>Java</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body className="text-center">
              <FaDrupal size={50} color="#0077C0" />
              <Card.Title>Drupal</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body className="text-center">
              <FaPhp size={50} color="#777BB4" />
              <Card.Title>PHP</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body className="text-center">
              <FaReact size={50} color="#61DAFB" />
              <Card.Title>React.js</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body className="text-center">
              <FaWordpress size={50} color="#0077C0" />
              <Card.Title>Wordpress</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body className="text-center">
              <FaLaravel size={50} color="#0077C0" />
              <Card.Title>Laravel</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsPage;
