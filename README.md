# <img src = "FrontEnd\src\—Pngtree—male doctor consults patient online_7693685.png" >

# Title
El72ny clinic

# motivation

The Clinic Management System was born out of a deep commitment to improving healthcare administration and enhancing the overall patient experience. We understand the challenges faced by medical clinics in managing patient records, appointments, and staff workflows efficiently.

# Clinic platform

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

The Clinic Management System is a software application designed to streamline and enhance the operations of a medical clinic. It facilitates efficient management of patient records, appointments, and overall clinic workflow. The only problem is that the buttons found in the patient page may be crowded but we made it like that to make it easier for the user to navigate through.


# Code Style

The application is built in Client/Server architecture, where the server logic is written in the server directory and the client is in the client directory.




## Color Palette

---

The background used for the whole website is this gradient: linear-gradient(to top, #E6E9F0 0%, #EEF1F5 100%)

| Color                                                                             | Hex Code |
| --------------------------------------------------------------------------------- | -------- |
| <img src="https://www.colorhexa.com/100F0F.png" style="height:70px; width:120px"> | #100F0F  |
| <img src="https://www.colorhexa.com/297f87.png" style="height:70px; width:120px"> | #297F87  |
| <img src="https://www.colorhexa.com/9d9d9d.png" style="height:70px; width:120px"> | #9D9D9D  |
| <img src="https://www.colorhexa.com/ffffff.png" style="height:70px; width:120px"> | #FFFFFF  |

---


# Screenshots

### Packages

  <img src = "FrontEnd\src\videochat\public\Packages.png.jpg" style = "width: 100%;">

### Change Passowrd

  <img src = "FrontEnd\src\videochat\public\ChangePas.png" style = "width: 100%;">

### Link family member

  <img src = "FrontEnd\src\videochat\public\Linkfammem.png.jpg" style = "width: 100%;">


### Add family member

  <img src = "FrontEnd\src\videochat\public\Linkfammem.png.jpg" style = "width: 100%;">

### Add Package

  <img src = "FrontEnd\src\videochat\public\Add package.png" style = "width: 100%;">


### Log in

  <img src = "FrontEnd\src\videochat\public\Log In.png" style = "width: 100%;">

### Add Admin

  <img src = "FrontEnd\src\videochat\public\Add admin.png" style = "width: 100%;">

### Edit Package

  <img src = "FrontEnd\src\videochat\public\Edit package.jpg" style = "width: 100%;">

### Time Slots

  <img src = "FrontEnd\src\videochat\public\TimeSlot.png" style = "width: 100%;">

### Cancel Subscribe

  <img src = "FrontEnd\src\videochat\public\CancelSub.png" style = "width: 100%;">


### Subscribe Test

  <img src = "FrontEnd\src\videochat\public\Sub TEst.jpg" style = "width: 100%;">


## Technology/Framework used

Clinic uses a number of open-source projects to work properly:


- [React](https://reactjs.org/) - Front-end
- [mui](https://mui.com/) - UI
- [node.js] - Backend
- [Express] - Backend
- [MongoDB](https://www.mongodb.com/home) - Database
- [mdb]
- [socket-io] 


# Features

- If you are a Admin, you can:
  - login with username and password
  - logout 
  - add another adminstrator with a set username and password
  - remove a doctor/patient / Admin from the system
  - view all of the information uploaded by a doctor to apply to join the platform
  - accept or reject the request of a doctor to join the platform
  - add/update/delete health packages with different price ranges depending on the services included in each package ( silver, gold, platinum).
  - change my password
  - reset a forgotten password through OTP sent to email
  - accept a request for the registration of a doctor
  - 


- If you are a Doctor, you can:
  -  login with username and password.
  -edit and update their email, hourly rate, and affiliation (hospital).
  - See the trending courses.
  -Search for a patient by name.
  - filter patients based on upcoming appointments.
  - initiate and conclude video calls with patients.
  - schedule follow-up sessions for patients.
  - add/delete medicines and update dosages for prescriptions.
  - Report any issues.
  - reschedule, cancel, or view upcoming/past appointments.
  - change my password
  -  reset a forgotten password through OTP sent to email
  - edit/ update my email, hourly rate or affiliation (hospital)
  - view and accept the employment contract
  - add my available time slots for appointments
  - filter appointments by date/status
  - view uploaded health records 
  - view information and health records of patient registered with me
  - view all new and old prescriptions and their statuses (filled/ not filled)
  - view a list of all my patients
  - search for a patient by name
  - filter patients based on upcoming appointments
  - select a patient from the list of patients
  - receive a notification of my appointment on the system and by mail 
  - view a list of all my upcoming / past appointments
  - filter appointments by date or status (upcoming, completed, cancelled, rescheduled)
  - reschedule an appointment for a patient
  - cancel an appointment for myself or for a family member
  - receive a notification that my appointment is cancelled or rescheduled on the system and by mail 
  - schedule a follow-up for a patient
  - add/delete medicine to/from the prescription from the pharmacy platform
  - add/update dosage for each medicine added to the prescription
  - download selected prescription (PDF) 
  - add new health records for a patient
  - start/end a video call with the doctor/ patient
  - add a patient's prescription
  - update a patient's prescription before it is submitted to the pharmacy
  - accept or revoke a follow-up session request from a patient
  - view the amount in my wallet
  - chat with a doctor/patient






- If you are an Patient, you can:
  - register as patients using various personal information, including name, email, password, date of birth, etc.
  - upload/remove documents (PDF, JPEG, JPG, PNG) for their medical history.
  - login with username and password
  - logout 
  - change my password
  -  reset a forgotten password through OTP sent to email
  - add family members using name, National ID, age, gender and relation to the patient 
  - link another patient's account as a family member using email or phone number stating relation to the patient
  - choose to pay for my appointment using my wallet or credit card
  - enter credit card details and pay for an appointment using Stripe
  - view registered family members
  - filter appointments by date/status
  - view uploaded health records 
  - view all new and old prescriptions and their statuses (filled/ not filled)
  - view health package options and details
  - subscribe to a health package for myself and my family members (if any)
  - choose to pay for the chosen health package using wallet or credit card 
  - view subscribed health package  for myself and my family members (if any)
  - View the status of my health care package subscription (subscribed with renewal date/ unsubscribed/ cancelled with end date)  for myself and my family members (if any)
  - cancel a subscription of a health package  for myself and my family members (if any)
  - view a list of all doctors along with their speciality, session price (based on subscribed health package if any)
  - search for a doctor by name and/or speciality 
  - filter  a doctor by speciality and/or availability on a certain date and at a specific time
  - select a doctor from the search/filter results 
  - view all details of selected doctor including specilaty, affiliation (hospital), educational background 
  - view all available appointments of a selected doctor
  - select an appointment date and time for myself or for a family member
  - receive a notification of my appointment on the system and by mail 
  - view a list of all my upcoming / past appointments
  - filter appointments by date or status (upcoming, completed, cancelled, rescheduled)
  - reschedule an appointment for myself or for a family member
  - cancel an appointment for myself or for a family member
  - receive a notification that my appointment is cancelled or rescheduled on the system and by mail 
  - view a list of all my perscriptions
  - filter prescriptions based on date or doctor or filled or unfilled
  - select a prescription from my list of perscriptions
  - view the details of my selected prescription
  - choose to pay directly pay for the prescription items wallet or credit card
  - download selected prescription (PDF) 
  - start/end a video call with the doctor/ patient
  - request a follow-up to a previous appointment for myself or a family member
  - receive a refund in my wallet when a doctor cancels and appointment
  - view the amount in my wallet
  

- If you are a guest, you can:
  - register as a patient using username, name, email, password, date of birth, gender, mobile number, emergency contact ( full name , mobile number)
  - submit a request to register as doctor using username, name, email, password, date of birth, hourly rate, affiliation (hospital), educational background
  - upload and submit required documents upon registrationas a doctor such as ID, Medical licenses and medical degree 
  - 
- if you are a family member, you can:
  -  view wallet balances, pay for appointments, prescriptions, or health packages using credit cards or wallet funds.
  -subscribe to health packages, view details, and manage subscriptions.
  - view, reschedule, cancel, or filter appointments by date or status.
  - view and pay for prescriptions, download prescription details, and manage medications.
  - request follow-up appointments, and doctors can accept or revoke these requests.
  - receive wallet refunds if a doctor cancels an appointment.
  - engage in secure chat sessions with their doctors.

# code examples

Backend:
const acceptpatient = async (req,res)=>{
  const {username,doc,date} = req.body
  try{
    const patient = await Patients.findOne({username:username})
    if(!patient){
      return res.status(404).json({ error: 'Patient not found' });
    }
    const doctor1 = await model.findOne({username:doc})
    if(!doctor1){
      return res.status(404).json({ error: 'Doctor not found' });
    }
    const _did=(await model.findOne({username:doc})).id
    const _pid=(await Patients.findOne({username:username})).id
    const appointmentsP = patient.appointments || []
    const appointmentsD = doctor1.appointments || []
    const indexP = appointmentsP.findIndex((obj => (obj.time===date)&&(obj.doctor.toString()===_did))) 
    const indexD = appointmentsD.findIndex((obj => (obj.time===date)&&(obj.patient.toString()===_pid))) 
    if((indexP=== -1)||(indexD===-1)){
      return res.status(404).json({ error: 'Appointment not found' });
    }
    console.log(appointmentsP)
    if((appointmentsP[indexP].status==='canceled')&&(appointmentsD[indexD].status==='canceled')){
      return res.status(404).json({ error: 'Appointment already canceled' });
    }
    appointmentsP[indexP].status='Accepted'
    appointmentsD[indexD].status='Accepted'
    doctor1.save()
    patient.save()
    const emailP = (await Patients.findOne({username:username})).email
     const emailD = (await model.findOne({username:doc})).email
    transporter.sendMail({
      from: 'omarrrrr240@gmail.com', // sender address
      to: `${emailP}, ${emailD}`,// list of receivers
      subject: "Appointment confirmed", // Subject line
      text: "", // plain text body
      html: `<b> Appointment confirmed </b>`, // html body
    }); 
    res.status(200)
  }
  catch(error){
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

Frontend:

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MenuItem, Select, TextField, Button, Container, Box } from "@mui/material";

export default function ResApt() {
  const [form, setForm] = useState({});
  const [doctors, setDoctor] = useState([]);
  
const {id}=useParams()
  useEffect(() => {
    async function getapt() {
        setDoctor((await axios.get(`http://localhost:5000/doctorapt?username=${id}`)).data);
    }
    getapt();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  console.log(doctors)
  const filteredDoctors = Array.isArray(doctors.appointments)
    ? doctors.appointments.filter((item, index, arr) => arr.findIndex((i) => i.doctor._id === item.doctor._id) === index)
    : [];


  const handleClick = async (e) => {
    e.preventDefault();
console.log(form)
    if (!form.doctor || !form.old || !form.start || !form.hour) {
      alert("Enter the full details");
      return;
    }
    

    await axios.post("http://localhost:5000/rescheduleApp", {
      doc: id,
      username: form.doctor,
      oldDate: form.old,
      time: form.hour,
      date: form.start
    });
    alert("Done");
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Select
          onChange={(e)=>{form.doctor=e.target.value.doctor.username;form.old=e.target.value.time}}
          displayEmpty
          fullWidth
          label="Doctor"
        >
          {doctors?.map(({ patient:doctor,time }) => (
            <MenuItem   onSelect={()=>{form.old=JSON.parse(time).data}} key={doctor._id} value={{doctor,time}}>
              {doctor.username}---{time}
            </MenuItem>
          ))}
        </Select>

        <TextField
          required
          onChange={handleChange}
          id="start"
          type="date"
          name="start"
          label="Date"
          fullWidth
          margin="normal"
        />

        <TextField
          required
          onChange={handleChange}
          id="hour"
          type="time"
          name="hour"
          label="Hour"
          fullWidth
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          fullWidth
          sx={{ mt: 2 }}
        >
          Reschedule
        </Button>
      </Box>
    </Container>
  );
}

## Installation & Running

Install the dependencies and start the server.

sh
cd TOPP-CLINIC

npm start

cd frontend
npm i
npm start

# API Refrences 

app.delete("/deleteruser",deleteuser)
app.post("/createpatient",createpatient)
app.post("/createdoctor",createdoctor)
app.post("/createadmin",createadmin)
app.put("/docedit",updatedoc)
app.post("/addmember",addmember)
app.get("/family",viewfamily)
app.get("/patientapt",viewapt)

app.get("/doctorapt",viewdocapt)
app.get("/pres",viewpres)
app.post("/requestfollowup",requestfollowup)
app.post("/acceptFollowUpAppointment",acceptFollowUpAppointment)
app.post("/revokeFollowUpAppointment",revokeFollowUpAppointment)
//app.get("/viewpatients",viewpatients)
app.get("/alldocs",viewdocss)
app.post("/login",login)
app.get("/viewSubscriptionStatus",viewSubscriptionStatus)
app.patch("/addHealthRecord",addHealthRecord);
app.post('/addapt',addapt);
app.post('/addtimeslot',addtimeslot);

app.get('/viewAppointments', viewAppointments);
app.get('/viewAvailableAppointments', viewAvailableAppointments);
app.get('/viewSubscriptionStatus', viewSubscriptionStatus);
app.get('/viewslots',viewslots);

app.get('/showWallet',showWallet);
app.get('/showDoctorWallet',showDoctorWallet);
app.get('/filterMyAppointments',filterMyAppointments);
app.get('/filterDoctorAppointments',filterDoctorAppointments)
app.post('/addPrescription',addPrescription)
app.get('/viewPrescriptions',viewPrescriptions)
app.get('/viewDoctorPrescriptions',viewDoctorPrescriptions)
app.post('/rescheduleApp',rescheduleApp)
app.post('/cancelApp',cancelApp)
app.patch('/cancelPatientApp',cancelPatientApp)

//app.get('/viewAppointments', viewAppointments);


app.get("/viewdoctors",docreqs)
app.delete('/deletepack',deletepack)
app.post('/addpack',addpack)
app.post('/updatepack',updatepack)
app.get('/file', (req, res) )
app.post('/upload', (req, res))

app.post("/contract",getcontract)
app.post("/charge",charge)
app.post("/updatepass",updatepass)
app.post("/reject",rejdoc)
app.post("/accept",acceptdoc)
app.post("/remove",remove)
app.post("/his",medichistory)
app.post("/acceptContract",acceptContract)

app.post('/upload2', (req, res))
app.get("/hp",viewhealthpack)
app.post("/otp",async(req,res)=>{})
app.post("/checkotp",async (req,res)=>{
    const t=req.body.token.toString();})

app.post("/subscribe", subscribeToPackage)
app.get("/ViewSubscriptionStatus",ViewHealthPackages)
app.get("/cancelsub",cancelSub)
app.post("/addav",addtimes)
app.post("/viewslots",viewslots)
app.post("/select",select)

app.post("/link",link)
app.post("/acceptapt",acceptpatient)

app.get('/users',async (req,res)=>{})


# Tests 








# How to use 

When the website runs you will find a login page where you will put your credentials based on if you are an admin or a doctor or a patient. if you log in as a patient you will find  buttons related to the patient where when u press on them you will find yourself in another page related to that button and if you want to return to home button you will find a nav bar above where you just press on it to return to the home page the same goes for the doctor page and the admin page

# Credits

This project is delivered by a group of 3 Engineering students at the German University in Cairo:

- [omar hazem](https://github.com/omarikas)
- [seif el hariry](https://github.com/seifelhariry)
- [youssef salef](https://github.com/saleh2123)
- [yehia el sebaei](https://github.com/Y-sebaei)
- [ahmed abdelatty](https://github.com/Ahmedabdulatti)
- [ahmed hasabalah](
hassaballah17)


with the help of all the amazing and supportive TAs and the great professor Dr. Mervat Abu-ElKheir.

We used YouTube videos:
-https://www.youtube.com/watch?v=xAqCEBFGdYk
- https://www.youtube.com/watch?v=98BzS5Oz5E4.Isjedcf


# Contribute

The project is not perfect as the ui is not eye-catching and basic. It can be modified later to be more hard codes and user friendly.
If you want to contribute to this project, email us at (omarrrrhazem@gmail.com). And if you have suggestions don't hesitate to open an issue about it.


# License

This application is licensed under [Stripe] Licenses.

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format it nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[node.js]: http://nodejs.org
[express]: http://expressjs.com
