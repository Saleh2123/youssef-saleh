import React from 'react';

export default function PrescriptionDetails({ prescription, onClose }) {
  return (
    <div>
      <h2>Prescription Details</h2>
      <p>Doctor Name: {prescription.doctor}</p>
      <p>Date: {prescription.date}</p>
      <p>Status: {prescription.status}</p>
      <p>Time: {prescription.time}</p>
      <p>Medicine Name: {prescription.medicineName}</p>
      <p>Medicine Dosage: {prescription.medicineDosage}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}