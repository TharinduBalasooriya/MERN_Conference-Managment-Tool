const mongoose = require('mongoose');

const WorkshopProposalSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  date: { type: Date, default: Date.now, required: true },
  duration: { type: String, required: true, trim: true },
  status: { type: String, required: true, trim: true },
  conductorName: { type: String, required: true, trim: true },
  conductorPhone: { type: String, required: true, trim: true },
  conductorEmail: { type: String, required: true, trim: true },
});

const WorkshopProposal = mongoose.model('workshopproposal', WorkshopProposalSchema);
module.exports = WorkshopProposal;