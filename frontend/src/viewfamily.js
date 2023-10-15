import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";



export default function Family(){
    const[dummydata,setdummy]=useState([]);
    const {id}= useParams()
    useEffect(()=>{



        async function get(){
         setdummy((await axios.get(`http://localhost:5000/family?username=${id}`)).data)
        }
        get();
    })
    return(
        
        <>   {   dummydata?.map((data)=>

  <div>
        <br />
        <label>
          name:
         {data.name}
        </label>
        <br />
        <label>
          national_id:
         {data.national_id}
        </label>
        <br />
        <label>
          relation:
         {data.relation}
        </label>
        <br />
        <label>
        age:
          {data.age}
        </label>
       
</div>
        )

        }











    
    </>)
}