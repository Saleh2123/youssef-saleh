import axios from "axios";
import { useState } from "react"
import { useParams } from "react-router-dom";

export default function Linkfam(){
    const [form,setform]=useState({})

    const handlechange=(e)=>{
      const  {name,value}=e.target;
      setform({...form,[name]:value})
    }

const {id}=useParams()

const handleclick= async (e)=>{
    e.preventDefault();
  await  axios.post("http://localhost:5000/link",{username:id,familymem1:form.name,phone:form.phone,relation:form.relation})


alert("added")
}
    return(
        <div class="formcontainer">
        <form class="login100-form validate-form" onsubmit="return false;">
        <div class="wrap-input100 validate-input" data-validate = "Hourly Rate is required">
						<input class="input100" onChange={handlechange} id="rate" type="text" name="name" placeholder="email" required/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
          <div class="wrap-input100 validate-input" data-validate = "Hourly Rate is required">
						<input class="input100" onChange={handlechange} id="rate" type="text" name="phone" placeholder="phone" required/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>

          <select name="relation"   onChange={handlechange} id="cars">
<option value="husband">husband</option>
<option value="wife">wife</option>
</select>
 
                

            <button name ="Logout" class="login100-form-btn" onClick={handleclick}>
                Logout
                </button>        
      </form>
      </div>
    )
}