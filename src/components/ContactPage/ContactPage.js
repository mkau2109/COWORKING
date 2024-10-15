import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ContactPage.css'; // Custom styles
import ContactForm from '../ContactForm/ContactForm';
import Location from '../Location/Location';

function ContactPage() {
    return (
      <Container id="contact-page" className="py-5 d-flex align-items-stretch contact-location-container">
        <Row className="w-100">
          <Col md={6} className="d-flex mb-4">
            <ContactForm />
          </Col>
          <Col md={6} className="d-flex">
            <Location />
          </Col>
        </Row>
      </Container>
    );
  }

export default ContactPage;
