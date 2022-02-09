const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientRegSchema = new Schema({
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
        unique
    },

    address:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique : true
    },

    gender:{
        type: String,
        required: true,
    },
    
    age:{
        type: String,
        required: true,
    },

    bod:{
        type: String,
        required: true,
    },

    disease:{
        type: String,
        required: true
    },

    timeStamp: {
        type: String,
        required: true
    },

});
const patient_regSchema = mongoose.model('patient', patientRegSchema);
module.exports = patient_regSchema;