const express =  require('express');


const Researcher = require('../../models/researcher');

const Payment = require('../../models/paymentmodel')
const sgMail = require('@sendgrid/mail');


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
//Upload File



const uploadFile =  function(req,res){

    if (req.files === null) {
        return res.status(400).json({ msg: 'Please upload your Researchpaper' });
      }


      const paper =  req.files.file;

      paper.mv(`papers/${paper.name}`, err => {
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }
    
        res.json({ fileName: paper.name, filePath: `/papers/${paper.name}` });
      });
    

}


//download Templates

const downloadPaperTemplate =  function(req,res){
    const file = `templates/ICAF-Paper-Template.docx`;
    res.download(file); // Set disposition and send it.
}

const downloadRpaperByName =  function(req,res){
    // if(req.body){
    //     const filename = req.body.filename
    //     const file = `templates/${{filename}}`;
    //     res.download(file)
    // }

    let filename = 'CA-3.pdf'

    if(req.body){

        filename = req.body.filename
        console.log(filename)
        const filepath = "papers/" + filename
        console.log(filepath)
        res.download(filepath); // Set disposition and send it.


    }
    
}
const downloadWorkshopTemplate =  function(req,res){
    const file = `templates/ICAF-Workshop-Template.pptx`;
    res.download(file); // Set disposition and send it.
}


//Accepted Email
 const acceptEmail =  async function(req,res){

    

    if(req.body){

        //const payment_new = Payment(req.body);
        sgMail.setApiKey('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')
        const msg = { // email content
             to: req.body.email, // recipient's email
             from: 'gimhanakavi@gmail.com', // sender's email
             subject: 'ICAF 2021',
             text: 'Your ICAF 2021 Paper Submisson has been accepted',
            
         }

        try {
            let result = await sgMail.send(msg);
            console.log(result)
            res.status(200).send('Has been sent succefully')

            
          } catch (error) {
            console.error(error);
        
            if (error.response) {
              console.error(error.response.body)
            }
          }

          


    }

    
 }


//Declined Email

const declineEmail = async function(req,res){


    if(req.body){

        //const payment_new = Payment(req.body);
        sgMail.setApiKey('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')
        const msg = { // email content
             to: req.body.email, // recipient's email
             from: 'gimhanakavi@gmail.com', // sender's email
             subject: 'ICAF 2021',
             text: 'Your ICAF 2021 Paper Submisson has been Declined',
            
         }

        try {
            let result = await sgMail.send(msg);
            console.log(result)
            res.status(200).send('Has been sent succefully')

            
          } catch (error) {
            console.error(error);
        
            if (error.response) {
              console.error(error.response.body)
            }
          }

          


    }


       


    

    
}


//Payment

const payment =  async function(req,res){

    if(req.body){

        const payment_new = Payment(req.body);

        try{

            let result = await payment_new.save();
            res.status(200).send({result:result});


        }catch(err){
            res.status(500).send({error:err.message});
        }


    }




}








module.exports ={
    addReasearcher,
    getAllResearches,
    getById,
    deletePaper,
    updatePaper,
    uploadFile,
    downloadPaperTemplate,
    downloadWorkshopTemplate,
    acceptEmail,
    declineEmail,
    payment,
    downloadRpaperByName

}
