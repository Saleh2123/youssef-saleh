import React, { useState } from 'react';
import axios from 'axios';

const Remove = () => {
  const [formData, setFormData] = useState({
    username: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.delete(`http://localhost:5000/deleteruser?username=${formData.username}`);
      alert("User removed successfully");
    } catch (error) {
      console.error("Error removing user:", error);
      alert("Error removing user. Please check the username and try again.");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold">Remove User</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block font-semibold">Username:</label>
          <input
            required
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
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
