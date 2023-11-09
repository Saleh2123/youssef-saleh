import { useParams } from "react-router-dom";
import { useState, React, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableHead,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";

function PatientApps() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    id: id,
    name: "",
    doctor: "",
    date: "",
  });

  const [search, sets] = useState("");
  //Dummy data
  const [appointments, setapt] = useState({ appointments: [] });
  useEffect(() => {
    async function get() {
      setapt(await axios.get(`http://localhost:5000/patientapt?username=${id}`));
    }
    get();
  }, []);

  const handleViewapp = (row) => {
    alert(JSON.stringify(row));
  };

  return (
    <div style={{ backgroundColor: "#e6f7ff", padding: "30px", minHeight: "100vh" }}>
      <h4>


        Upcoming Appointments
        

      </h4>
      
      <TextField
        label="Search Doctor"
        variant="outlined"
        fullWidth
        onChange={(e) => {
          sets(e.target.value);
        }}
        style={{ marginBottom: "50px" }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Doctor</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.appointments
              ?.filter((row) => row.doctor.name.includes(search))
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.doctor.name}</TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleViewapp(row)}
                    >
                      View App. Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default PatientApps;
