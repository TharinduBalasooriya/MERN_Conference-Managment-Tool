const express = require('express');
const router = express.Router();
const controller = require('../../controller/workshopController/workshopProposalController');

    router.post('/create-workshopproposal', controller.createWorkshopProposal);
    router.get('/', controller.getAllWorkshopProposalsDetails);
    router.get('/:id', controller.getaWorkshopProposal);
    router.put('/:id', controller.updateWorkshopProposal);
    router.delete('/:id', controller.deleteWorkshopProposal);
    router.put('/status/:id', controller.updateProposalStatus);
    router.post('/upload', controller.uploadProposal);
    router.get('/workshoplist', controller.getAcceptedWorkshopProposalsList);

    module.exports = router;
    
