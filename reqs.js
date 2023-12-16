const requestfollowup = async (req, res) => {

    const patient = req.params.id;
    const docId = req.body.id;
    const scheduledDate = new Date(req.body.scheduledDate);
    const description = req.body.description;
  
  
    try {
  
      const newFollowUp = {
        scheduledDate :  scheduledDate,
        patient: patient,
        description: description
      }
  
     
      const doc = await doctor.findById(docId).exec();
  
      if(!doc){
        return res.status(404).json({message : "no doctor found with this id"});
      }
  
      if(doc.followUpAppointments){
        doc.followUpAppointments.push(newFollowUp);
      }else{
        doc.followUpAppointments = [newFollowUp];
      }
  
      await doc.save();
  
      return res.status(200).json({
        message: "follow up request sent successfuly",
        followUp: newFollowUp
      });
        
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  const ReadPrescription = async (req, res) => {
    const id = req.params.id;
    const presId = req.body.id;
    try {
  
      const pat = await Patients.findById(id).exec();
  
      if(p.pres && p.pres.length > 0){
        for( const p of pat.pres){
          if(p._id === presId){
            return res.status(200).json(
              {
              message : "Successfully found prescription",
              prescription: p
              }
            )
          }
        }
      }
  
      return res.status(404).json({message : "no prescription found"});
  
      
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  };






  