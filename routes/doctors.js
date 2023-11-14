const model =require('../model/doctorvariables');
const Patients = require('../model/patientvariables');
const doctors = require('../model/doctorvariables');
//const Subscription = require('../model/subscriptionvariables');
const Appointments = require('../model/doctorvariables');
const HealthRecords = require('../model/patientvariables');

const addtimeslot= async (req,res)=>{
  const {username,time}=req.body;
  const {timeslots}= await model.findOne({username:username}).select('timeslots -_id').exec()
  timeslots.push(time)
 await model.updateOne({username:title},{$set:{timeslots:timeslots}}).exec()
  
}


const addapt= async(req,res)=>{

const {doctor,patient,apt,date} =req.body;
try{
const {appintmentsP}= await Patients.findOne({username:patient}).select('appoinments -_id').exec()

const {_did}=await model.findOne({username:doctor})
appintmentsP.push({time:apt,doctor:_did,date:date})
await Patients.updateOne({username:patient},{$set:{appointments:appintmentsP}}).exec()

const {appintmentsD}= await doctors.findOne({username:doctor}).select('appoinments -_id').exec()

const {_pid}=await Patients.findOne({username:patient})
appintmentsD.push({time:apt,patient:_pid,date:date})
await doctors.updateOne({username:doctor},{$set:{appointments:appintmentsD}}).exec()

res.send("done")
}
catch(error){
  console.error(error);
  res.status(500).json({ error: 'Internal Server Error' });
}

}
//const Contract = require('../model/contractvariables');

const createdoctor = async(req,res) => {
    //req.body.affiliation="";
    const newDoctor = doctors
            .create(req.body)
            .then((newDoctor) => {
              res.status(200).json(newDoctor);
            })
            .catch((err) => {
              res.status(400).json(err);
            });
 }
 
const updatedoc = async (req, res) => {
    const {username,rate,affialiation,email}=req.body;
  await model.updateOne({username:username},{$set:{rate:rate,affialiation:affialiation,email:email}}).exec()
 res.send('done');
   }
 const viewpatients= async (req,res)=>{
    const {username}=req.query;
    const {appintments}= await model.findOne({username:username}).select('appointments -_id').populate("appointments.patient")
  res.send(appintments)
 }
 const viewpatient= async (req,res)=>{
  const {username}=req.query;
  const patient= await Patients.findOne({username:username}).exec()
res.send(patient)
}
 /////////////////
 const viewAvailableAppointments = async (req, res) => {
  const { doctorUsername } = req.body;
  //console.log("here 1");
  try {
    //console.log("here 2");

    // Find the doctor using the provided username
    const doctor = await doctors.findOne({ username: doctorUsername });
    //console.log("here 3");


    if (!doctor) {
      
      return res.status(404).json({ error: 'Doctor not found' });
    }
    //console.log("here 4");

    if(doctor.appointments.length ===0){
      return res.status(404).send("no appointments for this doctor")
    }
    //console.log("here 5");

    // Extract available appointments from the doctor's appointments array
    const availableAppointments = doctor.appointments.filter(
      (appointment) => appointment.status === 'available'
    );
    console.log("here 6");

    res.status(200).json(availableAppointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const viewAppointments = async (req, res) => {
  const { doctorUsername, status } = req.body;

  try {
    // Find the doctor using the provided username
    const doctor = await doctors.findOne({ username: doctorUsername });

    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    if(doctor.appointments.length ===0){
      return res.status(404).send("no appointments for this doctor")
    }
    // Filter appointments based on the provided status (upcoming, past, etc.)
    const filteredAppointments = doctor.appointments.filter(
      (appointment) => appointment.status === status
    );

    res.status(200).json(filteredAppointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const addHealthRecord = async (req, res) => {
  const recordDate = Date.now();
  const doctorUsername = req.body.doctorUsername;

  const { patientUsername, bloodPressure, temperature,symptoms,description } = req.body;

  try {
    // Find the patient using the provided username
    const patient = await Patients.findOne({"username":patientUsername});

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    

    // Create a new health record
    const newHealthRecord = {
      doctorUsername,
      recordDate,
      bloodPressure,
      temperature,
      symptoms, 
      description
    };

    // Add the new health record to the patient's health records array
    patient.healthRecords.push(newHealthRecord);

    // Save the updated patient data
    await patient.save();

    res.status(200).json(newHealthRecord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
/*
const followUp = async (req,res) =>{
  const{doctorUsername,patientUsername,date,desc}=req.body;
  try{
    const doctor = await doctors.findOne({ username: doctorUsername });
    const patient = await Patients.findOne({ username: patientUsername });
    if((!doctor)||!(patient)){
      return res.status(404).json({ error: 'Patient or Doctor not found' });
    }
    const {appointments}= await Patients.findOne({username:patientUsername})
   appointments.push({scheduledDate: date, description:desc})
   await model.updateOne({username:username},{$set:{appointments:appointments}}).exec()
   console.log(followUpAppointments)
   res.send(followUpAppointments)
  }
  catch(error){
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};*/

const filterDoctorAppointments = async (req,res)=>{
  const {username,date,status}=req.query;
  try {
    const doctor = await doctors.findOne({ username: username });

    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    if(doctor.appointments.length ===0){
      return res.status(404).send("no appointments for this doctor")
    }
    // Filter appointments based on the provided status (upcoming, completed, canceled, rescheduled.)
    const filteredAppointments = doctor.appointments.filter(
      (appointment) => appointment.status === status||appointment.date === date
    );

    res.status(200).json(filteredAppointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const showDoctorWallet = async (req,res)=>{
  const{username}=req.query;
  try{
    const doctor = await doctors.findOne({username:username})
    if(!doctor){
      return res.status(404).json({ error: 'Doctor not found' });
    }
    const wallet = doctor.wallet;
    res.send(wallet)
  }
  catch(error){
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createdoctor,
  updatedoc,
  viewpatients,
  viewpatient,
 // viewSubscriptionStatus,
  viewAvailableAppointments,
  viewAppointments,
  addHealthRecord,
  addapt,addtimeslot,viewAppointments,filterDoctorAppointments,showDoctorWallet
};



