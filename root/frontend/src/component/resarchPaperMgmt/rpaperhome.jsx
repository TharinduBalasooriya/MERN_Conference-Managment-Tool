import React, {useEffect, useState} from "react";
import '../resarchPaperMgmt/rpaper.css'

import TableItem from '../resarchPaperMgmt/tableItem'
import axios from "axios";
import {forEach} from "react-bootstrap/ElementChildren";
let rPaperHome = ()=>{

    const[allPapers,setPapers]=useState();

    useEffect(()=>{

        retrivePapers()



    },[])




    const retrivePapers = ()=>{

        axios.get('http://localhost:5000/api/researchers/').then( response=>{
            console.log(response.data)
            setPapers(response.data.result)
        }).catch(e=>{
            console.log(e)
        })
    }


    return(



        <div className="mainrpaper">

            <div className="heading">
                <h1>ICAF 2012 Paper Submissions</h1>
            </div>




            <div className="rPaperTable">

                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Title</th>
                        <th scope="col">Organization</th>
                        <th scope="col">Status</th>
                        <th scope="col">Manage</th>
                    </tr>
                    </thead>
                    <tbody>

                    {

                        allPapers ?
                            allPapers.map(paper=>{

                                return(
                                    <TableItem key={paper._id} paper={paper}/>
                                )
                            }) : <tr><td>Data is Loading</td></tr>
                    }




                    </tbody>
                </table>



            </div>


        </div>
        
    )

}


export default rPaperHome