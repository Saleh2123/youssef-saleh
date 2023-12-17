import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material'; // Import Mui components
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'; // Import MDB components

const AddAdministrator = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/createadmin', formData);
      console.log('Form submitted:', formData);
      // Handle success or further logic upon successful form submission
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error state or display error message to the user
    }
  };

  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={handleSubmit}>
            <h3 className="mb-4">Add Administrator</h3>
            <TextField
              label="Username"
              variant="outlined"
              name="username"
              value={formData.username}
              onChange={handleChange}
              fullWidth
              required
              className="mb-3"
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
              className="mb-3"
            />
            <Button variant="contained" type="submit" color="primary">
              Add Admin
            </Button>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AddAdministrator;
