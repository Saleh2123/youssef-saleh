import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';

export default function Navbar() {
  const [openBasic, setOpenBasic] = useState(false);
const role=localStorage.getItem("role");
const id=localStorage.getItem("user")
if(role==="doctor"){
  return (
    <MDBNavbar expand='lg'  sticky light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>{id}</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href={`/doctor/${id}`}>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>




            <MDBNavbarItem>
              <MDBNavbarLink href={`/doctor/${id}/viewpatients`}>viewpatients</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href={`/doctor/${id}/apt`}>Appointments</MDBNavbarLink>
            </MDBNavbarItem>


            <MDBNavbarItem>
              <MDBNavbarLink href={`/doctor/${id}/addslot`}>addslot</MDBNavbarLink>
            </MDBNavbarItem>


            <MDBNavbarItem>
              <MDBNavbarLink href={`/doctor/${id}/hr`}>add RECORD</MDBNavbarLink>
            </MDBNavbarItem>


            <MDBNavbarItem>
              <MDBNavbarLink href={`/doctor/${id}/contract`}>contract</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href={`/doctor/${id}/showWallet`}>wallet</MDBNavbarLink>
            </MDBNavbarItem>


            <MDBNavbarItem>
              <MDBNavbarLink href={`/doctor/${id}/viewDoctorPrescriptions`}> View Prescriptions</MDBNavbarLink>
            </MDBNavbarItem>


            <MDBNavbarItem>
              <MDBNavbarLink href={`/doctor/${id}/addPrescription`}> add Prescriptions</MDBNavbarLink>
            </MDBNavbarItem>


            <MDBNavbarItem>
              <MDBNavbarLink href={`/doctor/${id}/rescheduleApp`}> reschedule</MDBNavbarLink>
            </MDBNavbarItem>



            <MDBNavbarItem>
              <MDBNavbarLink href={`/doctor/${id}/cancelPatientApp`}> cancel</MDBNavbarLink>
            </MDBNavbarItem>









          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

  );
}
if(role==="patient"){
  
  const navigationLinks = [
    { to: "addmember", text: "Add Member" },
    { to: "family", text: "View Member" },
    { to: "doctor", text: "View Doctors" },
    { to: "apt", text: "View Appointment" },
    { to: "viewPrescriptions", text: "View Prescriptions" },
    { to: "upload", text: "Upload Records" },
    { to: "his", text: "View Records" },
    { to: "healthpack", text: "View Packages" },
    { to: "status", text: "View Status" },
    { to: "select", text: "Select Appointment" },
    { to: "filterMyAppointments", text: "Filter Appointments" },
    { to: "showWallet", text: "Show Wallet" },
    { to: "link", text: "Link" },
    { to: "rescheduleApp", text: "Reschedule Appointment" },
    { to: "cancelApp", text: "Cancel Appointment" },
    { to: "requestfollowup", text: "Request FollowUp" },
  ];
  
  return (
    <MDBNavbar expand='sm' style={{scale:0.8}} sticky light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>{id}</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href={`/patient/${id}`}>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>



{navigationLinks.map((item)=>(
            <MDBNavbarItem>
              <MDBNavbarLink href={`/patient/${id}/${item.to}`}>{item.text}</MDBNavbarLink>
            </MDBNavbarItem>


))


}



          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

  );



}
}