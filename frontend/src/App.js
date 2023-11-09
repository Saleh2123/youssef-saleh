import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Pateintreg from './js/Pateintreg';
import Doctorreg from './js/Doctorreg';
import Choose from './js/userreg';
import Admin from './adminstrator';
import AddAdminstrator from './AddAdminstrator';
import Reqs from './viewreqs';
import Doctor from './doctor';
import Patient from './patient';
import Addmember from './addmember';
import Patientapps from './patientapps';
import Remove from './remove';
import Family from './viewfamily';
import Aptpateint from './js/viewapt';
import Pres from './viewpres';
import Viewpatients from './viewpatients';
import Alldocs from './alldocs';
import Home from './js/home';
import './App.css'
import Aptdoc from './js/viewaptdoc';
import Editp from './editpack';
import Upload from './upload';
import Upload2 from './js/upload2';
import CheckoutForm from './stripe';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import LoginPage from './login';
import ChangePasswordPage from './js/changepass';
import axios from 'axios';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.


function App() {

  const [options,setoptions]=useState({})

  useEffect(()=>{
    async function test(){
setoptions({clientSecret:(await axios.post("http://localhost:5000/charge")).data.client_secret})}
test()

  },[])
  return (
    <Router>
      <Routes>
      <Route  path="/reg" element={<Choose/>} />
        <Route  path="reg/pateint" element={<Pateintreg/>} />
        <Route  path="/" element={<LoginPage/>} />

        <Route path="reg/doctor" element={<Doctorreg/>} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="admin/AddAdmin" element={<AddAdminstrator/>} />
        <Route path="admin/remove" element={<Remove/>} />
        <Route path='/admin/edit' element={<Editp></Editp>}></Route>
         <Route path="/admin/reqs" element={<Reqs/>} />
         <Route path="doctor/:id" element={<Doctor/>} />
         <Route path="patient/:id" element={<Patient/>}/>
         <Route path="/:d/:id/changepassword" element={<ChangePasswordPage/>}/>
       
         <Route path="patient/:id/family" element={<Family/>}/>
         
         <Route path="patient/:id/doctor" element={<Alldocs/>}/>
         <Route path="patient/:id/addmember" element={<Addmember/>}/>
            <Route path="patient/:id/apt" element={<Patientapps/>}/>
            <Route path="doctor/:id/apt" element={<Aptdoc/>}/>
            <Route path="patient/:id/pres" element={<Pres/>}/>
        <Route path="doctor/:id/viewpatients" element={<Viewpatients/>}/>
   <Route path='/patient/:id/upload' element={<Upload></Upload>}></Route>
   <Route path='/doctor/:id/upload2' element={<Upload2></Upload2>}></Route>

   <Route path="/stripe" element={
   
   <CheckoutForm></CheckoutForm>}>
  </Route>
      </Routes>
    </Router>
  );
  
}

export default App;

