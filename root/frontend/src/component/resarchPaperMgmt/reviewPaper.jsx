import React ,{useState,useEffect}from 'react'
import '../resarchPaperMgmt/rpaper.css'
import axios from 'axios';
import AdminNavBar from '../adminDashboard/adminNavBar'
import fileDownload from 'js-file-download';




let ReviewPaper = (props)=>{

  const intialState ={
      "status": "",
      "name": "",
      "email": 0,
      "mobileNumber": 0,
      "topic": "",
      "organization": "",
      "abstract":"",
      "filename":""

   

  }

    const [gotData,setTrue] =useState(false);
    const [paper, setPaper] = useState(intialState);  

    useEffect(()=>{
      axios.get('http://localhost:5000/api/researchers/'+props.match.params.id)
      .then(res=>{
          setPaper(res.data)
          console.log(res.data)
          
          setTrue(true);
          

      }).catch(e=>{
          console.log(e)

      })
  },[props.match.params.id]);



const onAccept = e=>{

  
  updatePaper()
  sendAcceptEmail()
  
  



}

const onDelete = e=>{
  sendDeclineEmail();
  deletePaper();
  alert('Email has been sent')
  
}



const deletePaper = ()=>{

  axios.delete('http://localhost:5000/api/researchers/'+props.match.params.id)
  .then(response => { 
      console.log(response.data)
      window.location = '/rpaperhome';
    })
  .catch(e=>{
      console.log(e)
  });

    
    





}

const sendAcceptEmail = ()=>{

  let data = {

    status: 'Accepted',
    name: paper.name,
    email: paper.email,
    mobileNumber: paper.mobileNumber,
    topic: paper.topic,
    organization: paper.organization,
    abstract:paper.abstract

}

  axios.post('http://localhost:5000/api/papers/acceptemail',data)
  .then(response => { 
      console.log(response)
     
    })
  .catch(e=>{
      console.log(e)
  });


}

const downloadFile = ()=>{

  let data = {

    status: 'Declined',
    name: paper.name,
    email: paper.email,
    mobileNumber: paper.mobileNumber,
    topic: paper.topic,
    organization: paper.organization,
    abstract:paper.abstract,
    filename:paper.filename

}
// axios.post('http://localhost:5000/api/papers/download',data)
//   .then(response => { 
//       console.log(response)
      
//     })
//   .catch(e=>{
//       console.log(e)
//   });

  axios.post('http://localhost:5000/api/papers/download',data, {
        responseType: 'blob',
      }).then(res => {
          
        fileDownload(res.data, data.filename);
      });



}

const sendDeclineEmail = ()=>{

  let data = {

    status: 'Declined',
    name: paper.name,
    email: paper.email,
    mobileNumber: paper.mobileNumber,
    topic: paper.topic,
    organization: paper.organization,
    abstract:paper.abstract

}

  axios.post('http://localhost:5000/api/papers/declinemail',data)
  .then(response => { 
      console.log(response)
      
    })
  .catch(e=>{
      console.log(e)
  });


}

const updatePaper = ()=>{

  let data = {

      status: 'Accepted',
      name: paper.name,
      email: paper.email,
      mobileNumber: paper.mobileNumber,
      topic: paper.topic,
      organization: paper.organization,
      abstract:paper.abstract,
      filename:paper.filename

  }
  axios.put('http://localhost:5000/api/researchers/'+props.match.params.id,data)
         .then(function (response){
             console.log(response.data)
             window.location = '/rpaperhome';
         }).catch(function(er){
             console.log(er)
         })


}


    
    return(

      
      <div className="rpaperMain">
        <AdminNavBar></AdminNavBar>

        {
          gotData ? (
            <div className="container border border-secondary rpaper">

          <h1 className="heading font-weight-normal">ICAF 2021- PAPER SUBMISSION</h1>
          <br /> <br />
          <h3 className="heading font-italic"> {paper.topic} </h3>

          <div className="row">
            <div className="col-sm-2">
              <h4 className="font-weight-bold ">Name :</h4>
            </div>
            <div className="col-sm">
              <h4>{paper.name}</h4>
            </div>
          </div>


          <div className="row">
            <div className="col-sm-2">
              <h4 className="font-weight-bold ">Email :</h4>
            </div>
            <div className="col-sm">
              <h4>{paper.email}</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-2">
              <h4 className="font-weight-bold ">Affiliation :</h4>
            </div>
            <div className="col-sm">
              <h4>{paper.organization}</h4>
            </div>
          </div>

          <br /> <br />
          <div className="Abstract">

              <h3 className="absTopic">ABSTARTCT</h3>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" defaultValue={paper.abstract} readOnly>

                
              </textarea>

          </div>


          <div className="container mt-3">

          <div className="row">
          <div className="col-sm">

            <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={downloadFile}>Download</button>
          </div>
            <div className="col-sm">

            <button type="button" className="btn btn-success btn-lg btn-block" onClick={onAccept}>Accept</button>
            </div>
            <div className="col-sm"> 
            <button type="button" className="btn btn-danger btn-lg btn-block" onClick={onDelete}>Decline</button>
            </div>
            
          </div>
          </div>


</div>


          ) :(<div>Data is loading</div>)
        }

          

        
      </div>
     
        
    )
}


export default ReviewPaper