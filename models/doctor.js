const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorRegSchema = new Schema({
    name: {
        type: String,
    },

    tel: {
        type: String,
        required: true,
    },

    home: {
        type: String,
        required: true,
    },

    nic:{
        type: String,
        required: true,
        unique: true
    },

    address:{
        type: String,
        required: true
    },

    educationQualification:{
        type: String,
        required: true
    },

    workExperience:{
        type: String,
        required: true
    },

    govermentRegistrationNumber:{
        type: String,
        required: true
    },
    
    email:{
        type: String,
        required: true,
        unique: true
    },

    specializeFor:{
        type: String,
        required: true
    },
  
    chargeForChannelling:{
        type: String,
        required: true
    },

    timeStamp: {
        type: String,
        required: true
    },
    
    gender: {
        type: String,
        required: true
    },

});
const doctor_regSchema = mongoose.model('doctor', doctorRegSchema);
module.exports = doctor_regSchema;