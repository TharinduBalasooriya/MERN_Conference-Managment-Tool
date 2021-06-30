import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, {useState} from 'react';

import '../researchComponent/addPaper.css'
import {Button, Form} from "react-bootstrap";
import axios from "axios";





 const AddKeynote = ()=>{

     const [validated, setValidated] = useState(false);
     const [file, setFile] = useState('');
     const [filename, setFilename] = useState('Choose File');

     const initalState = {

         name:'' ,
         email:'',
         mobileNumber:'' ,
         topic:'',
         organization:'',
         abstract:'',
     }

     const[paper,setPaper] = useState(initalState)


     const handleFile = e=>{

         setFile(e.target.files[0]);
         setFilename(e.target.files[0].name);

     }
     const handleName =  e=>{

         let newPaper =  {...paper}
         newPaper.name = e.target.value;
         setPaper(newPaper)
     }

     const handleEmail =  e=>{

         let newPaper =  {...paper}
         newPaper.email = e.target.value;
         setPaper(newPaper)
     }

     const handleMobile =  e=>{

         let newPaper =  {...paper}
         newPaper.mobileNumber = e.target.value ;
         setPaper(newPaper)
     }

     const handleOrg =  e =>{

         let newPaper =  {...paper}
         newPaper.organization = e.target.value ;
         setPaper(newPaper)
     }



     const handleAbstract =  e=>{

         let newPaper =  {...paper}
         newPaper.abstract = e.target.value ;
         setPaper(newPaper)
     }

     const handleTopic =  e=>{

         let newPaper =  {...paper}
         newPaper.topic = e.target.value ;
         setPaper(newPaper)
     }




     const handleSubmit =async (e)=>{

         e.preventDefault();
         const formData = new FormData();
         formData.append('file', file);
         try{
             let result = await axios.post('http://localhost:5000/api/researchers',paper)

             console.log(result)
             let fileresult = await  axios.post('http://localhost:5000/api/papers/uploads',formData,{
                 headers: {
                     'Content-Type': 'multipart/form-data'
                 }

             })

             if(result){
                 console.log(fileresult)
                 alert('Successfully Submitted')
                 window.location = '/';
             }










         }catch (err){
            console.log(err)
             alert('Wait')

         }


     }



    return(

        <div >
            <Container fluid >
                <Row className="content">
                    <Col sm={4} className="sideForm">

                    </Col>
                    <Col sm={8}>
                            <h1>ICAF 2021 RESEARCH PAPER REGISTRATION</h1>
                        <Form onSubmit={handleSubmit}>


                            <Form.Group controlId="formName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Name"  onChange={handleName} required/>

                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} required/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formMobile">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="text" placeholder="mobile number" onChange={handleMobile} required/>

                            </Form.Group>

                            <Form.Group controlId="formMobile">
                                <Form.Label>Paper Title</Form.Label>
                                <Form.Control type="text" placeholder="paper title"  onChange={handleTopic}
                                />

                            </Form.Group>

                            <Form.Group controlId="formMobile">
                                <Form.Label>Organization</Form.Label>
                                <Form.Control type="text" placeholder="Orgnization"  onChange={handleOrg}/>

                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Abstract</Form.Label>
                                <Form.Control as="textarea" rows={4} onChange={handleAbstract}/>
                            </Form.Group>


                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" label="Example file input" onChange={handleFile} />
                            </Form.Group>



                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>



                    </Col>
                </Row>

            </Container>


        </div>


    );
 }

 export default AddKeynote