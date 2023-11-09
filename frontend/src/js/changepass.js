import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import axios from "axios"
import{ useParams }from"react-router-dom";
export default function ChangePasswordPage() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
const {id}=useParams();
  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleChangePassword = () => {
    // Perform password change logic here
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);
    console.log('Confirm New Password:', confirmPassword);
    // You can add your password change logic and API calls here
axios.post("http://localhost:5000/updatepass",{username:id,password:newPassword})

  };

  return (
    <Container
      sx={{
        backgroundColor: 'lightblue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: '16px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          padding: '16px',
        }}
      >
        <TextField
          label="Old Password"
          type="password"
          value={oldPassword}
          onChange={handleOldPasswordChange}
          sx={{ color: 'white' }}
        />
        <TextField
          label="New Password"
          type="password"
          value={newPassword}
          onChange={handleNewPasswordChange}
          sx={{ color: 'white' }}
        />
        <TextField
          label="Confirm New Password"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          sx={{ color: 'white' }}
        />
        <Button variant="contained" onClick={handleChangePassword}>
          Change Password
        </Button>
      </Box>
    </Container>
  );
}
