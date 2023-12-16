import { Link } from "react-router-dom";

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardGroup,MDBCardText
  } from "mdb-react-ui-kit";
function Admin(){


    return( <div>

      
       <App></App>

     </div> )
    
}


function App() {
    return (
<MDBCardGroup style={{marginBlock:'10%'}}>
  
      
        <MDBCard>
          <Link to="addadmin"  style={{color:'black'}}>
          <MDBCardImage src='https://icon-library.com/images/add-people-icon/add-people-icon-28.jpg' alt='...' position='top' />
          <MDBCardBody>
            <MDBCardTitle> Add admin</MDBCardTitle>
            <MDBCardText>
          Add another admin to be able to type documents,respond to business enquiries, drawing up contracts and provide customer service.
            </MDBCardText>
            <MDBCardText>
          
            </MDBCardText>
          </MDBCardBody>
          </Link>
        </MDBCard>
    
       
        <MDBCard>
        <Link to="remove"  style={{color:'black'}}>
          <MDBCardImage src='https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/remove-icon.svg' alt='...' position='top' />
          <MDBCardBody>
            <MDBCardTitle>  Remove doctor/patient/admin</MDBCardTitle>
            <MDBCardText>
              Remove any staff member that is no more in our concideration 
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'></small>
            </MDBCardText>
          </MDBCardBody>
          </Link>
          </MDBCard>
           <MDBCard>
            
          <Link to="reqs"  style={{color:'black'}}>
          <MDBCardImage src='https://pic.onlinewebfonts.com/svg/img_193411.svg' alt='...' position='top' />
          <MDBCardBody>
            <MDBCardTitle>View and accept doctor requests</MDBCardTitle>
            <MDBCardText>
               Accept or view any requests sent by a doctor
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'></small>
            </MDBCardText>
          </MDBCardBody>
          </Link>
        </MDBCard>
    
      </MDBCardGroup>
    );
  }
  function App2() {
    return (
      <MDBCardGroup>
  
      
        <MDBCard>
          <Link to="hr"  style={{color:'black'}}>
          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top' />
          <MDBCardBody>
            <MDBCardTitle> Add health record </MDBCardTitle>
            <MDBCardText>
          Add health record for patients 
            </MDBCardText>
            <MDBCardText>
          
            </MDBCardText>
          </MDBCardBody>
          </Link>
        </MDBCard>
    
       
        <MDBCard>
        <Link to="contract"  style={{color:'black'}}>
          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/042.webp' alt='...' position='top' />
          <MDBCardBody>
            <MDBCardTitle>   View contract</MDBCardTitle>
            <MDBCardText>
              Check my contract.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'></small>
            </MDBCardText>
          </MDBCardBody>
          </Link>
          </MDBCard>
           <MDBCard>
            
          <Link to="showWallet"  style={{color:'black'}}>
          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/043.webp' alt='...' position='top' />
          <MDBCardBody>
            <MDBCardTitle>View ammount in my wallet</MDBCardTitle>
            <MDBCardText>
             check how much is left in your wallet            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'></small>
            </MDBCardText>
          </MDBCardBody>
          </Link>
        </MDBCard>
        <MDBCard>
       
        </MDBCard>
        
      </MDBCardGroup>
    );
  }


























export default Admin;