const { response } = require('express');
const KeyNote = require('../models/keynote.model');
//Add new keyNote
const createKeyNote = async (req, res) => {
    if (req.body) {
        const keyNote = new KeyNote(req.body);
        await keyNote.save()
            .then(data => {
                res.status(200).send({ data: data });
            }).
            catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}
//get all Keynotes
const getAllKeyNotes = async (req, res) => {
    await KeyNote.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}
//Delete a keynote
const deleteKeynote = async (req, res) => {
    if (req.params && req.params.id) {
        await KeyNote.findByIdAndRemove(req.params.id)
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}
//Update a keynote
const updateKeynote = async (req, res) => {
    if (req.params && req.params.id) {
        await KeyNote.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//find one keynote
const getAkeynote = async(req,res) =>{
    if(req.params && req.params.id){
        await KeyNote.findById(req.params.id)
        .then(data =>{
            res.status(200).send({data:data});
        })
        .catch(error =>{
            res.status(500).send({error:error.message});
        });
    }
}

module.exports = {
    createKeyNote,
    getAllKeyNotes,
    deleteKeynote,
    updateKeynote,
    getAkeynote

}