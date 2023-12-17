import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MenuItem, Select, TextField, Button, Container, Box } from "@mui/material";

export default function CancelDocApt() {
  const [form, setForm] = useState({});
  const [patients, setPatients] = useState([]);
  
const {id}=useParams()
  useEffect(() => {
    async function getapt() {
        setPatients((await axios.get(`http://localhost:5000/doctorapt?username=${id}`)).data);
    }
    getapt();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  
  const filteredPatients = Array.isArray(patients)
    ? patients.filter((item, index, arr) => arr.findIndex((i) => i.patient._id === item.patient._id) === index)
    : [];


  const handleClick = async (e) => {
    e.preventDefault();

    if (!form.doctor || !form.start ) {
      alert("Enter the full details");
      return;
    }
    

    await axios.patch("http://localhost:5000/cancelPatientApp", {
      username: "hasbo",
      doc: id,
      date: form.start
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
          label="Doctor"
        >
          {filteredPatients.map(({ patient }) => (
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
