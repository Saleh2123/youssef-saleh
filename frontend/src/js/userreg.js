import { Link } from "react-router-dom";


function Choose(){


    return( <div>

        <Link to="pateint">
        <button type="submit">Register as Patient</button>
        </Link> 
        <Link to="doctor">   
        <button type="submit">Register as Doctor</button>
        </Link>

     </div> )
    
}
export default Choose;