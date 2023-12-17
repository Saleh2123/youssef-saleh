import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

function NavigationCard({ to, text }) {
  return (
    <Card style={{ margin: "10px", minWidth: "200px" }}>
      <CardContent>
        <Link to={to}>
          <Typography variant="h6">{text}</Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

function Patient() {
  const navigationLinks = [
    { to: "addmember", text: "Add Family Member" },
    { to: "family", text: "View Family Member" },
    { to: "doctor", text: "View Doctors" },
    { to: "apt", text: "View Appointment" },
    { to: "viewPrescriptions", text: "View Prescriptions" },
    { to: "upload", text: "Upload Health Records" },
    { to: "his", text: "View Health Records" },
    { to: "healthpack", text: "View Health Packages" },
    { to: "status", text: "View Health Package Status" },
    { to: "select", text: "Select Appointment" },
    { to: "filterMyAppointments", text: "Filter Appointments" },
    { to: "showWallet", text: "Show Wallet" },
    { to: "link", text: "Link" },
    { to: "rescheduleApp", text: "Reschedule Appointment" },
    { to: "cancelApp", text: "Cancel Appointment" },
    { to: "requestfollowup", text: "Request Follow Up" },
    {to:'unique',text:"my doctors"}
  ];
  
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {navigationLinks.map((link, index) => (
        <NavigationCard key={index} to={link.to} text={link.text} />
      ))}
    </div>
  );
}

export default Patient;
