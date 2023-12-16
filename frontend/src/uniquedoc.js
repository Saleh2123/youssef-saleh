import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { TableCell,TableRow } from "@mui/material";
import axios from "axios";

export default function Unique() {
  const [search, setSearch] = useState("");
  const [statuss, setStatus] = useState("");
  const [timee, setTime] = useState("");
  const { id } = useParams();
  const [apt, setApt] = useState([]);



  useEffect(() => {
    async function get() {
      setApt((await axios.get(`http://localhost:5000/patientapt?username=${id}`)).data);
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
      
      
      {apt.appointments?.filter((item, index, arr) => {
  return arr.findIndex(i => i.doctor._id === item.doctor._id) === index;
}).filter(({ doctor, status, time }) => {

        console.log(JSON.parse(time).date)
          return doctor?.name.includes(search) && status?.includes(statuss) && (timee === "" || JSON.parse(time).date === timee);
        })
        ?.map((row) => (
         
            <TableRow key={row.id}>
            <TableCell>{row.doctor._id}</TableCell>
            <TableCell>{row.doctor.name}</TableCell>
            <TableCell>{row.doctor.email}</TableCell>
            <TableCell>{row.doctor.gender}</TableCell>
            <TableCell>{row.doctor.birth_date}</TableCell>
          
            <TableCell>
              <Link to={`/${id}/follow/${row.doctor.username}/`}>
              <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> follow up</button> 
             </Link>
              </TableCell>
            <TableCell>
              <Link to={`/${id}/chat/${row.doctor.username}/${id}`}>
              <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Chat</button> 
             </Link>
              </TableCell>
              <TableCell>
              <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Video Call</button> 
              </TableCell>
          </TableRow>
        ))


        }










        
    </Container>
    
  );
}

