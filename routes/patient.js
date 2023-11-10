const doctor = require('../model/doctorvariables');
const model =require('../model/patientvariables')
const healthpackage=require("../model/healthpackage")
const stripe=require("stripe")("sk_test_51OAVMvGeO5iUBvxLCELNV3o9D9GvDTflUXdv6Voo0m15g8VKbaGPdpcNw4rMSIFkZ8iwgNiQH0g53uruGILPLAPH00v0J3kmKQ")
const fs=require("fs")

const charge= async (req, res, next) => {
   try {
     const paymentIntent = await stripe.paymentIntents.create({
       amount: 200, // Amount in cents
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
 
 
const medichistory=async(req,res)=>{


   const {username,file}=req.body
   
   const {medicalhistory}= await model.findOne({username:username}).select('medicalhistory -_id').exec()


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
  
 
 module.exports={createpatient,addmember,viewfamily,viewdocss,charge,remove,medichistory}