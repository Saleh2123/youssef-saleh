import axios from "axios"
import { useState } from "react"

export default function Editp(){

const [name,setn]=useState('')


const [p,setp]=useState('')










    return(
        <div>
            <input onChange={(e)=>setn(e.target.value)}></input>
            <input onChange={(e)=>setp(e.target.value)}></input>
            <button        onClick={()=>{
                axios.delete(`http://localhost:5000/deletepack?name=${name}`,{name:name})
            }}    > delete</button>
            <button
              onClick={()=>{
                axios.post(`http://localhost:5000/updatepack?name=${name}`,{name:name,price:p})
            }} 
            
            
            > edit</button>
            <button
            
            
            onClick={()=>{
                axios.post(`http://localhost:5000/addpack?name=${name}`,{name:name,price:p})
            }} 
            
            
            
            
            
            
            
            
            > add</button>
        </div>
    )
}