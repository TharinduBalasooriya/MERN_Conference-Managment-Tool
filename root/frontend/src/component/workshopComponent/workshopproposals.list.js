import axios from 'axios';
import React, {Component} from 'react';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class ProposalsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workshopProposals: []
    };

    //this.navigateSubjectPage = this.navigateSubjectPage.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
  }

  componentDidMount(e) {
    axios.get("http://localhost:5000/workshop-proposal/").then((response) => {
      this.setState({ workshopProposals: response.data.data });
      console.log(response.data.data);
    });
  }

  // navigateSubjectPage(id){
  //     window.location = `/${id}`
  // }
  // onClick={_id => this.navigateSubjectPage(item._id)}

  onChange(e) {
    this.setState({ status: e.target.value });
    console.log("status: " + status);
  }

  // onChangeStatus(e, id) {
  //   //  this.setState({status: e.target.value});
  //   //   console.log('Hiii'+this.status);

  //   axios
  //     .put(`http://localhost:5000/workshop-proposal/update/${id}`, {
  //       status: "not accept",
  //     })
  //     .then((res) => {
  //       //this.setState({ status: res.data.status });
  //       res.status(200).send({ data: res.data.status });
  //       console.log(res.data.status);
  //       window.location = `/proposal-list`;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       //res.status(500).send({ data: err.messaage });
  //     });
  // }

  onChangeStatus(e, id) {
    confirmAlert({
      title: "Confirm to Accept",
      message: "Are you sure to Accept this Workshop Proposal..?",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            axios
              .put(`http://localhost:5000/workshop-proposal/status/${id}`)
              .then((response) => {
                //alert('keynote Succesfully approved');
                //console.log(this.state.id);
                window.location = `/workshop/proposal-list`;
              })
              .catch((error) => {
                alert(error.message);
              }),
        },
        {
          label: "No",
        },
      ],
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Workshop Proposals List</h1>
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
                  type="button"  className="btn btn-outline-success "
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

export default ProposalsList;