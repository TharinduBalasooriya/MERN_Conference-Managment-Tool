const Importantdates = require('../../models/importantdates');

//add importantdates detail
const addImportantDates =  async (req,res) => {
    if(req.body){
        let importantDates = new Importantdates(req.body);
        await importantDates.save()
        .then((data) => {
            res.status(200).send({data: data});
        })
        .catch((error) => {
            res.status(500).send({error: error.message});
        });


    }
    
}

//get all importantdates details
const getImportantDates= async (req, res) => {
    await Importantdates.find({})
    .then( data => {
        res.status(200).send({data: data});
    })
    .catch( error => {
        res.status(500).send({error: error});
    });
 }

//get importantdates details
const getImportantDate = async (req, res) => {
    if(req.params && req.params.year){
        await Importantdates.find({year: req.params.year})
        .then(data => {
            res.status(200).send({data: data});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}

//edit importantdates details
const editImportantDates = async (req, res) => {
    try{
        let importantDates = await Importantdates.findById({_id: req.params.id})
        importantDates.year = req.body.year;
        importantDates.date = req.body.date;
        importantDates.heading = req.body.heading;
        importantDates.description = req.body.description;
        let result = await importantDates.save();
        res.status(200).json(result);
    }catch(err){
        res.status(500).send({error:err.message})
    }
}

//delete importantdates detail
const deleteImportantDates = async (req, res) => {
    if(req.params && req.params.id){
        await importantDates.deleteOne({_id: req.params.id})
        .then(data => {
            res.status(200).send({data: data});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}

module.exports ={
    addImportantDates,
    getImportantDates,
    getImportantDate,
    editImportantDates,
    deleteImportantDates
}