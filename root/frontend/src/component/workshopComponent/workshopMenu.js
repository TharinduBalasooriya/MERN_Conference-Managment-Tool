import React, { Component } from 'react';
import {  Link } from "react-router-dom";


class WorkshopMenu extends Component {
    constructor(props){
        super(props);
console.log("menu");
    }

    render(){
        return(
            <div>
                
                <h1>Workshop Menu</h1>
                {/* <div className="col-sm-4">
                    <div className="tile green">
                        <h3 className="title">Call for WorkShops</h3>
                        <Link className="row" to="/workshop/create-workshopproposal">

                            <FileSlides color="white" size={96} />

                        </Link>


                    </div>
                </div> */}
            </div>
        )
    }
}

export default WorkshopMenu;