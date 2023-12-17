
async function acceptFollowUpAppointment(req, res) {

    const doctorId = req.params.id;
    const appointmentId = req.body.id;
  
  
    try {
        const doctor = await doctors.findById(doctorId);
  
        if (!doctor) {
            //throw new Error('Doctor not found');
            return res.status(404).json({message : "No doctors found."});
        }
  
        const appointmentIndex = doctor.followUpAppointments.findIndex(appointment => appointment.id === appointmentId);
  
        if (appointmentIndex !== -1) {
            doctor.followUpAppointments[appointmentIndex].status = 'accepted';
            await doctor.save();
            return res.status(200).json({
              message : "follow up appointment accepted successfuly",
              followUp : doctor.followUpAppointments[appointmentIndex]
            });
        } else {
            //throw new Error('Appointment not found');
            return res.status(404).json({
              message: "follow up with this ID not found"
            });
        }
    } catch (error) {
        throw new Error('Error accepting follow-up appointment: ' + error.message);
    }
  }
  async function revokeFollowUpAppointment(req, res) {
    const doctorId = req.params.id;
    const appointmentId = req.body.id;
  
  
    try {
        const doctor = await doctors.findById(doctorId);
  
        if (!doctor) {
            //throw new Error('Doctor not found');
            return res.status(404).json({message : "No doctors found."});
        }
  
        const appointmentIndex = doctor.followUpAppointments.findIndex(appointment => appointment.id === appointmentId);
  
        if (appointmentIndex !== -1) {
            doctor.followUpAppointments[appointmentIndex].status = 'revoked';
            await doctor.save();
            return res.status(200).json({
              message : "follow up appointment accepted successfuly",
              followUp : doctor.followUpAppointments[appointmentIndex]
            });
        } else {
            //throw new Error('Appointment not found');
            return res.status(404).json({
              message: "follow up with this ID not found"
            });
        }
    } catch (error) {
        throw new Error('Error accepting follow-up appointment: ' + error.message);
    }
  }
  