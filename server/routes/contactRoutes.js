const express = require('express');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const db = require('../config/db');

const router = express.Router();

// Nodemailer transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change the service if needed (e.g., SMTP, Mailgun, etc.)
  auth: {
    user: 'saurabhkulkarni097@gmail.com', // Your Gmail
    pass: 'rhkn bkny jwsw mwkw', // App-specific password (NOT your regular Gmail password)
  },
});

// POST route to handle form submission with validation
router.post(
  '/',
  [
    // Form validation
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('phone').isMobilePhone().withMessage('Please enter a valid phone number'),
    body('message').notEmpty().withMessage('Message is required'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // If validation fails, return errors
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract form data
    const { name, email, phone, message } = req.body;

    // Insert data into the MySQL database
    const query = 'INSERT INTO contact_form (name, email, phone, message) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, phone, message], (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Database error', error: err });
      }

      // Send email to the admin
      const adminMailOptions = {
        from: 'saurabhkulkarni097@gmail.com', // Your email
        to: 'saurabhkulkarni097@gmail.com', // Admin email
        subject: `New Contact Form Submission from ${name}`,
        text: `You have a new contact form submission.\n\nDetails:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      };

      transporter.sendMail(adminMailOptions, (err, info) => {
        if (err) {
          console.error('Error sending admin email:', err);
          return res.status(500).json({ message: 'Error sending admin email', error: err });
        }
        console.log('Admin email sent:', info.response);

        // Send confirmation email to the user
        const userMailOptions = {
          from: '"Mithra Cowork" <saurabhkulkarni097@gmail.com>', // Your email
          to: email, // User email
          subject: 'We have received your query',
          text: `Dear ${name},\n\nThank you for contacting us. We have received your query, and our representative will get back to you soon.\n\nBest regards,\nMithra Cowork Team`,
        };

        transporter.sendMail(userMailOptions, (err, info) => {
          if (err) {
            console.error('Error sending confirmation email to user:', err);
            return res.status(500).json({ message: 'Error sending confirmation email to user', error: err });
          }
          console.log('Confirmation email sent to user:', info.response);

          // Success response
          res.status(200).json({ message: 'Form submitted successfully and emails sent!' });
        });
      });
    });
  }
);
  
module.exports = router;
