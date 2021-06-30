const express = require('express');
const router = express.Router();
//controllers
const conferencecontroller = require('../controller/conferenceController/conferenceDetail.controller');

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

module.exports = router;