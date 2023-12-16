import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { TextField, Button, Container, Box } from "@mui/material";

export default function AddavSlot() {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const { id } = useParams();
  const handleClick = async (e) => {
    e.preventDefault();
    if(!form.start||!form.hour){
      alert('ENTER FULL DETAILS')
      return
    }
    await axios.post("http://localhost:5000/addav", {
      username: id,
      time: { date: form.start, hour: form.hour },
    });
    alert("done");
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <TextField
          required
          onChange={handleChange}
          id="hour"
          type="time"
          name="hour"
          label="Hour"
          fullWidth
          margin="normal"
          placeholder="Old Password"
        />
        <TextField
          required
          onChange={handleChange}
          id="start"
          type="date"
          name="start"
          label="Date"
          fullWidth
          margin="normal"
          placeholder="Old Password"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          fullWidth
          mt={2}
        >
          Submit Time Slot
        </Button>
      </Box>
    </Container>
  );
}
