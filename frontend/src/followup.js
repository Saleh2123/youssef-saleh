import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Follow = () => {
  const {id}=useParams()
  const {doctor}=useParams()
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming you have the necessary values in state
      const requestBody = {
        username:id,
        doc:doctor,
        time:{hour:time},
        date
      };
console.log(requestBody)
      // Make the POST request to your backend API
      const response = await axios.post('http://localhost:5000/select', requestBody);
alert("done")
      // Handle the response here (if needed)
      console.log('Response:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
      />
      <input
        type="hour"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Time"
      />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Follow;
