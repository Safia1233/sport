// import mongoose module
const mongoose = require("mongoose");

// create user schema
const userSchema = mongoose.Schema({
  firstName:String,
  lastName:String,
  email:String,
  pwd:String,
  role:String,
  avatar:String,
  
});

// create user Model
const user = mongoose.model("User", userSchema);

// export user
module.exports = user;