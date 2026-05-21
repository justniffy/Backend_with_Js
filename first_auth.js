const express = require('express')
const morgan = require("morgan");

require("dotenv").config();
const app = express();

const connect_db = require('./config/db');
const user_route = require("./routes/user_route");

//middlewares
app.use(express.json());
app.use(morgan("dev"));


const port = process.env.PORT || 3000;

app.get('/', (req,res) =>{
    res.send("Hello world");
});
// routes
app.use("/api/user", user_route);



app.listen(port, () => {
    connect_db();
    console.log(`server is running on port ${port}`);
    
});