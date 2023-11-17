import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
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
export default function Doctor() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    affiliation: "",
    rate: "",
    username: id,
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put("http://localhost:5000/docedit", formData);
    console.log("Form submitted:", formData);
    alert("Form submitted");
    // You can add further logic to handle form submission (e.g., API call).
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2 className="text-3xl font-semibold">Edit Doctor Info</h2>
        <TextField
          label="Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          label="Hourly Rate"
          type="text"
          name="rate"
          value={formData.rate}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          label="Affiliation"
          type="text"
          name="affiliation"
          value={formData.affiliation}
          onChange={handleChange}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          Update Info
        </Button>
      </form>

        <App></App>
        <App2></App2>
    </Container>
  );
}
 function App() {
  return (
    <MDBCardGroup>

    
      <MDBCard>
        <Link to="viewpatients"  style={{color:'black'}}>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle> View patients</MDBCardTitle>
          <MDBCardText>
        View a list of all  patients that have/had appointments with me
          </MDBCardText>
          <MDBCardText>
        
          </MDBCardText>
        </MDBCardBody>
        </Link>
      </MDBCard>
  
     
      <MDBCard>
      <Link to="apt"  style={{color:'black'}}>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/042.webp' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>   View Appointments</MDBCardTitle>
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
          
        <Link to="slot"  style={{color:'black'}}>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/043.webp' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Schedule follow up</MDBCardTitle>
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
      <Link to="addslot"  style={{color:'black'}}>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/043.webp' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>add available time slot</MDBCardTitle>
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