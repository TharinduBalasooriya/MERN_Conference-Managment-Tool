import axios from 'axios';
import React, {Component} from 'react';

class ProposalsList extends Component{
    constructor(props){
        super(props);
        this.state = { 
            workshopProposals: [],
            status: ''
        };

        //this.navigateSubjectPage = this.navigateSubjectPage.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(e){
        axios.get('http://localhost:5000/workshop-proposal/')
        .then(response => {
            this.setState({workshopProposals: response.data.data});
            console.log(response.data.data);
            
        })
    }

    // navigateSubjectPage(id){
    //     window.location = `/${id}`
    // }
    // onClick={_id => this.navigateSubjectPage(item._id)}

    onChange(e){
       // e.preventDefault();

        this.setState({ status: e.target.value }); 
        console.log('status: '+ status);
    }

    render(){
        return(
            <div className="container">
                <h1>Workshop Proposals List</h1>
                {this.state.workshopProposals.length > 0 && this.state.workshopProposals.map((item, index) => (
                    <div key={index} className="card mb-3">
                        <div className="p-3" >
                            <h4>Title: {item.title}</h4>
                            <h5>Description: {item.description}</h5>
                            <h5>Conductor: {item.conductor}</h5>
                            <h5>Date: {item.date}</h5>
                            <h6>Time Duration: {item.duration}</h6>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="accept" id="accept"
                                value={this.state.status}
                                onChange={this.onChange}
                                />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Accept
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="not accept" id="notaccept" 
                                value={this.state.duration}
                                onChange={this.onChange}
                                
                                />
                                <label className="form-check-label" for="flexCheckChecked">
                                    Not Accept
                                </label>
                            </div>                            
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default ProposalsList;