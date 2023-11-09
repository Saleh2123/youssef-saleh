import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const smallerInputStyle = {
  width: '200px', // Adjust the width as needed
};

const Doctorreg = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    education: '',
    affiliation: '',
    speciality: '',
    rate: '',
    date: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:5000/createdoctor', formData);
    console.log('Form submitted:', formData);
    alert('Registration complete');
    // You can add further logic to handle form submission (e.g., API call).
  };

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <form onSubmit={handleSubmit}>
          <h2>DOCTOR REGISTRATION</h2>
          <TextField
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            style={smallerInputStyle}
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            style={smallerInputStyle}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            style={smallerInputStyle}
          />
          <TextField
            label="Birthday"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            fullWidth
            style={smallerInputStyle}
          />
          <TextField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            style={smallerInputStyle}
          />
          <TextField
            label="Hourly rate"
            type="number"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
            fullWidth
            style={smallerInputStyle}
          />
          <TextField
            label="Education"
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            fullWidth
            style={smallerInputStyle}
          />
          <TextField
            label="Affiliation"
            name="affiliation"
            value={formData.affiliation}
            onChange={handleChange}
            fullWidth
            style={smallerInputStyle}
          />
          <TextField
            label="Speciality"
            type="text"
            name="speciality"
            value={formData.speciality}
            onChange={handleChange}
            fullWidth
            style={smallerInputStyle}
          />
          <Button type="submit" variant="contained" color="primary" style={smallerInputStyle}>
            Register
          </Button>
        </form>
      </Grid>
    </Container>
  );
};

export default Doctorreg;
