const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let rides = [];

// LOGIN
app.post("/login",(req,res)=>{
  res.json({msg:"OTP Verified ✅"});
});

// BOOK RIDE
app.post("/book",(req,res)=>{
  rides.push(req.body);
  res.json({msg:"Ride Booked 🚴"});
});

// GET RIDES
app.get("/rides",(req,res)=>{
  res.json(rides);
});

// CANCEL RIDE
app.delete("/cancel",(req,res)=>{
  rides.pop();
  res.json({msg:"Ride Cancelled ❌"});
});

app.listen(3000,()=>{
  console.log("Server running on http://localhost:3000 🚀");
});