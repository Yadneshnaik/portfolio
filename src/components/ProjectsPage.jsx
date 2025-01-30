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
            <Card.Title>Vista Develeoper</Card.Title>
              <Card.Text>Building a personal website using MERN STACK</Card.Text>
              <Button variant="primary" href="https://vistadeveloper.vercel.app/" target="_blank">
                View Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsPage;
