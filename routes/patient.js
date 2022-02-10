const router = require('express').Router();
let patient_model = require('../models/patient');
let appoiment_model = require('../models/appoiment');
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
  
router.route('/do_appoinment').post((req,res) => {
   
    const patientId = req.body.patientId;
    const patientName = req.body.patientName;
    const doctorID = req.body.doctorID;
    const datetime = req.body.datetime;
    const status = req.body.status;
  
    const timeStamp = timestamp('YYYY/MM/DD:mm:ss')
    const newappoiment = new appoiment_model({patientId, patientName, doctorID, status, timeStamp,datetime});

    newappoiment.save()
        .then(() => res.json('new appoiment done!'))
        .catch(err => res.status(400).json('Error: '+err));
});
  

router.route("/allappoiment").get((req,res) => {
    appoiment_model.find({status:"Done"}).then((doctors) => {
        res.json(doctors);
    }).catch((err) => {
        console.log(err);
    });
});    

router.route('/updateAppoitment/:Aid').put((req, res)=>{
    var Aid = req.params.Aid;
       
    const status = req.body.status;
    const updateAppoitment={status }
       const update1 =  appoiment_model.findByIdAndUpdate(Aid,updateAppoitment).then(() => {
               
        res.status(200).send({status :"appoiment updated"});
            
        }).catch((err) => {
            console.log(err);
            res.status(400).send({status: "Error with Updating Data",error: err.message});
        });
          
    })

module.exports = router;