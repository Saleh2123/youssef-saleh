const model =require('../model/doctorvariables');
const Patients = require('../model/patientvariables');


const createdoctor = async(req,res) => {
    //add a new user to the database with 
    //Name, Email and Age
 
 const {username,name,email,education,affialiation,speciality,rate,date,password}=req.body;
 console.log(req)
 var book1 = new model({ name:name,username:username,email:email,password:password,education:education,affialiation:affialiation,speciality:speciality,rate:rate,date:date});
  
     // save model to database
  await  book1.save();
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
 module.exports={createdoctor,updatedoc,viewpatients,viewpatient}