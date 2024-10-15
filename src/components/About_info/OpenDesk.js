import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './OpenDesk.css'; // Assuming you'll have a separate CSS file for OpenDesk

function OpenDesk() {
  return (
    <Container className="open-desk-section py-5">
      <Row>
        <Col md={8}>
          <h1>Open Desks</h1>
          <p>
            Our open desk area provides a dynamic and flexible workspace for freelancers and professionals.
          </p>
          <p>
            Enjoy the freedom to choose your workspace and be part of a vibrant community.
          </p>
          <p>
            High-speed Wi-Fi, power outlets, and comfortable seating ensure you have everything you need to be productive.
          </p>
        </Col>
        <Col md={4}>
          <Image src="/images/image6.jpg" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default OpenDesk;
