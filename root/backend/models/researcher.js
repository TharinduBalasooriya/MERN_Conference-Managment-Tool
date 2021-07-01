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
filename:{

  type:String,
  default:"CA-3.pdf",

}


});
//Export User Model
module.exports = mongoose.model("Researchermodel", researcherSchema);