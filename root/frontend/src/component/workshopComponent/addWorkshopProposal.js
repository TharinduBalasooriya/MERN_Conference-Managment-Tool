import React, { Component } from 'react';
import axios from 'axios';


class AdddWorkshopProposal extends Component{
    constructor(props){
        super(props);
        //debugger;
        this.state = {
            title: '',
            description: '',
            date: new Date().now,
            duration: '',
            status: '',
            conductorName: '',  
            conductorPhone: '',
            conductorEmail: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }); 
    }

    onSubmit(e){
        e.preventDefault();

        let workshopProposal = {
            title: this.state.title,
            description: this.state.description,
            date: this.state.date,
            status: this.state.status,
            duration: this.state.duration,
            conductorName: this.state.conductorName,
            conductorPhone: this.state.conductorPhone,
            conductorEmail: this.state.conductorEmail
        }

    console.log("Before create");
                    
        axios.post('http://localhost:5000/workshop-proposal/create-workshopproposal',workshopProposal)
        .then(data => {
            alert("data added successfully");
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })

      console.log("after create"+workshopProposal);  
    }
    //onSubmit end

    render(){
        return(
            <div className="container">
                <h1>Workshop Proposal Details</h1>
                <div >
                    <form onSubmit={this.onSubmit}>
                    <div className="sm-3">
                        <label for="title" className="form-label">Title</label>
                        <input type="text" className="form-control" 
                        id="title" 
                        name='title' 
                        value={this.state.title}
                        onChange={this.onChange}
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea 
                        rows="3"
                        className="form-control" 
                        id="description" 
                        name='description' 
                        value={this.state.description}
                        onChange={this.onChange}
                        required
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Date</label>
                        <input 
                        type="date" 
                        className="form-control" 
                        id="date" 
                        name='date' 
                        value={this.state.date}
                        onChange={this.onChange}
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="duration" className="form-label">Workshop Time Duration</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="duration" 
                        name='duration' 
                        value={this.state.duration}
                        onChange={this.onChange}
                        />
                    </div>
                    <h1>Workshop Conductor Details</h1>
                    <div className="mb-3">
                        <label htmlFor="conductorName" className="form-label">Name</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="conductorName" 
                        name='conductorName' 
                        value={this.state.conductorName}
                        onChange={this.onChange}
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="conductorPhone" className="form-label">Phone</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="conductorPhone" 
                        name='conductorPhone' 
                        value={this.state.conductorPhone}
                        onChange={this.onChange}
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="conductorEmail" className="form-label">Email</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="conductorEmail" 
                        name='conductorEmail' 
                        placeholder="name@example.com"
                        value={this.state.conductorEmail}
                        onChange={this.onChange}
                        required
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AdddWorkshopProposal;