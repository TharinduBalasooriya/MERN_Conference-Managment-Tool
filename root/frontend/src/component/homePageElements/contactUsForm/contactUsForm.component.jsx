import React, {useState} from 'react';
import {Form, Button } from 'react-bootstrap';
import './contactUsForm.styles.css';

const ContactUsForm = (props) => {
    const initialState ={};
    const [contact, setContact] = useState(initialState);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleName = (e) =>{};
    const handleEmail = (e) =>{};
    const handleSubject = (e) =>{};
    const handleMessage = (e) =>{};
    const handleSubmit = (e) =>{};

    return(
        <div>
            <h1>Contact Us</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Name" onChange={handleName} required/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" onChange={handleEmail} required/>
                </Form.Group>
                <Form.Group controlId="formBasicSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="subject" placeholder="Subject" onChange={handleSubject}  />
                </Form.Group>
                <Form.Group controlId="formBasicTextArea">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="text-area" rows={4} placeholder="Message" onChange={handleMessage} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Use the email given to signup for our newsletter" />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </div>
    )

}

export default ContactUsForm;