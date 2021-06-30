import React, { Component } from 'react';
import axios from 'axios';

class EditKeynote extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            id: '',
            speaker: '',
            speakerInfo: '',
            keynoteTitle: '',
            keynote: ''

        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/keyNote/a/${this.props.match.params.id}`)
            .then(response => {
                
                this.setState({
                    id: response.data.data._id,
                    speaker: response.data.data.speaker,
                    speakerInfo: response.data.data.speakerInfo,
                    keynoteTitle: response.data.data.keynoteTitle,
                    keynote: response.data.data.keynote
                     
                });
                console.log(response.data.data._id);
                console.log(this.props.match.params.id);
            })
            .catch(error => {
                alert(error.message)
            })

    }

    onSubmit(e) {
        e.preventDefault();
        let KeyNotez = {
            _id:this.state.id,
            speaker: this.state.speaker,
            speakerInfo: this.state.speakerInfo,
            keynoteTitle:this.state.keynoteTitle,
            keynote:this.state.keynote,
            status:'pending'
        }
        console.log(KeyNotez);
        axios.put(`http://localhost:5000/keyNote/update/${this.state.id}`, KeyNotez)
        .then(response =>{
            alert('keynote Succesfully updated');
            console.log(this.state.id);
            window.location = `/mng-keynotes`
        })
        .catch(error =>{
            console.log(error.message);
            alert(error.message);
        })
    }

    render() {
        return (
            <div className="container">
                <center><h2><b>Edit KEYNOTE</b></h2></center>
                <form onSubmit={this.onSubmit}>
                    <div class="mb-3">
                        <label htmlFor="speaker" className="form-label">Speaker</label>
                        <input type="text" class="form-control" id="speaker" name="speaker" value={this.state.speaker} onChange={this.onChange}></input>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="speakerInfo" className="form-label">Speaker Info.(Education/Qulifications)</label>
                        <input type="text" class="form-control" id="speakerInfo" name="speakerInfo" value={this.state.speakerInfo} onChange={this.onChange}></input>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="KeynoteTitle" className="form-label">Keynote Title</label>
                        <input type="text" class="form-control" id="keynoteTitle" name="keynoteTitle" value={this.state.keynoteTitle} onChange={this.onChange}></input>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="keynote" className="form-label">Keynote</label>
                        <textarea class="form-control" id="keynote" rows="10" name="keynote" value={this.state.keynote} onChange={this.onChange}></textarea>
                    </div>
                    

                    <button type="submit" class="btn btn-primary">UPDATE</button>
                </form>
            </div>
        )
    }
}

export default EditKeynote;