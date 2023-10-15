import React, { useState } from 'react';
import axios from 'axios';
const Remove = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
 axios.delete(`http://localhost:5000/deleteruser?username=${formData.username}`)
    console.log('Form submitted:', formData);
    alert("Form submitted");
    // You can add further logic to handle form submission (e.g., API call).
  };

  return (
    <form onSubmit={handleSubmit}>



<label>
      remove
      
      </label> 
      <br />
      <label>
        Username:
        <input
        required
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      
   

     
      <br />      <button type="submit">Add Admin</button>
    </form>
  );
};

export default Remove