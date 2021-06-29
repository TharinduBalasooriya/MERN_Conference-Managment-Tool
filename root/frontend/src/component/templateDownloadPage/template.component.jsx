import React, { useState, useRef } from "react";
import {  Link } from "react-router-dom";
import {CurrencyBitcoin, HouseDoorFill, Download, Newspaper,FileSlides} from 'react-bootstrap-icons';
import axios from 'axios'
import fileDownload from 'js-file-download';

import Header from '../../component/homePageElements/header/header.component';


const downloadPaper = ()=>{

    
    
    
    axios.get('http://localhost:5000/api/templates/paper', {
        responseType: 'blob',
      }).then(res => {
          
        fileDownload(res.data, 'template.docx');
      });



}


const dwonloadWorkshop =()=>{

    axios.get('http://localhost:5000/api/templates/workshop', {
        responseType: 'blob',
      }).then(res => {
          
        fileDownload(res.data, 'workshop.pptx');
      });


}
const templateDownload =  ()=>{

        return(


            <div className="container-fluid"> 
            <div>
            <Header></Header>
            </div>
            


            <div className="bg-secondary " style={{}}>
                <div className="p-5 text-center bg-light mb-5">
                    <h1 className="mb-3">ICAF 2021 - Templates</h1>
                </div>

                <div className="row">
                <div className="col-6 text-center" onClick={downloadPaper}>
                    <div className="tile purple">
                        <h3 className="title">Research Paper Template</h3>
                        <Link className=" mx-auto" to="#">

                            
                                
                            <Download color="white" size={96}  />
                            
                
                        </Link>


                    </div>

                    
                </div>

                <div className="col-6 text-center">
                    <div className="tile purple">
                        <h3 className="title"> Workshop Templates</h3>
                        <Link className=" mx-auto" to="#" onClick={dwonloadWorkshop}>

                            
                                
                            <Download color="white" size={96}  />
                            
                
                        </Link>


                    </div>

                    
                </div>



                <div className="col-sm text-center">
                    <div className="tile purple">
                        <h3 className="title">Suggestion Form</h3>
                        <Link className=" mx-auto" to="#">

                            
                                
                            <Download color="white" size={96}  />
                            
                
                        </Link>


                    </div>

                    
                </div>


                <div className="col-sm text-center">
                    <div className="tile purple">
                        <h3 className="title">Payment Inquires</h3>
                        <Link className=" mx-auto" to="/">

                            
                                
                            <Download color="white" size={96}  />
                            
                
                        </Link>


                    </div>

                    
                </div>
               

                </div>
            </div>

            </div>
           
        )

}

export default templateDownload