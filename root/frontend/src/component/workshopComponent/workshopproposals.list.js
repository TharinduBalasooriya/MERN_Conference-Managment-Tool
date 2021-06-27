import axios from 'axios';
import React, {Component} from 'react';

class ProposalsList extends Component{
    constructor(props){
        super(props);
        this.state = { 
            workshopProposals: []
        };

        this.navigateSubjectPage = this.navigateSubjectPage.bind(this);
    }

    componentDidMount(e){
        axios.get('http://localhost:8083/course/')
        .then(response => {
            this.setState({courses: response.data.data});
            console.log(response.data.data);
            
        })
    }

    navigateSubjectPage(courseId){
        window.location = `/${courseId}`
    }

    render(){
        return(
            <div className="container">
                <h1>Workshop Proposals List</h1>
                {this.state.workshopProposals.length > 0 && this.state.workshopProposals.map((item, index) => (
                    <div key={index} className="card mb-3">
                        <div className="p-3" onClick={_id => this.navigateSubjectPage(item._id)}>
                            <h4>Title: {item.title}</h4>
                            <h5>Description: {item.description}</h5>
                            <h5>Conductor: {item.conductor}</h5>
                            <h5>Date: {item.date}</h5>
                            <h6>Time Duration: {item.duration}</h6>

                            
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default WorkshopProposalsList;