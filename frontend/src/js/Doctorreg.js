import React, { useState } from 'react';
import axios from 'axios';
const Doctorreg = () => {
  const [formData, setFormData] = useState({
    username:""
    ,name:''
    ,email:""
    ,education:''
    ,affialiation:""
    ,speciality:""
    ,rate:""
    ,date:""
    ,password:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
 await axios.post("http://localhost:5000/createdoctor",formData)
    console.log('Form submitted:', formData);
    alert("Registration complete");
    // You can add further logic to handle form submission (e.g., API call).
  };

  return (
    <form onSubmit={handleSubmit}>



<label>
        DOCTOR REGISTERARTION
      
      </label> 
      <br />
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
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
      <br />
      <label>
        Birthday:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
      <br />
        Hourly rate:
        <input
          type="number"
          name="rate"
          value={formData.rate}
          onChange={handleChange}
        />
        
      </label>
      <br />
      <label>
        education:
        <input
          type="text"
          name="education"
          value={formData.education}
          onChange={handleChange}
        />
      </label>

  <label>
        Affiliation:
        <input
          
          name="affialiation"
          value={formData.affialiation}
          onChange={handleChange}
        />
      </label>
    
    
      <label>
        speciality:
        <input
          type="text"
          name="speciality"
          value={formData.speciality}
          onChange={handleChange}
        />
      </label>
      <br />
    
     
      <br />      <button type="submit">Register</button>
    </form>
  );
};

export default Doctorreg;