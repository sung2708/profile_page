var mongoose = require('mongoose');
require('dotenv').config();

var connectDB =  async ()=>{
    try{
        await mongoose.connect(process.env.DB_URI,{
            dbName: process.env.DB_NAME,
        });
        console.log("DB connected");
    }
    catch(error){
        console.log("Connect error ", error);
    }
}

module.exports = connectDB;
