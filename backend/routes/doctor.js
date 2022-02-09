const router = require('express').Router();
let doctor_model = require('../models/doctor');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const timestamp = require('time-stamp');

router.route('/add').post((req,res) => {
   

    const name = req.body.name;
    const tel = req.body.tel;
    const home = req.body.home
    const address = req.body.address;
    const educationQualification = req.body.educationQualification;
    const workExperience = req.body.workExperience;
    const govermentRegistrationNumber = req.body.govermentRegistrationNumber;
    const email = req.body.email;
    const specializeFor = req.body.specializeFor;
    const chargeForChannelling = req.body.chargeForChannelling;
    const nic = req.body.nic;
    const timeStamp = timestamp('YYYY/MM/DD:mm:ss')
    const newDoctor_Reg = new doctor_model({name, tel, home, address, educationQualification, workExperience,govermentRegistrationNumber, email, specializeFor, chargeForChannelling, nic, timeStamp});

    newDoctor_Reg.save()
        .then(() => res.json('Doctor Registered!'))
        .catch(err => res.status(400).json('Error: '+err));
});
  
    
 
module.exports = router;