import React, { Component } from 'react';
import axios from 'axios';


class AcceptedWorkshopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workshopProposals: [],
    };
  }

  componentDidMount(e) {
    axios
      .get("http://localhost:5000/workshop-proposal/workshoplist", {status:"accepted"})
      .then((response) => {
        this.setState({ workshopProposals: response.data.data });
        console.log(response.data.data);
      });
  }

  render() {
    return (
      <div>
        <h1>Accepted Workshop List</h1>
        {this.state.workshopProposals.length > 0 &&
          this.state.workshopProposals.map((item, index) => (
            <div key={index} className="card mb-3">
              <div className="p-3">
                <h4>Title: {item.title}</h4>
                <h5>Description: {item.description}</h5>
                <h5>Conductor: {item.conductorName}</h5>
                <h5>Date: {item.date}</h5>
                <h6>Time Duration: {item.duration}</h6>
                <h5>Status: {item.status}</h5>

                <div className="d-grid gap-2 d-md-block">
                  <button
                    type="button"
                    className="btn btn-outline-success "
                    onClick={(e) => {
                      this.onChangeStatus(e, item._id);
                    }}
                  >
                    Accept
                  </button>
                  <button type="button" className="btn btn-outline-danger">
                    Delete
                  </button>

                  <button type="button" className="btn btn-outline-info">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default AcceptedWorkshopList;