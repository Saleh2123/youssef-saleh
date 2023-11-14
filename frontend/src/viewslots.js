import { useEffect, useState } from "react"

import axios from "axios"
import { useParams } from "react-router-dom"
export default function Views(){
const[m,setm]=useState([])
const [d,setd]=useState('')
const {id}=useParams()
async function get(){

    setm((await axios.post("http://localhost:5000/viewslots",{username:d})).data)
console.log(m);
}

async function set(time){

    await axios.post("http://localhost:5000/select",{username:id,doc:d,time:time})
window.location.href=`patient/:${id}/healthpack/payment/:pack`
}




return(
<div style={{display:"block"}}>

    <div class="wrap-input100 validate-input" data-validate = "Hourly Rate is required">
						<input class="input100" onChange={(e)=>{setd(e.target.value)}} id="rate" type="text" name="file" placeholder="Name" required/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
{
    m.map((name)=>(
       
        name?.timeslots.map(({date,hour})=>(
            <>
            <div>{date}</div>
            <div>{hour}</div>
            <button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                        onClick={async () =>{ set({date:date,hour:hour})
                            
                        }
                      }
                      > select</button>
            </>
        ))
    )
)
   


}
<button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                        onClick={async () =>{ get()
                            
                        }
                      }
                      > view</button>
</div>
)
}
