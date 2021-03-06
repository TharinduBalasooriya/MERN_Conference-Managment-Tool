const Workshop = require('../../models/workshop/workshop');

//create workshop
const createWorkshop = (req, res) => {
    if(req.body){
        const workshop = new Workshop(req.body);
        workshop.save()
        .then((data) => {
            res.status(200).send({data: data});
        })
        .catch((error) => {
            res.status(500).send({error: error.message});
        });
    }
}

//get all workshops details
const getAllWorkshopsDetails = async (req, res) => {
    await Workshop.find({})
    .then( data => {
        res.status(200).send({data: data});
    })
    .catch( error => {
        res.status(500).send({error: error});
    });
 }

//get a workshop
const getaWorkshop = async (req, res) => {
    if(req.params && req.params.id){
        await Workshop.findById(req.params.id)
        .then(response => {
            res.status(200).send({data: response});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}

 //update workshop details
  const updateWorkshop = async (req, res) => {
    
    await Workshop.findByIdAndUpdate(req.params.id , {$set: req.body}, {new: true})
        .then(response => {
            res.status(200).send({data: response});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
}

     //delete a workshop
const deleteWorkshop = async (req, res) => {
    if(req.params && req.params.id){
        await Workshop.findByIdAndRemove(req.params.id)
        .then(response => {
            res.status(200).send({data: response});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}



 module.exports = {
     createWorkshop,
     getAllWorkshopsDetails,
     getaWorkshop,
     updateWorkshop,
     deleteWorkshop
 };