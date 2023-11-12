import axios from "axios";
import { useState } from "react"
import { useParams } from "react-router-dom";

export default function AddavSlot(){
const [form,setform]=useState({})

const handlechange=(e)=>{
  const  {name,value}=e.target;
  setform({...form,[name]:value})
}
const {id}=useParams()
const handleclick=async (e)=>{
    e.preventDefault();
  await axios.post("http://localhost:5000/addav",{username:id,time:{date:form.start,hour:form.hour}})
  alert("done")
}
    return(
                <div class="formcontainer">
                <form class="login100-form validate-form" onsubmit="return false;">
    

                <div class="wrap-input100 validate-input" data-validate = "Hourly Rate is required">
                                <input class="input100" onChange={handlechange} id="rate" type="text" name="hour" placeholder="Old Password" required/>
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>
        






                   <div class="wrap-input100 validate-input" data-validate = "Hourly Rate is required">
                                <input class="input100" onChange={handlechange} id="rate" type="date" name="start" placeholder="Old Password" required/>
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>
        
                         
        
                    <button name ="Done" class="login100-form-btn" onClick={handleclick}>
                        Submit Time Slot
                        </button>        
              </form>
              </div>
            )
        }
