import {Link} from "react-router-dom";
import {FileSlides, Mic,CurrencyBitcoin} from "react-bootstrap-icons";
import React from "react";

let WorkShop = ()=>{

    return(
        <div className="col-sm-4">
        <div className="tile blue">
            <h3 className="title">Maange Payment</h3>
            <Link className="row" to="">

                <CurrencyBitcoin color="white" size={96}/>

            </Link>
        </div>
    </div>

    )
}

export  default WorkShop