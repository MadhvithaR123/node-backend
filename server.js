const express = require("express")
// cros is used for communication which dosent allow unwanted server
const cors = require('cors');
const app = express()
const mango = require("mongoose")
const cookieParser = require('cookie-parser');

const router = require("./router/router")
app.use(express.json())
app.use(cors("*"));
app.use(router)
app.use((req, res, next) => {
    console.log(`Received a  request at `);
    next(); // Call next to pass control to the next middleware or route handler.
  });
  app.use(cookieParser());




mango.connect("mongodb://localhost:27017/madhvitha")
.then(()=>console.log("connected")).catch((e)=>console.log(e))





// app.get("/maddy",(req,res)=>{
//     console.log("get method")
//     res.send("hello")
// })
















app.listen(9845,()=>{

    console.log("server is started")
}) 

