const Workshop = require('../../models/workshop/workshop');
const WorkshopProposal = require('../../models/workshop/workshopProposal');

//create WorkshopProposal proposal
const createWorkshopProposal = (req, res ) => {
    if(req.body){
        const workshopProposal = new WorkshopProposal(req.body);
        workshopProposal.save() 
        .then((data) => {
            res.status(200).send({data: data});
        })
        .catch((error) => {
            res.status(500).send({error: error.message});
        });
    }
    
}

//get all WorkshopProposal proposal
const getAllWorkshopProposalsDetails = async (req, res) => {
    await WorkshopProposal.find({})
    .then( data => {
        res.status(200).send({data: data});
    })
    .catch( error => {
        res.status(500).send({error: error});
    });
 }

 //get a WorkshopProposal proposal
const getaWorkshopProposal = async (req, res) => {
    if(req.params && req.params.id){
        await WorkshopProposal.findById(req.params.id)
        .then(response => {
            res.status(200).send({data: response});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}

 //update WorkshopProposal proposal details
  const updateWorkshopProposal = async (req, res) => {

        await WorkshopProposal.findByIdAndUpdate(req.params.id , {$set: req.body}, {new: true})
        .then(response => {
            res.status(200).send({data: response});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });

 }




 //delete a WorkshopProposal proposal
 const deleteWorkshopProposal = async (req, res) => {
    if(req.params && req.params.id){
        await WorkshopProposal.findByIdAndRemove(req.params.id)
        .then(response => {
            res.status(200).send({data: response});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}

module.exports = {
    createWorkshopProposal,
    getAllWorkshopProposalsDetails,
    getaWorkshopProposal,
    updateWorkshopProposal,
    deleteWorkshopProposal
};