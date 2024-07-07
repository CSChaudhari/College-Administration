import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mslides.css';

function Bonafite() {
  const [formData, setFormData] = useState({
    fullName: '',
    uid: '',
    branch: '',
    yearOfStudy: '',
    reason: '',
    motherName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bonafite', formData);
      alert('Application submitted successfully');
      setFormData({
        fullName: '',
        uid: '',
        branch: '',
        yearOfStudy: '',
        reason: '',
        motherName: ''
      });
    } catch (err) {
      console.error(err);
      alert('Failed to submit application');
    }
  };

  return (
    <div className="container">
      <div className="Banner">
        <h2>Bonafide Application</h2>
        <p>Apply for your Bonafide with ease.</p>
      </div>
      <Form onSubmit={handleSubmit} className="my-4 p-4 bg-light rounded">
        <Form.Group controlId="fullName" className="form-group">
          <Form.Label className="form-label">Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="form-control"
          />
        </Form.Group>
        <Form.Group controlId="uid" className="form-group">
          <Form.Label className="form-label">UID (10 digits)</Form.Label>
          <Form.Control
            type="text"
            name="uid"
            placeholder="Enter UID"
            value={formData.uid}
            onChange={handleChange}
            required
            className="form-control"
          />
        </Form.Group>
        <Form.Group controlId="branch" className="form-group">
          <Form.Label className="form-label">Branch</Form.Label>
          <Form.Select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="">Select Branch</option>
            <option value="EXTC">EXTC</option>
            <option value="COMP">Comp</option>
            <option value="CIVIL">Civil</option>
            <option value="MECHANICAL">Mechnical</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="yearOfStudy" className="form-group">
          <Form.Label className="form-label">Year of Study</Form.Label>
          <Form.Select
            name="yearOfStudy"
            value={formData.yearOfStudy}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="">Select Year of Study</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="reason" className="form-group">
          <Form.Label className="form-label">Reason for Requirement of Document</Form.Label>
          <Form.Control
            as="textarea"
            name="reason"
            rows={3}
            placeholder="Enter reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className="form-control"
          />
        </Form.Group>
        <Form.Group controlId="motherName" className="form-group">
          <Form.Label className="form-label">Mother's Name</Form.Label>
          <Form.Control
            type="text"
            name="motherName"
            placeholder="Enter mother's name"
            value={formData.motherName}
            onChange={handleChange}
            required
            className="form-control"
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Bonafite;
