
import { Link } from "react-router-dom";

import Choose from "./userreg";
import { useState } from "react";

function Home(){

const [user,setuser]=useState('')

    return( <div>

        <Link to="reg">
        <button type="submit">Register</button>
        </Link> 
        <Link to="Admin">
        <button type="submit">Admin</button>
        </Link> 
        <input  onChange={(e)=>{
            setuser(e.target.value)
        }} />
        <Link  to={`doctor/${user}`}>

        <button> Sign in as doc</button>
        </Link>
      
        <Link to={`patient/${user}`} >

        <button> Sign in as patient</button>
        </Link>
       
      
       
          
       

     </div> )
}

export default Home;