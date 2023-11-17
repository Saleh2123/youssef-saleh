import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Typography, Container, Box } from '@mui/material';

const ViewCon = () => {
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const handleViewSubscription = async () => {
    try {
      const response = await axios.post('http://localhost:5000/contract', {
        username: id,
      });
      setSubscriptionData(response.data);
      setError(null);
    } catch (err) {
      setError('Patient not found or internal server error');
      setSubscriptionData(null);
    }
  };

  const handleAcceptContract = async () => {
    try {
      await axios.post('http://localhost:5000/acceptcontract', {
        username: id,
      });
      handleViewSubscription();
    } catch (err) {
      setError('Error accepting contract');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4} textAlign="center">
        <Typography variant="h4">View Subscription Status</Typography>
        <Box mt={2}>
          <Button variant="contained" onClick={handleViewSubscription}>
            View Subscription Status
          </Button>
        </Box>
        {error && <Typography color="error">{error}</Typography>}
        {subscriptionData && (
          <Box mt={2}>
            <Typography>Name: {subscriptionData.contract}</Typography>
            <Typography>Status: {subscriptionData.status}</Typography>
            <Button variant="outlined" onClick={handleAcceptContract} mt={2}>
              Accept
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ViewCon;
