const express = require('express');
const router = express.Router();
const db = require('../db'); // Import the MySQL database connection

// Handle Career Application Form Submission
router.post('/', (req, res) => {
  const { name, phone, email, dob, education, college, work_experience, notice_period, resume_path } = req.body;

  // Insert the form data into the job_applications table
  const query = `INSERT INTO job_applications (name, phone, email, dob, education, college, work_experience, notice_period, resume_path)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [name, phone, email, dob, education, college, work_experience, notice_period, resume_path];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting career data:', err);
      return res.status(500).send('Failed to submit the application');
    }
    res.status(200).send('Career application submitted successfully');
  });
});

module.exports = router;
