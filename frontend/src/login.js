import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add your login logic and API calls here

    const data = await (
      await axios.post('http://localhost:5000/login', {
        username: username,
        password: password,
      })
    ).data;
    console.log(data);
    switch (data.role) {
      case 'admin':
        window.location = `http://localhost:3000/admin`;
        break;
      case 'patient':
        window.location = `http://localhost:3000/patient/${username}`;
        break;
      case 'doctor':
        window.location = `http://localhost:3000/doctor/${username}`;
        break;
      case 'none':
        alert('Wrong username or password');
        break;
    }
  };

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
  };

  return (
    <Container
      style={{
        backgroundColor: 'lightblue',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '5px',
          boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        {isLoggedIn && (
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        )}
        <Typography variant="h4" align="center">
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
        
        <Link to="/reg"> 
          <Button variant="contained" color="secondary">
            Register
          </Button>
        </Link>
        <Link to="/otp" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
         Reset with email
        </Button>
      </Link>
      </Box>
    </Container>
  );
}
