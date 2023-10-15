import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Aptpateint(){
    const [search,setsearch]=useState('')
    const[state,setstatus]=useState('')
    const [time,settime]=useState("")
const {id}= useParams();
const [apt,setapt]=useState([])
useEffect(()=>{
    async function get(){
setapt((await axios.get(`http://localhost:5000/patientapt?username=${id}`)).data)
console.log(apt)
    }
    get()
},[])



console.log(new Date(time))


    return(

<>
<input  placeholder="doctor"  onChange={(e)=>{setsearch(e.target.value)}}></input>


<input  placeholder="status"  onChange={(e)=>{setstatus(e.target.value)}}></input>

<input  type="date" onChange={(e)=>{settime(e.target.value)}}></input>
{
    apt?.filter(({doctor,status,date})=>{
        return doctor.includes(search)&&status.includes(state)&&(time===""||new Date(date)> new Date(time))
    }).map((data)=>JSON.stringify(data))
}








</>





    )

}