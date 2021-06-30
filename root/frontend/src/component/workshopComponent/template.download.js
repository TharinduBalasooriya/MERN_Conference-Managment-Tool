import React from 'react';

class TemplateDownload extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className='container'>
                <h1> Download Template </h1>
                <div >
                    <button type="button" className="btn btn-primary btn-lg">Research Paper Template</button><br/><br/>
                    <button type="button" className="btn btn-info btn-lg">Workshop Proposal Template</button>
                </div>
                
            </div>
        )
    }

}

export default TemplateDownload;