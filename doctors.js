const model =require('../model/doctorvariables');
const Patients = require('../model/patientvariables');
const doctors = require('../model/doctorvariables');
//const Subscription = require('../model/subscriptionvariables');
const Appointments = require('../model/doctorvariables');
const HealthRecords = require('../model/patientvariables');


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
<<<<<<< HEAD
 
 const viewAvailableAppointments = async (req, res) => {
  const { doctorUsername } = req.body;

  try {

    // Find the doctor using the provided username
    const doctor = await doctors.findOne({ username: doctorUsername });

    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
=======
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
>>>>>>> f599ac2 (reqs done backend)

    if(doctor.appointments.length ===0){
      return res.status(404).send("no appointments for this doctor")
    }
<<<<<<< HEAD
=======
    //console.log("here 5");
>>>>>>> f599ac2 (reqs done backend)

    // Extract available appointments from the doctor's appointments array
    const availableAppointments = doctor.appointments.filter(
      (appointment) => appointment.status === 'available'
    );
<<<<<<< HEAD
=======
    console.log("here 6");
>>>>>>> f599ac2 (reqs done backend)

    res.status(200).json(availableAppointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
<<<<<<< HEAD

const filterAppointments = async (req,res) =>{
  const {  date, status } = req.body;
  try{
    if(appointments.length ===0){
      return res.status(404).send("no appointments for this patient")
    }
    const filteredAppointments = appointments.filter(
      (appointment) => appointment.date === date||appointment.status === status
    );
    res.status(200).json(filteredAppointments);
  }
  catch(error){
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

=======
>>>>>>> f599ac2 (reqs done backend)
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
<<<<<<< HEAD
=======
    
>>>>>>> f599ac2 (reqs done backend)

    // Create a new health record
    const newHealthRecord = {
      doctorUsername,
      recordDate,
      bloodPressure,
      temperature,
      symptoms, 
      description
    };

<<<<<<< HEAD
    patient.healthRecords.push(newHealthRecord);

=======
    // Add the new health record to the patient's health records array
    patient.healthRecords.push(newHealthRecord);

    // Save the updated patient data
>>>>>>> f599ac2 (reqs done backend)
    await patient.save();

    res.status(200).json(newHealthRecord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

<<<<<<< HEAD
const showWallet = async(req,res)=>{
  try{
     res.status(200).json(wallet)}
  catch(error){
     console.error(error);
     res.status(500).json({ error: 'Internal Server Error' });
     }
 }

module.exports = {createdoctor,updatedoc,viewpatients,viewpatient,showWallet,viewAvailableAppointments,
viewAppointments,addHealthRecord,filterAppointments};
=======



async function acceptFollowUpAppointment(req, res) {

  const doctorId = req.params.id;
  const appointmentId = req.body.id;


  try {
      const doctor = await doctors.findById(doctorId);

      if (!doctor) {
          //throw new Error('Doctor not found');
          return res.status(404).json({message : "No doctors found."});
      }

      const appointmentIndex = doctor.followUpAppointments.findIndex(appointment => appointment.id === appointmentId);

      if (appointmentIndex !== -1) {
          doctor.followUpAppointments[appointmentIndex].status = 'accepted';
          await doctor.save();
          return res.status(200).json({
            message : "follow up appointment accepted successfuly",
            followUp : doctor.followUpAppointments[appointmentIndex]
          });
      } else {
          //throw new Error('Appointment not found');
          return res.status(404).json({
            message: "follow up with this ID not found"
          });
      }
  } catch (error) {
      throw new Error('Error accepting follow-up appointment: ' + error.message);
  }
}
async function revokeFollowUpAppointment(req, res) {
  const doctorId = req.params.id;
  const appointmentId = req.body.id;


  try {
      const doctor = await doctors.findById(doctorId);

      if (!doctor) {
          //throw new Error('Doctor not found');
          return res.status(404).json({message : "No doctors found."});
      }

      const appointmentIndex = doctor.followUpAppointments.findIndex(appointment => appointment.id === appointmentId);

      if (appointmentIndex !== -1) {
          doctor.followUpAppointments[appointmentIndex].status = 'revoked';
          await doctor.save();
          return res.status(200).json({
            message : "follow up appointment accepted successfuly",
            followUp : doctor.followUpAppointments[appointmentIndex]
          });
      } else {
          //throw new Error('Appointment not found');
          return res.status(404).json({
            message: "follow up with this ID not found"
          });
      }
  } catch (error) {
      throw new Error('Error accepting follow-up appointment: ' + error.message);
  }
}

module.exports = {
  createdoctor,
  updatedoc,
  viewpatients,
  viewpatient,
 // viewSubscriptionStatus,
  viewAvailableAppointments,
  viewAppointments,
  //addHealthRecord,\
  addHealthRecord,
  revokeFollowUpAppointment,
  acceptFollowUpAppointment
};
>>>>>>> f599ac2 (reqs done backend)



