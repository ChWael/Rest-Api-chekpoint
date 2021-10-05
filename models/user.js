const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name : {
        type : String
    },
    age : {
        type :Number
    },
    email : {
        type : String,
        unique : true
    },
    phone : {
        type : Number
    },
    address : {
        type : String
    }
})
module.exports= user= mongoose.model('user', userSchema)