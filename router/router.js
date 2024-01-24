// express is used for server creation 
const express = require("express");
const router = express.Router();
const createemploye = require("../models/createemploye");
const User = require('../models/user')
// const register = require('../models/register')

// router is used for API call



// this is used for create employe
router.post("/createemploye", async (req, res) => {
  try {
    // const {empName,empDesignation,empEmail,empPhoneNumber,empCity} = req.body
    

    // const employe = new createemploye ({empName,empDesignation,empEmail,empPhoneNumber,empCity})
    console.log(req.body)
    const employe = new createemploye(req.body);


    const savedemploye = await employe.save();
    res.status(201).json(savedemploye);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  // const data = req.body; // This will contain the JSON data sent from the React app
  // console.log('Received data:', data);
  // // You can process the data here and send a response if needed
  // res.json({ message: 'Data received successfully' });
});

// this is used for list employe
router.get("/createemploye",async (req,res)=>{
    try{
        const employe = await createemploye.find()
        res.json(employe)
    } catch(e){
        res.status(500).json({error:e.message})

    }
    
})
// this is used for editemploye for particularid
router.get("/editemploye/:id",async(req,res)=>{
  try {
    // console.log(req.params.id)
    // params is used for fetch the URL id 
    let employe =  await createemploye.findById(req.params.id)
    console.log(employe)
    res.send(employe)
  } catch (e) {
    res.status(500).json({error:"cant fetch data"})
    
  }
})

// delete by id 

router.delete("/delete/:id",async(req,res)=>{

  try {
    const  removeemp = await createemploye.findByIdAndDelete(req.params.id)
  
    res.json({message:"successfully deleted"})

    
  } catch (error) {
    res.send("cannot find id") 
    console.log(error)
    
  }

})
router.put("/employe/:id",async(req,res)=>{
  try {
    
    const updatedemp = await createemploye.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedemp);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }


})

// Register a new user
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user1 = await User.findOne({ username })

    if(!user1){
      const user = new User({ username, password });
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    }else
    if(user1.username == username){
      return res.status(200).json({ message: 'User user already registred' });
    }
   
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ error: 'User registration failed' }) ;
  }
});

// Login a user
router.post('/login', async (req, res) => {
  
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    console.log(user)

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.password === password) {

      // Password matches, user is authenticated
    return  res.json({ message: 'Login successful' });
    } else {
     return res.status(401).json({ message: 'Invalid password' });
    }
  } catch (err) {
    console.error('Error logging in user:', err);
   return res.status(500).json({ error: 'Login failed' });
  }
});


module.exports = router;






























// router.get("/", (req, res) => {
//   console.log("get method");
//   res.send("How are you");
// });

// router.get("/palani", (req, res) => {
//   console.log("get method");
//   res.send("sad");
// });

// router.get("/maddy", (req, rep) => {
//   console.log("get method");
//   res.send("very happy");
// });

// router.post("/createemploye",(req,res)=>{
//     console.log(req)
//     console.log("post menthod",req.body)
//     res.send("monkey")
// })

// router.route("/createemploye").post((req,res)=>{
//     console.log(req.body)
//     res.send("monkey")
// })


