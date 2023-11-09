import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Doctor = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    affiliation: "",
    rate: "",
    username: id,
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put("http://localhost:5000/docedit", formData);
    console.log("Form submitted:", formData);
    alert("Form submitted");
    // You can add further logic to handle form submission (e.g., API call).
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "lightblue", // Set the background color to light blue
        padding: "20px",
      }}
    >
      <h2>Edit Doctor Info</h2>
      <div>
        <h2>Email:</h2>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{
            width: "100%", // Increased width
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <br />
      <div>
        <h2>Hourly Rate:</h2>
        <input
          type="text"
          name="rate"
          value={formData.rate}
          onChange={handleChange}
          style={{
            width: "100%", // Increased width
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div>
        <h2>Affiliation:</h2>
        <input
          type="text"
          name="affiliation"
          value={formData.affiliation}
          onChange={handleChange}
          style={{
            width: "100%", // Increased width
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <br />
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "#007BFF",
          color: "white",
          fontWeight: "bold",
          padding: "12px 24px",
          borderRadius: "5px",
          cursor: "pointer",
          border: "none",
        }}
      >
        Update Info
      </button>
      <Link to="viewpatients">
        <button
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            fontWeight: "bold",
            padding: "12px 24px",
            borderRadius: "5px",
            cursor: "pointer",
            border: "none",
            marginTop: "10px",
          }}
        >
          View Patients
        </button>
      </Link>
      <Link to="apt">
        <button
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            fontWeight: "bold",
            padding: "12px 24px",
            borderRadius: "5px",
            cursor: "pointer",
            border: "none",
            marginTop: "10px",
          }}
        >
          Appointments
        </button>
      </Link>
    </div>
  );
};

export default Doctor;
