import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MenuItem, Select, TextField, Button, Container, Box } from "@mui/material";

export default function CancelApt() {
  const [form, setForm] = useState({});
  const [doctors, setDoctor] = useState([]);
  
const {id}=useParams()
  useEffect(() => {
    async function getapt() {
        setDoctor((await axios.get(`http://localhost:5000/patientapt?username=${id}`)).data);
    }
    getapt();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  
  const filteredDoctors = Array.isArray(doctors)
    ? doctors.filter((item, index, arr) => arr.findIndex((i) => i.doctor._id === item.doctor._id) === index)
    : [];


  const handleClick = async (e) => {
    e.preventDefault();

    if (!form.doctor || !form.start) {
      alert("Enter the full details");
      return;
    }
    

    await axios.post("http://localhost:5000/cancelApp", {
      username: id,
      doc: form.doctor,
      date: form.start
    });
    alert("Done");
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Select
          name="doctor"
          onChange={handleChange}
          displayEmpty
          fullWidth
          label="Doctor"
        >
          {filteredDoctors.map(({ doctor }) => (
            <MenuItem key={doctor._id} value={doctor.username}>
              {doctor.username}
            </MenuItem>
          ))}
        </Select>

        <TextField
          required
          onChange={handleChange}
          id="start"
          type="date"
          name="start"
          label="Date"
          fullWidth
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          fullWidth
          sx={{ mt: 2 }}
        >
          Cancel
        </Button>
      </Box>
    </Container>
  );
}
