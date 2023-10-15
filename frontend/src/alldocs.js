import { useParams } from "react-router-dom";
import { useState, React, useEffect } from "react";
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from "@mui/material";
import axios from "axios";

function Alldocs() {

    const {id}=useParams();
    const [formData, setFormData] = useState({
        id:id,
        name: '',
        doctor:'',
        date:''

      }); 

const [search,sets]=useState('')
    //Dummy data 
  const [appointments,setapt] = useState([])
useEffect(()=>{
  async function get(){
    setapt((await axios.get("http://localhost:5000/alldocs?username=omarika")).data)
    console.log(appointments)
  }
  get()
},[])
  const handleViewapp = (row) => {
    alert(JSON.stringify(row));
   };
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mt-2">
        <h4>Upcoming appointments</h4>
        <input onChange={(e)=>{sets(e.target.value)}}></input>
        <div>
          <TableContainer component={Paper}>
            <Table aria-label="List of Appointments">
              <TableHead>
                <TableRow>
                 
                  <TableCell>Doctor</TableCell>
                  <TableCell>speciality</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointments.filter((row)=>row.name.includes(search)).map((row) => (
                  <TableRow key={row.id}>
                  
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.speciality}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>
                  <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleViewapp(row)}>
                    View App. Details
                    
                  </button>
                </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Alldocs;
