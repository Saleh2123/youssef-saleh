import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

import axios from "axios";

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
console.log(apt)
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <TextField
        label="Search by Doctor"
        placeholder="Doctor"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <TextField
        label="Status"
        placeholder="Status"
        value={statuss}
        onChange={(e) => {
          setStatus(e.target.value);
        }}
      />
      <TextField
      
        type="date"
        value={timee}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />
      {apt
        ?.filter(({ patient, status, time }) => {
          return patient.name.includes(search) && status.includes(statuss) && (timee === "" || new Date(time) > new Date(timee));
        })
        .map((data) => (
          <div>
            {`Paitent: ${data.patient.name}, Time: ${data.time}, Status: ${data.status}`}
          </div>
        ))}
    </Container>
  );
}
