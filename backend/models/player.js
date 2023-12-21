// import mongoose module
const mongoose = require("mongoose");

// create player schema
const playerSchema = mongoose.Schema({
  namePlayer:String,
  number:Number,
  age:Number,
  position:String,
  avatar:String,
  team:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Team"
  }
  
});

// create player Model
const player = mongoose.model("Player", playerSchema);

// export player
module.exports = player;