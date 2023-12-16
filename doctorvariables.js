<<<<<<< HEAD

const mongoose = require('mongoose')
const Patients = require('./patientvariables');
const { Int32 } = require('mongodb');
const Schema = mongoose.Schema
const doctorSchema = new Schema({
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
            type:TimeRanges
        },
        date:{
            type:Date
        },
    }
    ]
}

,price:{
    type:Number
},
wallet: {
    type:Number
}

})

const doctor= mongoose.model('request', doctorSchema);
module.exports = doctor;
=======
const mongoose = require('mongoose');
const Patients = require('./patientvariables');
const { Int32 } = require('mongodb');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    affiliation: {
        type: String,
        required: true,
    },
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
    password: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        required: true,
    },
    patients: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'patient',
        },
    ],
    speciality: {
        type: String,
        required: true,
    },
    appointments: [
        {
            patient: {
                type: mongoose.Types.ObjectId,
                ref: 'patient',
            },
            time: {
                type: String,
            },
        },
    ],
    followUpAppointments: [
        {
            scheduledDate: {
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
    ],
    price: {
        type: String,
    },
});

doctorSchema.methods.acceptFollowUpRequest = async function (appointmentId) {
    const appointment = this.followUpAppointments.id(appointmentId);
    if (appointment) {
        appointment.status = 'accepted';
        await this.save();
    }
};

doctorSchema.methods.revokeFollowUpRequest = async function (appointmentId) {
    const appointment = this.followUpAppointments.id(appointmentId);
    if (appointment) {
        appointment.status = 'revoked';
        await this.save();
    }
};

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
>>>>>>> f599ac2 (reqs done backend)
