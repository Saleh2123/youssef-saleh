import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewSubscriptionStatus = () => {
  const [username, setUsername] = useState('');
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [error, setError] = useState(null);
  const {id}=useParams()
  const handleViewSubscription = async () => {
    try {
      const response = await axios.get('http://localhost:5000/ViewSubscriptionStatus', {
        params: {
          username: id,
        },
      });
      setSubscriptionData(response.data);
      setError(null);
      console.log({username});
    } catch (err) {
      setError('Patient not found or internal server error');
      setSubscriptionData(null);
    }
  };
  
  const cabcelSubscription = async () => {
    try {
      const response = await axios.get('http://localhost:5000/cancelsub', {
   params:{
          username: id,
   }
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
          <p>Name: {subscriptionData.patientStatus.name}</p>
          <p>Status: {subscriptionData.patientStatus.status}</p>
          <p>Start Date: {subscriptionData.patientStatus.start_date}</p>
          <p>Renewal Date: {subscriptionData.patientStatus.renewal_date}</p>
          <p>End Date: {subscriptionData.patientStatus.end_date}</p>

          <h2>Family Members Status:</h2>
          {subscriptionData.familyMembersStatus.length > 0 ? (
            subscriptionData.familyMembersStatus.map((member, index) => (
              <div key={index}>
                <p>Name: {member.name}</p>
                <p>Status: {member.status}</p>
                <p>Start Date: {member.start_date}</p>
                <p>Renewal Date: {member.renewal_date}</p>
                <p>End Date: {member.end_date}</p>
              </div>
            ))
          ) : (
            <p>No family members found with subscription status.</p>
          )}
        </div>
      )}
      <button onClick={cabcelSubscription}>cancel</button>
    </div>
  );
};

export default ViewSubscriptionStatus;
