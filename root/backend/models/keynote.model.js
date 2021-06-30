const mongoose = require('mongoose');

const KeyNoteSchema = new mongoose.Schema({
    speaker:{type:String,required:true,trim:true},
    speakerInfo:{type:String,required:true,trim:true},
    keynoteTitle:{type:String, required:true,trim:true},
    keynote:{type:String, required:true,trim:true},
    status:{type:String, required:true,trim:true}
    });

const KeyNote = mongoose.model('KeyNotes',KeyNoteSchema);
module.exports = KeyNote;