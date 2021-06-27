var mongoose = require("mongoose");
//User Schema
var userSchema = mongoose.Schema({
  username: String,
  email:String,
  password: String,
usertype:{
    type:String,
    default:"admin",
    required:true

}

});
//Export User Model
module.exports = mongoose.model("usermodel", userSchema);