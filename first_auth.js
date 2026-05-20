const express = require('express')
const morgan = require("morgan");
const connect_db = require('./config/db');
require("dotenv").config();
const app = express();




const port = process.env.PORT || 3000;

app.get('/', (req,res) =>{
    res.send("Hello world");
});



app.listen(port, () => {
    connect_db();
    console.log(`server is running on port ${port}`);
    
});