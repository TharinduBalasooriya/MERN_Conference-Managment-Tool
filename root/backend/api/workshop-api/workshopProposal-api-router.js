const express = require('express');
const router = express.Router();
const controller = require('../../controller/workshopController/workshopProposalController');

    router.post('/create-workshopproposal', controller.createWorkshopProposal);
    router.get('/', controller.getAllWorkshopProposalsDetails);
    router.get('/:id', controller.getaWorkshopProposal);
    router.put('/:id', controller.updateWorkshopProposal);
    router.delete('/:id', controller.deleteWorkshopProposal);

    module.exports = router;
    
