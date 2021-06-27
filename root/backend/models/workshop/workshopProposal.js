const mongoose = require('mongoose');

const WorkshopProposalSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    date: {type: Date, default: Date.now, required: true},
    duration: {type: Date, default: Date.now, required: true},
    status: {type: String, required: true, trim: true},
    conductorName: {type: String, required: true, trim: true},
    conductorPhone: {type: Number, required: true, trim: true},
    conductorEmail: {type: String, required: true, trim: true}

})

const WorkshopProposal = mongoose.model('workshopProposal', WorkshopProposalSchema);
module.exports = WorkshopProposal;