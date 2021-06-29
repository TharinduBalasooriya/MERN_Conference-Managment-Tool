import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Ukeynotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keynotes: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/keyNote/')
            .then(response => {
                this.setState({ keynotes: response.data.data });
                console.log(response.data.data);
            })
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

    render() {
        return (
            <div className="container">
                <br></br><center>
                    <Link to="/new-keynotes">
                        <button type="button" class="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
                        </svg>' ADD NEW KEYNOTE '</button></Link></center>
                <br></br>
                <center><h1><b>Manage KEYNOTES</b></h1></center>
                {this.state.keynotes.length > 0 && this.state.keynotes.map((item, index) => (
                    <div key={index} className="card mb-3">
                        <div className="p-3" >
                            <h3><b>{item.speaker}</b></h3>
                            <h6><em>{item.speakerInfo}</em></h6>
                            <h4><b>{item.keynoteTitle}</b></h4>
                            <h5>{item.keynote}</h5>
                            <button type="button" class="btn btn-primary" onClick={e => this.navigateEditPage(e, item._id)}>EDIT
                            </button> <button type="button" class="btn btn-outline-danger" onClick={e => this.DeleteKeynote(e, item._id)}>DELETE</button>
                        </div>
                    </div>
                ))}<br></br>
            </div>
        )
    }
}

export default Ukeynotes;