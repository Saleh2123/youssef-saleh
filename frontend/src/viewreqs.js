import { useState, React } from "react";
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from "@mui/material";

function Reqs(){


  const requests = [
    {
      id:1,
      username:"Seb123",
      Name:"Sebaei",
      email:"y123@gmail.com",
      password:"ahma",
      date:"1/2/2024",
      education:"high school",
      rate:9,
      affiliation:"wow",
      speciality:"eyes"
    }
  ]
  
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
                  <TableCell>Rate</TableCell>
                  <TableCell>Affiliation</TableCell>
                  <TableCell>Speciality</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {requests.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.username}</TableCell>
                    <TableCell>{row.Name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.password}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.education}</TableCell>
                    <TableCell>{row.rate}</TableCell>
                    <TableCell>{row.affiliation}</TableCell>
                    <TableCell>{row.speciality}</TableCell>
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