const router = require('express').Router();
let patient_model = require('../models/patient');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const timestamp = require('time-stamp');

router.route('/add').post((req,res) => {
   
    const name = req.body.name;
    const tel = req.body.tel;
    const home = req.body.home
    const address = req.body.address;
    const gender = req.body.gender;
    const bod = req.body.bod;
    const disease = req.body.disease;
    const email = req.body.email;
    const nic = req.body.nic;
    const timeStamp = timestamp('YYYY/MM/DD:mm:ss')
    const newPatient_Reg = new patient_model({name, tel, home, address, gender, bod,disease, email, nic, timeStamp});

    newPatient_Reg.save()
        .then(() => res.json('Patient Registered!'))
        .catch(err => res.status(400).json('Error: '+err));
});
  
    
 
module.exports = router;