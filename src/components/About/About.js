import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <Container id="about" className="about-section py-5">
      <h2 className="text-center mb-4">About Mithra Cowork</h2>
      <Row className="g-4"> {/* Added gap class for spacing */}
        <Col md={4}>
          <Card className="about-card shadow-sm">
            <Card.Img variant="top" src="/images/image4.jpg" />
            <Card.Body>
              <Card.Title>Meeting Rooms</Card.Title>
              <Card.Text>
                Spacious meeting rooms equipped with modern tech for productive discussions.
              </Card.Text>
              <Link to="/meeting-rooms" className="btn">Read More</Link> 
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="about-card shadow-sm">
            <Card.Img variant="top" src="/images/image5.jpg" />
            <Card.Body>
              <Card.Title>Lounges</Card.Title>
              <Card.Text>
                Comfortable lounges for networking and relaxation between work sessions.
              </Card.Text>
              <Link to="/lounges" className="btn">Read More</Link> 
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="about-card shadow-sm">
            <Card.Img variant="top" src="/images/image6.jpg" />
            <Card.Body>
              <Card.Title>Open Desks</Card.Title>
              <Card.Text>
                Non-assigned desks that are available on a first-come, first-serve basis.
              </Card.Text>
              <Link to="/opendesk" className="btn">Read More</Link> 
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
