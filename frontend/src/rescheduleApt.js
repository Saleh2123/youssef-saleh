import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MenuItem, Select, TextField, Button, Container, Box } from "@mui/material";

export default function ResApt() {
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

    if (!form.doctor || !form.old || !form.start || !form.hour) {
      alert("Enter the full details");
      return;
    }
    

    await axios.post("http://localhost:5000/rescheduleApp", {
      username: id,
      doc: form.doctor,
      oldDate: form.old,
      time: form.hour,
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

        <TextField
          required
          onChange={handleChange}
          id="old"
          type="date"
          name="old"
          label="OldDate"
          fullWidth
          margin="normal"
        />

        <TextField
          required
          onChange={handleChange}
          id="hour"
          type="time"
          name="hour"
          label="Hour"
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
          Reschedule
        </Button>
      </Box>
    </Container>
  );
}
