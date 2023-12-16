const model =require('../model/adminvariables');
const doctor = require('../model/doctorvariables');
const Patients = require('../model/patientvariables');

const packages = require('../model/healthpackage');


const acceptdoc =async (req,res)=>{


  const{username}=req.body;
 await  doctor.updateOne({username:username},{$set:{status:"accepted"}})
 res.send("done")
}




const rejdoc =async (req,res)=>{


  const{username}=req.body;
 await doctor.updateOne({username:username},{$set:{status:"rejected"}})
 res.send("done")
}














const createadmin = async(req,res) => {
    //add a new user to the database with 
    //Name, Email and Age
 
 const {username,email,password}=req.body;
 console.log(req)
 var book1 = new model({ username:username,email:email,password:password});
  
     // save model to database
   await book1.save();
 }

 const updatepass= async(req,res)=>{

  const {username,password}=req.body;

  await model.find({username: username}).updateOne({password:password});
  
  
  
  await Patients.find({username: username}).updateOne({password:password});
  
  await doctor.find({username: username}).updateOne({password:password});
  
    
    
  res.send('done');


 }
 const deleteuser= async(req,res)=>{
    console.log(req)
const {username}=req.query;

await model.findOneAndDelete({username: username});



 await
  Patients.findOneAndDelete({username: username},
  );

  await doctor.findOneAndDelete({username: username});

  
  
res.send('done');

 }

 const docreqs= async(req,res)=>{
    res.send( await doctor.find({status:"pending"}))
 }

 
const updatepack = async (req, res) => {
    const {name,price}=req.body;
   
  await packages.updateOne({name:name},{$set:{price:price}}).exec()

 res.send('done');
   }

   const addpack = async (req, res) => {
    const {name,price}=req.body;
    var book1 = new packages({ name:name,price:price});
  
    // save model to database
  await book1.save();
 res.send('done');
   }
   
 const deletepack= async(req,res)=>{
    const {name}=req.query;
    await packages.findOneAndDelete({name:name})
    console.log(req)
    res.send('done')
    await packages.findByIdAndDelete({name:name})

 }   
 
  
 const viewapt= async(req,res)=>{
  
  const {username}=req.query
  const appointments= await Patients.findOne({username:username}).populate('appointments.doctor')
  console.log(appointments)
res.send(appointments)
}   


const viewdocapt= async(req,res)=>{
  
  const {username}=req.query
  try{
  const {appointments}= await doctor.findOne({username:username}).populate('appointments.patient')
  console.log(appointments)
res.send(appointments)
  }catch(err){
    res.send([])
  }
}   
const viewpres= async(req,res)=>{
  
  const {username}=req.query
  const {pres}= await Patients.findOne({username:username}).select('pres -_id').exec()
 console.log(pres)
res.send(pres)
}  




 
 

 module.exports={createadmin,deleteuser,docreqs,viewapt,viewpres,viewdocapt,deletepack,addpack,updatepack,updatepass,acceptdoc,rejdoc}



