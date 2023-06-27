const mongoose = require('mongoose');
const DB = "mongodb+srv://ankit:ankit@cluster0.frs7thz.mongodb.net/"

mongoose.connect( DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
     console.log('Successfully Connected to Database')
}).catch((err)=>console.log(err));


module.exports = require;