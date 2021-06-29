const express = require('express');
const router = express.Router();
const controller = require('../controller/keyNote.controller');

module.exports = function(){
    router.post('/create', controller.createKeyNote);
    router.get('/', controller.getAllKeyNotes);
    router.get('/a/:id', controller.getAkeynote);
    router.delete('/delete/:id',controller.deleteKeynote);
    router.put('/update/:id',controller.updateKeynote);
    return router;
}