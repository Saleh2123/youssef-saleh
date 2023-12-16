const doctor = require('../model/doctorvariables');
const model =require('../model/patientvariables')
const Patients = require('../model/patientvariables');
<<<<<<< HEAD

=======
>>>>>>> f599ac2 (reqs done backend)
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
<<<<<<< HEAD
 
 const showWallet = async(req,res)=>{
  try{
     res.status(200).json(wallet)}
  catch(error){
     console.error(error);
     res.status(500).json({ error: 'Internal Server Error' });
     }
 }
=======
 const viewPatientAppointments = async (req, res) => {
  const { patientUsername, status } = req.body;

  try {
    // Find the patient using the provided username
    const patient = await Patients.findOne({ username: patientUsername });

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    
    if (patient.followUpAppointments.length === 0) {
      return res.status(404).send('No appointments for this patient');
    }

    // Filter appointments based on the provided status (upcoming, past, etc.)
    const filteredAppointments = patient.followUpAppointments.filter(
      (appointment) => appointment.scheduledDate === status
    );

    res.status(200).json(filteredAppointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


>>>>>>> f599ac2 (reqs done backend)




const createpatient = async(req,res) => {
<<<<<<< HEAD

 const {username,name,email,password,birth_date,gender,mobile_no,emergencyname,emergencyphone}=req.body;

 var book1 = new model({ name:name,username:username,email:email,password:password,birth_date:birth_date,gender:gender,mobile_no:mobile_no,emergencyname:emergencyname,emergencyphone:emergencyphone});
=======
    //add a new user to the database with 
    //Name, Email and Age
 console.log('here')
 const {username,name,email,followUpAppointments,healthRecords}=req.body;

 var book1 = new model({ name:name,username:username,email:email,followUpAppointments:followUpAppointments,healthRecords:healthRecords});
>>>>>>> f599ac2 (reqs done backend)
  
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
<<<<<<< HEAD

 const viewdocss=async(req,res)=>{
const {username}=req.body;
const {package}=await model.find({username:username})
=======
 const viewdocss=async(req,res)=>{
  const {username}=req.body;
  const {package}=await model.find({username:username})
>>>>>>> f599ac2 (reqs done backend)
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

const cancelSub = async (req,res){
  const {subscriptions} = await model.find({});
  subscriptions.status='canceled';
}

const
 
 module.exports={createpatient,addmember,viewfamily,viewdocss,viewSubscriptionStatus,
  showWallet,filterAppointments,cancelSub}
=======
 const requestfollowup = async (req, res) => {

  const patient = req.params.id;
  const docId = req.body.id;
  const scheduledDate = new Date(req.body.scheduledDate);
  const description = req.body.description;


  try {

    const newFollowUp = {
      scheduledDate :  scheduledDate,
      patient: patient,
      description: description
    }

   
    const doc = await doctor.findById(docId).exec();

    if(!doc){
      return res.status(404).json({message : "no doctor found with this id"});
    }

    if(doc.followUpAppointments){
      doc.followUpAppointments.push(newFollowUp);
    }else{
      doc.followUpAppointments = [newFollowUp];
    }

    await doc.save();

    return res.status(200).json({
      message: "follow up request sent successfuly",
      followUp: newFollowUp
    });
      
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const ReadPrescription = async (req, res) => {
  const id = req.params.id;
  const presId = req.body.id;
  try {

    const pat = await Patients.findById(id).exec();

    if(p.pres && p.pres.length > 0){
      for( const p of pat.pres){
        if(p._id === presId){
          return res.status(200).json(
            {
            message : "Successfully found prescription",
            prescription: p
            }
          )
        }
      }
    }

    return res.status(404).json({message : "no prescription found"});

    
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

 module.exports={requestfollowup, ReadPrescription ,createpatient,addmember,viewfamily,viewdocss,viewSubscriptionStatus, viewPatientAppointments}
>>>>>>> f599ac2 (reqs done backend)
