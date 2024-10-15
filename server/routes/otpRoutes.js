const express = require('express');
const router = express.Router();
const { sendOtp } = require('../services/otpService');

let otpStorage = {}; // Temporary in-memory storage for OTPs

// Send OTP route
router.post('/send-otp', (req, res) => {
  const { phone } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
  otpStorage[phone] = otp; // Save OTP temporarily

  sendOtp(phone, otp)
    .then(() => {
      res.json({ message: 'OTP sent successfully!' });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to send OTP', error: err.message });
    });
});

// Verify OTP route
router.post('/verify-otp', (req, res) => {
  const { phone, otp } = req.body;

  if (otpStorage[phone] && otpStorage[phone].toString() === otp.toString()) {
    delete otpStorage[phone]; // OTP verified, delete it after use
    res.json({ success: true, message: 'OTP verified successfully!' });
  } else {
    res.status(400).json({ success: false, message: 'Invalid OTP' });
  }
});

module.exports = router;
