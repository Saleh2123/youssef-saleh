const express= require('express')
const jwt = require('jsonwebtoken');
const mongoose=require('mongoose')
const {createpatient, addmember, viewfamily, viewdocss, charge, remove, medichistory, viewhealthpack, subscribeToPackage, ViewHealthPackages, cancelSub, addtimes, viewslots, select, viewSubscriptionStatus, showWallet, filterMyAppointments, viewPrescriptions, rescheduleApp, cancelApp}= require('./routes/patient')
const { createdoctor, updatedoc, viewpatients, viewpatient, addHealthRecord, viewAvailableAppointments, viewAppointments, showDoctorWallet, filterDoctorAppointments, addapt, addtimeslot, addPrescription, viewDoctorPrescriptions, cancelPatientApp, acceptpatient } = require('./routes/doctors')
const { deleteuser, docreqs, createadmin, viewapt, viewpres, viewdocapt, deletepack, addpack, updatepack, updatepass, rejdoc, acceptdoc } = require('./routes/admin')
require ('dotenv').config()
const app = express()
const cors = require('cors');
const admin =require('./model/adminvariables');
const doctor = require('./model/doctorvariables');
const Patients = require('./model/patientvariables');
const formidable = require("formidable")
const fs=require("fs")
const path=require('path');
const rooms=require("./model/message")
const socketIo = require('socket.io');
app.use(express.json())
app.use(cors())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
  app.use(cors())
const server = app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
const io = socketIo(server);

// Handle socket connections
io.on('connection', (socket) => {
console.log('User connected:', socket.id);

// Join a room
socket.on('joinRoom', async (room) => {
if(( await rooms.findOne({patient:room.split("-")[1],doctor:room.split("-")[0]}))){
  io.to(room).emit("message",( await rooms.findOne({patient:room.split("-")[1],doctor:room.split("-")[0]}))?.messages)
}else{
  rooms.create({patient:room.split("-")[1],doctor:room.split("-")[0]})
}
  socket.join(room);
});

// Handle chat messages
socket.on('message',async (data) => {
  // Broadcast the message to everyone in the room

 var temp=[]

  console.log(data)
  temp=( await rooms.findOne({patient:data.room.split("-")[1],doctor:data.room.split("-")[0]}))?.messages
  try{
  temp.push({message:data.message,id:data.id});
await   rooms.updateOne({patient:data.room.split("-")[1],doctor:data.room.split("-")[0]},{$set:{messages:temp}})

io.to(data.room).emit('message', temp);
  }catch(err){
    console.log(err)
    
await   rooms.updateOne({patient:data.room.split("-")[1],doctor:data.room.split("-")[0]},{$set:{messages:[data]}})

io.to(data.room).emit('message', temp);
  }
});

// Handle user disconnection
socket.on('disconnect', () => {
  socket.disconnect();
  console.log('User disconnected:', socket.id);
});
});

})
.catch((error)=>{
    console.log(error)
})
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  }
  
async function login(req,res){
const {username,password}=req.body;

const user={username:username,password:password}

if(await (admin.findOne({username:username,password:password}))){
    jwt.sign({ user }, 'secretkey', { expiresIn: '30s' }, (err, token) => {
        res.json({
          token,role:"admin"
        });
      });



      
    }


else if((await Patients.findOne({username:username,password:password}))){
    jwt.sign({ user }, 'secretkey', { expiresIn: '30s' }, (err, token) => {
        res.json({
          token,role:"patient"
        });
      });




}
else if((await doctor.findOne({username:username,password:password,status:'pending'}))){
  res.json({role:'pending'})
  return;

}
else if((await doctor.findOne({username:username,password:password,status:'rejected'}))){
  res.json({role:'rejected'})
  return;

}
else if((await doctor.findOne({username:username,password:password}))){
    jwt.sign({ user }, 'secretkey', { expiresIn: '30s' }, (err, token) => {
        res.json({
          token,role:"doctor"
        });
      });




}else{


    res.json({role:"none"})
}

}


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
app.patch('/rescheduleApp',rescheduleApp)
app.patch('/cancelApp',cancelApp)
app.patch('/cancelPatientApp',cancelPatientApp)

//app.get('/viewAppointments', viewAppointments);


app.get("/viewdoctors",docreqs)
app.delete('/deletepack',deletepack)
app.post('/addpack',addpack)
app.post('/updatepack',updatepack)
app.get('/file', (req, res) => {
  
const{ file}=req.query
  res.sendFile(path.join(__dirname, file));


  });
  app.post('/upload', (req, res) => {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error('Error parsing form:', err);
            return;
        }
// Handle the uploaded file here
console.log(fields)

        const { originalFilename, filepath } = files.file[0]
        // Save the file using fs.writeFileSync
        fs.writeFileSync(originalFilename, fs.readFileSync(filepath));

        const {title}=fields;
        const {medicalhistory}= await Patients.findOne({username:title[0]}).select('medicalhistory -_id').exec()
        medicalhistory.push(originalFilename)
       await Patients.updateOne({username:title[0]},{$set:{medicalhistory:medicalhistory}}).exec()
        

res.send('File saved successfully!');
    });
});

const acceptContract = async(req, res)=>{
  const {username}=req.body;
  await doctor.findOneAndUpdate({username:username},{$set:{contract:{status:"Accepted"}}})
  res.status(200).send("contract accepted");
}


const getcontract= async (req,res)=>{
  const {username,time}=req.body;
  const {contract}=await doctor.findOne({username:username})

  
res.json(contract)

}
app.post("/contract",getcontract)
app.post("/charge",charge)
app.post("/updatepass",updatepass)
app.post("/reject",rejdoc)
app.post("/accept",acceptdoc)
app.post("/remove",remove)
app.post("/his",medichistory)
app.post("/acceptContract",acceptContract)




app.post('/upload2', (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
      if (err) {
          console.error('Error parsing form:', err);
          return;
      }
// Handle the uploaded file here
var dets=[]
for(var i=1;i<=3;i++){
      const { originalFilename, filepath } = files[`file${i}`][0]
      // Save the file using fs.writeFileSync
      fs.writeFileSync(originalFilename, fs.readFileSync(filepath));
      dets.push(originalFilename)
}
      const {title}=fields;
      console.log(fields)
     await doctor.updateOne({username:fields["/title"][0]},{$set:{dets:dets}}).exec()
      

res.send('File saved successfully!');
  });
});



app.get("/hp",viewhealthpack)

    
function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const notp=require("notp")
const nodemailer =require("nodemailer");
const { Console } = require('console');
const transporter = nodemailer.createTransport({ 
  service: 'gmail', 
  auth: { 
    user: "sarageita74@gmail.com", 
    pass: "yayvemblnwtvuwsb"
  } 
  });

app.post("/otp",async(req,res)=>{   
  const {email}=req.body;
  
  const secret =makeid(16)
 const  token = notp.totp.gen(secret,{time:30,window:1})
 const info = await transporter.sendMail({
  from: 'omarrrrr240@gmail.com', // sender address
  to: email ,// list of receivers
  subject: "otp", // Subject line
  text:token, // plain text body
  html: `<b>${token}</b>`, // html body
});

    
const admi =await admin.updateOne({email:email},{$set:{secret:secret}})

const doc=await  doctor.updateOne({email:email},{$set:{secret:secret}})

const patient=await  Patients.updateOne({email:email},{$set:{secret:secret}})
console.log(admi.acknowledged)
console.log(doc)
console.log(patient)
console.log(email)
if(!patient.matchedCount==1&&!doc.matchedCount==1&&!admi.matchedCount==1){
console.log('h')
  res.send(404)
  return;
}
  res.send(token)
 })
 app.post("/checkotp",async (req,res)=>{
  const t=req.body.token.toString();

const {email,pass}=req.body
  const secret =(await Patients.findOne({email:req.body.email})).secret?(await Patients.findOne({email:req.body.email})).secret:
  (await admin.findOne({email:req.body.email}))?.secret?(await admin.findOne({email:req.body.email}))?.secret:(await doctor.findOne({email:req.body.email}))?.secret
//console.log(t);
// const isValid = totp.check(t, secret);
console.log(secret)
const isVerfied = notp.totp.verify(t,secret,{time:30,window:1})

console.log(isVerfied)
if(isVerfied){


        console.log(  await Patients.updateOne({email:email},{$set:{password:pass}}))
          
          await admin.updateOne({email:email},{$set:{password:pass}})
        
        await  doctor.updateOne({email:email},{$set:{password:pass}})
       console.log( await Patients.updateOne({email:email},{$set:{secret:""}}))
          
        await admin.updateOne({email:email},{$set:{secret:""}})
      
      await  doctor.updateOne({email:email},{$set:{secret:""}})
      
         }

  res.json({isVerfied:isVerfied});
//  res.send( totp.verify(opts:{token}))
       })


       
app.post("/subscribe", subscribeToPackage)
app.get("/ViewSubscriptionStatus",ViewHealthPackages)
app.get("/cancelsub",cancelSub)
app.post("/addav",addtimes)
app.post("/viewslots",viewslots)
app.post("/select",select)
const link =async(req,res)=>{

  const {username,familymem1,phone,relation}=req.body;
  if(familymem1){
  const {familymem}= await Patients.findOne({username:username}).select('familymem -_id').exec()
 
 const f=await Patients.findOne({email:familymem1})
 familymem.push({familymem:f,relation:relation});
 await Patients.updateOne({username:username},{$set:{familymem:familymem}}).exec()
  }
  console.log(phone)
  if(phone){
     
     const {familymem}= await Patients.findOne({username:username}).select('familymem -_id').exec()
    
    const f=await model.findOne({mobile_no:phone})
     familymem.push({familymem:f,relation:relation});
    await Patients.updateOne({username:username},{$set:{familymem:familymem}}).exec()
     }
  
res.send("done")





}
app.post("/link",link)
app.post("/acceptapt",acceptpatient)





app.get('/users',async (req,res)=>{

var list=[]
list=await doctor.find()







var list2=await Patients.find()
list2.forEach((p)=>{
  list.push(p)
})
var list3=await admin.find()
list3.forEach((p)=>{
  list.push(p)
})
res.send(list)
})





