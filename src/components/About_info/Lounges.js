// Lounges.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Lounges.css'; // Assuming you'll have a separate CSS file for lounges

function Lounges() {
  return (
    <Container className="lounges-section py-5">
      <Row>
        <Col md={8}>
          <h1>Comfortable Lounges</h1>
          <p>
            Our lounges offer a relaxing and stylish environment for networking, brainstorming, or simply taking a break between work sessions.
          </p>
          <p>
            With comfortable seating, ambient lighting, and a modern design, the lounges are perfect for informal meetings or unwinding after a productive day.
          </p>
          <p>
            Enjoy free coffee, high-speed Wi-Fi, and an atmosphere that promotes creativity and collaboration.
          </p>
        </Col>
        <Col md={4}>
          <Image src="/images/image5.jpg" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default Lounges;
