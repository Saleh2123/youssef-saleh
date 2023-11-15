import axios from "axios";
import { useState } from "react"
import { json } from "react-router-dom";
import PasswordChecklist from "react-password-checklist"
export default function Otp(){
const [form,setform]=useState({})

const handlechange=(e)=>{
  const  {name,value}=e.target;
  setform({...form,[name]:value})
}
const [valid,setvalid]=useState(false)
const handleclick=async(e)=>{
    e.preventDefault()
await axios.post("http://localhost:5000/otp",{email:form.email})
alert("checkmail")

}
console.log(valid)
const handleverify=async(e)=>{
    e.preventDefault()

    if(valid){
await axios.post("http://localhost:5000/checkotp",{email:form.email,token:form.otp,pass:form.password})

    }
alert("checkmail")

}
    return(
        <div class="formcontainer">
        <form class="login100-form validate-form" onsubmit="return false;">



           <div class="wrap-input100 validate-input" data-validate = "Hourly Rate is required">
						<input class="input100" onChange={handlechange} id="rate" type="text" name="email" placeholder="Name" required/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>

                    <div class="wrap-input100 validate-input" data-validate = "Affiliation (hospital) is required">
						<input class="input100" id="Affiliation" type="text" name="otp" onChange={handlechange} placeholder="Password" required/> 
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
                    
                    <div class="wrap-input100 validate-input" data-validate = "Affiliation (hospital) is required">
						<input class="input100" id="Affiliation" type="text" name="password" onChange={handlechange} placeholder="Password" required/> 
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>


          <PasswordChecklist
				rules={["minLength","specialChar","number","capital"]}
				minLength={5}
				value={form.password?form.password:"  "}
				
				onChange={(isValid) => {
setvalid(isValid);


        }}
			/>













            <button name ="Login" class="login100-form-btn" onClick={handleclick}>
             send
                </button>   



                  <button name ="Login" class="login100-form-btn" onClick={handleverify}>
              change
                </button>     
      </form>
      </div>
    )
}