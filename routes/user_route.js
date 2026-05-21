const express =require("express");
const { sign_up, sign_in } = require("../controllers/user_control");
const router = express.Router(); 


router.post('/sign_up',sign_up) 
router.post('/sign_in',sign_in)


module.exports = router;