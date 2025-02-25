import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProjectsPage = () => {
  return (
    <Container id="projects" className="py-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
            <Card.Title>Ecommerce Project</Card.Title>
              <Card.Text>Building Ecommerce Project using Laravel and Mysql</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
            <Card.Title>Amazon Clone</Card.Title>
              <Card.Text>Building Amazon Clone using MERN Stack</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsPage;
