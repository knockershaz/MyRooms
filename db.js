const mongoose = require('mongoose')

var mongoURL = 'mongodb+srv://saquib:My1stMongoproject@cluster0.ufnyqkg.mongodb.net/test'

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true});

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log("Mongo DB connection Failed")
})
connection.on('connected', ()=>{
    console.log("Mongo DB connection Successful")
})

module.exports = mongoose