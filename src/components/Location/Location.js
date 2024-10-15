import React from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import './Location.css';

function Location() {
  return (
    <div className="location-form shadow-lg p-4">
      <h2>Our Location</h2>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Visit Us</Card.Title>
          <Card.Text>Rohan Corner, Paud Rd, Pratik Nagar, Shivthirth Nagar, Kothrud, Pune, Maharashtra 411038</Card.Text>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.8346690254959!2d73.8087650950709!3d18.5086176389065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfba2a6343b5%3A0x4170144d434e5e3e!2sShop%20No%2005%2C%20Rohan%20Corner%2C%20Paud%20Rd%2C%20Pratik%20Nagar%2C%20Shivthirth%20Nagar%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411038!5e0!3m2!1sen!2sin!4v1727985208343!5m2!1sen!2sin" 
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Location;
