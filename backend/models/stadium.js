// import mongoose module
const mongoose = require("mongoose");

// create team schema
const stadiumSchema = mongoose.Schema({
  name:String,
  country:String,
  capacity:Number,
  
   team:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team"
   } 
    });
    


// create team Model
const Stadium = mongoose.model("Stadium", stadiumSchema);

// export team
module.exports = Stadium;