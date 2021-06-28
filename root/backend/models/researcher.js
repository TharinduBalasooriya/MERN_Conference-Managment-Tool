var mongoose = require("mongoose");
//User Schema
var researcherSchema = mongoose.Schema({
  name: String,
  email:String,
  mobileNumber: String,
  topic:String,
  organization:String,
status:{
    type:String,
    default:"pending",
   

},
abstract:String,


});
//Export User Model
module.exports = mongoose.model("Researchermodel", researcherSchema);