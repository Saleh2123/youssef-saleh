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
<<<<<<< HEAD
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
=======
    
    
>>>>>>> f599ac2 (reqs done backend)
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
<<<<<<< HEAD
          type: String, 
          required: true,
        },
        temperature: {
          type: String, 
=======
          type: String, // You can change the type to be more specific if needed
          required: true,
        },
        temperature: {
          type: String, // You can change the type to be more specific if needed
>>>>>>> f599ac2 (reqs done backend)
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
<<<<<<< HEAD
    wallet: {
      type: Number,
      required:false
    },
=======

    
pres:{
    type:Array
}

    // ... (other fields)
>>>>>>> f599ac2 (reqs done backend)
  });

const Patients = mongoose.model('patient', patientSchema);
module.exports = Patients;



