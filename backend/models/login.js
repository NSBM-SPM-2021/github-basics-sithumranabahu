const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userRegSchema = new Schema({
    userName: {
        type: String,
    },

    password: {
        type: String,
        required: true,
    },
    
    userType: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        required: true,
    },


    timeStamp: {
        type: String,
        required: true
    },

});
const user_regSchema = mongoose.model('user', userRegSchema);
module.exports = user_regSchema;