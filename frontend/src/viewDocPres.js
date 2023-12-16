import axios from "axios";
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from '@mui/material';


export default function Pres(){
const {id}= useParams();
const [pres,setpres]=useState([])

useEffect(()=>{
    async function get(){
setpres((await axios.get('http://localhost:5000/viewDoctorPrescriptions',{params:{username:id}})).data);
console.log(pres)
    }
    get();
},[id]);
console.log(pres)

    return(
<div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold">Prescriptions</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient Name</TableCell>
=              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Medicine Name</TableCell>
              <TableCell>Medicine Dosage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {pres.length > 0 ? (
              pres.map((prescription, index) => (
                <TableRow key={index}>
                  <TableCell>{prescription.patient}</TableCell>
                  <TableCell>{prescription.date}</TableCell>
                  <TableCell>{prescription.time}</TableCell>
                  <TableCell>{prescription.status}</TableCell>
                  <TableCell>{prescription.medicineName}</TableCell>
                  <TableCell>{prescription.medicineDosage}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6}>No prescriptions available</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

    )

}