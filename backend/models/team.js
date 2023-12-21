// import mongoose module
const mongoose = require("mongoose");

// create team schema
const teamSchema = mongoose.Schema({
  nameTeam:String,
  fundation:Number,

  owner:String,
  players: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player"
    }],
   stadium:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stadium"
   } 
    });
    


// create team Model
const team = mongoose.model("Team", teamSchema);

// export team
module.exports = team;