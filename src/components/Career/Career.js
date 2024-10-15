import React, { useState } from 'react';
import { Button, Card, Modal, Form, Row, Col, Container } from 'react-bootstrap';
import './Career.css';

function Career() {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [workExperience, setWorkExperience] = useState('fresher');
  const [workDetails, setWorkDetails] = useState([]);
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [noticePeriod, setNoticePeriod] = useState('immediate'); // New state for notice period
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    education: '',
    resume: null,
    college: '',
    ctc: ''
  });

  // Example job data
  const jobs = [
    {
      id: 1,
      title: 'Software Developer',
      description: 'Develop and maintain web applications.',
      salary: '$70,000 - $90,000',
      location: 'New York, NY',
    },
    {
      id: 2,
      title: 'Product Manager',
      description: 'Lead the product development team.',
      salary: '$85,000 - $110,000',
      location: 'San Francisco, CA',
    },
    {
      id: 3,
      title: 'Marketing Specialist',
      description: 'Create and implement marketing strategies.',
      salary: '$50,000 - $70,000',
      location: 'Los Angeles, CA',
    },
  ];

  const handleApplyNow = (job) => {
    setSelectedJob(job); // Set the job that the user clicked to apply for
    setShowModal(true);  // Open the modal
  };

  const handleCloseModal = () => {
    setShowModal(false);  // Close the modal
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWorkExperienceChange = (e) => {
    setWorkExperience(e.target.value);
  };

  const handleWorkDetailChange = (index, e) => {
    const { name, value } = e.target;
    const updatedWorkDetails = [...workDetails];
    updatedWorkDetails[index] = { ...updatedWorkDetails[index], [name]: value };
    setWorkDetails(updatedWorkDetails);
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleAddMoreWork = () => {
    setWorkDetails([...workDetails, { company: '', designation: '', fromDate: '', toDate: '', ctc: '' }]);
  };

  const handleRemoveWorkDetail = (index) => {
    setWorkDetails(workDetails.filter((_, i) => i !== index));
  };

  const handleNoticePeriodChange = (e) => {
    setNoticePeriod(e.target.value);
  };

  return (
    <Container className="career-container">
      <h1>Join Our Team at Mithra Cowork</h1>
      <p>Explore our open positions and apply for the one that fits you!</p>
      
      <Row className="job-cards">
        {jobs.map((job) => (
          <Col md={4} key={job.id} className="mb-4">
            <Card className="job-card">
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Text>{job.description}</Card.Text>
                <Card.Text><strong>Salary:</strong> {job.salary}</Card.Text>
                <Card.Text><strong>Location:</strong> {job.location}</Card.Text>
                <Button variant="primary" onClick={() => handleApplyNow(job)}>Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for the application form */}
      {selectedJob && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Apply for {selectedJob.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your full name" onChange={handleInputChange} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" name="phone" placeholder="Enter your phone number" onChange={handleInputChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter your email" onChange={handleInputChange} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formDob">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" name="dob" onChange={handleInputChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col md={6}>
                  <Form.Group controlId="formCollege">
                    <Form.Label>College/University</Form.Label>
                    <Form.Control type="text" name="college" placeholder="Enter your college/university" onChange={handleInputChange} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formEducation">
                    <Form.Label>Education</Form.Label>
                    <Form.Control type="text" name="education" placeholder="Enter your education qualification" onChange={handleInputChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formExperience" className="mt-3">
                <Form.Label>Work Experience</Form.Label>
                <Form.Control as="select" value={workExperience} onChange={handleWorkExperienceChange}>
                  <option value="fresher">Fresher</option>
                  <option value="0-2">0-2 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5-7">5-7 years</option>
                  <option value="7-10">7-10 years</option>
                  <option value="10+">10+ years</option>
                </Form.Control>
              </Form.Group>

              {/* Notice Period Dropdown */}
              <Form.Group controlId="formNoticePeriod" className="mt-3">
                <Form.Label>Notice Period</Form.Label>
                <Form.Control as="select" value={noticePeriod} onChange={handleNoticePeriodChange}>
                  <option value="immediate">Immediate Joiner</option>
                  <option value="15-30">15-30 days</option>
                  <option value="30-40">30-40 days</option>
                  <option value="40-60">40-60 days</option>
                </Form.Control>
              </Form.Group>

              {workExperience !== 'fresher' &&
                workDetails.map((work, index) => (
                  <div key={index}>
                    <Row className="mt-3">
                      <Col md={6}>
                        <Form.Group controlId={`formCompany-${index}`}>
                          <Form.Label>Company Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="company"
                            placeholder="Enter company name"
                            value={work.company}
                            onChange={(e) => handleWorkDetailChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId={`formDesignation-${index}`}>
                          <Form.Label>Designation</Form.Label>
                          <Form.Control
                            type="text"
                            name="designation"
                            placeholder="Enter your designation"
                            value={work.designation}
                            onChange={(e) => handleWorkDetailChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mt-3">
                      <Col md={6}>
                        <Form.Group controlId={`formFromDate-${index}`}>
                          <Form.Label>From Date</Form.Label>
                          <Form.Control
                            type="date"
                            name="fromDate"
                            value={work.fromDate}
                            onChange={(e) => handleWorkDetailChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId={`formToDate-${index}`}>
                          <Form.Label>To Date</Form.Label>
                          <Form.Control
                            type="date"
                            name="toDate"
                            value={work.toDate}
                            disabled={currentlyWorking}
                            onChange={(e) => handleWorkDetailChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group controlId={`formCurrentWork-${index}`} className="mt-3">
                      <Form.Check
                        type="checkbox"
                        label="Currently working here"
                        onChange={() => setCurrentlyWorking(!currentlyWorking)}
                      />
                    </Form.Group>

                    <Form.Group controlId={`formCTC-${index}`} className="mt-3">
                      <Form.Label>CTC</Form.Label>
                      <Form.Control
                        type="text"
                        name="ctc"
                        placeholder="Enter your current salary (CTC)"
                        value={work.ctc}
                        onChange={(e) => handleWorkDetailChange(index, e)}
                      />
                    </Form.Group>

                    <Button variant="danger" onClick={() => handleRemoveWorkDetail(index)} className="mt-2">
                      Remove Work Experience
                    </Button>
                  </div>
                ))}

              {workExperience !== 'fresher' && (
                <Button variant="primary" className="mt-3" onClick={handleAddMoreWork}>
                  Add More Work Experience
                </Button>
              )}

              <Form.Group controlId="formFile" className="mt-3">
                <Form.Label>Resume (PDF/Word Document)</Form.Label>
                <Form.Control type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
              </Form.Group>

              <Button variant="success" type="submit" className="mt-4">
                Submit Application
              </Button>
            </Form>
          </Modal.Body>
        </Modal>    
      )}
    </Container>
  );
}

export default Career;
