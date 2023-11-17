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
          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top' />
          <MDBCardBody>
            <MDBCardTitle> add admin</MDBCardTitle>
            <MDBCardText>
          View a list of all  patients that have/had appointments with me
            </MDBCardText>
            <MDBCardText>
          
            </MDBCardText>
          </MDBCardBody>
          </Link>
        </MDBCard>
    
       
        <MDBCard>
        <Link to="remove"  style={{color:'black'}}>
          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/042.webp' alt='...' position='top' />
          <MDBCardBody>
            <MDBCardTitle>  Remove doctor/patient/admin</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
          </Link>
          </MDBCard>
           <MDBCard>
            
          <Link to="reqs"  style={{color:'black'}}>
          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/043.webp' alt='...' position='top' />
          <MDBCardBody>
            <MDBCardTitle>View and accept doctor requests</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              card has even longer content than the first to show that equal height action.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
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
            <MDBCardTitle> Add health record for a patient</MDBCardTitle>
            <MDBCardText>
          View a list of all  patients that have/had appointments with me
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
            <MDBCardTitle>   View my contract</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
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
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              card has even longer content than the first to show that equal height action.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
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