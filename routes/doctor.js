const router = require('express').Router();
let doctor_model = require('../models/doctor');
let login_model = require('../models/login');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const timestamp = require('time-stamp');

router.route('/add').post((req,res) => {
   

    const name = req.body.name;
    const tel = req.body.tel;
    const home = req.body.home
    const address = req.body.address;
    const gender = req.body.gender;
    const educationQualification = req.body.educationQualification;
    const workExperience = req.body.workExperience;
    const govermentRegistrationNumber = req.body.govermentRegistrationNumber;
    const email = req.body.UserName;
    const specializeFor = req.body.specializeFor;
    const chargeForChannelling = req.body.chargeForChannelling;
    const nic = req.body.nic;
    const timeStamp = timestamp('YYYY/MM/DD:mm:ss')
    const newDoctor_Reg = new doctor_model({name, tel, home, address, educationQualification, workExperience,govermentRegistrationNumber, email, specializeFor, chargeForChannelling, nic, timeStamp,gender});

    newDoctor_Reg.save()
        .then(() => res.json('Doctor Registered!'))
        .catch(err => res.status(400).json('Error: '+err));
});
  
router.route("/allDoctors").get((req,res) => {
    doctor_model.find().then((doctors) => {
        res.json(doctors);
    }).catch((err) => {
        console.log(err);
    });
});    
 

router.route("/deleteDoctor/:id").delete(async (req, res) => {
    let id = req.params.id;
    doctor_model.findByIdAndDelete(id).then(() => {
            res.status(200).send({status :"Doctor Deleted"});
    }).catch((err) => {
        console.log(err);
            res.status(500).send({status: "Error with Deleting Data",error: err.message});
    });
});

module.exports = router;