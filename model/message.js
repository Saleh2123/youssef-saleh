const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const roomscheme = new Schema({
patient:{type:String},
doctor:{type:String},
messages:{
    type:Array
}


})


const room = mongoose.model('room', roomscheme);
module.exports = room;