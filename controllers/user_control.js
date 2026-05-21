const User = require("../models/user_model");
const bcrypt = require("bcrypt");


const sign_up = async(req,res) => {
    const{first_name, last_name,email,password} = req.body;
    try{
        if(!first_name || !last_name || !email || !password){
            return res.status(400).json({message: "All fields are required"});
        }
        const user = await User.findOne({email});
        if (user){
            return res.status(400).json({message: "User already exists"});
        }
        
    const hashed_password = await bcrypt.hash(password, 10);
        const new_user = await User.create({first_name,last_name,email, password: hashed_password});
        return res
        .status(201)
        .json({message : "user created successfully", User: new_user});
    }catch(e){
        console.log(e);
        return res.status(500).json({message : "internal server error"});
    }
}
 
const sign_in = async(req,res) =>{
    const{email,password} = req.body;
    try{
       if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const is_match = await bcrypt.compare(password, user.password);
    if (!is_match) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    return res
      .status(200)
      .json({ message: "User signed in successfully", user });
    }catch(e){
         console.log(e)
         return res.status(500).json({message: "Internal server error"});
    }
}


module.exports = {
    sign_up,
    sign_in
};