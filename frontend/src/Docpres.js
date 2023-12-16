import { useState,useEffect } from "react";
import {TableContainer,Table,TableBody,TableRow,TableCell,Paper,TableHead} from "@mui/material";
import axios from "axios";
function Docpres() {

      const [prescriptions, setPrescriptions] = useState([
        { medicine: 'Medicine A', dosage: 1 },
        { medicine: 'Medicine B', dosage: 2 },
        { medicine: 'Medicine C', dosage: 3 },
      ]);
      const [newMedicine, setNewMedicine] = useState('');
    
      const handleIncreaseDosage = (index) => {
        const updatedPrescriptions = [...prescriptions];
        updatedPrescriptions[index].dosage += 1;
        setPrescriptions(updatedPrescriptions);
      };
    
      const handleDecreaseDosage = (index) => {
        const updatedPrescriptions = [...prescriptions];
        if (updatedPrescriptions[index].dosage > 1) {
          updatedPrescriptions[index].dosage -= 1;
          setPrescriptions(updatedPrescriptions);
        }
      };
    
      const handleAddMedicine = () => {
        if (newMedicine.trim() !== '') {
          const updatedPrescriptions = [
            ...prescriptions,
            { medicine: newMedicine, dosage: 1 },
          ];
          setPrescriptions(updatedPrescriptions);
          setNewMedicine('');
        }
      };
    
      const handleDeleteMedicine = (medicineName) => {
        const updatedPrescriptions = prescriptions.filter(
          (prescription) => prescription.medicine !== medicineName
        );
        setPrescriptions(updatedPrescriptions);
      };
    
      return (
        <div>
          <h2>List of Prescriptions</h2>
          <ul>
            {prescriptions.map((prescription, index) => (
              <li key={index}>
                {prescription.medicine}: Dosage - {prescription.dosage}
                <button onClick={() => handleIncreaseDosage(index)}>+</button>
                <button onClick={() => handleDecreaseDosage(index)}>-</button>
                <button onClick={() => handleDeleteMedicine(prescription.medicine)}>Delete</button>
              </li>
            ))}
          </ul>
          <div>
            <input
              type="text"
              value={newMedicine}
              onChange={(e) => setNewMedicine(e.target.value)}
              placeholder="New Medicine"
            />
            <button onClick={handleAddMedicine}>Add</button>
          </div>
        </div>
      );
    
    
    
    

}

export default Docpres;