// MeetingRooms.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './MeetingRoom.css';

function MeetingRoom() {
  return (
    <Container className="meeting-rooms-section py-5">
      <Row>
        <Col md={8}>
          <h1>Modern Meeting Rooms</h1>
          <p>
            Our spacious meeting rooms are equipped with state-of-the-art technology, providing the perfect setting for productive discussions, client meetings, and presentations.
          </p>
          <p>
            Whether you're hosting a small team meeting or a larger conference, our rooms offer flexibility to suit your needs. The rooms come equipped with high-speed internet, video conferencing tools, and comfortable seating arrangements.
          </p>
          <p>
            Book a meeting room today to experience a professional and distraction-free environment that supports collaboration and focus.
          </p>
        </Col>
        <Col md={4}>
          <Image src="/images/image4.jpg" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default MeetingRoom;
