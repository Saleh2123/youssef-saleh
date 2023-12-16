import { useState,useEffect } from "react";
import {TableContainer,Table,TableBody,TableRow,TableCell,Paper,TableHead} from "@mui/material";
import axios from "axios";
function Viewpatients() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [p,setp]=useState([])
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelect = (id) => {
    setSelectedPatient(id);
  };
  useEffect(()=>{
    async function get(){
      setp((await axios.get(`http://localhost:5000/doctorapt?username=omarika`)).data)
   setPatients(p)
    }
    get()
  },[])

  const handleSearch = () => {
    const filteredPatients = p.filter((patient) =>
      patient.patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setPatients(filteredPatients);
  }
  ;
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mt-2">
        <h4>Patients:</h4>
        <div>
          <input
            type="text"
            placeholder="Search by Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleSearch}>Search</button>
          <TableContainer component={Paper}>
            <Table aria-label="List of Patients">
              <TableHead>
                <TableRow>
                  <TableCell>Patient Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>gender</TableCell>
                  <TableCell>Date Of Birth</TableCell>
                  <TableCell>Select</TableCell>
                  <TableCell>Chat</TableCell>
                  <TableCell>Video Call</TableCell>
                
                </TableRow>
              </TableHead>
              <TableBody>
                { p.filter((patient) =>
      patient.patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.patient._id}</TableCell>
                    <TableCell>{row.patient.name}</TableCell>
                    <TableCell>{row.patient.email}</TableCell>
                    <TableCell>{row.patient.gender}</TableCell>
                    <TableCell>{row.patient.birth_date}</TableCell>
                  
                    <TableCell>
                      <button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                          selectedPatient === row.id ? "bg-success" : ""
                        }`}
                        onClick={() => handleSelect(row.id)}
                      >
                        {selectedPatient === row.id ? "Patient Selected" : "Select Patient"}
                      </button>
                    </TableCell>
                    <TableCell>
                      <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Chat</button> 
                      </TableCell>
                      <TableCell>
                      <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Video Call</button> 
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

export default Viewpatients;
