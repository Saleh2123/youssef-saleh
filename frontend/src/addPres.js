import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MenuItem, Select, TextField, Button, Container, Box } from "@mui/material";

export default function AddPres() {
  const [form, setForm] = useState({});
  const [patients, setPatients] = useState([]);
const {id}=useParams()
  useEffect(() => {
    async function getPatients() {
      setPatients((await axios.get(`http://localhost:5000/doctorapt?username=${id}`)).data);
    }
    getPatients();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  

  const handleClick = async (e) => {
    e.preventDefault();

    if (!form.patient || !form.start || !form.hour) {
      alert("Enter the full details");
      return;
    }

    await axios.post("http://localhost:5000/addPrescription", {
      username: form.patient,
      doc: id,
      time: { date: form.start, hour: form.hour },
    });
    alert("Done");
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        Patient Name:
        <TextField
        required
        onChange={handleChange}
        fullWidth
        margin="normal"
        >
        </TextField>
        
        Date:
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

        Time:
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

        Status
        <TextField
        required
        onChange={handleChange}
        fullWidth
        margin="normal"
        >
        </TextField>

        Medicine Name:
        <TextField
        required
        onChange={handleChange}
        fullWidth
        margin="normal"
        >
        </TextField>

        Medicine Dosage:
        <TextField
        required
        onChange={handleChange}
        fullWidth
        margin="normal"
        >
        </TextField>

        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          fullWidth
          sx={{ mt: 2 }}
        >
          Add prescription
        </Button>
      </Box>
    </Container>
  );
}
