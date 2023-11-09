import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function Choose() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: '16px',
      }}
    >
      <Link to="/patient" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
          Register as Patient
        </Button>
      </Link>
      <Link to="/doctor" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
          Register as Doctor
        </Button>
      </Link>
    </Container>
  );
}

export default Choose;
