import React, { Component } from 'react';
import axios from 'axios'
const initialState = {
    speaker: "",
    speakerInfo: "",
    KeynoteTitle: "",
    keynote: ""
    
}
class NewKeynote extends Component {
    constructor(prop) {
        super(prop);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        let KeyNote = {
            speaker: this.state.speaker,
            speakerInfo: this.state.speakerInfo,
            keynoteTitle:this.state.KeynoteTitle,
            keynote:this.state.keynote
        }
        console.log(KeyNote);
        axios.post('http://localhost:5000/keyNote/create', KeyNote)
        .then(response =>{
            alert('Keynote Succesfully inserted');
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
                
                <center><h2><b>Add New KEYNOTE</b></h2></center>
                <form onSubmit={this.onSubmit}>
                    <div class="mb-3">
                        <label for="speaker" class="form-label">Speaker</label>
                        <input type="text" class="form-control" id="speaker" name="speaker" value={this.state.speaker} onChange={this.onChange}></input>
                    </div>
                    <div class="mb-3">
                        <label for="speakerInfo" class="form-label">Speaker Info.(Education/Qulifications)</label>
                        <input type="text" class="form-control" id="speakerInfo" name="speakerInfo" value={this.state.speakerInfo} onChange={this.onChange}></input>
                    </div>
                    <div class="mb-3">
                        <label for="KeynoteTitle" class="form-label">Keynote Title</label>
                        <input type="text" class="form-control" id="KeynoteTitle" name="KeynoteTitle" value={this.state.KeynoteTitle} onChange={this.onChange}></input>
                    </div>
                    <div class="mb-3">
                        <label for="keynote" class="form-label">Keynote</label>
                        <textarea class="form-control" id="keynote" rows="10" name="keynote" value={this.state.keynote} onChange={this.onChange}></textarea>
                    </div>
                    

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default NewKeynote;