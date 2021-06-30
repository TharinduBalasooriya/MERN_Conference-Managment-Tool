import React, { useState, useRef } from "react";
import {  Link } from "react-router-dom";

import AuthService from '../../services/auth.service'
import {CurrencyBitcoin, HouseDoorFill, Mic, Newspaper,FileSlides} from 'react-bootstrap-icons';
import HomeItem from '../adminDashboard/adminHomeItem.component'
import KeyNoteItem from '../adminDashboard/adminKeyNoteItem.component'
import RPaper from '../adminDashboard/adminRpaperItem.component'
import WorkShopItem from '../adminDashboard/adminWorkShopItem.component'
import PaymentItem from '../adminDashboard/adminPaymentItem.component'
import './admin.css'

const Admin = (props)=>{

    
    return(<div className="admin-body">



        <div className="container bootstrap snippets bootdey"  style={{backgroundColor:"rgba(194, 194, 194, 0.3)"}}>
            <div className="row"  >
                <div className="col-md-12" >
                    <h1 className="admin-title">ICAF ADMIN DASHBOARD</h1>
                </div>
            </div>
            <div className="row" >
                <HomeItem/>
                <KeyNoteItem/>
                <RPaper/>



            </div>
            <div className="row" >
                <WorkShopItem/>
                <PaymentItem/>


            </div>
        </div>

    </div>)

}

export default  Admin