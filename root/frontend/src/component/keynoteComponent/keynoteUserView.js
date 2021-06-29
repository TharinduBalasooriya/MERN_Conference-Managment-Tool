import React, { Component} from 'react';
import axios from 'axios';

class Ukeynotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
        keynotes: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/keyNote/')
    .then(response => {
      this.setState({ keynotes: response.data.data });
      console.log(response.data.data);
    })
  }

  render() {
    return (
      <div className="container">
        <center><h1><b>KEYNOTES</b></h1></center>   
        {this.state.keynotes.length > 0 && this.state.keynotes.map((item, index) => (
          <div key={index} className="card mb-3">
            <div className="p-3" > 
              <h3><b>{item.speaker}</b></h3>
              <h6><em>{item.speakerInfo}</em></h6>
              <h4><b>{item.keynoteTitle}</b></h4>
              <h5>{item.keynote}</h5>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Ukeynotes;