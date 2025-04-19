import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ProjectsPage = () => {
  return (
    <Container id="projects" className="py-5">
      <h2 className="text-center mb-5" style={{ color: '#fff', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)' }}>My Projects</h2>
      
      <Row>
        <Col md={4} sm={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Ecommerce Project</Card.Title>
              <Card.Text>Building Ecommerce Project using Laravel and MySQL</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} sm={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Amazon Clone</Card.Title>
              <Card.Text>Building Amazon Clone using MERN Stack</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        {/* Add more projects here as needed */}
      </Row>
    </Container>
  );
};

export default ProjectsPage;
