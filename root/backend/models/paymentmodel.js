var mongoose = require("mongoose");
//User Schema
var paymenterSchema = mongoose.Schema({
  name: String,
  email:String,
  mobileNumber: String,
  ammount:Number,
  remarks:String,



});
//Export Payment
module.exports = mongoose.model("paymentmodel", paymenterSchema);