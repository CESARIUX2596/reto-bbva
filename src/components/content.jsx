import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./css/content.css";
import ReactS3 from 'react-s3';

const config = {
    bucketName: 'textract-console-us-west-2-51755281-cab5-4f5e-9891-0dad1c49f1b6',
    dirName: 'pdf',
    region: 'us-west-2',
    accessKeyId: 'AKIA2RK7O5A44SQKPKUE',
    secretAccessKey: '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',
}

class Content extends Component {
   
    constructor()
    {
        super();
    }
   
    upload (e){
        console.log(e.target.files[0]);
        ReactS3.upload(e.target.files[0], config)
        .then ((data) => {
            console.log(data);
        }) 
        .catch( (err)=>{
            alert(err);
        }
        )
    }
    render() {
        return (
            <div>

                <h3>Cargar archivo</h3>
                <input 
                    type = 'file' 
                    onChange = {this.upload}
                />
            </div>
        )
    }
}
export default Content;
