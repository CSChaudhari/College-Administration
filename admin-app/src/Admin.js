import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './index.css';

function Admin() {
  const [bonafiteApplicants, setBonafiteApplicants] = useState([]);
  const [concessionApplicants, setConcessionApplicants] = useState([]);

  useEffect(() => {
    fetchBonafiteApplicants();
    fetchConcessionApplicants();
  }, []);

  const fetchBonafiteApplicants = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/bonafite');
      setBonafiteApplicants(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchConcessionApplicants = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/concession');
      setConcessionApplicants(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteBonafiteApplicant = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/bonafite/${id}`);
      fetchBonafiteApplicants();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteConcessionApplicant = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/concession/${id}`);
      fetchConcessionApplicants();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Admin Page</h2>
      <h3>Bonafite Applicants</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>UID</th>
            <th>Branch</th>
            <th>Year of Study</th>
            <th>Reason</th>
            <th>Mother's Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bonafiteApplicants.map((applicant) => (
            <tr key={applicant._id}>
              <td>{applicant.fullName}</td>
              <td>{applicant.uid}</td>
              <td>{applicant.branch}</td>
              <td>{applicant.yearOfStudy}</td>
              <td>{applicant.reason}</td>
              <td>{applicant.motherName}</td>
              <td>
                <Button variant="danger" onClick={() => deleteBonafiteApplicant(applicant._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h3>Concession Applicants</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>UID</th>
            <th>Branch</th>
            <th>Year of Study</th>
            <th>Mobile Number</th>
            <th>Travel Route</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {concessionApplicants.map((applicant) => (
            <tr key={applicant._id}>
              <td>{applicant.fullName}</td>
              <td>{applicant.uid}</td>
              <td>{applicant.branch}</td>
              <td>{applicant.yearOfStudy}</td>
              <td>{applicant.mobileNumber}</td>
              <td>{applicant.travelRoute.from} - {applicant.travelRoute.to}</td>
              <td>
                <Button variant="danger" onClick={() => deleteConcessionApplicant(applicant._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Admin;
