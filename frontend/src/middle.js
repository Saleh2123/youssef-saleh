
import { useState,useEffect } from "react"
import Check from "./stripe"
import axios from "axios"
import {useParams} from"react-router-dom"
export default function Middle (){
const {pack}=useParams()

    const [options,setoptions]=useState({clientSecret:""})
  useEffect(()=>{
    async function get(){

     console.log(pack)
setoptions({clientSecret:(await axios.post("http://localhost:5000/charge",{pack:pack})).data.client_secret})}

get()


  },[])

  return(
    options.clientSecret!="" &&
    <Check options={options}></Check>


  )
}