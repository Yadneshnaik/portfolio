import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp,
  FaJava, FaDrupal, FaWordpress, FaLaravel, FaFigma
} from 'react-icons/fa';
import { DiMongodb, DiMysql } from 'react-icons/di';

const skills = [
  { icon: <FaHtml5 size={50} color="#E34F26" />, name: 'HTML' },
  { icon: <FaCss3Alt size={50} color="#1572B6" />, name: 'CSS' },
  { icon: <FaJs size={50} color="#F7DF1E" />, name: 'JavaScript' },
  { icon: <DiMongodb size={50} color="#47A248" />, name: 'MongoDB' },
  { icon: <DiMysql size={50} color="#4479A1" />, name: 'MySQL' },
  { icon: <FaJava size={50} color="#007396" />, name: 'Java' },
  { icon: <FaDrupal size={50} color="#0077C0" />, name: 'Drupal' },
  { icon: <FaPhp size={50} color="#777BB4" />, name: 'PHP' },
  { icon: <FaReact size={50} color="#61DAFB" />, name: 'React.js' },
  { icon: <FaWordpress size={50} color="#0077C0" />, name: 'WordPress' },
  { icon: <FaLaravel size={50} color="#FF2D20" />, name: 'Laravel' },
  { icon: <FaFigma size={50} color="#F24E1E" />, name: 'Figma' },
];

const SkillsPage = () => {
  return (
    <Container id="skills" className="py-5 bg-dark text-light rounded">
      <h2 className="text-center mb-5 fw-bold" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.6)' }}>
        My Skills
      </h2>

      <Row>
        {skills.map((skill, index) => (
          <Col key={index} md={4} sm={6} xs={12} className="mb-4">
            <Card className="text-center bg-secondary text-white shadow-sm h-100 border-0 rounded-4 hover-card">
              <Card.Body>
                <div className="mb-3">{skill.icon}</div>
                <Card.Title className="fw-semibold">{skill.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <style jsx>{`
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.4);
          transition: 0.3s ease-in-out;
        }
      `}</style>
    </Container>
  );
};

export default SkillsPage;
