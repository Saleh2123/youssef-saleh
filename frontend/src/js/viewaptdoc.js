import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Aptdoc(){
    const [search,setsearch]=useState('')
    const[state,setstatus]=useState('')
    const [timee,settime]=useState("")
const {id}= useParams();
const [apt,setapt]=useState([])
useEffect(()=>{
    async function get(){
setapt((await axios.get(`http://localhost:5000/doctorapt?username=${id}`)).data)
console.log(apt)
    }
    get()
},[])





    return(

<>
<input  placeholder="doctor"  onChange={(e)=>{setsearch(e.target.value)}}></input>


<input  placeholder="status"  onChange={(e)=>{setstatus(e.target.value)}}></input>

<input  type="date" onChange={(e)=>{settime(e.target.value)}}></input>
{
    apt?.filter(({patient,status,time})=>{
        return patient.name.includes(search)&&status.includes(state)&&(timee===""||new Date(time)> new Date(timee))
    }).map((data)=>(

<div>


{`doctor:&${data.patient.name} time:${data.time} satus:${data.status}`}
</div>




    ))
}








</>





    )

}