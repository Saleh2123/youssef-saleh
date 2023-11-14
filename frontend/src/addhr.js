import axios from "axios";
import { useState } from "react"
import { json, useParams } from "react-router-dom";

export default function Hr(){
const [form,setform]=useState({})
const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

const handlechange=(e)=>{
  const  {name,value}=e.target;
  setform({...form,[name]:value})
}

const handleFileUpload = async(e) => {
    e.preventDefault()
  // Implement file upload logic here
  if (selectedFile) {
      const formData = new FormData();
  formData.append('file', selectedFile);
  formData.append("title",form.title)
    // You can send the selectedFile to your server or perform other actions.
 await axios.post("http://localhost:5000/upload",formData);
 alert("file uploaded")
  }
};
    return(
        <div class="formcontainer">
        <form class="login100-form validate-form" onsubmit="return false;">



           <div class="wrap-input100 validate-input" data-validate = "Hourly Rate is required">
						<input class="input100" onChange={handleFileChange} id="rate" type="file" name="file" placeholder="Name" required/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>


                    <div class="wrap-input100 validate-input" data-validate = "Hourly Rate is required">
						<input class="input100" onChange={handlechange} id="rate" type="text" name="title" placeholder="patient" required/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
            <button name ="Login" class="login100-form-btn" onClick={handleFileUpload}>
           Add 
                </button>        
      </form>
      </div>
    )
}