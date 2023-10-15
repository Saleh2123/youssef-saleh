import { Link } from "react-router-dom";


function Patient(){


    return( <div>
        <Link to="addmember">
        <button type="submit">Add family memeber</button>
        </Link> 
        <Link to="family">   
        <button type="submit">View Family Member</button>
        </Link>
        <Link to="doctor">   
        <button type="submit">View Doctors</button>
        </Link>         
        <Link to="apt">   
        <button type="submit">View appointment</button>
        </Link> 
        <Link to="pres">   
        <button type="submit">View Prescriptions</button>
        </Link>
        
        

     </div> )
    
}
export default Patient;