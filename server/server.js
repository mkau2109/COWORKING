const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes'); // Contact form routes
const otpRoutes = require('./routes/otpRoutes');         // OTP routes
const careerRoutes = require('./routes/careerRoutes');   // Career form routes

// Initialize the Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON requests

// API routes
app.use('/api/contact', contactRoutes);  // Route to handle contact form submission
app.use('/api/otp', otpRoutes);          // Route to handle OTP send and verification
app.use('/api/career', careerRoutes);    // Route to handle career form submission

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
