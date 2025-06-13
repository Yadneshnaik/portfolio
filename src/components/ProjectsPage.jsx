import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ProjectsPage = () => {
  return (
    <Container id="projects" className="py-5 bg-dark text-light">
      <h2 className="text-center mb-5 display-5 text-uppercase text-white fw-bold">
        My Projects
      </h2>

      <Row>
        <Col md={4} sm={6} className="mb-4">
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="fw-semibold">Ecommerce Project</Card.Title>
              <Card.Text>
                Building Ecommerce Project using Laravel and MySQL.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} sm={6} className="mb-4">
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="fw-semibold">Amazon Clone</Card.Title>
              <Card.Text>
                Building Amazon Clone using MERN Stack.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* You can duplicate <Col> blocks for more projects */}
      </Row>
    </Container>
  );
};

export default ProjectsPage;
