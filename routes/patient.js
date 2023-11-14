const doctor = require('../model/doctorvariables');
const model =require('../model/patientvariables')
const healthpackage=require("../model/healthpackage")
const stripe=require("stripe")("sk_test_51OAVMvGeO5iUBvxLCELNV3o9D9GvDTflUXdv6Voo0m15g8VKbaGPdpcNw4rMSIFkZ8iwgNiQH0g53uruGILPLAPH00v0J3kmKQ")
const fs=require("fs")
const Patients = require('../model/patientvariables');
const viewSubscriptionStatus = async (req, res) => {
   const { username } = req.query;
 
   try {
     // Find the patient using the provided username
     const patient = await Patients.findOne({ username: username });
 
     if (!patient) {
       return res.status(404).json({ error: 'Patient not found' });
     }
 
     // Extract the subscription status from the patient's data
     const subscriptions = patient.healthPackages;
     if (subscriptions===undefined  || !subscriptions)
      return res.status(404).send("This patient has no subscription");
 
     res.status(200).json({ subscriptions });
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Internal Server Error' });
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
         const familyMemberPatient = await model.findOne({ username: familyMember.familyMember?.name });
 
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
      const {username,doc,time,date}=req.body;
      const appointmentsP= (await model.findOne({username:username})).appointments
         const _did=(await doctor.findOne({username:doc})).id
         
      appointmentsP.push({doctor:_did,time:JSON.stringify(time),date:date})
     await model.updateOne({username:username},{$set:{appointments:appointmentsP}}).exec()
     const appointmentsD= (await doctor.findOne({username:doc})).appointments
         const _pid=(await Patients.findOne({username:username})).id
         
      appointmentsD.push({patient:_pid,time:JSON.stringify(time),date:date})
     await doctor.updateOne({username:doc},{$set:{appointments:appointmentsD}}).exec()
      console.log(appointmentsP)
   res.send(appointmentsP)
   
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


 module.exports={viewSubscriptionStatus,createpatient,addmember,viewfamily,viewdocss,charge,
  remove,medichistory,viewhealthpack,subscribeToPackage,ViewHealthPackages,
  cancelSub,viewslots,addtimes,select,filterMyAppointments,showWallet}

