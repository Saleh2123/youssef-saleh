import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { Button } from "@mui/material";

export default function Aptdoc() {
  const [search, setSearch] = useState("");
  const [statuss, setStatus] = useState("");
  const [timee, setTime] = useState("");
  const { id } = useParams();
  const [apt, setApt] = useState([]);

  useEffect(() => {
    async function get() {
      setApt((await axios.get(`http://localhost:5000/doctorapt?username=${id}`)).data);
    }
    get();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box sx={{ display: "flex", gap: "16px", mb: 2 }}>
        <TextField
          label="Search by Patient"
          placeholder="Doctor"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          fullWidth
        />
        <Select
          value={statuss}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          displayEmpty
          fullWidth
          label="Status"
        >
          <MenuItem value="">Select Status</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Accepted">Accepted</MenuItem>
          
          <MenuItem value="canceled">canceled</MenuItem>
        </Select>
        <TextField
          type="date"
          value={timee}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          fullWidth
        />
      </Box>
      {apt
        ?.filter(({ patient, status, time }) => {
          return (
            patient?.name.includes(search) &&
            (statuss === "" || status?.includes(statuss)) &&
            (timee === "" || JSON.parse(time).date === timee)
          );
        })
        .map((data, index) => (
          <Paper key={index} elevation={3} sx={{ p: 2, mb: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Patient: {data.patient.name}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Date: {JSON.parse(data.time).date}, hour: {JSON.parse(data.time).hour}, Status: {data.status}
            </Typography>
           {data.status==="Pending" &&
           
           <>
           <Button 
           onClick={async ()=>{
           await axios.post(`http://localhost:5000/acceptapt`,{username:data.patient.username,doc:id,date:data.time})
            async function get() {
              setApt((await axios.get(`http://localhost:5000/doctorapt?username=${id}`)).data);
            }
            get();
           }}
            >
              accept
            </Button>
            <Button 
            onClick={async ()=>{
            await axios.patch(`http://localhost:5000/cancelPatientApp`,{username:data.patient.username,doc:id,date:data.time})
             
               setApt((await axios.get(`http://localhost:5000/doctorapt?username=${id}`)).data);
             
             
            }}
             >
               reject
             </Button>
             </>
 
}



          </Paper>
        ))}
    </Container>
  );
}