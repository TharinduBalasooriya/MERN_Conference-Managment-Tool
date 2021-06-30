
import React from "react";

let TableItem = (props)=>{

    const{paper} = props

    return(
        <tr>
            <th scope="row">1</th>
            <td>{paper.name}</td>
            <td>{paper.title}</td>
            <td>{paper.organization}</td>

            {
                paper.status == 'pending' ? (

                <td className="font-weight-bold text-danger">{paper.status}</td>

                ) :(
                    <td className="font-weight-bold text-success">{paper.status}</td>
                )
            }

            <td>
                <button type="button" className="btn btn-secondary">Review</button>

            </td>
        </tr>
    )
}


export default  TableItem
