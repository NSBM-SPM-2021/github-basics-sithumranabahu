const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appoimentRegSchema = new Schema({
    patientId: {
        type: String,
    },

    patientName: {
        type: String,
        required: true,
    },

    doctorID: {
        type: String,
        required: true,
    },

    date:{
        type: String,
        required: true,
        unique
    },

    time:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },
  
    status:{
        type: String,
        required: true
    },

    timeStamp: {
        type: String,
        required: true
    },

});
const appoiment_regSchema = mongoose.model('appoiment', appoimentRegSchema);
module.exports = appoiment_regSchema;