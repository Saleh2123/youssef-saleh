import { Link } from "react-router-dom";


function Admin(){


    return( <div>

        <Link to="AddAdmin">
        <button type="submit">Add Adminstartor</button>
        </Link> 
        <Link to="remove">   
        <button type="submit">Remove Doctor/Patient/Admin</button>
        </Link>
        <Link to="reqs">   
        <button type="submit">View Doctor Requests</button>
        </Link>
        <Link to="">   
        <button type="submit">Edit Health Package</button>
        </Link>
     </div> )
    
}
export default Admin;