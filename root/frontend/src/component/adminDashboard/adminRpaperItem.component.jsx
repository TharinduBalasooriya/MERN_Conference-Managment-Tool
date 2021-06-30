import {Link} from "react-router-dom";
import {Mic, Newspaper} from "react-bootstrap-icons";
import React from "react";

let RPaper = ()=>{

    return(
        <div className="col-sm-4" >
            <div className="tile orange" >
                <h3 className="title">Manage Research Papers</h3>
                <Link className="row" to="/rpaperhome">

                    <Newspaper color="white" size={96} />

                </Link>
            </div>
        </div>

    )
}

export  default RPaper