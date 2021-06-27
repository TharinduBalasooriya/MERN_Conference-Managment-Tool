const express = require('express');
const router = express.Router();
const controller = require('../../controller/workshopController/workshopController');

module.exports = function(){
    router.post('/create-workshop', controller.createWorkshop);
    router.get('/', controller.getAllWorkshopsDetails);
    router.get('/:id', controller.getaWorkshop);
    router.put('/:id', controller.updateWorkshop);
    router.delete('/:id', controller.deleteWorkshop);

    return router;
}