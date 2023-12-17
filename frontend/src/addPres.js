import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MenuItem, Select, TextField, Button, Container, Box } from "@mui/material";

export default function AddPres() {
  const [form, setForm] = useState({
    patient: "",
    start: "",
    hour: "",
    status: "",
    medicine: "",
    dosage: "",
  });
  const [apt, setApt] = useState([]);
const {id}=useParams()
  useEffect(() => {
    async function getApt() {
        setApt((await axios.get(`http://localhost:5000/doctorapt?username=${id}`)).data);
    }
    getApt();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  
  const handleClick = async (e) => {
    e.preventDefault();

    if (!form.patient || !form.start || !form.hour || !form.medicine || !form.dosage || !form.status) {
      alert("Enter the full details");
      return;
    }

    const selectedPatientExists = apt.some((appointment => ((appointment.patientUsername === form.patient) && (appointment.status==="completed"))));

    if (!selectedPatientExists) {
      alert("You did not have an appointment with this patient");
      return;
    }

    await axios.post("http://localhost:5000/addPrescription", {
      doctorUsername: id,
      patientUsername: form.patient,
      data: form.start,
      status: form.status,
      medicineName: form.medicine,
      medicineDosage: form.dosage,
      time: form.hour ,
    });
    console.log(form)
    alert("Done");
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        Patient Name:
        <TextField
        required
        id="patient"
        name="patient"
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
          fullWidth
          margin="normal"
        />

        Status
        <TextField
        required
        id="status"
        name="status"
        onChange={handleChange}
        fullWidth
        margin="normal"
        >
        </TextField>

        Medicine Name:
        <TextField
        required
        id="medicine"
        name="medicine"
        onChange={handleChange}
        fullWidth
        margin="normal"
        >
        </TextField>

        Medicine Dosage:
        <TextField
        required
        id="dosage"
        name="dosage"
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
