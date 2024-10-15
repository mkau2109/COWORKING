import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './ContactForm.css'; // Ensure you import the CSS file

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);
  const [otp, setOtp] = useState(''); // State for OTP
  const [otpSent, setOtpSent] = useState(false); // OTP sent status
  const [otpVerified, setOtpVerified] = useState(false); // OTP verified status

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = async () => {
    try {
      await axios.post('http://localhost:5000/api/send-otp', { phone: formData.phone });
      setOtpSent(true);
      setFormStatus({ type: 'success', message: 'OTP sent to your phone!' });
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Failed to send OTP. Please try again.' });
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/verify-otp', {
        phone: formData.phone,
        otp,
      });
      if (response.data.success) {
        setOtpVerified(true);
        setFormStatus({ type: 'success', message: 'OTP verified successfully!' });
      }
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Invalid OTP. Please try again.' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otpVerified) {
      setFormStatus({ type: 'error', message: 'Please verify OTP before submitting.' });
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setFormStatus({ type: 'success', message: response.data.message });
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Something went wrong!' });
    }
  };

  return (
    <div id="contact" className="contact-form shadow-lg p-4">
      <h2>Contact Us</h2>
      {formStatus && (
        <Alert variant={formStatus.type === 'success' ? 'success' : 'danger'}>
          {formStatus.message}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Row>
          {/* Name Field */}
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
          </Col>

          {/* Email Field */}
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
          </Col>

          {/* Phone Field */}
          <Col xs={12} className="mb-3">
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
              <Button variant="secondary" onClick={handleSendOtp} disabled={otpSent}>
                {otpSent ? 'OTP Sent' : 'Send OTP'}
              </Button>
            </Form.Group>
          </Col>

          {/* OTP Field (if OTP sent) */}
          {otpSent && !otpVerified && (
            <Col xs={12} className="mb-3">
              <Form.Group controlId="formOtp">
                <Form.Label>OTP</Form.Label>
                <Form.Control
                  type="text"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  required
                />
                <Button variant="secondary" onClick={handleVerifyOtp}>
                  Verify OTP
                </Button>
              </Form.Group>
            </Col>
          )}

          {/* Message Field */}
          <Col xs={12} className="mb-3">
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Enter your message"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Submit Button */}
        <Button variant="primary" type="submit" className="w-100" disabled={!otpVerified}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
