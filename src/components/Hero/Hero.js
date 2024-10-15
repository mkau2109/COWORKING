import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink for smooth scrolling
import './Hero.css';

function Hero() {
  return (
    <div className="hero-section">
      <Carousel controls={false} indicators={false} interval={3000} className="background-carousel">
        <Carousel.Item>
          <div className="carousel-bg" style={{ backgroundImage: "url('/images/image1.jpg')" }}></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-bg" style={{ backgroundImage: "url('/images/image2.jpg')" }}></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-bg" style={{ backgroundImage: "url('/images/image3.jpg')" }}></div>
        </Carousel.Item>
      </Carousel>

      <Container className="text-center text-white hero-content">
        <h1>Welcome to Mithra Cowork!</h1>
        <p>Your perfect space for productivity and growth</p>

        {/* Update the Button to use HashLink to scroll to the contact form */}
        <Button as={Link} to="/#contact" variant="primary" size="lg" className="button-book">
          Book a Tour
        </Button>
      </Container>
    </div>
  );
}

export default Hero;
