// import express application
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
// import bcrypt module
const bcrypt = require("bcrypt");
// import axios module
const axios = require("axios");
// import multer module
const multer = require("multer");
// import path module
const path = require("path");
// import jwd module
const jwt = require('jsonwebtoken');
// import express-session module
const session = require('express-session');
// import module mongoose
const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/sportSoirDB');
// creates express application
const app = express();

// configuration de l'application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(path.join('backend/images')))
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + extension;
        cb(null, imgName);
    }
});
// 

const secretKey = 'your-secret-key';
app.use(session({
secret: secretKey,
}));
// Security configuration

app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader(

        "Access-Control-Allow-Headers",

        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"

    );

    res.setHeader(

        "Access-Control-Allow-Methods",

        "GET, POST, DELETE, PATCH, PUT"

    );

    next();

});
// DataBase Simulation base de donne statique pour travailler les donner
let matchesData = [
    { id: 1, teamOne: 'EST', teamTwo: 'CA', scoreOne: 1, scoreTwo: 1 },
    { id: 2, teamOne: 'ESS', teamTwo: 'CSS', scoreOne: 3, scoreTwo: 1 },
    { id: 3, teamOne: 'FCB', teamTwo: 'RMD', scoreOne: 4, scoreTwo: 2 },
    { id: 4, teamOne: 'ESS', teamTwo: 'RM', scoreOne: 0, scoreTwo: 1 },
    { id: 5, teamOne: 'FCB', teamTwo: 'CA', scoreOne: 4, scoreTwo: 2 },
];
playerData = [
    { id: 1, name: 'Messi', position: 'ART', age: 37 },
    { id: 2, name: 'Ali', position: 'ATK', age: 34 },
    { id: 3, name: 'Salah', position: 'ART', age: 30 }
];
teamsData = [
    { id: 1, name: 'css', fundation: '', staduim: 'rades' },
    { id: 2, name: 'est', fundation: '', staduim: 'elmanzeh' },
    { id: 3, name: 'ca', fundation: '', staduim: 'beja' },
    { id: 4, name: 'fcb', fundation: '', staduim: 'benzert' }
]
//   models importation 
// ("./models/match") c'est un path
const Match = require("./models/match")
const User = require("./models/user")
const Team = require("./models/team")
const Player = require("./models/player")
const Stadium = require("./models/stadium");

// business logic : Get  ALL Matches traitement...........................................
app.get("/matches", (req, res) => {
    console.log("here into BL: Get All Matches");
    // la derniere instruction  dans chaque traitement qui on peut l'envoyer c'est res.json
    // matches c'est l'attribut et matchesData c'est la valeur
    // res.json({matches:matchesData});

    // methode predefinie  find retourne un tableau d'objet 
    Match.find().then((docs) => {
        
        res.json({ matches: docs });
    })
})
// business logic : get match by id 
app.get("/matches/:id", (req, res) => {
    console.log(("here into BL: Get Match By ID"));
    Match.findById(req.params.id).then((doc) => {
        
        res.json({ match: doc })
    })
    // code du tableau statique..................................
    // let matchId = req.params.id;
    //  on a changer  boucle  for par la fonction predifinie find
    // for (let i = 0; i < matchesData.length; i++) {
    //     if (matchesData[i].id == matchId) {
    //         res.json({match: matchesData[i]})
    //     }

    // }
    // let findedMatch = matchesData.find((obj) =>{
    //     return obj.id == matchId;
    // });
    // res.json({match: findedMatch})
    // fin code du tableau statique...............................
});
// business logic: Add match
app.post("/matches", (req, res) => {
    console.log("here into BL : Add Match");
    let obj = new Match(req.body);
    obj.save();
    res.json({ msg: "Added with Success" });
    // console.log("here object from FE", obj);
    // matchesData.push(obj);
    // res.json({msg:"Added with success"})
});
// Business Logic : Delete match
app.delete("/matches/:id", (req, res) => {
    console.log(("here into BL: delete match"));
    let matchId = req.params.id;
    // la cle primaire _id  
    Match.deleteOne({ _id: matchId }).then((deleteResponse) => {
        console.log("here response after delete", deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ msg: "Deleted with success" })
        } else {
            res.json({ msg: "Error" })
        }

    });

    // for (let i = 0; i < matchesData.length; i++) {
    //    if (matchesData[i].id==matchId) {
    //     matchesData.splice(i,1);
    //     break;
    //    }

    // }
    // res.json({isDeleted:true})
});
// Business Logic : Edit Match 

app.put("/matches", (req, res) => {
    console.log("here into BL : edit Match");
    let newMatch = req.body;
    // .then retourner un reponse

    Match.updateOne({ _id: req.body._id }, newMatch).then((updateResponse) => {
        console.log(("here response after update", updateResponse));
        if (updateResponse.nModified == 1) {
            res.json({ isUpdated: true });
        } else {
            res.json({ isUpdated: false });
        }

    })
    //    console.log("new ", newMatch);
    //     for (let i = 0; i < matchesData.length; i++) {
    //        if (matchesData[i].id==newMatch.id) {
    //         matchesData[i] = newMatch;
    //         break;
    //        }

    //     } 
    //     res.json({msg:"edited with success"});
});

// business logic : Get  ALL Players traitement...................................................
app.get("/players",(req, res) => {
    console.log("here into BL: Get All Players");
    // la derniere instruction  dans chaque traitement qui on peut l'envoyer c'est res.json
    // matches c'est l'attribut et matchesData c'est la valeur
    // res.json({players:playerData});

    Player.find().then((docs) => {
        res.json({ players: docs });
    })
})
// business logic : get player by id 
app.get("/players/:id", (req, res) => {
    console.log(("here into BL: Get player By ID"));
    Player.findById(req.params.id).then((doc) => {
        res.json({ player: doc })
    })
    // let playerId = req.params.id;
    // for (let i = 0; i < playerData.length; i++) {
    //     if (playerData[i].id == matchId) {
    //         res.json({match: playerData[i]})
    //     }

    // }
    // let findedPlayer = playerData.find((obj) =>{
    //     return obj.id == playerId;
    // });
    // res.json({player: findedPlayer})
});
// business logic: Add player........................
app.post("/players", multer({storage:storageConfig}).single("img"), (req, res) => {
    console.log("here into BL : Add player",req.body);
    
    Team.findById(req.body.idTeam).then((team)=>{
        if (!team) {
            return res.json({message:"Team not found"})
        }
        const player = new Player({
            position: req.body.position,
            namePlayer: req.body.namePlayer,
            number: req.body.number,
            age: req.body.age,
            team: team._id,   
            avatar : `http://localhost:3000/images/${req.file.filename}`
        });
        player.save((err,doc)=>{
            team.players.push(player);
            team.save();
            res.json({msg:"player added with success"});
        });
    });
    // console.log("here object from FE", obj);
    // playerData.push(obj);
    // res.json({msg:"Added with success"})
});

// Business Logic : Delete player
app.delete("/players/:id", (req, res) => {
    console.log(("here into BL: delete match"));
    let playerId = req.params.id;
    Player.deleteOne({ _id: playerId }).then((deleteResponse) => {
        console.log("here response after delete", deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ msg: "isDeleted with success" })
        } else {
            res.json({ msg: "Error" })
        }
    })
    // for (let i = 0; i < playerData.length; i++) {
    //    if (playerData[i].id==playerId) {
    //     playerData.splice(i,1);
    //     break;
    //    }

    // }
    // res.json({isDeleted:true})
});
// Business Logic : Edit Match 

app.put("/players", (req, res) => {
    console.log("here into BL : edit Player");
    let newPlayer = req.body;
    Player.updateOne({ _id: req.body._id }, newPlayer).then((updateResponse) => {
        console.log(("here response after update", updateResponse));
        if (updateResponse.nModified == 1) {
            res.json({ isUpdated: true });
        } else {
            res.json({ isUpdated: false });
        }

    })
    //     let newPlayer = req.body;
    //    console.log("new ", newPlayer);
    //     for (let i = 0; i < playerData.length; i++) {
    //        if (playerData[i].id==newPlayer.id) {
    //         playerData[i] = newPlayer;
    //         break;
    //        }

    //     } 
    //     res.json({msg:"edited with success"});
});


// Business logic teams...................................................................
// business logic : Get  ALL Teams
app.get("/teams", (req, res) => {
    console.log("here into BL: Get All Teams");
    // res.json({teams:teamsData});

    Team.find().populate("players").populate("stadium").then((docs) => {
        res.json({ teams: docs });
    })
})
// business logic : get teams by id 
app.get("/teams/:id", (req, res) => {
    console.log(("here into BL: Get team By ID"));

    Team.findById(req.params.id).then((doc) => {
        res.json({ team: doc })
    })
    // let teamId = req.params.id;
    // for (let i = 0; i < matchesData.length; i++) {
    //     if (matchesData[i].id == matchId) {
    //         res.json({match: matchesData[i]})
    //     }

    // }
    // let findedTeam = teamsDataData.find((obj) =>{
    //     return obj.id == teamId;
    // });
    // res.json({team: findedTeam})
});
// business logic: Add teams

// app.post("/teams", (req, res) => {
//     console.log("here into BL : Add team",req.body);
    
//     Stadium.findById(req.body.idStaduim).then((stadium)=>{
//         if (!stadium) {
//             return res.json({message:"Staduim not found"})
//         }
    
//         const team = new Team({
//             nameTeam: req.body.nameTeam,
//             fundation: req.body.fundation,
//             stadium: req.body.stadium,
//             owner: req.body.owner,
//             stadium: stadium._id,   
           
//         });
      
        
//         team.save((err,doc)=>{
//             stadium.team = team._id
//             stadium.save();
//             res.json({msg:"staduim added with success"});
//         });
//     });


    // console.log("here object from FE", obj);
    // playerData.push(obj);
    // res.json({msg:"Added with success"})
// });
app.post("/teams", (req, res) => {
    console.log("here into BL : Add team");
    Stadium.findById(req.body.sId).then((stadium)=>{
        console.log("here founded staduim",stadium);
        if (!stadium) {
            res.json({msg: "staduim not founded"})
        } else {
            let team = new Team({
                nameTeam:req.body.nameTeam,
                owner: req.body.owner,
                fundation:req.body.fundation,
                stadium : stadium._id
            })
            team.save((err,doc)=>{
            if (err) {
                res.json({msg:"error"})
            } else {
               stadium.team = doc._id;
               stadium.save()
               res.json({ msg: "Added with success" })
            }
            })
        }
        
    })
    // let obj = new Team(req.body);
    // obj.save();
    // res.json({ msg: "Added with success" })

//     // let obj = req.body;

//     // console.log("here object from FE", obj);
//     // teamsData.push(obj);
//     // res.json({msg:"Added with success"})
 });
// Business Logic : Delete team
app.delete("/teams/:id", (req, res) => {
    console.log(("here into BL: delete team"));
    let teamId = req.params.id;
    Team.deleteOne({ _id: teamId }).then((deleteResponse) => {
        console.log("here response after delete", deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ msg: "isDeleted with success" })
        } else {
            res.json({ msg: "Error" })
        }
    })

    // for (let i = 0; i < teamsData.length; i++) {
    //    if (teamsData[i].id==teamId) {
    //     teamsData.splice(i,1);
    //     break;
    //    }

    // }
    // res.json({isDeleted:true})
});
// Business Logic : Edit teams

app.put("/teams", (req, res) => {
    console.log("here into BL : edit team");
    let newTeam = req.body;
    Team.updateOne({ _id: req.body._id }, newTeam).then((updateResponse) => {
        console.log(("here response after update", updateResponse));
        if (updateResponse.nModified == 1) {
            res.json({ isUpdated: true });
        } else {
            res.json({ isUpdated: false });
        }

    });
    // let newTeam = req.body;
    // console.log("new ", newTeam);
    //  for (let i = 0; i < teamsData.length; i++) {
    //     if (teamsData[i].id==newTeam.id) {
    //      teamsData[i] = newTeam;
    //      break;
    //     }

    //  } 
    //  res.json({msg:"edited with success"});
});

  // business logic : Get All Team Information fnt poour recuperer les information player dans team
  app.get("/teams/:teamId/info",(req,res)=>{
    console.log("here into BL: Get All Team Infos", req.params.teamId);
    Team.findOne({_id: req.params.teamId})
    .populate("players").then((docs)=>{
        console.log("here teams",docs);
        res.json({x:docs})
    })
})
// business logic: Add Staduim........................
app.get("/staduim", (req, res) => {
    console.log("here into BL: Get All Staduim");
    // res.json({teams:teamsData});

    Stadium.find().then((docs) => {
        res.json({ staduims: docs });
    })
})
// business logic: Add Staduim........................
app.post("/staduim", (req,res)=>{
    console.log("here into BL : Add staduim",req.body);
    let stadium = new Stadium(req.body)
    stadium.save((err,doc)=>{
       if (err) {
        res.json({msg:"Error"})
       } else {
        res.json({msg:"success"})
       }
    })
})


// app.post("/staduims", (req, res) => {
//     console.log("here into BL : Add staduim",req.body);
//     Team.findById(req.body.idTeam).then((team)=>{
//         if (!team) {
//             return res.json({message:"Team not found"})
//         }
//         const stadium = new Stadium({
//             name: req.body.name,
//             country: req.body.country,
//             capacity: req.body.capacity,
//             team: team._id,   
           
//         });
//         stadium.save((err,doc)=>{
//             team.stadium = stadium._id
//             team.save();
//             res.json({msg:"stadium added with success"});
//         });
//     });

// });

// business logic : user.............................................................................
// business logic : login
app.post("/users/login", (req, res) => {
    console.log("here into BL :login", req.body);
    let result;
    User.findOne({ email: req.body.email }).then((doc) => {
        console.log("here finded User by email", doc);
        if (!doc) {
            res.json({ msg: "please check your email" })
        }
        else   {
        result = doc;
        bcrypt.compare(req.body.pwd, doc.pwd) .then((pwdCompare) => {
        console.log("here pwdCompare", pwdCompare);
        if (pwdCompare) {
                // If the user is valid, generate a JWT token
             const token = jwt.sign({ 
               firstName: result.firstName, 
               lastName: result.lastName,
               id: result._id, 
               role:result.role },
        secretKey, { expiresIn:'1h' });
                res.json({
                    msg: "welcome",
                    token:token
                })
            } else {
                res.json({ msg: "please check your pwd" })
            }
        }) 
        }
       
    })
   
    // User.findOne({email:req.body.email, pwd:req.body.pwd}).then((doc) =>{
    //     console.log(("here response after Added", doc));
    //    if (doc) {
    //     res.json({msg:true})
    //    } else {
    //     res.json({msg:false})
    //    }
    // })

});
// business logic : sign up
app.post("/users/subscription", multer({ storage: storageConfig }).single("img"), (req, res) => {
    console.log("here into BL :sign up", req.body);
    User.findOne({ email: req.body.email }).then((doc) => {
        // if (doc) {
        //   res.json({msg:"oops, Email Exist"})  
        // }
        if (doc) {
            res.json({ msg: "oops, Email Exist" })
        } else {
            bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
                console.log("here crypted pwd", cryptedPwd);
                req.body.pwd = cryptedPwd;
                req.body.avatar = `http://localhost:3000/images/${req.file.filename}`
                let user = new User(req.body);
                user.save((err, doc) => {
                    if (err) {
                        res.json({ msg: "failed" })
                    } else {
                        res.json({ msg: " Added with success" })
                    }
                });
            });
        }
    })
});

//Business Logic: get all users
app.get("/users", (req, res) => {
    console.log("here into BL: Get All Users");

    User.find().then((docs) => {
        res.json({ users: docs });
    })
})

// business logic weather : post weather
app.post("/weathers", (req, res) => {
    console.log("here to BL: weather", req.body);

    let key = "fd3e45c53360a58596ea7a7156511904"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${key}`
    axios.get(apiUrl).then((response) => {
        console.log("here API response", response.data);
        let weatherToSend = {
            temperature: response.data.main.temp,
            pressure: response.data.main.pressure,
            humidity: response.data.main.humidity,
            speed: response.data.wind.speed,
            icone: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        };
        res.json({ result: weatherToSend })
    });
});

// je peux importer l'application d'autre fichier
// make app importable from another files
module.exports = app;