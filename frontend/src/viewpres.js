import axios from "axios";
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from '@mui/material';
import PrescriptionDetails from './PrescriptionDetails';

export default function Pres(){
const {id}= useParams();
const [pres,setpres]=useState([]);
const [form, setForm] = useState({});
const [selectedPrescription, setSelectedPrescription] = useState(null);

useEffect(()=>{
    async function get(){
setpres((await axios.get('http://localhost:5000/viewPrescriptions',{params:{username:id}})).data);
console.log(pres)
    }
    get();
},[id]);
console.log(pres)

const handleClick = (prescription) => {
  setSelectedPrescription(prescription);
};

const handleCloseDetails = () => {
  setSelectedPrescription(null);
};

    return(
<div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold">Prescriptions</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Doctor Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {pres.length > 0 ? (
              pres.map((prescription, index) => (
                <TableRow key={index}>
                  <TableCell>{prescription.doctor}</TableCell>
                  <TableCell>{prescription.date}</TableCell>
                  <TableCell>{prescription.status}</TableCell>
                  <button
                  variant="contained"
                  color="primary"
                  onClick={() => handleClick(prescription.id)}
                  fullWidth
                  sx={{ mt: 2 }}
                  >
                  View details
                  </button>
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
      {selectedPrescription && (
        <PrescriptionDetails
          prescription={selectedPrescription}
          onClose={handleCloseDetails}
        />
      )}
    </div>

    )

}