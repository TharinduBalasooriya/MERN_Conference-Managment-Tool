const mongoose = require("mongoose");
//important dates schema
const importantDateSchema = mongoose.Schema({
  year: {type:Number, required:true},
  date: {type:Date, required:true},
  heading: String,
  description: String,
  status: String

});
//exporting important dates
module.exports = mongoose.model("importantDate", importantDateSchema);