import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ProjectsPage = () => {
  return (
    <Container id="projects" className="py-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>ECommrce Project</Card.Title>
              <Card.Text>Did Reselling ECommrce Project using Laravel and MySql</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsPage;
