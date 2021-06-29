const express =  require('express');

const Researcher = require('../../models/researcher');



//add
const addReasearcher =  async function(req,res){

    if(req.body){

        const researcher_new = Researcher(req.body);

        try{

            let result = await researcher_new.save();
            res.status(200).send({result:result});


        }catch(err){
            res.status(500).send({error:err.message});
        }


    }
    
}

//GetAll

const getAllResearches = async function(req,res){

    try{
        let result = await Researcher.find({})


        res.status(200).send({result})

        
    }catch(err){
        res.status(500).send({error:err.message});

    }
}


//GetById

const getById = async function(req,res){

    try{
        
        let result = await Researcher.findById(req.params.id)
        res.status(200).send(result)

    }catch(err){

       
        res.status(500).send({error:err.message});


    }
}



//Delete

const deletePaper = async function(req,res){


    try{

        let result = await Researcher.deleteOne({_id:req.params.id})
        res.status(200).send(true)


    }catch(err){
        res.status(500).send({error:err.message});

        
    }
}



//Update



const updatePaper = async function(req,res){

    try{

        let paper = await Researcher.findById(req.params.id)

        paper.name = req.body.name;
        paper.email = req.body.email;
        paper.mobileNumber = req.body.mobileNumber;
        paper.topic = req.body.topic;
        paper.organization = req.body.organization;
        paper.status = req.body.status;
        paper.abstract = req.body.abstract;

        const result = await paper.save();
        res.status(200).send(result)



    }catch(err){

        res.status(500).send({error:err.message});


    }


} 

module.exports ={
    addReasearcher,
    getAllResearches,
    getById,
    deletePaper,
    updatePaper
}