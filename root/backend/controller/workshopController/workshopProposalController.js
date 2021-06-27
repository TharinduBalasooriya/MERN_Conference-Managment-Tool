const WorkshopProposalProposal = require('../../models/workshop/workshopProposal');

//create WorkshopProposal proposal
const createWorkshopProposalProposal = async (req, res ) => {
    if(res.body){
        const WorkshopProposalProposal = new WorkshopProposalProposal();
        WorkshopProposalProposal.save() 
        .then((data) => {
            res.status(200).send({data: data});
        })
        .catch((error) => {
            res.status(500).send({error: error.message});
        });
    }
    
}

//get all WorkshopProposal proposal
const getAllWorkshopProposalProposalsDetails = async (req, res) => {
    await WorkshopProposalProposal.find({})
    .then( data => {
        res.status(200).send({data: data});
    })
    .catch( error => {
        res.status(500).send({error: error});
    });
 }

 //get a WorkshopProposal proposal
const getaWorkshopProposalProposal = async (req, res) => {
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
  const updateWorkshopProposalProposal = async (req, res) => {
     if(req.body){
         const WorkshopProposal = new WorkshopProposal();
         WorkshopProposal.title = req.body.title;
         WorkshopProposal.description = req.body.description;
         WorkshopProposal.date = req.body.date;
         WorkshopProposal.duration = req.body.duration;
         WorkshopProposal.status = req.body.status;
         WorkshopProposal.conductorName = req.body.conductorName;
         WorkshopProposal.conductorPhone = req.body.conductorPhone;
         WorkshopProposal.conductorEmail = req.body.conductorEmail;


         WorkshopProposal.updateOne({_id: req.params._id})
         .then(data => {
            res.status(200).send({data: data});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });

     }
 }

 //delete a WorkshopProposal proposal
 const deleteWorkshopProposalProposal = async (req, res) => {
    if(req.params && req.params.id){
        await WorkshopProposalProposal.findByIdAndRemove(req.params.id)
        .then(response => {
            res.status(200).send({data: response});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}

module.exports = {
    createWorkshopProposalProposal,
    getAllWorkshopProposalProposalsDetails,
    getaWorkshopProposalProposal,
    updateWorkshopProposalProposal,
    deleteWorkshopProposalProposal
};