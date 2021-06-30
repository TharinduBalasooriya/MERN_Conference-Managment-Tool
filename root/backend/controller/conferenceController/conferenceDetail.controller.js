const Conference = require('../../models/conferencedetail');

//add conference detail
const addConferenceDetail =  async (req,res) => {
    if(req.body){
        let conference = new Conference(req.body);
        await conference.save()
        .then((data) => {
            res.status(200).send({data: data});
        })
        .catch((error) => {
            res.status(500).send({error: error.message});
        });


    }
    
}

//get all conference details
const getConferenceDetails = async (req, res) => {
    let conference = await Conference.find({})
    .then( data => {
        res.status(200).send({data: data});
    })
    .catch( error => {
        res.status(500).send({error: error});
    });
 }

//get conference details
const getConferenceDetail = async (req, res) => {
    if(req.params && req.params.id){
        await Conference.findById(req.params.id)
        .then(data => {
            res.status(200).send({data: data});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}

//edit conference details
const editConferenceDetails = async (req, res) => {
    try{
        let conference = await Conference.findById(req.params.id)
        conference.name = req.body.name;
        conference.conferenceDates = req.body.conferenceDates;
        conference.description = req.body.description;
        conference.workshopDeadline = req.body.workshopDeadline;
        conference.conferencePaperDeadline = req.body.conferencePaperDeadline;
        conference.attendeeRegistrationDeadline = req.body.attendeeRegistrationDeadline;
        let result = await conference.save();
        res.status(200).json(result);
    }catch(err){
        res.status(500).send({error:err.message})
    }
}

//delete conference detail
const deleteConferenceDetail = async (req, res) => {
    if(req.params && req.params.id){
        await Conference.deleteOne({_id: req.params.id})
        .then(data => {
            res.status(200).send({data: data});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}

module.exports ={
    addConferenceDetail,
    getConferenceDetails,
    getConferenceDetail,
    editConferenceDetails,
    deleteConferenceDetail
}