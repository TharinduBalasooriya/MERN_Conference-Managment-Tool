import React from 'react';
import {Card, Button, CardDeck} from 'react-bootstrap';
import './userRegistration.styles.css';
import Header from '../../component/homePageElements/header/header.component'

const Registration = (props) =>{
    const initialState={
        
    }


    return(
        <div className="userReg">
            <Header/>
            <div className="userReg-body" >
            <h1>Registrations</h1>
                <CardDeck className = "carddeck">
                    <Card>
                        <Card.Img variant="top" src="https://unsplash.com/photos/JVOG4wXkS4o" />
                        <Card.Body>
                            <Card.Title>Researcher</Card.Title>
                            <Card.Text>
                            Want to showcase your findings to the world? 
                            Join ICAF as a Researcher and get your ideas published!
                            </Card.Text>
                            <Button variant="dark">Register</Button>{' '}
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://unsplash.com/photos/wMRIcT86SWU" />
                        <Card.Body>
                            <Card.Title>Workshop Presenter</Card.Title>
                            <Card.Text>
                            Are you an outstanding professional with a background in Application Frameworks?
                            Do you have a passion towards teaching concepts simply?
                            Join ICAF as a Workshop Presenter and help us make knowledge be accessible to the world!
                            </Card.Text>
                            <Button variant="dark">Register</Button>{' '}
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://unsplash.com/photos/DOu3JJ3eLQc" />
                        <Card.Body>
                            <Card.Title>Attendee</Card.Title>
                            <Card.Text>
                            Hoping to open your eyes to the world of Application Frameworks? 
                            ICAF is more than happy to help you discover the ongoing events and findings of Application Frameworks.
                            </Card.Text>
                            <Button variant="dark">Register</Button>{' '}
                        </Card.Body>
                    </Card>
                    </CardDeck>   
            </div>   
            
        </div>
    )
}

export default Registration;