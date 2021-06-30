import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";

import "./addPaper.css";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const AddProposal = () => {
  const [validated, setValidated] = useState(false);
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState("Choose File");

  const initalState = {
    title: "",
    description: "",
    date: new Date().now,
    duration: "",
    status: "not accept",
    conductorName: "",
    conductorPhone: "",
    conductorEmail: ""

  };

  const [workshopProposal, setPaper] = useState(initalState);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleconductorName = (e) => {
    let newWorkshopProposal = { ...workshopProposal };
    newWorkshopProposal.conductorName = e.target.value;
    setPaper(newWorkshopProposal);
  };

  const handleconductorEmail = (e) => {
    let newWorkshopProposal = { ...workshopProposal };
    newWorkshopProposal.conductorEmail = e.target.value;
    setPaper(newWorkshopProposal);
  };

  const handleconductorPhone = (e) => {
    let newWorkshopProposal = { ...workshopProposal };
    newWorkshopProposal.conductorPhone = e.target.value;
    setPaper(newWorkshopProposal);
  };


  const handledescription = (e) => {
    let newWorkshopProposal = { ...workshopProposal };
    newWorkshopProposal.description = e.target.value;
    setPaper(newWorkshopProposal);
  };

  const handleTitle = (e) => {
    let newWorkshopProposal = { ...workshopProposal };
    newWorkshopProposal.title = e.target.value;
    setPaper(newWorkshopProposal);
  };

    const handleDate = (e) => {
      let newWorkshopProposal = { ...workshopProposal };
      newWorkshopProposal.date = e.target.value;
      setPaper(newWorkshopProposal);
    };

      const handleDuration = (e) => {
        let newWorkshopProposal = { ...workshopProposal };
        newWorkshopProposal.duration = e.target.value;
        setPaper(newWorkshopProposal);
      };


  const handleSubmit =  async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    try {
      let result = await axios
        .post(
          "http://localhost:5000/workshop-proposal/create-workshopproposal",
          workshopProposal
        );

      console.log("res = " +result);
      let fileresult = await  axios.post(
        "http://localhost:5000/workshop-proposal/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (result) {
        console.log(fileresult);
        alert("Successfully Submitted");
        // window.location = "/";
      }
    } catch (err) {
      console.log(err);
      alert("Wait");
    }
  }

  return (
    <div>
      <Container fluid>
        <Row className="content">
          <Col sm={4} className="sideForm"></Col>
          <Col sm={8}>
            <h1>ICAF 2021 WORKSHOP REGISTRATION</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formconductorName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="conductorName"
                  onChange={handleconductorName}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicconductorEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="conductorEmail"
                  placeholder="Enter email"
                  onChange={handleconductorEmail}
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formMobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="mobile number"
                  onChange={handleconductorPhone}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMobile">
                <Form.Label>Workshop Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="paper title"
                  onChange={handleTitle}
                />
              </Form.Group>

             

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  onChange={handledescription}
                />
              </Form.Group>

              <Form.Group controlId="formMobile">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  onChange={handleDate}
                />
              </Form.Group>

              <Form.Group controlId="formMobile">
                <Form.Label>Time Duration</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="duration"
                  onChange={handleDuration}
                />
              </Form.Group>

              <Form.Group>
                <Form.File
                  id="exampleFormControlFile1"
                  label="Example file input"
                  onChange={handleFile}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddProposal;
