const doctor = require('../model/doctorvariables');
const model =require('../model/patientvariables')
const healthpackage=require("../model/healthpackage")
const stripe=require("stripe")("sk_test_51OAVMvGeO5iUBvxLCELNV3o9D9GvDTflUXdv6Voo0m15g8VKbaGPdpcNw4rMSIFkZ8iwgNiQH0g53uruGILPLAPH00v0J3kmKQ")
const fs=require("fs")
const Patients = require('../model/patientvariables');
const nodemailer =require("nodemailer")

const transporter = nodemailer.createTransport({ 
  service: 'gmail', 
  auth: { 
    user: "sarageita74@gmail.com", 
    pass: "yayvemblnwtvuwsb"
  } 
  });

const viewSubscriptionStatus = async (req, res) => {
  try {
    const { username } = req.query;
    const patient = await model.findOne({ username });
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    const patientStatus = {
      name: patient.healthPackages.name,
      status: patient.healthPackages.status,
      start_date: patient.healthPackages.start_date,
      renewal_date: patient.healthPackages.renewal_date,
      end_date: patient.healthPackages.end_date,
    };
    const familyMembersStatus = [];
    if (patient.familymem && patient.familymem.length > 0) {
      for (const familyMember of patient.familymem) {
        const familyMemberPatient = await model.findOne({ username: familyMember.familymem?.username });
        if (familyMemberPatient) {
          if (familyMemberPatient.healthPackages) {
              const subscriptionStatus = {
              name: familyMemberPatient.healthPackages.name,
              status: familyMemberPatient.healthPackages.status,
              start_date: familyMemberPatient.healthPackages.start_date,
              renewal_date: familyMemberPatient.healthPackages.renewal_date,
              end_date: familyMemberPatient.healthPackages.end_date,
            };
            familyMembersStatus.push(subscriptionStatus);
          }
        }
      }
    }

    res.status(200).json({ patientStatus, familyMembersStatus });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



const addtimes= async (req,res)=>{
   const {username,time}=req.body;
   const {timeslots}=await doctor.findOne({username:username})
 timeslots.push(time)
  await doctor.updateOne({username:username},{$set:{timeslots:timeslots}}).exec()
   
 res.send('done')
 
 }
 
const charge= async (req, res, next) => {
   const price= (await healthpackage.findOne({name:req.body.pack})).price
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: price, // Amount in cents
        currency: "gbp",
        payment_method_types: ["card"],
        receipt_email: "hadeklte@gmail.com",
      });
  console.log(paymentIntent)
      // Send the payment intent back to the client
      res.json(paymentIntent);
    } catch (err) {
      console.log(err, "failed to charge");
      res.status(500).send(err);
    }
  }
 
const subscribeToPackage = async (req, res) => {
   try {
     const { username, packageId } = req.body;
 
     // Find the patient by username
     const patient = await model.findOne({ username });
 
     if (!patient) {
       return res.status(404).json({ message: 'Patient not found' });
     }
 
     // Find the health package by packageId
     const healthPackage = await healthpackage.findOne({name:packageId})
 
     if (!healthPackage) {
       return res.status(404).json({ message: 'Health package not found' });
     }
 
     // Update the patient's healthPackages field
     patient.healthPackages = {
       name: healthPackage.name,
       status: 'Subscribed',
       start_date: new Date(),
       renewal_date: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
       
     };
     // Update the family members' healthPackages (if any)
     if (patient.familymem && patient.familymem.length > 0) {
       for (const familyMember of patient.familymem) {
         const familyMemberPatient = await model.findOne({ username: familyMember.familymem?.username });
 
         if (familyMemberPatient) {
           familyMemberPatient.healthPackages = {
             name: healthPackage.name,
             status: 'Subscribed',
             start_date: new Date(),
             renewal_date: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
           };
 
           await familyMemberPatient.save();
         }
       }
     }
 
     // Save changes to the patient
    await patient.save();
 
     res.status(200).json({ message: 'Health package subscribed successfully' });
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: 'Internal server error' });
   }
 };
const medichistory=async(req,res)=>{


   const {username,file}=req.body
   
   const {medicalhistory}= await model.findOne({username:username}).select('medicalhistory -_id').exec()

console.log(medicalhistory)
res.send(medicalhistory)



}
 
const remove=async(req,res)=>{


const {username,file}=req.body

const {medicalhistory}= await model.findOne({username:username}).select('medicalhistory -_id').exec()
   
medicalhistory.splice(medicalhistory.findIndex((d)=>file==d),1)
console.log(medicalhistory)
await model.findOneAndUpdate({username:username,$set:{medicalhistory:medicalhistory}})
fs.unlinkSync(file)

res.send("sdone");
}
const viewhealthpack=async(req,res)=>{
res.send(await healthpackage.find());
}
const createpatient = async(req,res) => {
    //add a new user to the database with 
    //Name, Email and Age
 console.log('here')
 const {username,name,email,password,birth_date,gender,mobile_no,emergencyname,emergencyphone}=req.body;

 var book1 = new model({ name:name,username:username,email:email,password:password,birth_date:birth_date,gender:gender,mobile_no:mobile_no,emergencyname:emergencyname,emergencyphone:emergencyphone});
  
     // save model to database
   await book1.save();
   res.send("done")
 };
 
const addmember = async (req, res) => {
    const {username,familymem1}=req.body;
   const {familymem}= await model.findOne({username:username}).select('familymem -_id').exec()
   familymem.push(familymem1)
  await model.updateOne({username:username},{$set:{familymem:familymem}}).exec()
   
res.send(familymem)
   }
 
   
const viewfamily= async (req, res) => {
    const {username,familymem1}=req.query
   const {familymem}= await model.findOne({username:username}).select('familymem -_id').exec()
   
res.send(familymem)
   }
 const viewdocss=async(req,res)=>{
const {username}=req.body;
const {package}=await model.find({username:username})
  const docs= await doctor.find()
  docs.forEach(({price}) => {
   var disc=1
   if(package==="silver"){
      disc=0.6
   }

   if(package==="gold"){
      disc=0.4
   }

   if(package==="platinum"){
      disc=0.2
   }
   price=(price+price*0.1)*disc;
   
  });
  res.json(docs)
 }
  

 const cancelSub = async (req, res) => {
   try {
     const { username } = req.query;
 
     // Find the patient by username
     const patient = await model.findOne({ username });
 
     if (!patient) {
       return res.status(404).json({ message: 'Patient not found' });
     }
 
     // Find the health package by packageId
     if (patient.healthPackages) {
       patient.healthPackages.end_date=new Date(),
       patient.healthPackages.status = 'Cancelled';
       await patient.save();
     }
 
     // Cancel the subscription for family members (if any)
     if (patient.familymem && patient.familymem.length > 0) {
       for (const familyMember of patient.familymem) {
         const familyMemberPatient = await model.findOne({ username: familyMember.familymem?.username });
 
         if (familyMemberPatient) {
          
           patient.healthPackages.end_date=new Date(),
           familyMemberPatient.healthPackages.status = 'Cancelled';
           await familyMemberPatient.save();
         }
       }
     }
 
     return res.status(200).json({ message: 'Health package subscription cancelled successfully' });
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: 'Cancellation error' });
   }
 };
 
const ViewHealthPackages = async (req,res) =>{
   const username = req.query;
   const usernameString = (typeof username === 'string') ? username : username.username;
   try{

  
      const patient = await model.findOne({username : usernameString}).select('healthPackages')
      //console.log('Received username:', username);
      
      console.log(usernameString)
      if(!patient){
         return res.status(404).json({message:'Patient not found'});
      }
      
      res.json({ patientHealthPackages:patient.healthPackages });
   }
   catch(error){
      res.status(500).json({message:'error retrieving health packages', error:error.message})
   }
}

const viewslots =async(req,res)=>{
   res.send((await doctor.find({username:req.body.username}).select("timeslots")))
    
   }
 

const select= async(req,res)=>{
      var {username,doc,time,date}=req.body;
      time={...time,date}
    try{
      console.log(req.body)
      const _did=(await doctor.findOne({username:doc})).id
      const _pid=(await Patients.findOne({username:username})).id
      if(!_pid){
        return res.status(404).json({ error: 'Patient not found' });
     }
     if(!_did){
      return res.status(404).json({ error: 'Doctor not found' });
     }

      const appointmentsP= (await model.findOne({username:username})).appointments
      appointmentsP.push({doctor:_did,time:JSON.stringify(time)})
     await model.updateOne({username:username},{$set:{appointments:appointmentsP}}).exec()

     const appointmentsD= (await doctor.findOne({username:doc})).appointments
      appointmentsD.push({patient:_pid,time:JSON.stringify(time)})
     await doctor.updateOne({username:doc},{$set:{appointments:appointmentsD}}).exec()

     const emailP = (await model.findOne({username:username})).email
     const emailD = (await doctor.findOne({username:doc})).email
    transporter.sendMail({
      from: 'omarrrrr240@gmail.com', // sender address
      to: `${emailP}, ${emailD}`,// list of receivers
      subject: "Appointment Reserved", // Subject line
      text:"" , // plain text body
      html: `<b> Appointment reserved </b>`, // html body
    });
      console.log(appointmentsP)
      res.send(appointmentsP)
  }
  catch(error){
    console.error(error)
    res.status(500).json({ error: error });
  }
}
 
const filterMyAppointments = async (req,res)=>{
  const {username,date,status}=req.query;
  try {
    const patient = await Patients.findOne({ username: username });

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    if(patient.appointments.length ===0){
      return res.status(404).send("no appointments for this patient")
    }
    // Filter appointments based on the provided status (upcoming, completed, canceled, rescheduled.)
    const filteredAppointments = patient.appointments.filter(
      (appointment) => appointment.status === status||appointment.date === date
    );

    res.status(200).json(filteredAppointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const showWallet = async (req,res)=>{
  const{username}=req.query;
  try{
    const patient = await Patients.findOne({username:username})
    if(!patient){
      return res.status(404).json({ error: 'Patient not found' });
    }
    const wallet = patient.wallet;
    res.json(wallet)
  }
  catch(error){
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const viewPrescriptions = async (req,res)=>{
   const {username} = req.query;
   try{
    const pres = await Patients.findOne({username:username}).select('prescriptions -_id').exec()
    if(!pres){
      return res.status(404).json({ error: 'Patient has no prescriptions' });
    }
    console.log(pres);
   res.json(pres);
   }
   catch(error){
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
   }
}


const rescheduleApp = async (req,res)=>{
   const {username,doc,oldDate,date,time} = req.body
   try{
    const patient = await Patients.findOne({username:username});
    if(!patient){
      return res.status(404).json({ error: 'Patient not found' });
    }
    const doctor1 = await doctor.findOne({username:doc})
    if(!doctor1){
      return res.status(404).json({ error: 'Doctor not found' });
    }
    const _did=(await doctor.findOne({username:doc})).id
    const _pid=(await Patients.findOne({username:username})).id
    const appointmentsP = (await Patients.findOne({username:username})).select('appointments -_id').exec() || []
    const appointmentsD = doctor1.appointments || []
    const indexP = appointmentsP.findIndex((obj => (obj.date===oldDate)&&(obj.doctor===_did))) 
    const indexD = appointmentsD.findIndex((obj => (obj.date===oldDate)&&(obj.patient===_pid))) 
    if((indexP=== -1)&&(indexD===-1)){
      return res.status(404).json({ error: 'Appointment not found' });
    }
    appointmentsP[indexP].date=date
    appointmentsP[indexP].time=time
    appointmentsP[indexP].status='rescheduled'
    appointmentsD[indexD].date=date
    appointmentsD[indexD].time=time
    appointmentsD[indexD].status='rescheduled'

    const emailP = (await model.findOne({username:username})).email
     const emailD = (await doctor.findOne({username:doc})).email
    transporter.sendMail({
      from: 'omarrrrr240@gmail.com', // sender address
      to: `${emailP}, ${emailD}`,// list of receivers
      subject: "Appointment Rescheduled", // Subject line
      text: "", // plain text body
      html: `<b> Appointment Rescheduled </b>`, // html body
    });

  }
  catch(error){
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
   }
}

const cancelApp = async (req,res)=>{
  const {username,doc,date} = req.body
  try{
    const patient = await Patients.findOne({username:username})
    if(!patient){
      return res.status(404).json({ error: 'Patient not found' });
    }
    const doctor1 = await doctor.findOne({username:doc})
    if(!doctor1){
      return res.status(404).json({ error: 'Doctor not found' });
    }
    const _did=(await doctor.findOne({username:doc})).id
    const _pid=(await Patients.findOne({username:username})).id
    const appointmentsP = patient.appointments || []
    const appointmentsD = doctor1.appointments || []
    const indexP = appointmentsP.findIndex((obj => (obj.date===date)&&(obj.doctor===_did))) 
    const indexD = appointmentsD.findIndex((obj => (obj.date===date)&&(obj.patient===_pid))) 
    if((indexP!== -1)||(indexD!==-1)){
      return res.status(404).json({ error: 'Appointment not found' });
    }
    if((appointmentsP[indexP].status==='canceled')&&(appointmentsD[indexD].status==='canceled')){
      return res.status(404).json({ error: 'Appointment already canceled' });
    }
    appointmentsP[indexP].status='canceled'
    appointmentsD[indexD].status='canceled'
    
    const emailP = (await model.findOne({username:username})).email
     const emailD = (await doctor.findOne({username:doc})).email
    transporter.sendMail({
      from: 'omarrrrr240@gmail.com', // sender address
      to: `${emailP}, ${emailD}`,// list of receivers
      subject: "Appointment Canceled", // Subject line
      text: "", // plain text body
      html: `<b> Appointment Canceled </b>`, // html body
    });
    if ((new Date(appointmentsD[indexD].date) - Date.now()) / (1000 * 60 * 60) > 24) {
      patient.wallet += doctor1.price;
    }
  }
  catch(error){
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

 module.exports={viewSubscriptionStatus,createpatient,addmember,viewfamily,viewdocss,charge,
  remove,medichistory,viewhealthpack,subscribeToPackage,ViewHealthPackages,
  cancelSub,viewslots,addtimes,select,filterMyAppointments,showWallet,viewPrescriptions,rescheduleApp,
  cancelApp}

