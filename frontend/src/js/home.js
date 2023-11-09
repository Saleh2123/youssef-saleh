
import { Link } from "react-router-dom";

import Choose from "./userreg";
import { useState } from "react";

function Home(){

const [user,setuser]=useState('')

    return( <div style={{margin:'auto'}}>

        <Link to="reg">
        <button 
                style={{margin:'auto'}}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>register
                  </button>
        </Link> 
      

     </div> )
}

export default Home;