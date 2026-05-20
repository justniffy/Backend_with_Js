

const sign_up = async(req,res) => {
    const{first_name, last_name,email,password} = req.bode;
    try{
        if(!first_name || !last_name || !email || !password){
            return res.status(400).json({message: "All fields are required"});
        }
    }catch(e){

    }
}