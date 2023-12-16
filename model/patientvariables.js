const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const patientSchema = new Schema({
  secret:{type:String},
  medicalhistory:{type:Array},
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
    healthPackages: {	
      name: String, // Changed to an object	
      status: {	
        type: String,	
        enum: ['Subscribed', 'Unsubscribed', 'Cancelled'],	   
        default: 'Unsubscribed',	
      },	    
      start_date: Date,	    
      renewal_date: Date,	       
      end_date: Date,	
  },
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
          type: String, 
          required: true,
        },
        temperature: {
          type: String, 
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
    appointments:{
      type:[
          {
             doctor:    {
  
              type: mongoose.Types.ObjectId,
              ref:'request',
  
          },
          time:{
  type:String
          },date:{
            type:Date
          },
          status:{
            type:String,
            default:"Pending"
          }
      }
      ]
  },prescriptions:{
    type:[
      {
         doctor:    {

          type: mongoose.Types.ObjectId,
          ref:'request',

      },
      time:{
        type:String
      },date:{
        type:Date
      },
      status:{
        type:String,
        default:"Not filled"
      },
      medicineName:{
        type:String
        },
        medicineDosage:{
          type:Number
        }
       
      }
  ]},wallet:{
    type:Number
  },familymem:{
    type:Array
  },pres:{
    type:Array
  },password:{
    type:String
  }
  });

const Patients = mongoose.model('patient', patientSchema);
module.exports = Patients;



