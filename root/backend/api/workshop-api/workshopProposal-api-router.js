const express = require('express');
const router = express.Router();
const controller = require('../../controller/workshopController/workshopProposalController');

module.exports = function(){
    router.post('/create-workshopproposal', controller.createWorkshopProposalProposal);
    router.get('/', controller.getAllWorkshopProposalProposalsDetails);
    router.get('/:id', controller.getaWorkshopProposalProposal);
    router.put('/:id', controller.updateWorkshopProposalProposal);
    router.delete('/:id', controller.deleteWorkshopProposalProposal);

    return router;
}