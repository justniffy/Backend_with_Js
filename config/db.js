const mongoose = require('mongoose');

const connect_db = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)   
        console.log('Connected to db');
        
    } catch(error){
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with an error code
    }
}

module.exports = connect_db;