const express= require('express')
const jwt = require('jsonwebtoken');
const mongoose=require('mongoose')
const {createpatient, addmember, viewfamily, viewdocss, charge}= require('./routes/patient')
const { createdoctor, updatedoc, viewpatients, viewpatient } = require('./routes/doctors')
const { deleteuser, docreqs, createadmin, viewapt, viewpres, viewdocapt, deletepack, addpack, updatepack, updatepass, rejdoc, acceptdoc } = require('./routes/admin')
require ('dotenv').config()
const app = express()
const cors = require('cors');
const admin =require('./model/adminvariables');
const doctor = require('./model/doctorvariables');
const Patients = require('./model/patientvariables');
const formidable = require("formidable")
const fs=require("fs")
app.use(express.json())
app.use(cors())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    app.listen(process.env.PORT,()=>{
        console.log('listening to db ',process.env.PORT)
    })
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
app.get("/viewpatients",viewpatients)
app.get("/alldocs",viewdocss)
app.post("/login",login)































app.get("/viewdoctors",docreqs)
app.delete('/deletepack',deletepack)
app.post('/addpack',addpack)
app.post('/updatepack',updatepack)





















app.get('/', (req, res) => {
    res.send(`
      <h2>With <code>"express"</code> npm package</h2>
      <form action="/upload" enctype="multipart/form-data" method="post">
        <div>Text field title: <input type="text" name="title" /></div>
        <div>File: <input type="file" name="someExpressFiles" multiple="multiple" />
        
        
        
        </div>
        <input type="submit" value="Upload" />
      </form>
    `);
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









app.post("/charge",charge)
app.post("/updatepass",updatepass)
app.post("/reject",rejdoc)
app.post("/accept",acceptdoc)