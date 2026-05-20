const mongoose = require("mongoose");


const user_schema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email :{
         type: String,
        required: true,
        unique: true
    },
    password:{
         type: String,
        required: true
    }
 
},
  {timestamps: true, versionKey : false},
);

const user = mongoose.model('user', user_schema);
module.exports = user;