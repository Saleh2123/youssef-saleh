const express= require('express')
const mongoose=require('mongoose')
<<<<<<< HEAD
const {createpatient, addmember, viewfamily, viewdocss,viewSubscriptionStatus}= require('./routes/patient')
const { createdoctor,updatedoc,viewpatient,addHealthRecord,viewAppointments,viewAvailableAppointments} = require('./routes/doctors')
const { deleteuser, docreqs, createadmin, viewapt, viewpres, viewdocapt, deletepack, addpack, updatepack } = require('./routes/admin')
=======
const {ReadPrescription,requestfollowup,createpatient, addmember, viewfamily, viewdocss,viewSubscriptionStatus, viewPatientAppointments}= require('./routes/patient')
const { acceptFollowUpAppointment, revokeFollowUpAppointment,createdoctor,updatedoc,viewpatient,addHealthRecord,viewAppointments,viewAvailableAppointments} = require('./routes/doctors')
const { deleteuser, docreqs, createadmin, viewapt, viewpres, viewdocapt} = require('./routes/admin')
>>>>>>> f599ac2 (reqs done backend)
require ('dotenv').config()
const app = express()
const cors = require('cors');

app.use(express.json())
app.use(cors())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
app.get('/',(req,res)=>{
    res.json({Mssg:'Sign up'})
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


app.delete("/deleteruser",deleteuser)
app.post("/createpatient",createpatient)
app.post("/createdoctor",createdoctor)
app.post("/createadmin",createadmin)
app.put("/updatedoc",updatedoc)
app.post("/addmember",addmember)
app.get("/family",viewfamily)
app.get("/patientapt",viewapt)
<<<<<<< HEAD

=======
app.get("/view-appointments",viewPatientAppointments)
>>>>>>> f599ac2 (reqs done backend)
app.get("/doctorapt",viewdocapt)
app.get("/pres",viewpres)
//app.get("/viewpatients",viewpatients)
app.get("/alldocs",viewdocss)
app.get("/viewSubscriptionStatus",viewSubscriptionStatus)
app.patch("/addHealthRecord",addHealthRecord);


<<<<<<< HEAD
=======



//Saleh
app.get("/:id/prescription", ReadPrescription) //id = logged in patient id

app.put("/:id/requestFollowUp", requestfollowup); //id = logged in patient id

app.patch("/:id/acceptFollowUp",acceptFollowUpAppointment); //id = logged in doctor id

app.patch("/:id/revokeFollowUp",revokeFollowUpAppointment); //id = logged in doctor id
//


>>>>>>> f599ac2 (reqs done backend)
app.get('/viewAppointments', viewAppointments);
app.get('/viewAvailableAppointments', viewAvailableAppointments);
app.get('/viewSubscriptionStatus', viewSubscriptionStatus);


<<<<<<< HEAD


=======
// hatktb cd ba3deha space ba3deen drag and drop el main source folder fel terminal w doos enter
//1-git add .
//2-git branch - then et2aked en el branch el a5dar howa main
//3-git commit -m "finished requirements"
//5-git pull , w law tele3lak errors e3mel accept combination then resolve in merge editor then complete
//5-git push
>>>>>>> f599ac2 (reqs done backend)












//app.get('/viewAppointments', viewAppointments);












app.get("/viewdoctors",docreqs)
<<<<<<< HEAD
app.delete('/deletepack',deletepack)
app.post('/addpack',addpack)
app.post('/updatepack',updatepack)
=======
//app.delete('/deletepack',deletepack)
//app.post('/addpack',addpack)
//app.post('/updatepack',updatepack)
>>>>>>> f599ac2 (reqs done backend)
