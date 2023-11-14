import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewCon = () => {
  const [username, setUsername] = useState('');
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [error, setError] = useState(null);
  const {id}=useParams()
  const handleViewSubscription = async () => {
    try {
      const response = await axios.post('http://localhost:5000/contract', {
       
          username: id,
        
      });
      setSubscriptionData(response.data);
      setError(null);
      console.log({username});
    } catch (err) {
      setError('Patient not found or internal server error');
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
        
          <p>Name: {subscriptionData.contract}</p>
          <p>Status: {subscriptionData.status}</p>
       
         <button onClick={async()=>{

const response = await axios.post('http://localhost:5000/acceptcontract', {
       
username: id,

});

handleViewSubscription()
         }}>
            accept
         </button>
        </div>
      )}
    </div>
  );
};

export default ViewCon;
