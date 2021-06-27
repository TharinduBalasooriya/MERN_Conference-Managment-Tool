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
        await KeyNote.findOneAndDelete(req.params.id)
            .then(data => {
                res.status(200).send({ data: "Delete Success" });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}
//Update a keynote
const updateKeynote = async (req, res) => {
    if (req.params && req.params.id) {
        await KeyNote.findOneAndUpdate(req.params.id, {
            $set: req.body
        })
            .then(data => {
                res.status(200).send({ data: "Updated Succes..!" });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}


module.exports = {
    createKeyNote,
    getAllKeyNotes,
    deleteKeynote,
    updateKeynote

}