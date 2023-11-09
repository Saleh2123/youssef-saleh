import { useState, React } from "react";
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
function Reqs(){


  const [requests,setr] =useState([]);

  useEffect(()=>{
    async function get(){
setr((await axios.get(`http://localhost:5000/viewdoctors`)).data)
    }
    get()
},[])



  return(<div className="flex flex-col min-h-screen">
    <div className="mt-2">
        <h4>Requests</h4>
        <div>
          <TableContainer component={Paper}>
            <Table aria-label="List of Requests">
              <TableHead>
                <TableRow>
                  <TableCell>Request Id</TableCell>
                  <TableCell>Userame</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Password</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Education</TableCell>
                  <TableCell>Speciality</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {requests.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row._id}</TableCell>
                    <TableCell>{row.username}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.password}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.education}</TableCell>
                    <TableCell>{row.speciality}</TableCell>
                   <TableCell> <button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                        onClick={async () =>{ await axios.post('http://localhost:5000/accept',{username:row.username})
                
setr((await axios.get(`http://localhost:5000/viewdoctors`)).data)
                      }}
                      > accept</button>
                      </TableCell>
                      <TableCell>
                        <button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                        onClick={async () =>{ await axios.post('http://localhost:5000/reject',{username:row.username});
                   
                      
setr((await axios.get(`http://localhost:5000/viewdoctors`)).data)
                      }}
                      > reject</button>
                      </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

  </div>);


}


export default Reqs;