import React, { useState, useRef } from "react";
import {  Link } from "react-router-dom";

import AuthService from '../../services/auth.service'
import {CurrencyBitcoin, HouseDoorFill, Mic, Newspaper,FileSlides} from 'react-bootstrap-icons';

import './admin.css'

const Admin = (props)=>{

    let user = AuthService.getCurrentUser();
    console.log(user.usertype)
    return(<div className="admin-body">



        <div className="container bootstrap snippets bootdey"  style={{backgroundColor:"rgba(194, 194, 194, 0.3)"}}>
            <div className="row"  >
                <div className="col-md-12" >
                    <h1 className="admin-title">Admin Home Page</h1>
                </div>
            </div>
            <div className="row" >
                <div className="col-sm-4">
                    <div className="tile purple">
                        <h3 className="title">Mange Home Page</h3>
                        <Link className="row" to="/">

                            <HouseDoorFill color="white" size={96} />

                        </Link>


                    </div>
                </div>
                <div className="col-sm-4" >
                    <div className="tile red">
                        <h3 className="title">Manage KeyNotes</h3>
                        <Link to="/mng-keynotes"className="row">

                            <Mic color="white" size={96} />

                        </Link>

                    </div>
                </div>
                <div className="col-sm-4" >
                    <div className="tile orange" >
                        <h3 className="title">Manage Research Papers</h3>
                        <Link className="row" to="/">

                            <Newspaper color="white" size={96} />

                        </Link>
                    </div>
                </div>
            </div>
            <div className="row" >
                <div className="col-sm-4">
                    <div className="tile green">
                        <h3 className="title">Manage WorkShops</h3>
                        <Link className="row" to="/admin-dash/workshop">

                            <FileSlides color="white" size={96} />

                        </Link>


                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="tile blue">
                        <h3 className="title">Maange Payment</h3>
                        <Link className="row" to="">

                            <CurrencyBitcoin color="white" size={96}/>

                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </div>)

}

export default  Admin