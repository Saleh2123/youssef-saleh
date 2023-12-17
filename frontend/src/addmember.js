import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import axios from "axios";

export default function Addmember() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    national_id: "",
    id: id,
    relation: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/addmember", {
      familymem1: formData,
      username: id,
    });

    console.log('Form submitted:', formData);
    // You can add further logic to handle form submission (e.g., API call).
  };

  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <Container>
            <Typography variant="h5" gutterBottom>
              Add Family Member
            </Typography>
            <form onSubmit={handleSubmit}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="relation-label">Relation</InputLabel>
                <Select
                  labelId="relation-label"
                  id="relation"
                  name="relation"
                  value={formData.relation}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Relation</MenuItem>
                  <MenuItem value="husband">husband</MenuItem>
                  <MenuItem value="wife">wife</MenuItem>
                  <MenuItem value="child">child</MenuItem>
                  {/* Add other relations as MenuItem */}
                </Select>
              </FormControl>
              <TextField
                label="National ID"
                name="national_id"
                value={formData.national_id}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Update Info
              </Button>
            </form>
          </Container>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
