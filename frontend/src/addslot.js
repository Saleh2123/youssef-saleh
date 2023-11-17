import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MenuItem, Select, TextField, Button, Container, Box } from "@mui/material";

export default function AddSlot() {
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

    await axios.post("http://localhost:5000/select", {
      username: form.patient,
      doc: id,
      time: { date: form.start, hour: form.hour },
    });
    alert("Done");
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Select
          name="patient"
          onChange={handleChange}
          displayEmpty
          fullWidth
          label="Patient"
        >
          {patients
            .filter(
              (item, index, arr) =>
                arr.findIndex((i) => i.patient._id === item.patient._id) === index
            )
            .map(({ patient }) => (
              <MenuItem key={patient._id} value={patient.username}>
                {patient.username}
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
          Submit Time Slot
        </Button>
      </Box>
    </Container>
  );
}
