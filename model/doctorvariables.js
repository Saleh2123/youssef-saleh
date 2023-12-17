
const mongoose = require('mongoose')
const Patients = require('./patientvariables');
const { Int32 } = require('mongodb');
const Schema = mongoose.Schema
const doctorSchema = new Schema({
    secret:{type:String},
    affiliation:{
        type:String,
        required:true
    },
    username: {
        type: String,
        required: true
    }
    ,
    name:{
        type: String,
        required: true
    }
    ,
    email: {
        type: String,
        required: true
    }

    ,
    password: {
        type: String,
        required: true
    }
    ,
    date: {
        type: String,
        required: true
    }
    ,
    education: {
        type: String,
        required: true
    }
    ,
    rate: {
        type: Number,
        required: true
    }
   ,
    patients: {
        type: [
            {
                
        type: mongoose.Types.ObjectId,
        ref:'patient',
        
            }
        ],
        required: false
    }
  ,
    speciality:{
        type:String,
        required:true
    }
,appointments:{
    type:[
        {
           patient:    {
                
            type: mongoose.Types.ObjectId,
            ref:'patient',
             
        },
        time:{
type:String
        },date:{
            type:Date
        },   status:{
            type:String,
            default:"upcoming"
          }
    }
    ]
},followUpAppointments: [
         {     scheduledDate: {
                type: Date,
                required: true,
            },
            patient: {
                type: mongoose.Types.ObjectId,
                ref: 'patient',
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            status: {
                type: String,
                enum: ['pending', 'accepted', 'revoked'],
                default: 'pending',
            },
        },
    ]
,wallet:{
    type:Number,
    default:0
},prescriptions:{
    type:[
      {
         patient:    {

          type: mongoose.Types.ObjectId,
          ref:'patient',

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
  ]},price:{
    type:String
}

,status:{
    type:String,
    default:'pending'
},timeslots:{
    type:Array
}
,dets:{
    type:Array
}, contract:{
    type:   {
           contract:{
               type:String

           },
           status:{
               type:String

           }
       }
   }
})

const doctor= mongoose.model('request', doctorSchema);
module.exports = doctor;


