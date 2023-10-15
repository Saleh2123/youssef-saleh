import React, { useState } from 'react';
import axios from 'axios';
const AddAdminstrator = () => {
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
    
 axios.post("http://localhost:5000/createadmin",formData)
    console.log('Form submitted:', formData);
    // You can add further logic to handle form submission (e.g., API call).
  };

  return (
    <form onSubmit={handleSubmit}>



<label>
        ADD ADMIN
      
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
      
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
  </label>
     
      <br />      <button type="submit">Add Admin</button>
    </form>
  );
};

export default AddAdminstrator;