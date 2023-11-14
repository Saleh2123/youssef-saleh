import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const ViewSubscriptionStatus = () => {
  const [username, setUsername] = useState('');
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [error, setError] = useState(null);
  const{id}=useParams()
  const handleViewSubscription = async () => {
    try {
      const response = await axios.get('http://localhost:5000/ViewSubscriptionStatus', {
        params: {
          username: id,
        },
      });
      setSubscriptionData(response.data);
      console.log(response.data)
      setError(null);
      console.log({username});
    } catch (err) {
      setError('Patient not found or internal server error');
      console.log(err)
      setSubscriptionData(null);
    }
  };

  const cabcelSubscription = async () => {
    try {
      const response = await axios.get('http://localhost:5000/cancelsub', {
        params: {
          username: id,
        },
      });
     await handleViewSubscription()
    } catch (err) {
      setError('Patient not found or internal server error');
      console.log(err)
      setSubscriptionData(null);
    }
  };

  return (
    <div>
      <h1>View Subscription Status</h1>
      <div>
     
        <button onClick={handleViewSubscription}>View Subscription Status</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {subscriptionData && (
        <div>
          <h2>Patient Status:</h2>
          <p>Name: {subscriptionData.subscriptions.name}</p>
          <p>Status: {subscriptionData.subscriptions.status}</p>
          <p>Start Date: {subscriptionData.subscriptions.start_date}</p>
          <p>Renewal Date: {subscriptionData.subscriptions.renewal_date}</p>
          <p>End Date: {subscriptionData.subscriptions.end_date}</p>

        </div>
      )}

<div>
     
     <button onClick={cabcelSubscription}>cancel Subscription </button>
   </div>
    </div>
  );
};

export default ViewSubscriptionStatus;
