import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './concession.css';

function Concession() {
  const [formData, setFormData] = useState({
    fullName: '',
    uid: '',
    branch: '',
    yearOfStudy: '',
    mobileNumber: '',
    travelFrom: '',
    travelTo: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { fullName, uid, branch, yearOfStudy, mobileNumber, travelFrom, travelTo, image } = formData;
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', fullName);
      formDataToSend.append('uid', uid);
      formDataToSend.append('branch', branch);
      formDataToSend.append('yearOfStudy', yearOfStudy);
      formDataToSend.append('mobileNumber', mobileNumber);
      formDataToSend.append('travelRoute[from]', travelFrom);
      formDataToSend.append('travelRoute[to]', travelTo);
      formDataToSend.append('image', image);

      await axios.post('http://localhost:5000/api/concession', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('Concession application submitted successfully');
      setFormData({
        fullName: '',
        uid: '',
        branch: '',
        yearOfStudy: '',
        mobileNumber: '',
        travelFrom: '',
        travelTo: '',
        image: null
      });
    } catch (err) {
      console.error(err);
      alert('Failed to submit concession application');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="fullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          name="fullName"
          placeholder="Enter full name"
          value={formData.fullName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="uid">
        <Form.Label>UID</Form.Label>
        <Form.Control
          type="text"
          name="uid"
          placeholder="Enter UID"
          value={formData.uid}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="branch">
        <Form.Label>Branch</Form.Label>
        <Form.Select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
        >
          <option value="">Select Branch</option>
          <option value="EXTC">EXTC</option>
          <option value="COMPS(DS)">COMPS(DS)</option>
          <option value="COMPS(AIML)">COMPS(AIML)</option>
          <option value="COMPS">COMPS</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="yearOfStudy">
        <Form.Label>Year of Study</Form.Label>
        <Form.Select
          name="yearOfStudy"
          value={formData.yearOfStudy}
          onChange={handleChange}
        >
          <option value="">Select Year of Study</option>
          <option value="F.E">F.E</option>
          <option value="S.E">S.E</option>
          <option value="T.E">T.E</option>
          <option value="B.E">B.E</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="mobileNumber">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="tel"
          name="mobileNumber"
          placeholder="Enter mobile number"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="travelRoute">
        <Form.Label>Travel Route</Form.Label>
        <div className="d-flex align-items-center">
          <Form.Control
            type="text"
            name="travelFrom"
            placeholder="From"
            className="me-2"
            value={formData.travelFrom}
            onChange={handleChange}
          />
          <span className="me-2">-</span>
          <Form.Control
            type="text"
            name="travelTo"
            placeholder="To"
            value={formData.travelTo}
            onChange={handleChange}
          />
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Concession;
