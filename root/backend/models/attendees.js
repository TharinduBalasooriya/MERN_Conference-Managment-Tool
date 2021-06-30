const mongoose = require("mongoose");
//conference details schema
const attendeesSchema = mongoose.Schema({
  email: String,
  name: String,
  mobile: String,
  paid: Boolean
});

//exporting conferencedetails
module.exports = mongoose.model("attendees", attendeesSchema);