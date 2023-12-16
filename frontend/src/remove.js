import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Select,MenuItem } from '@mui/material';
const Remove = () => {
  const [formData, setFormData] = useState({
    username: '',
  });
  const [patients, setPatients] = useState([]);
  async function getPatients() {
    setPatients((await axios.get(`http://localhost:5000/users`)).data);
  }
  useEffect(() => {
    async function getPatients() {
      setPatients((await axios.get(`http://localhost:5000/users`)).data);
    }
    getPatients();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.delete(`http://localhost:5000/deleteruser?username=${formData.username}`);
      alert("User removed successfully");
      await getPatients()
    } catch (error) {
      console.error("Error removing user:", error);
      alert("Error removing user. Please check the username and try again.");
    }
  };
console.log(patients)
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold">Remove User</h2>
      <form onSubmit={handleSubmit} className="mt-4">
      <Select
          name="username"
          onChange={handleChange}
          displayEmpty
          fullWidth
          label="user"
        >
          {patients
           
            .map((patient) => (
              <MenuItem key={patient._id} value={patient.username}>
                {patient.username}
              </MenuItem>
            ))}
        </Select>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Remove User
        </button>
      </form>
    </div>
  );
};

export default Remove;
