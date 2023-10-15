import axios from "axios";
import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";

export default function Pres(){
    const [search,setsearch]=useState('')
    const[state,setstatus]=useState('')
    const [time,settime]=useState("")
const {id}= useParams();
const [apt,setapt]=useState([])
const [selected,setselect]=useState('')
useEffect(()=>{
    async function get(){
setapt((await axios.get(`http://localhost:5000/pres?username=${id}`)).data)
console.log(apt)
    }
    get()
},[])



console.log(time)


    return(

<>
<input  placeholder="doctor"  onChange={(e)=>{setsearch(e.target.value)}}></input>


<input  placeholder="status"  onChange={(e)=>{setstatus(e.target.value)}}></input>

<input  type="date" onChange={(e)=>{settime(e.target.value)}}></input>
{
    apt?.filter(({doctor,status,date})=>{
        console.log(date)
        return doctor.includes(search)&&status.includes(state)&&(time===""||date=== time)
    }).map((data)=>
    
    
    
    <div id={`${JSON.stringify(data)}`   } onClick={()=>{ console.log(id);console.log(selected);  setselect(JSON.stringify(data))}}
    
    style={{color:JSON.stringify(data)===selected?"blue":"black"}}>
    {
    JSON.stringify(data)}
    </div>    
    )
}








</>





    )

}