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

 //get a WorkshopProposal 
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

//get accepted WorkshopProposal 
const getAcceptedWorkshopProposalsList = async (req, res) => {
    await WorkshopProposal.findOne({Status:"accepted"})
    .then( data => {
        res.status(200).send({data: data});
    })
    .catch( error => {
        res.status(500).send({error: error});
    });
 }

 //update WorkshopProposal proposal details
  const updateWorkshopProposal = async (req, res) => {
    if(req.params && req.params.id){
        await WorkshopProposal.findByIdAndUpdate(req.params.id , {$set: req.body}, {new: true})
            .then(response => {
                res.status(200).send({data: response});
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
        

 }

//update proposal status
const updateProposalStatus = async (req, res) => {
    if(req.params && req.params.id){
        await WorkshopProposal.findByIdAndUpdate(
        req.params.id,
        { status: "accepted" }
        )
        .then((response) => {
        res.status(200).send({ data: response });
        })
        .catch((error) => {
        res.status(500).send({ error: error.message });
        });
    }
  
};


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

//upload proposal pdf
const uploadProposal = (req, res) => {
    if(req.files === null ){
        return res.status(400).json({msg: "Upload Workshop Proposal PDF"});
    }

    const workshopProposal = req.files.file;

    workshopProposal.mv(`proposalUploads/${workshopProposal.name}`, err => {
        if(err){
            console.error(err);
           return res.status(500).send({res: err.message}); 
        }
        
        res.json({fileName: workshopProposal.name, filePath: `/proposalUploads/${workshopProposal.name}`})
    });
}

//download Templates
const downloadWorkshopTemplate =  function(req,res){
    const file = `templates/ICAF-Workshop-Template.pptx`;
    res.download(file); // Set disposition and send it.
}

module.exports = {
  createWorkshopProposal,
  getAllWorkshopProposalsDetails,
  getaWorkshopProposal,
  updateWorkshopProposal,
  deleteWorkshopProposal,
  updateProposalStatus,
  uploadProposal,
  downloadWorkshopTemplate,
  getAcceptedWorkshopProposalsList,
};