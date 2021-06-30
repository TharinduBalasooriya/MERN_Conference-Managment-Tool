import React, { Component } from 'react';
import axios from 'axios';


class AdddWorkshopProposal extends Component {
  constructor(props) {
    super(props);
    //debugger;
    this.state = {
      title: "",
      description: "",
      date: new Date().now,
      duration: "",
      status: "",
      conductorName: "",
      conductorPhone: "",
      conductorEmail: "",
      file: "",
      filename: "Choose File",
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.changeFile = this.changeFile.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeFile(e){
      this.setState({
        [e.target.files[0]]: e.target.value,
        [e.target.files[0].name]: e.target.value,
      });

  }

  onSubmit = async (e) =>  {
    e.preventDefault();

    let workshopProposal = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      status: this.state.status,
      duration: this.state.duration,
      conductorName: this.state.conductorName,
      conductorPhone: this.state.conductorPhone,
      conductorEmail: this.state.conductorEmail,
    };

    const formdata = new FormData();
    formdata.append("file", file);

    try {
        let res = axios.post("http://localhost:5000/workshop-proposal/create-workshopproposal",workshopProposal)
        .then((data) => {
            alert("data added successfully");
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });

        //file upload
        let fileresult = await axios.post(
          "http://localhost:5000/workshop-proposal/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        //check file upload result
        if (result) {
          console.log(fileresult);
          alert("Successfully Submitted");
          window.location = "/";
        }

    } catch (error) {
        console.log(err);
        alert(wait);
    }
    

  }
  //onSubmit end

  render() {
    return (
      <div className="container">
        <h1>Workshop Proposal Details</h1>
        <div>
        
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="conductorName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="conductorName"
                placeholder="Name"
                onChange={this.onChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="conductorEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="conductorEmail"
                placeholder="Enter email"
                onChange={this.onChange}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="conductorPhone">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                name="conductorPhone"
                placeholder="mobile number"
                onChange={this.onChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMobile">
              <Form.Label>Workshop Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="paper title"
                onChange={this.onChange}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                onChange={this.onChange}
              />
            </Form.Group>

            <Form.Group controlId="formMobile">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" onChange={this.onChange} />
            </Form.Group>

            <Form.Group controlId="formMobile">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="text"
                name="duration"
                placeholder="duration"

                onChange={this.onChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                
                label="Example file input"
                onChange={this.changeFile}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}



export default AdddWorkshopProposal;