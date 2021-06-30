import {Link} from "react-router-dom";
import {CurrencyBitcoin, FileSlides, Mic} from "react-bootstrap-icons";
import React from "react";

let WorkShop = ()=>{

    return(
   
        <div className="col-sm-4">
        <div className="tile green">
            <h3 className="title">Manage WorkShops</h3>
            <Link className="row" to="/admin-dash/workshop">

                <FileSlides color="white" size={96} />

            </Link>


        </div>
        </div>

    )
}

export  default WorkShop