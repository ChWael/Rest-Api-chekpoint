const mongoose = require('mongoose');
require('dotenv').config({path:'./config/.env'})




const connectDB = async () => {
    try {
    await mongoose.connect(process.env.DB_CONNECTION, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('connected to DB');
    } catch (error) {
    console.log(error);
    }
};

module.exports = connectDB;