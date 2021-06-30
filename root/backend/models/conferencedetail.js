const mongoose = require("mongoose");
//conference details schema
const conferenceDetailsSchema = mongoose.Schema({
  name: String,
  conferenceDates:[Date],
  venue:String,
  description: String,
  workshopDeadline: Date,
  conferencePaperDeadline: Date,
  attendeeRegistrationDeadline: Date,
  status: String

});
//exporting conferencedetails
module.exports = mongoose.model("conferenceDetails", conferenceDetailsSchema);