import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import AuthService from '../../services/auth.service'

class Ukeynotes extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            keynotes: [],
            user: ' '
        };        
    };

    

    componentDidMount() {
        axios.get('http://localhost:5000/keyNote/')
            .then(response => {
                this.setState({ keynotes: response.data.data });
                console.log(response.data.data);
            });
            let User = AuthService.getCurrentUser();
            this.setState({ user: User.usertype });
            
            
            console.log(User.usertype);
    }

    navigateEditPage(e, keyNoteID) {
        window.location = `/edit-keynotes/${keyNoteID}`
    }

    DeleteKeynote(e, keyNoteID) {
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to delete this Keynote..?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => axios.delete(`http://localhost:5000/keyNote/delete/${keyNoteID}`)
                        .then(response => {

                            //alert('Delete Success..!');
                            window.location = `/mng-keynotes`
                        })
                        .catch(error => {
                            alert(error.message);
                        })

                },
                {
                    label: 'No'

                }
            ]
        });
    }

    ApproveKeynote(e, keyNoteID) {
        confirmAlert({
            title: 'Confirm to Approve',
            message: 'Are you sure to Approve this Keynote..?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => 
                    axios.put(`http://localhost:5000/keyNote/update/${keyNoteID}`, {status:'Approved'})
                    .then(response =>{
                        //alert('keynote Succesfully approved');
                        //console.log(this.state.id);
                        window.location = `/mng-keynotes`
                    })
                    .catch(error =>{
                        
                        alert(error.message);
                    })

                },
                {
                    label: 'No'

                }
            ]
        });
    }


    render() {
        return (
            <div className="container">
                <br></br><center>
                    <Link to="/new-keynotes">
                        <button type="button" class="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
                        </svg>' ADD NEW KEYNOTE '</button></Link></center>
                <br></br> <h3>User: {this.state.user}</h3>
                
                <center><h1><b>Manage KEYNOTES</b></h1></center>
                {this.state.keynotes.length > 0 && this.state.keynotes.map((item, index) => (
                    <div key={index} className="card mb-3">
                        <div className="p-3" >
                            <h3 style={{color: "red"}}>Approve Status: <b>{item.status}</b></h3>
                            <h3><b>{item.speaker}</b></h3>
                            <h6><em>{item.speakerInfo}</em></h6>
                            <h4><b>{item.keynoteTitle}</b></h4>
                            <h5>{item.keynote}</h5>
                            <button type="button" class="btn btn-primary" onClick={e => this.navigateEditPage(e, item._id)}>EDIT
                            </button> <button  type="button" class="btn btn-outline-danger" onClick={e => this.DeleteKeynote(e, item._id)}>DELETE
                            </button> <button hidden={this.state.user != 'admin'} type="button" class="btn btn-success" onClick={e => this.ApproveKeynote(e, item._id)}>Approve</button>
                        </div>
                    </div>
                ))}<br></br>
            </div>
        )
    }
}

export default Ukeynotes;