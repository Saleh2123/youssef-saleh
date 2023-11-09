import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function Home() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Link to="/reg" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
          Register
        </Button>
      </Link>
    </Container>
  );
}

export default Home;
