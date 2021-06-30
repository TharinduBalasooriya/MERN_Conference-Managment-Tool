import {Link} from "react-router-dom";
import {HouseDoorFill} from "react-bootstrap-icons";
import React from "react";

let AdminItem = (props)=>{

    return(<div className="col-sm-4">
        <div className="tile purple">
            <h3 className="title">Manage Home Page</h3>
            <Link className="row" to="/">

                <HouseDoorFill color="white" size={96} />

            </Link>


        </div>
    </div>)


 }

 export default AdminItem