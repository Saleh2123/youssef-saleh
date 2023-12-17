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
        <Link to="viewPrescriptions">   
        <button type="submit">View Prescriptions</button>
        </Link>
        <Link to="upload">   
        <button type="submit">upload health records</button>
        </Link>
        <Link to="his">   
        <button type="submit">view health records</button>
        </Link>
        <Link to="healthpack">   
        <button type="submit">View Health Packages</button>
        </Link>
        <Link to="status">   
        <button type="submit">View Health Package status</button>
        </Link>
        <Link to="select">   
        <button type="submit">select appointment</button>
        </Link>
        <Link to="filterMyAppointments">   
        <button type="submit">filter appointments</button>
        </Link>
        <Link to="showWallet">   
        <button type="submit">show wallet</button>
        </Link>
        <Link to="link">   
        <button type="submit">Link</button>
        </Link>
      <Link to="rescheduleApp">   
        <button type="submit">Reschedule appointment</button>
        </Link> 
        <Link to="cancelApp">   
        <button type="submit">Cancel appointment</button>
        </Link> 
        <Link to="requestfollowup">   
        <button type="submit">Request Follow Up</button>
        </Link> 

     </div> )

}
export default Patient;