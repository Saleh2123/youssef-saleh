const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const packagechema = new Schema({
 name:{
    type:String
 },
 price:{
    type:String
 }



})


const package = mongoose.model('package', packagechema);
module.exports = package;