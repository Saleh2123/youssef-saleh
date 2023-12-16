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
    <MDBNavbar expand='lg' light bgColor='light'>
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








          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

  );
}
}