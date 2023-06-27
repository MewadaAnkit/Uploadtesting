const mongoose = require('mongoose');

const uploadSchema = mongoose.Schema({
    title:{
         type:String,
    },
    image:{
        type:String
    }
});

const Uploads = mongoose.model('uploads',uploadSchema);

module.exports = Uploads;