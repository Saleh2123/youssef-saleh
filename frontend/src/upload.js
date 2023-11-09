import axios from "axios";
import { useState } from "react"
import { Navigate, useParams } from "react-router-dom";

export default function Upload(){
const [form,setform]=useState(null);
const {id}=useParams();
const handlechange=(e)=>{


    setform(e.target.files[0])
    console.log(form)
}
const submit=async ()=>{
    const finalform= new FormData();
    finalform.append(form);
   await axios.post('http://localhost:5000/upload',finalform)
window.location="/";
}

    return(<div>



        <input type="file"   onChange={handlechange}></input> 
        <button onClick={submit}></button>  </div>)
}