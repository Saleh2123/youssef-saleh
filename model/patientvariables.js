const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const patientSchema = new Schema({
    username: {
        type: String,
        required: true
    }
    ,
    name: {
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
    birth_date: {
        type: String,
        required: true
    }

    ,
    gender: {
        type: String,
        required: true
    }
    ,
    mobile_no: {
        type: Number,
        required: true
    }

   
,familymem:{
    type:Array,
    required:false
}
,
emergencyname:{
    type:String
    ,required:true
},emergencyphone:{
    type:String,
    required:true
}

,appointments:{
    type:[
        {
           doctor:    {
                
            type: mongoose.Types.ObjectId,
            ref:'request',
             
        },
        time:{
type:String
        }
    }
    ]
}
,
pres:{
    type:Array
}

})


const Patients = mongoose.model('patient', patientSchema);
module.exports = Patients;