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
        <MDBCardImage src='https://cdn2.iconfinder.com/data/icons/health-care-3/512/find_patients-512.png' alt='...' position='top' />
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
        <MDBCardImage src='https://icon-library.com/images/event-icon-transparent/event-icon-transparent-13.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>   View Appointments</MDBCardTitle>
          <MDBCardText>
            View all appointments booked by patients
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'></small>
          </MDBCardText>
        </MDBCardBody>
        </Link>
        </MDBCard>
         <MDBCard>
          
        <Link to="slot"  style={{color:'black'}}>
        <MDBCardImage src='https://previews.123rf.com/images/mattbadal/mattbadal1903/mattbadal190300108/124798528-schedule-icon-with-calendar-symbol-with-line-or-outline-style-business-icon-stock.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Schedule follow up</MDBCardTitle>
          <MDBCardText>
           Schedule a follow up on the date of your choice
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'></small>
          </MDBCardText>
        </MDBCardBody>
        </Link>
      </MDBCard>
      <MDBCard>
      <Link to="addslot"  style={{color:'black'}}>
        <MDBCardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQ5_yFDQXuFknQTwVRsvJukz6cGojDf25LQ&usqp=CAU' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Add time slot</MDBCardTitle>
          <MDBCardText>
         Add availble time slot to your Schedule
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
        <MDBCardImage src='https://static.thenounproject.com/png/2218873-200.png' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle> Add health record </MDBCardTitle>
          <MDBCardText>
        Add health record to my patient
          </MDBCardText>
          <MDBCardText>
        
          </MDBCardText>
        </MDBCardBody>
        </Link>
      </MDBCard>
  
     
      <MDBCard>
      <Link to="contract"  style={{color:'black'}}>
        <MDBCardImage src='https://as2.ftcdn.net/v2/jpg/00/89/21/97/1000_F_89219791_L8yYUCYXRCv7lMbVrqBI5oipl8RAGClR.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>   View my contract</MDBCardTitle>
          <MDBCardText>
            Check my contract date
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'></small>
          </MDBCardText>
        </MDBCardBody>
        </Link>
        </MDBCard>
         <MDBCard>
          
        <Link to="showWallet"  style={{color:'black'}}>
        <MDBCardImage src='https://static.vecteezy.com/system/resources/previews/028/213/659/original/wallet-icon-simple-outline-style-affordable-investment-money-cash-dollar-bill-payment-business-finance-concept-thin-line-symbol-isolated-on-white-background-svg-vector.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>View ammount in my wallet</MDBCardTitle>
          <MDBCardText>
           Check my amount in my wallet
          </MDBCardText>
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