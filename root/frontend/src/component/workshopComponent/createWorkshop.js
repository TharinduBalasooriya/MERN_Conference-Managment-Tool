import React, { Component } from 'react';
import axios from 'axios';


class CreateWorkshop extends Component{
    constructor(props){
        super(props);
        debugger;
        this.state = {
            workshop: [],
            title: '',
            description: '',
            conductor: '',
            date: new Date().now,
            time: '',
            status: ''  
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault();

        let workshop = {
            title: this.state.title,
            description: this.state.description,
            conductor: this.state.conductor,
            date: this.state.date,
            time: this.state.time,
            status: this.state.status,
        };

    console.log("Before create");
                    
        axios.post('http://localhost:8083/workshop/create-workshop', workshop)
        .then(res => {
            alert("data added successfully");
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })

      console.log("after create"+workshop);  
    }
    //onSubmit end

    onChange(e){
        this.setState({ [e.target.name]: e.target.value }); 
    }

    render(){
        return(
            <div>
                <h1>Workshop Details</h1>
                <div>
                    <form onSubmit={this.onSubmit}>
                    <div class="sm-3">
                        <label for="title" class="form-label">Workshop Title</label>
                        <input type="text" class="form-control" 
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
                        <label htmlFor="conductor" className="form-label">Conductor</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="conductor" 
                        name='conductor' 
                        value={this.state.conductor}
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
                        <label htmlFor="time" className="form-label">Time</label>
                        <input 
                        type="time" 
                        className="form-control" 
                        id="time" 
                        name='time' 
                        value={this.state.time}
                        onChange={this.onChange}
                        required
                        />
                    </div>
                   
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateWorkshop;