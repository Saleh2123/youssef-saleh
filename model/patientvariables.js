const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const patientSchema = new Schema({
    username: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    followUpAppointments: [
        {
          scheduledDate: {
            type: Date,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
        },
      ],
    // ... (other fields)
    healthRecords: [
      {
        doctorUsername: {
            type: String,
            required: true,
          },
        recordDate: {
          type: Date,
          required: true,
        },
        bloodPressure: {
          type: String, // You can change the type to be more specific if needed
          required: true,
        },
        temperature: {
          type: String, // You can change the type to be more specific if needed
          required: true,
        },
        symptoms: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
    // ... (other fields)
  });

const Patients = mongoose.model('patient', patientSchema);
module.exports = Patients;



