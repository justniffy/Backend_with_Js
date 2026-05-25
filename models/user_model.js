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
    },
    role:{
        type:String,
        enum: ["user","admin"],
        default : "user",
    },
 
},
  {timestamps: true, versionKey : false},
);

const User = mongoose.model("User", user_schema);
module.exports = User;