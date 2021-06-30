import {Link} from "react-router-dom";
import {Mic} from "react-bootstrap-icons";
import React from "react";

let KeyNote = ()=>{

    return(
        <div className="col-sm-4" >
            <div className="tile red">
                <h3 className="title">Manage KeyNotes</h3>
                <Link to="/mng-keynotes"className="row">

                    <Mic color="white" size={96} />

                </Link>

            </div>
        </div>

    )
}

export  default KeyNote