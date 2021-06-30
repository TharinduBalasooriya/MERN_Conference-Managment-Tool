const express = require('express');
const router = express.Router();
//controllers
const attendeecontroller = require('../controller/conferenceController/attendee.controller');
const conferencecontroller = require('../controller/conferenceController/conferenceDetail.controller');
const importantDateController = require('../controller/conferenceController/importantDates.controller');

//get all conference details
router.route("/attendee").get(attendeecontroller.getAttendees);
//get a conference detail
router.route("/attendee/:id").get(attendeecontroller.getAttendee);
//add conference detail
router.route("/attendee").post(attendeecontroller.addAttendee);
//edit conference detail
router.route("/attendee/:id").patch(attendeecontroller.editAttendee);
//delete conference detail
router.route("/attendee/:id").delete(attendeecontroller.deleteAttendee);

//get all conference details
router.route("/").get(conferencecontroller.getConferenceDetails);
//get a conference detail
router.route("/:id").get(conferencecontroller.getConferenceDetail);
//add conference detail
router.route("/").post(conferencecontroller.addConferenceDetail);
//edit conference detail
router.route("/:id").patch(conferencecontroller.editConferenceDetails);
//delete conference detail
router.route("/:id").delete(conferencecontroller.deleteConferenceDetail);

//get all dates
router.route("/dates").get(importantDateController.deleteImportantDates);
//get a date
router.route("/dates/:year").get(importantDateController.getImportantDate);
//add date
router.route("/dates").post(importantDateController.addImportantDates);
//edit date
router.route("/dates/:id").patch(importantDateController.editImportantDates);
//delete date
router.route("/dates/:id").delete(importantDateController.deleteImportantDates);

module.exports = router;