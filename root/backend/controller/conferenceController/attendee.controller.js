const Attendee = require('../../models/attendees');

//add Attendee detail
const addAttendee =  async (req,res) => {
    if(req.body){
        let attendee = new Attendee(req.body);
        await attendee.save()
        .then((data) => {
            res.status(200).send({data: data});
        })
        .catch((error) => {
            res.status(500).send({error: error.message});
        });


    }
    
}

//get all Attendee details
const getAttendees = async (req, res) => {
     await Attendee.find({})
    .then( data => {
        res.status(200).send({data: data});
    })
    .catch( error => {
        res.status(500).send({error: error});
    });
 }

//get Attendee details
const getAttendee = async (req, res) => {
    if(req.params && req.params.id){
        await Attendee.findById(req.params.id)
        .then(data => {
            res.status(200).send({data: data});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}

//edit Attendee details
const editAttendee = async (req, res) => {
    try{
        let attendee = await Attendee.findById(req.params.id)
        attendee.name = req.body.name;
        attendee.email = req.body.email;
        attendee.mobile = req.body.mobile;
        attendee.paid = req.body.paid;
        let result = await attendee.save();
        res.status(200).json(result);
    }catch(err){
        res.status(500).send({error:err.message})
    }
}

//delete Attendee detail
const deleteAttendee = async (req, res) => {
    if(req.params && req.params.id){
        await Attendee.deleteOne({_id: req.params.id})
        .then(data => {
            res.status(200).send({data: data});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}

module.exports ={
    addAttendee,
    getAttendees,
    getAttendee,
    editAttendee,
    deleteAttendee
}