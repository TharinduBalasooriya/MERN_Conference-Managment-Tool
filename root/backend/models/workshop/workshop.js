const mongoose = require('mongoose');

const WorkshopSchema = new mongoose.Schema({
    workshopTitle: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    conductor: {type: String, required: true, trim: true},
    date: {type: Date, default: Date.now, required: true},
    time: {type: String, required: true, trim: true},
    status: {type: String, required: true, trim: true}
})

const Workshop = mongoose.model('workshop', WorkshopSchema);
module.exports = Workshop;