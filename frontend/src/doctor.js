import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

export default function Doctor() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put("http://localhost:5000/docedit", formData);
    console.log("Form submitted:", formData);
    alert("Form submitted");
    // You can add further logic to handle form submission (e.g., API call).
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2 className="text-3xl font-semibold">Edit Doctor Info</h2>
        <TextField
          label="Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          label="Hourly Rate"
          type="text"
          name="rate"
          value={formData.rate}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          label="Affiliation"
          type="text"
          name="affiliation"
          value={formData.affiliation}
          onChange={handleChange}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          Update Info
        </Button>
      </form>
      <Link to="viewpatients" style={{ marginTop: "16px" }}>
        <Button variant="contained" color="primary" fullWidth>
          View Patients
        </Button>
      </Link>
      <Link to="apt" style={{ marginTop: "16px" }}>
        <Button variant="contained" color="primary" fullWidth>
          View Appointments
        </Button>
      </Link>
      <Link to="addslot" style={{ marginTop: "16px" }}>
        <Button variant="contained" color="primary" fullWidth>
        Add available timrslot
        </Button>
      </Link>
      <Link to="slot" style={{ marginTop: "16px" }}>
        <Button variant="contained" color="primary" fullWidth>
       add appointment
        </Button>
      </Link>
      <Link to="changepassword" style={{ marginTop: "16px" }}>
        <Button variant="contained" color="primary" fullWidth>
    changepassword
        </Button>
      </Link>

      <Link to="/" style={{ marginTop: "16px" }}>
        <Button variant="contained" color="primary" fullWidth>
    changepassword
        </Button>
        </Link>












      <Link to="filterMyAppointments">   
        <button type="submit">filter appointments</button>
        </Link>
        <Link to="showWallet">   
        <button type="submit">show wallet</button>
        </Link>
      <Link to="contract" style={{ marginTop: "16px" }}>
        <Button variant="contained" color="primary" fullWidth>
        view contract
        </Button>
        
      </Link>
      <Link to="hr" style={{ marginTop: "16px" }}>
        <Button variant="contained" color="primary" fullWidth>
      add record
        </Button>
        </Link>
    </Container>
  );
}
