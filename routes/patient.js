const doctor = require('../model/doctorvariables');
const model =require('../model/patientvariables')
const Patients = require('../model/patientvariables');
const viewSubscriptionStatus = async (req, res) => {
   const { patientUsername } = req.body;
 
   try {
     // Find the patient using the provided username
     const patient = await Patients.findOne({ username: patientUsername });
 
     if (!patient) {
       return res.status(404).json({ error: 'Patient not found' });
     }
 
     // Extract the subscription status from the patient's data
     const subscriptions = patient.subscriptions;
     if (subscriptions===undefined  || !subscriptions)
      return res.status(404).send("This patient has no subscription");
 
     res.status(200).json({ subscriptions });
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 };
 





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
  
 
 module.exports={createpatient,addmember,viewfamily,viewdocss,viewSubscriptionStatus}
