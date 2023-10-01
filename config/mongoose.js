
const mongoose = require('mongoose');
require('dotenv').config();

// These set of line can be written in async await fashion, but I have followed the documentation. 
mongoose.connect(process.env.MONGODB_URI).then(()=>{
     console.log('connection successful');
 }).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

// db.on('error', console.error.
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open',  function(){
     console.log('Connected to Database :: MongoDB');
});


module.exports = db;
